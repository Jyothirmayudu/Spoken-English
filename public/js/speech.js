/* ============================================================
   Text-to-speech "Listen" player.
   Supports: play, pause/resume, drag-to-seek, restart, stop.

   Honest limitation: the Web Speech API has no real audio timeline
   (no duration, no native seek). To fake a YouTube-like scrubber,
   we listen for the browser's word-boundary events (charIndex) to
   move the progress fill during playback, and "seek" by cancelling
   the current utterance and starting a new one from the text
   substring at the target position. It's an approximation, not a
   frame-accurate seek — but it lets you actually jump around.
   ============================================================ */

let activeListenGroup = null;
let pendingSpeakTimer = null;

function resetListenGroup(group){
  group.classList.remove('active');
  group.querySelector('.listen-play').textContent = '▶';
  group.querySelector('.listen-play').title = 'Play';
  setGroupProgress(group, 0);
  clearHighlight(group);
}

function clearHighlight(group){
  if(group._currentWordSpan){
    group._currentWordSpan.classList.remove('current-word');
    group._currentWordSpan = null;
  }
  if(group._currentOptBtn){
    group._currentOptBtn.classList.remove('reading-active');
    group._currentOptBtn = null;
  }
}

// tokens: ordered array of {text, span} — span is null for spoken-only
// connector words (e.g. "Question number 1.") that have no on-screen
// counterpart, so they're spoken but simply produce no highlight.
function highlightWordAt(group, absoluteIndex){
  if(!group._tokens || !group._tokenStarts || !group._tokens.length) return;
  const starts = group._tokenStarts;
  let lo = 0, hi = starts.length - 1, ans = 0;
  while(lo <= hi){
    const mid = (lo + hi) >> 1;
    if(starts[mid] <= absoluteIndex){ ans = mid; lo = mid + 1; }
    else{ hi = mid - 1; }
  }
  const span = group._tokens[ans].span;
  if(span === group._currentWordSpan) return;
  clearHighlight(group);
  if(span){
    span.classList.add('current-word');
    group._currentWordSpan = span;
    span.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    // If this word lives inside a quiz option button, highlight the
    // whole option so it's obvious which answer is being read, not
    // just the single word.
    const optBtn = span.closest ? span.closest('.opt-btn') : null;
    if(optBtn !== group._currentOptBtn){
      if(group._currentOptBtn) group._currentOptBtn.classList.remove('reading-active');
      if(optBtn) optBtn.classList.add('reading-active');
      group._currentOptBtn = optBtn;
    }
  }
}

function resetAllListenGroups(){
  document.querySelectorAll('.listen-group').forEach(resetListenGroup);
  activeListenGroup = null;
  if(pendingSpeakTimer){ clearTimeout(pendingSpeakTimer); pendingSpeakTimer = null; }
}

function setGroupProgress(group, fraction){
  fraction = Math.max(0, Math.min(1, fraction));
  group._fraction = fraction;
  group.querySelector('.listen-track-fill').style.width = (fraction * 100) + '%';
  group.querySelector('.listen-track-thumb').style.left = (fraction * 100) + '%';
}

// Find the nearest word start at or before charIndex, so playback
// (and any future seeks) restart cleanly at a word boundary.
function snapToWordStart(text, idx){
  if(idx <= 0) return 0;
  if(idx >= text.length) return text.length;
  let i = idx;
  while(i > 0 && text[i - 1] !== ' ' && text[i - 1] !== '\n'){ i--; }
  return i;
}

function beginSpeaking(group, charOffset){
  const fullText = group._text;
  charOffset = snapToWordStart(fullText, Math.max(0, Math.min(fullText.length - 1, charOffset)));

  window.speechSynthesis.cancel();
  resetAllListenGroups();

  if(!fullText || !fullText.trim()){ return; }

  const utter = new SpeechSynthesisUtterance(fullText.substring(charOffset));
  utter.rate = 0.95;

  utter.onboundary = (event) => {
    if(typeof event.charIndex === 'number'){
      const abs = charOffset + event.charIndex;
      setGroupProgress(group, abs / fullText.length);
      highlightWordAt(group, abs);
    }
  };
  utter.onend = () => {
    if(activeListenGroup === group){
      setGroupProgress(group, 1);
      resetListenGroup(group);
      activeListenGroup = null;
    }
  };
  utter.onerror = () => {
    if(activeListenGroup === group){ resetListenGroup(group); activeListenGroup = null; }
  };

  activeListenGroup = group;
  group.classList.add('active');
  const playBtn = group.querySelector('.listen-play');
  playBtn.textContent = '⏸';
  playBtn.title = 'Pause';
  setGroupProgress(group, charOffset / fullText.length);

  // Chrome/Edge sometimes clip the very first word if speak() fires
  // immediately after cancel() — a short delay reliably avoids it.
  pendingSpeakTimer = setTimeout(() => {
    pendingSpeakTimer = null;
    window.speechSynthesis.speak(utter);
  }, 120);
}

function seekGroupToFraction(group, fraction){
  if(!('speechSynthesis' in window)){
    alert("Sorry, your browser doesn't support reading text aloud.");
    return;
  }
  const fullText = group._text;
  const charOffset = Math.round(fraction * fullText.length);
  beginSpeaking(group, charOffset);
}

/* Shared helpers so any block of visible text can become both
   speakable AND word-highlightable — used by concept cards, quiz
   questions/options, feedback, and the review screen. */
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function wrapWordsHTML(text){
  return String(text).split(/\s+/).filter(Boolean)
    .map(w => `<span class="word">${escapeHtml(w)}</span>`).join(' ');
}
function collectWordSpans(container){
  return Array.from(container.querySelectorAll('.word'));
}
// Tokens from real on-screen .word spans — each is spoken AND highlighted.
function spanTokens(container){
  return collectWordSpans(container).map(span => ({ text: span.textContent, span }));
}
// Tokens for a spoken-only connector phrase (e.g. "Question number 1.")
// that has no on-screen span of its own — spoken, but never highlighted.
function textTokens(str){
  return String(str).split(/\s+/).filter(Boolean).map(w => ({ text: w, span: null }));
}

/* Builds a play/pause + seek-bar + restart + stop control cluster.
   - text: plain text to speak (used only when tokens is omitted)
   - tokens: optional ordered array of {text, span} — build with
     spanTokens()/textTokens() and concatenate as needed. When given,
     the group re-derives its exact speech text from these tokens
     (guaranteeing the highlighted word always matches what's being
     spoken) and highlights each token's span (if any) in turn. */
function createListenGroup(text, tokens){
  const group = document.createElement('span');
  group.className = 'listen-group';

  if(tokens && tokens.length){
    group._tokens = tokens;
    group._text = tokens.map(t => t.text).join(' ');
    const starts = [];
    let offset = 0;
    tokens.forEach(t => {
      starts.push(offset);
      offset += t.text.length + 1;
    });
    group._tokenStarts = starts;
  } else {
    group._text = text;
  }
  group._fraction = 0;

  group.innerHTML = `
    <button class="listen-btn listen-play" type="button" title="Play">▶</button>
    <span class="listen-track" title="Drag or tap to jump to a point">
      <span class="listen-track-bg"></span>
      <span class="listen-track-fill"></span>
      <span class="listen-track-thumb"></span>
    </span>
    <button class="listen-btn listen-restart" type="button" title="Restart from the beginning">⟲</button>
    <button class="listen-btn listen-stop" type="button" title="Stop">⏹</button>
    <span class="listen-label">Listen</span>
  `;

  const playBtn = group.querySelector('.listen-play');
  const restartBtn = group.querySelector('.listen-restart');
  const stopBtn = group.querySelector('.listen-stop');
  const track = group.querySelector('.listen-track');

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(!('speechSynthesis' in window)){
      alert("Sorry, your browser doesn't support reading text aloud.");
      return;
    }
    if(activeListenGroup === group && window.speechSynthesis.speaking && !window.speechSynthesis.paused){
      window.speechSynthesis.pause();
      playBtn.textContent = '▶';
      playBtn.title = 'Resume';
    } else if(activeListenGroup === group && window.speechSynthesis.paused){
      window.speechSynthesis.resume();
      playBtn.textContent = '⏸';
      playBtn.title = 'Pause';
    } else {
      beginSpeaking(group, (group._fraction || 0) * group._text.length);
    }
  });

  restartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    beginSpeaking(group, 0);
  });

  stopBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    resetListenGroup(group);
    if(activeListenGroup === group) activeListenGroup = null;
  });

  // Drag-to-seek on the track (click also seeks — single tap = jump there).
  let dragging = false;

  function fractionFromEvent(evt){
    const rect = track.getBoundingClientRect();
    const x = (evt.clientX !== undefined ? evt.clientX : (evt.touches && evt.touches[0].clientX)) - rect.left;
    return Math.max(0, Math.min(1, x / rect.width));
  }

  track.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    dragging = true;
    track.setPointerCapture(e.pointerId);
    setGroupProgress(group, fractionFromEvent(e));
  });
  track.addEventListener('pointermove', (e) => {
    if(!dragging) return;
    e.stopPropagation();
    setGroupProgress(group, fractionFromEvent(e));
  });
  track.addEventListener('pointerup', (e) => {
    if(!dragging) return;
    e.stopPropagation();
    dragging = false;
    seekGroupToFraction(group, fractionFromEvent(e));
  });
  track.addEventListener('pointercancel', () => { dragging = false; });
  // A drag still fires a native "click" afterwards — swallow it so the
  // accordion above never toggles because of a seek-bar interaction.
  track.addEventListener('click', (e) => { e.stopPropagation(); });

  return group;
}
