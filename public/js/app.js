/* ============================================================
   STATE
   ============================================================ */
let currentUser = null;   // { id, name, email, role, status, profilePic, bio }
let currentLevel = 1;
let quizState = null;     // {levelId, qIndex, score, answered, selected, answers}
let progress = null;      // { completed, levelScores, quizStats, unlocked } — for students only
let pendingProfilePic = null; // base64 data URL staged for the next profile save

/* ============================================================
   API HELPER
   ============================================================ */
async function apiFetch(url, options = {}){
  const res = await fetch(url, {
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  let data = null;
  try{ data = await res.json(); }catch(e){ /* no body */ }
  if(!res.ok){
    const err = new Error((data && data.error) || 'Something went wrong. Please try again.');
    err.status = res.status;
    throw err;
  }
  return data;
}

function renderExplain(text){
  return text.split('\n\n').map(p => `<p>${wrapWordsHTML(p)}</p>`).join('');
}

const LEVEL_ICONS = { 1: '🌱', 2: '💬', 3: '🚀', 4: '🏆' };

/* ============================================================
   AUTH: tabs, login, signup, admin login, session bootstrap
   ============================================================ */
document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
});
document.querySelectorAll('[data-switch-to]').forEach(btn => {
  btn.addEventListener('click', () => switchAuthTab(btn.dataset.switchTo));
});

function switchAuthTab(name){
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.dataset.form === name));
  hideAuthError();
}

function showAuthError(msg){
  const box = document.getElementById('auth-error');
  box.textContent = msg;
  box.classList.remove('hidden');
}
function hideAuthError(){
  document.getElementById('auth-error').classList.add('hidden');
}

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAuthError();
  const identifier = document.getElementById('login-identifier').value.trim();
  const password = document.getElementById('login-password').value;
  try{
    const data = await apiFetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ identifier, password }) });
    await handleAuthSuccess(data.user);
  }catch(err){ showAuthError(err.message); }
});

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAuthError();
  const name = document.getElementById('signup-name').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  if(password !== confirmPassword){
    showAuthError('Passwords do not match.');
    return;
  }
  try{
    const data = await apiFetch('/api/auth/register', { method: 'POST', body: JSON.stringify({ name, username, email, password, confirmPassword }) });
    await handleAuthSuccess(data.user);
  }catch(err){ showAuthError(err.message); }
});

document.getElementById('admin-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAuthError();
  const identifier = document.getElementById('admin-identifier').value.trim();
  const password = document.getElementById('admin-password').value;
  try{
    const data = await apiFetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ identifier, password }) });
    if(data.user.role !== 'admin'){
      await apiFetch('/api/auth/logout', { method: 'POST' });
      showAuthError("This account doesn't have admin access — use the Log in tab instead.");
      return;
    }
    await handleAuthSuccess(data.user);
  }catch(err){ showAuthError(err.message); }
});

async function handleAuthSuccess(user){
  currentUser = user;
  document.getElementById('view-auth').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  updateTopbarForUser();
  if(user.role === 'admin'){
    goAdmin();
  }else{
    await loadProgressFromServer();
    goDashboard();
  }
}

function updateTopbarForUser(){
  document.getElementById('topbar-name').textContent = currentUser.name;
  const avatarEl = document.getElementById('topbar-avatar');
  avatarEl.innerHTML = currentUser.profilePic
    ? `<img src="${currentUser.profilePic}" alt="">`
    : currentUser.name[0].toUpperCase();
  document.getElementById('menu-admin-btn').classList.toggle('hidden', currentUser.role !== 'admin');
}

// ---------- Site branding (title, logo, footer) ----------
let currentSettings = null;

function applySettings(settings){
  currentSettings = settings;
  document.title = settings.siteTitle;
  document.getElementById('login-site-title').textContent = settings.siteTitle;
  document.getElementById('topbar-site-title').textContent = settings.siteTitle;
  document.getElementById('login-footer-text').textContent = settings.footerText;
  document.getElementById('app-footer-text').textContent = settings.footerText;

  const defaultLogoSVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="8" width="3" height="8" rx="1.5" fill="white"/>
    <rect x="8" y="4" width="3" height="16" rx="1.5" fill="white"/>
    <rect x="14" y="6" width="3" height="12" rx="1.5" fill="white"/>
    <rect x="20" y="9" width="3" height="6" rx="1.5" fill="white"/>
  </svg>`;
  const logoHTML = settings.logoImage
    ? `<img src="${settings.logoImage}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
    : defaultLogoSVG;
  document.getElementById('login-logo-mark').innerHTML = logoHTML;
  document.getElementById('topbar-logo-mark').innerHTML = logoHTML;
}

async function loadSettings(){
  try{
    const settings = await apiFetch('/api/settings');
    applySettings(settings);
  }catch(err){
    console.error('Could not load site settings:', err.message);
  }
}

// Try to resume a session on page load.
window.addEventListener('load', async () => {
  await loadSettings();
  try{
    const data = await apiFetch('/api/auth/me');
    await handleAuthSuccess(data.user);
  }catch(err){
    // Not logged in — the auth view is already showing by default.
  }
});

/* ---------- Profile dropdown menu ---------- */
const profileTrigger = document.getElementById('profile-trigger');
const profileDropdown = document.getElementById('profile-dropdown');
profileTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle('open');
});
document.addEventListener('click', () => profileDropdown.classList.remove('open'));

document.getElementById('menu-profile-btn').addEventListener('click', () => {
  profileDropdown.classList.remove('open');
  goProfile();
});
document.getElementById('menu-admin-btn').addEventListener('click', () => {
  profileDropdown.classList.remove('open');
  goAdmin();
});
document.getElementById('menu-logout-btn').addEventListener('click', async () => {
  profileDropdown.classList.remove('open');
  window.speechSynthesis.cancel();
  try{ await apiFetch('/api/auth/logout', { method: 'POST' }); }catch(e){}
  currentUser = null;
  progress = null;
  document.getElementById('app-shell').classList.add('hidden');
  document.getElementById('view-auth').classList.remove('hidden');
  switchAuthTab('login');
  document.getElementById('login-form').reset();
});

// Logo/brand name always jumps back to the dashboard (or admin view, for admins).
const brandHomeBtn = document.getElementById('brand-home-btn');
brandHomeBtn.addEventListener('click', () => goHome());
brandHomeBtn.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); goHome(); }
});
function goHome(){
  if(!currentUser) return;
  currentUser.role === 'admin' ? goAdmin() : goDashboard();
}

/* ============================================================
   PROGRESS: load from / save to the server
   ============================================================ */
async function loadProgressFromServer(){
  const data = await apiFetch('/api/progress');
  progress = {
    completed: data.completed,
    levelScores: data.levelScores,
    quizStats: data.quizStats,
    subjectStats: data.subjectStats || {},
    unlocked: data.unlocked,
  };
}

// Fire-and-forget save — the UI updates optimistically and this persists
// it to the student's account in the background.
function saveProgress(p){
  apiFetch('/api/progress', {
    method: 'PUT',
    body: JSON.stringify({
      completed: p.completed,
      levelScores: p.levelScores,
      quizStats: p.quizStats,
      unlocked: p.unlocked,
    }),
  }).catch(err => console.error('Failed to save progress:', err));
}

/* ============================================================
   PROGRESS EXPORT (JSON) — a real, human-readable backup file
   ============================================================ */
function buildLevelBreakdown(prog){
  return LEVELS.map(level => {
    const total = level.concepts.length;
    const completedTopics = level.concepts.filter(c => prog.completed.includes(c.id));
    const remainingTopics = level.concepts.filter(c => !prog.completed.includes(c.id));
    const qStats = prog.quizStats[level.id];
    return {
      levelId: level.id,
      levelTitle: level.title,
      unlocked: prog.unlocked.includes(level.id),
      concepts: {
        total: total,
        completed: completedTopics.length,
        percentComplete: Math.round((completedTopics.length / total) * 100),
        completedTopics: completedTopics.map(c => ({ id: c.id, title: c.title })),
        remainingTopics: remainingTopics.map(c => ({ id: c.id, title: c.title })),
      },
      quiz: qStats ? {
        attempted: true,
        passed: qStats.scorePercent >= 70,
        scorePercent: qStats.scorePercent,
        questionsTotal: qStats.total,
        correctAnswers: qStats.correct,
        incorrectAnswers: qStats.incorrect,
        skippedQuestions: qStats.skipped,
        lastAttempt: qStats.lastAttempt,
        questionResults: qStats.questions || [],
      } : { attempted: false }
    };
  });
}

function buildExportPayload(){
  return {
    student: currentUser.name,
    email: currentUser.email,
    exportedAt: new Date().toISOString(),
    overallConceptsCompleted: progress.completed.length,
    overallConceptsTotal: totalConcepts(),
    levels: buildLevelBreakdown(progress),
  };
}

document.getElementById('export-progress-btn').addEventListener('click', () => {
  if(!progress) return;
  const data = JSON.stringify(buildExportPayload(), null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `speakpath-progress-${currentUser.name.trim().toLowerCase().replace(/\s+/g, '-')}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('print-dashboard-btn').addEventListener('click', () => window.print());
document.getElementById('print-results-btn').addEventListener('click', () => window.print());
document.getElementById('print-profile-btn').addEventListener('click', () => window.print());

/* ============================================================
   NAVIGATION
   ============================================================ */
function showView(id){
  window.speechSynthesis.cancel();
  resetAllListenGroups();
  window.scrollTo(0, 0);
  ['view-dashboard', 'view-level', 'view-course', 'view-quiz', 'view-results', 'view-profile', 'view-admin'].forEach(v => {
    document.getElementById(v).classList.toggle('hidden', v !== id);
  });
}
function goDashboard(){ renderDashboard(); showView('view-dashboard'); }
function goLevel(levelId){ currentLevel = levelId; renderLevel(levelId); showView('view-level'); }

/* ============================================================
   DASHBOARD
   ============================================================ */
function totalConcepts(){ return LEVELS.reduce((n, l) => n + l.concepts.length, 0); }

function renderDashboard(){
  document.getElementById('dash-name').textContent = currentUser.name;
  const totalDone = progress.completed.length;
  document.getElementById('stat-concepts').textContent = `${totalDone}/${totalConcepts()}`;

  const levelsCompleted = LEVELS.filter(l => (progress.levelScores[l.id] || 0) >= 70).length;
  document.getElementById('stat-levels').textContent = `${levelsCompleted}/${LEVELS.length}`;

  const nextLevel = LEVELS.find(l => !(progress.levelScores[l.id] >= 70)) || LEVELS[LEVELS.length - 1];
  document.getElementById('stat-next').textContent = `Level ${nextLevel.id}`;

  const grid = document.getElementById('level-grid');
  grid.innerHTML = '';
  LEVELS.forEach(level => {
    const locked = !progress.unlocked.includes(level.id);
    const doneCount = level.concepts.filter(c => progress.completed.includes(c.id)).length;
    const pct = Math.round((doneCount / level.concepts.length) * 100);
    const score = progress.levelScores[level.id];

    const card = document.createElement('div');
    card.className = 'level-card' + (locked ? ' locked' : '');
    card.innerHTML = `
      ${locked ? `<div class="lock-badge">🔒 Locked</div>` : ''}
      <span class="lv-icon">${LEVEL_ICONS[level.id] || '📘'}</span>
      <div class="lv-tag">LEVEL ${level.id}</div>
      <h3>${level.title}</h3>
      <p class="lv-desc">${level.desc}</p>
      <div class="progress-label-row"><span>Concepts</span><span>${doneCount}/${level.concepts.length} (${pct}%)</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-label-row" style="margin-top:10px;"><span>Quiz</span><span>${score !== undefined ? score + '%' : 'Not taken'}</span></div>
      <div class="progress-track"><div class="progress-fill quiz-fill" style="width:${score || 0}%"></div></div>
      <button class="btn ${locked ? 'btn-ghost' : 'btn-primary'} lv-cta" ${locked ? 'disabled' : ''}>${locked ? 'Complete previous level' : 'Open level'}</button>
    `;
    if(!locked){
      card.querySelector('.lv-cta').addEventListener('click', () => goLevel(level.id));
    }
    grid.appendChild(card);
  });

  renderClassAndSubjectsSection();
}

/* ============================================================
   CLASS SELECTION + SCHOOL SUBJECTS
   ============================================================ */
function renderClassAndSubjectsSection(){
  const pickerCard = document.getElementById('class-picker-card');
  const subjectsSection = document.getElementById('subjects-section');

  if(!currentUser.classLevel){
    pickerCard.classList.remove('hidden');
    subjectsSection.classList.add('hidden');
    renderClassButtons();
  }else{
    pickerCard.classList.add('hidden');
    subjectsSection.classList.remove('hidden');
    document.getElementById('subjects-class-label').textContent = currentUser.classLevel;
    renderSubjectGrid(currentUser.classLevel);
  }
}

function renderClassButtons(){
  const row = document.getElementById('class-btn-row');
  row.innerHTML = '';
  for(let c = 3; c <= 10; c++){
    const btn = document.createElement('button');
    btn.className = 'class-btn';
    btn.textContent = `Class ${c}`;
    btn.addEventListener('click', () => chooseClass(c));
    row.appendChild(btn);
  }
}

async function chooseClass(classLevel){
  try{
    const data = await apiFetch('/api/auth/me/class', { method: 'PUT', body: JSON.stringify({ classLevel }) });
    currentUser = data.user;
    renderClassAndSubjectsSection();
  }catch(err){ alert(err.message); }
}

document.getElementById('change-class-btn').addEventListener('click', () => {
  document.getElementById('class-picker-card').classList.remove('hidden');
  document.getElementById('subjects-section').classList.add('hidden');
  renderClassButtons();
});

function renderSubjectGrid(classLevel, containerId){
  containerId = containerId || 'subject-grid';
  const grid = document.getElementById(containerId);
  grid.innerHTML = '';
  const subjects = SUBJECTS.filter(s => classLevel >= s.minClass && classLevel <= s.maxClass);

  subjects.forEach(subject => {
    let statusLine = 'Not tried yet';
    let pct = 0;
    // Stats are keyed as "subjectId[_variant]_difficulty" — find every
    // attempt recorded for this subject, across all variants/difficulties,
    // and show the best score.
    const attempts = Object.keys(progress.subjectStats)
      .filter(key => key === subject.id || key.startsWith(subject.id + '_'))
      .map(key => progress.subjectStats[key]);
    if(attempts.length){
      const best = attempts.sort((a, b) => b.scorePercent - a.scorePercent)[0];
      statusLine = `Best: ${best.scorePercent}%`;
      pct = best.scorePercent;
    }

    const card = document.createElement('div');
    card.className = 'level-card subject-card';
    card.dataset.searchText = (subject.title + ' ' + subject.description).toLowerCase();
    card.innerHTML = `
      <span class="lv-icon subject-icon">${subject.icon}</span>
      <h3>${subject.title}</h3>
      <p class="lv-desc">${subject.description}</p>
      ${subject.available ? `
        <div class="progress-track"><div class="progress-fill quiz-fill" style="width:${pct}%"></div></div>
        <p class="subject-status ${pct >= 70 ? 'good' : ''}">${statusLine}</p>
        <button class="btn btn-primary lv-cta subject-open-btn" type="button">📝 Take a Quiz</button>
      ` : `
        <p class="subject-status coming-soon">Coming soon</p>
        <button class="btn btn-ghost lv-cta" disabled>📝 Take a Quiz</button>
      `}
    `;
    if(subject.available){
      card.querySelector('.subject-open-btn').addEventListener('click', () => openSubject(subject));
    }
    grid.appendChild(card);
  });
}

let subjectModalState = { subject: null, variant: null, difficulty: null };

function openSubject(subject){
  subjectModalState = { subject, variant: null, difficulty: null };

  document.getElementById('subject-modal-title').textContent = subject.title;
  document.getElementById('subject-modal-sub').textContent = subject.hasVariants
    ? "Pick your story, then your level."
    : "Pick your level to start.";

  const variantStep = document.getElementById('variant-step');
  variantStep.classList.toggle('hidden', !subject.hasVariants);

  document.querySelectorAll('.variant-choice-btn, .difficulty-choice-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('subject-start-btn').disabled = true;

  document.getElementById('variant-picker-backdrop').classList.remove('hidden');
}

document.querySelectorAll('.variant-choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    subjectModalState.variant = btn.dataset.variant;
    document.querySelectorAll('.variant-choice-btn').forEach(b => b.classList.toggle('active', b === btn));
    updateSubjectStartButton();
  });
});

document.querySelectorAll('.difficulty-choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    subjectModalState.difficulty = btn.dataset.difficulty;
    document.querySelectorAll('.difficulty-choice-btn').forEach(b => b.classList.toggle('active', b === btn));
    updateSubjectStartButton();
  });
});

function updateSubjectStartButton(){
  const { subject, variant, difficulty } = subjectModalState;
  const ready = difficulty && (!subject.hasVariants || variant);
  document.getElementById('subject-start-btn').disabled = !ready;
}

document.getElementById('subject-start-btn').addEventListener('click', () => {
  const { subject, variant, difficulty } = subjectModalState;
  document.getElementById('variant-picker-backdrop').classList.add('hidden');
  launchSubjectQuiz(subject, difficulty, variant);
});

document.getElementById('variant-cancel-btn').addEventListener('click', () => {
  document.getElementById('variant-picker-backdrop').classList.add('hidden');
});

const DIFFICULTY_LABELS = { basic: 'Primary, Class 3-5', medium: 'Middle, Class 6-8', hard: 'Secondary, Class 9-10' };

function launchSubjectQuiz(subject, difficulty, variant){
  const diffLabel = DIFFICULTY_LABELS[difficulty];
  const key = subject.id + (variant ? '_' + variant : '') + '_' + difficulty;

  if(subject.id === 'mythology'){
    const data = MYTHOLOGY_QUIZZES[variant];
    const pool = splitByDifficulty(data.questions)[difficulty];
    startSubjectQuiz(key, sampleQuestions(pool, 10), { label: `Indian Mythology: ${data.label} (${diffLabel})` });
  }else if(subject.id === 'history'){
    const pool = splitByDifficulty(HISTORY_CULTURE_QUIZ.questions)[difficulty];
    startSubjectQuiz(key, sampleQuestions(pool, 10), { label: `${HISTORY_CULTURE_QUIZ.title} (${diffLabel})` });
  }else if(subject.id === 'sportsgk'){
    const pool = splitByDifficulty(SPORTS_GK_QUIZ.questions)[difficulty];
    startSubjectQuiz(key, sampleQuestions(pool, 10), { label: `${SPORTS_GK_QUIZ.title} (${diffLabel})` });
  }else if(subject.id === 'social'){
    startSubjectQuiz(key, buildStateCapitalQuiz(15, difficulty), { label: `Social Studies: State & Capital (${diffLabel})` });
  }else if(subject.id === 'maths'){
    startSubjectQuiz(key, buildMathsQuiz(20, difficulty), { label: `Maths (${diffLabel})` });
  }else{
    const poolMap = {
      english: ENGLISH_POOL, biology: BIOLOGY_POOL, physicalscience: PHYSICAL_SCIENCE_POOL,
      computer: COMPUTER_POOL, hindi: HINDI_POOL, telugu: TELUGU_POOL,
    };
    const pool = poolMap[subject.id][difficulty];
    startSubjectQuiz(key, sampleQuestions(pool, pool.length), { label: `${subject.title} (${diffLabel})` });
  }
}

// Search bar: filters the student's own subject cards (and Spoken English
// level cards) by title/description text. This searches the signed-in
// student's own dashboard only — not other students' profiles or the
// open web (see note in chat about why those are handled differently).
document.getElementById('subject-search-input').addEventListener('input', (e) => {
  const term = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#subject-grid .subject-card').forEach(card => {
    const match = !term || card.dataset.searchText.includes(term);
    card.style.display = match ? '' : 'none';
  });
});

document.getElementById('view-full-course-btn').addEventListener('click', goFullCourse);

function goFullCourse(){
  const container = document.getElementById('course-accordion');
  container.innerHTML = '';

  LEVELS.forEach(level => {
    const doneCount = level.concepts.filter(c => progress.completed.includes(c.id)).length;
    const score = progress.levelScores[level.id];

    const section = document.createElement('div');
    section.className = 'course-level-section';
    section.innerHTML = `
      <div class="course-level-header">
        <span class="course-level-icon">${LEVEL_ICONS[level.id] || '📘'}</span>
        <div class="course-level-title-block">
          <h3>Level ${level.id}: ${level.title}</h3>
          <p>${doneCount}/${level.concepts.length} concepts done ${score !== undefined ? '· Quiz: ' + score + '%' : '· Quiz not taken'}</p>
        </div>
        <span class="course-level-chevron">▾</span>
      </div>
      <div class="course-level-body"></div>
    `;
    const body = section.querySelector('.course-level-body');
    const conceptsById = {};
    level.concepts.forEach(c => { conceptsById[c.id] = c; });

    (level.days || []).forEach(day => {
      const dayConcepts = day.conceptIds.map(id => conceptsById[id]).filter(Boolean);
      const daySection = document.createElement('div');
      daySection.className = 'day-section';
      daySection.innerHTML = `
        <div class="day-header">
          <span class="day-badge">Day ${day.day}</span>
          <h3 class="day-title">${day.title}</h3>
        </div>
        <div class="concept-list"></div>
      `;
      const list = daySection.querySelector('.concept-list');
      dayConcepts.forEach(c => list.appendChild(buildConceptCard(c, level, level.id)));
      body.appendChild(daySection);
    });

    section.querySelector('.course-level-header').addEventListener('click', () => {
      section.classList.toggle('open');
    });
    container.appendChild(section);
  });

  // Open the first level by default so there's something to see immediately.
  const first = container.querySelector('.course-level-section');
  if(first) first.classList.add('open');

  showView('view-course');
}

function renderLevel(levelId){
  const level = LEVELS.find(l => l.id === levelId);
  document.getElementById('lv-tag').textContent = `LEVEL ${level.id}`;
  document.getElementById('lv-title').textContent = level.title;
  document.getElementById('lv-desc').textContent = level.desc;
  document.getElementById('quiz-cta-desc').textContent =
    `A ${level.quiz.length}-question quiz on everything in this level, with a full explanation for every answer afterwards. Score 70% or higher to unlock the next level.`;

  const conceptsById = {};
  level.concepts.forEach(c => { conceptsById[c.id] = c; });

  const container = document.getElementById('day-sections');
  container.innerHTML = '';

  (level.days || []).forEach(day => {
    const dayConcepts = day.conceptIds.map(id => conceptsById[id]).filter(Boolean);
    const doneInDay = dayConcepts.filter(c => progress.completed.includes(c.id)).length;

    const section = document.createElement('div');
    section.className = 'day-section';
    section.innerHTML = `
      <div class="day-header">
        <span class="day-badge">Day ${day.day}</span>
        <h3 class="day-title">${day.title}</h3>
        <span class="day-progress">${doneInDay}/${dayConcepts.length} done</span>
      </div>
      <div class="concept-list"></div>
    `;
    const list = section.querySelector('.concept-list');
    dayConcepts.forEach(c => {
      list.appendChild(buildConceptCard(c, level, levelId));
    });
    container.appendChild(section);
  });
}

function buildConceptCard(c, level, levelId){
  const done = progress.completed.includes(c.id);
  const card = document.createElement('div');
  card.className = 'concept-card';
  card.dataset.conceptId = c.id;
  card.innerHTML = `
    <div class="concept-head">
      <div class="concept-head-left">
        <div class="concept-check ${done ? 'done' : ''}">${done ? '✓' : ''}</div>
        <div class="concept-title">${wrapWordsHTML(c.title)}</div>
      </div>
      <div class="concept-head-right">
        <span class="listen-slot"></span>
        <div class="chevron">▾</div>
      </div>
    </div>
    <div class="concept-body">
      ${renderExplain(c.explain)}
      <div class="example-box">
        <div class="ex-label">${wrapWordsHTML('Examples')}</div>
        <ul>${c.examples.map(e => `<li>${wrapWordsHTML(e)}</li>`).join('')}</ul>
      </div>
      <div class="tip-box">${wrapWordsHTML(c.tip)}</div>
      ${c.source ? `<p class="source-line">Source: <a href="${c.source.url}" target="_blank" rel="noopener">${c.source.label}</a></p>` : ''}
      <button class="btn ${done ? 'btn-ghost' : 'btn-primary'} mark-btn">${done ? 'Marked as understood' : 'Mark as understood'}</button>
    </div>
  `;
  const head = card.querySelector('.concept-head');
  head.addEventListener('click', () => card.classList.toggle('open'));

  const tokens = spanTokens(card);
  const listenGroupEl = createListenGroup(null, tokens);
  listenGroupEl.querySelectorAll('.listen-play, .listen-restart').forEach(btn => {
    btn.addEventListener('click', () => card.classList.add('open'));
  });
  card.querySelector('.listen-slot').replaceWith(listenGroupEl);

  const markBtn = card.querySelector('.mark-btn');
  markBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(!progress.completed.includes(c.id)){
      progress.completed.push(c.id);
      saveProgress(progress);
      const idx = level.concepts.findIndex(x => x.id === c.id);
      const nextConcept = level.concepts[idx + 1];
      renderLevel(levelId);
      if(nextConcept){
        const nextCard = document.querySelector(`[data-concept-id="${nextConcept.id}"]`);
        if(nextCard){
          nextCard.classList.add('open');
          nextCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const quizCta = document.querySelector('.quiz-cta-card');
        if(quizCta) quizCta.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
  return card;
}

document.getElementById('start-quiz-btn').addEventListener('click', () => {
  startQuiz(currentLevel);
});

function launchCelebration(){
  const layer = document.createElement('div');
  layer.id = 'confetti-layer';
  document.body.appendChild(layer);

  const colors = ['#2F6F5E', '#C77D2E', '#E1B168', '#7FB69E', '#B4432F', '#F5E3C8'];
  const confettiCount = 60;
  for(let i = 0; i < confettiCount; i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random() * 100) + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
    piece.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
    piece.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    layer.appendChild(piece);
  }

  const balloonEmoji = ['🎈', '🎉', '🎊'];
  const balloonCount = 10;
  for(let i = 0; i < balloonCount; i++){
    const balloon = document.createElement('div');
    balloon.className = 'balloon-piece';
    balloon.textContent = balloonEmoji[Math.floor(Math.random() * balloonEmoji.length)];
    balloon.style.left = (5 + Math.random() * 90) + 'vw';
    balloon.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
    balloon.style.setProperty('--spin', (Math.random() * 40 - 20) + 'deg');
    balloon.style.animationDuration = (2.8 + Math.random() * 1.4) + 's';
    balloon.style.animationDelay = (Math.random() * 0.4) + 's';
    layer.appendChild(balloon);
  }

  setTimeout(() => layer.remove(), 4200);
}

/* ============================================================
   QUIZ
   quizState.mode is 'level' (Spoken English) or 'subject' (school
   subjects). Both share the same rendering — only finishQuiz()
   branches on where results get saved and what messaging shows.
   ============================================================ */
function startQuiz(levelId){
  const level = LEVELS.find(l => l.id === levelId);
  quizState = {
    mode: 'level',
    meta: { levelId },
    questions: level.quiz,
    qIndex: 0, score: 0, answered: false, selected: null, answers: [],
  };
  showView('view-quiz');
  renderQuestion();
}

function startSubjectQuiz(subjectId, questions, meta){
  quizState = {
    mode: 'subject',
    meta: { subjectId, ...meta },
    questions: questions,
    qIndex: 0, score: 0, answered: false, selected: null, answers: [],
  };
  showView('view-quiz');
  renderQuestion();
}

function renderQuestion(){
  const q = quizState.questions[quizState.qIndex];
  quizState.answered = false;
  quizState.selected = null;

  const backBtn = document.getElementById('quiz-back-btn');
  if(quizState.mode === 'level'){
    backBtn.textContent = '← Back to level';
    backBtn.onclick = () => goLevel(currentLevel);
  }else{
    backBtn.textContent = '← Back to dashboard';
    backBtn.onclick = () => goDashboard();
  }

  document.getElementById('quiz-progress-label').textContent = `Question ${quizState.qIndex + 1} of ${quizState.questions.length}`;
  document.getElementById('quiz-progress-fill').style.width = `${(quizState.qIndex / quizState.questions.length) * 100}%`;
  document.getElementById('q-number-badge').textContent = `Q${quizState.qIndex + 1}`;
  document.getElementById('q-text').innerHTML = wrapWordsHTML(q.q);

  const optList = document.getElementById('opt-list');
  optList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span><span>${wrapWordsHTML(opt)}</span>`;
    btn.addEventListener('click', () => selectOption(idx));
    optList.appendChild(btn);
  });

  const questionSlot = document.getElementById('question-listen-slot');
  questionSlot.innerHTML = '';
  let qTokens = [
    ...textTokens(`Question number ${quizState.qIndex + 1}.`),
    ...spanTokens(document.getElementById('q-text'))
  ];
  optList.querySelectorAll('.opt-btn').forEach((btn, idx) => {
    qTokens = qTokens.concat(textTokens(`Option ${letters[idx]}.`), spanTokens(btn));
  });
  questionSlot.appendChild(createListenGroup(null, qTokens));

  document.getElementById('feedback-box').classList.add('hidden');
  document.getElementById('feedback-box').innerHTML = '';

  const hintBtn = document.getElementById('quiz-hint-btn');
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.add('hidden');
  hintBox.innerHTML = '';
  hintBtn.disabled = false;
  hintBtn.textContent = '💡 Hint';
  hintBtn.onclick = () => {
    if(q.hint){
      hintBox.innerHTML = `<span class="hint-text">${wrapWordsHTML(q.hint)}</span><span class="listen-slot"></span>`;
      const hintTokens = spanTokens(hintBox.querySelector('.hint-text').parentElement);
      hintBox.querySelector('.listen-slot').replaceWith(createListenGroup(null, hintTokens));
      hintBox.classList.remove('hidden');
    }
    hintBtn.disabled = true;
    hintBtn.textContent = '💡 Hint used';
  };
  hintBtn.classList.toggle('hidden', !q.hint);

  const skipBtn = document.getElementById('quiz-skip-btn');
  skipBtn.classList.remove('hidden');
  skipBtn.onclick = () => skipQuestion();

  const nextBtn = document.getElementById('quiz-next-btn');
  nextBtn.textContent = 'Check answer';
  nextBtn.disabled = true;
  nextBtn.onclick = () => checkAnswer();
}

function skipQuestion(){
  if(quizState.answered) return;
  const q = quizState.questions[quizState.qIndex];
  quizState.answered = true;
  quizState.answers.push({ question: q.q, opts: q.opts, selected: null, correctIdx: q.a, explain: q.explain, skipped: true });
  document.getElementById('quiz-skip-btn').classList.add('hidden');
  advanceQuiz();
}

function selectOption(idx){
  if(quizState.answered) return;
  quizState.selected = idx;
  document.querySelectorAll('.opt-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
  });
  document.getElementById('quiz-next-btn').disabled = false;
}

function checkAnswer(){
  const q = quizState.questions[quizState.qIndex];
  if(quizState.answered) return;
  quizState.answered = true;
  document.getElementById('quiz-skip-btn').classList.add('hidden');
  const correct = quizState.selected === q.a;
  if(correct) quizState.score++;

  quizState.answers.push({ question: q.q, opts: q.opts, selected: quizState.selected, correctIdx: q.a, explain: q.explain });

  document.querySelectorAll('.opt-btn').forEach((b, i) => {
    b.classList.remove('selected');
    if(i === q.a) b.classList.add('correct');
    else if(i === quizState.selected) b.classList.add('incorrect');
  });

  const fb = document.getElementById('feedback-box');
  fb.classList.remove('hidden');
  fb.className = 'feedback-box ' + (correct ? 'correct' : 'incorrect');
  const feedbackText = `${correct ? "That's right. " : `Not quite — the correct answer is "${q.opts[q.a]}". `}${q.explain}`;
  fb.innerHTML = `<span class="feedback-text">${wrapWordsHTML(feedbackText)}</span>`;
  fb.appendChild(createListenGroup(null, spanTokens(fb)));

  const nextBtn = document.getElementById('quiz-next-btn');
  nextBtn.textContent = quizState.qIndex < quizState.questions.length - 1 ? 'Next question' : 'See results';
  nextBtn.disabled = false;
  nextBtn.onclick = () => advanceQuiz();
}

function advanceQuiz(){
  window.scrollTo(0, 0);
  if(quizState.qIndex < quizState.questions.length - 1){
    quizState.qIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz(){
  const pct = Math.round((quizState.score / quizState.questions.length) * 100);
  const incorrectCount = quizState.answers.filter(a => !a.skipped && a.selected !== a.correctIdx).length;
  const skippedCount = quizState.answers.filter(a => a.skipped).length;
  const questionResults = quizState.answers.map((a, i) => ({
    questionNumber: i + 1,
    question: a.question,
    options: a.opts,
    yourAnswer: a.skipped ? null : a.opts[a.selected],
    correctAnswer: a.opts[a.correctIdx],
    result: a.skipped ? 'skipped' : (a.selected === a.correctIdx ? 'correct' : 'incorrect'),
  }));
  const statsEntry = {
    total: quizState.questions.length,
    correct: quizState.score,
    incorrect: incorrectCount,
    skipped: skippedCount,
    scorePercent: pct,
    lastAttempt: new Date().toISOString(),
    questions: questionResults,
  };

  let passed = false;
  let resultSubText = '';

  if(quizState.mode === 'level'){
    const level = LEVELS.find(l => l.id === quizState.meta.levelId);
    progress.levelScores[level.id] = pct;
    progress.quizStats[level.id] = statsEntry;
    passed = pct >= 70;
    if(passed){
      const nextId = level.id + 1;
      const nextLevel = LEVELS.find(l => l.id === nextId);
      if(nextLevel && !progress.unlocked.includes(nextId)){
        progress.unlocked.push(nextId);
      }
    }
    const nextLevel = LEVELS.find(l => l.id === level.id + 1);
    resultSubText = passed
      ? (nextLevel ? `You passed Level ${level.id} and unlocked Level ${nextLevel.id}.` : `You passed Level ${level.id} — that's the final level complete!`)
      : `You scored ${pct}%. You need 70% to unlock the next level — review the concepts and try again.`;
  }else{
    const key = quizState.meta.subjectId + (quizState.meta.variant ? '_' + quizState.meta.variant : '');
    statsEntry.label = quizState.meta.label;
    progress.subjectStats[key] = statsEntry;
    passed = pct >= 70;
    resultSubText = passed
      ? `Nice work on ${quizState.meta.label}! You scored ${pct}%.`
      : `You scored ${pct}% on ${quizState.meta.label}. Have another go whenever you're ready.`;
  }
  saveProgress(progress);

  document.getElementById('quiz-progress-fill').style.width = '100%';
  const ring = document.getElementById('result-ring');
  ring.textContent = pct + '%';
  ring.className = 'result-ring ' + (passed ? 'pass' : 'fail');
  document.getElementById('result-title').textContent = passed ? 'Nice work!' : 'Almost there';
  document.getElementById('result-sub').textContent = resultSubText;

  // "Review this level" only makes sense for the Spoken English course.
  const reviewLevelBtn = document.getElementById('review-level-btn');
  if(reviewLevelBtn){
    reviewLevelBtn.classList.toggle('hidden', quizState.mode !== 'level');
  }

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  quizState.answers.forEach((ans, i) => {
    const wasCorrect = !ans.skipped && ans.selected === ans.correctIdx;
    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <div class="review-item-head">
        <p class="review-q"><span class="review-q-num">Q${i + 1}.</span> ${ans.question}</p>
      </div>
      ${ans.skipped
        ? `<div class="review-answer-line">⏭ Skipped — correct answer: ${ans.opts[ans.correctIdx]}</div>`
        : wasCorrect
          ? `<div class="review-answer-line right">✓ You answered: ${ans.opts[ans.selected]}</div>`
          : `<div class="review-answer-line wrong">✗ You answered: ${ans.opts[ans.selected]}</div>
             <div class="review-answer-line right">✓ Correct answer: ${ans.opts[ans.correctIdx]}</div>`
      }
      <div class="review-explain">
        <span class="review-explain-text">${wrapWordsHTML(ans.explain)}</span>
        <span class="listen-slot"></span>
      </div>
    `;
    const explainTokens = spanTokens(item.querySelector('.review-explain-text').parentElement);
    item.querySelector('.listen-slot').replaceWith(createListenGroup(null, explainTokens));
    reviewList.appendChild(item);
  });

  showView('view-results');
  if(passed){ launchCelebration(); }
}

/* ============================================================
   PROFILE PAGE
   ============================================================ */
function goProfile(){
  hideProfileMessages();
  pendingProfilePic = null;
  document.getElementById('profile-name-input').value = currentUser.name;
  document.getElementById('profile-email-input').value = currentUser.email;
  document.getElementById('profile-bio-input').value = currentUser.bio || '';
  renderProfilePicPreview(currentUser.profilePic);
  document.getElementById('current-password-input').value = '';
  document.getElementById('new-password-input').value = '';

  const subjectsSection = document.getElementById('profile-subjects-section');
  if(currentUser.role === 'student' && currentUser.classLevel){
    subjectsSection.classList.remove('hidden');
    document.getElementById('profile-subjects-title').innerHTML = `🏫 Your School Subjects — Class ${currentUser.classLevel}`;
    renderSubjectGrid(currentUser.classLevel, 'profile-subject-grid');
  }else{
    subjectsSection.classList.add('hidden');
  }

  showView('view-profile');
}

function renderProfilePicPreview(dataUrl){
  const preview = document.getElementById('profile-pic-preview');
  preview.innerHTML = dataUrl ? `<img src="${dataUrl}" alt="">` : currentUser.name[0].toUpperCase();
}

function hideProfileMessages(){
  document.getElementById('profile-error').classList.add('hidden');
  document.getElementById('profile-success').classList.add('hidden');
}
function showProfileError(msg){
  hideProfileMessages();
  const box = document.getElementById('profile-error');
  box.textContent = msg;
  box.classList.remove('hidden');
}
function showProfileSuccess(msg){
  hideProfileMessages();
  const box = document.getElementById('profile-success');
  box.textContent = msg;
  box.classList.remove('hidden');
}

document.getElementById('profile-pic-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  if(file.size > 2 * 1024 * 1024){
    showProfileError('Please choose an image under 2MB.');
    e.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    pendingProfilePic = reader.result;
    renderProfilePicPreview(pendingProfilePic);
  };
  reader.readAsDataURL(file);
});

document.getElementById('remove-pic-btn').addEventListener('click', () => {
  pendingProfilePic = ''; // empty string = explicit removal
  renderProfilePicPreview(null);
});

document.getElementById('save-profile-btn').addEventListener('click', async () => {
  hideProfileMessages();
  const name = document.getElementById('profile-name-input').value.trim();
  const bio = document.getElementById('profile-bio-input').value.trim();
  if(!name){ showProfileError('Name cannot be empty.'); return; }
  try{
    const body = { name, bio };
    if(pendingProfilePic !== null) body.profilePic = pendingProfilePic || null;
    const data = await apiFetch('/api/auth/me/profile', { method: 'PUT', body: JSON.stringify(body) });
    currentUser = data.user;
    pendingProfilePic = null;
    updateTopbarForUser();
    showProfileSuccess('Profile updated.');
  }catch(err){ showProfileError(err.message); }
});

document.getElementById('change-password-btn').addEventListener('click', async () => {
  hideProfileMessages();
  const currentPassword = document.getElementById('current-password-input').value;
  const newPassword = document.getElementById('new-password-input').value;
  if(!newPassword || newPassword.length < 6){ showProfileError('New password must be at least 6 characters.'); return; }
  try{
    await apiFetch('/api/auth/me/password', { method: 'PUT', body: JSON.stringify({ currentPassword, newPassword }) });
    document.getElementById('current-password-input').value = '';
    document.getElementById('new-password-input').value = '';
    showProfileSuccess('Password updated.');
  }catch(err){ showProfileError(err.message); }
});

/* ============================================================
   ADMIN DASHBOARD
   ============================================================ */
async function goAdmin(){
  showView('view-admin');
  try{
    const data = await apiFetch('/api/admin/students');
    renderAdminDashboard(data);
  }catch(err){
    document.getElementById('active-student-grid').innerHTML = `<p class="empty-state">Couldn't load students: ${err.message}</p>`;
  }
}

document.querySelectorAll('[data-admin-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-admin-tab]').forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('[data-admin-panel]').forEach(p => p.classList.toggle('active', p.dataset.adminPanel === tab.dataset.adminTab));
    if(tab.dataset.adminTab === 'settings') loadSettingsIntoForm();
  });
});

function hideSettingsMessages(){
  document.getElementById('settings-error').classList.add('hidden');
  document.getElementById('settings-success').classList.add('hidden');
}

let pendingLogoImage = null;

function loadSettingsIntoForm(){
  hideSettingsMessages();
  pendingLogoImage = null;
  document.getElementById('settings-title-input').value = currentSettings.siteTitle;
  document.getElementById('settings-footer-input').value = currentSettings.footerText;
  const preview = document.getElementById('settings-logo-preview');
  preview.innerHTML = currentSettings.logoImage
    ? `<img src="${currentSettings.logoImage}" alt="" style="width:100%;height:100%;object-fit:cover;">`
    : '🏫';
}

document.getElementById('settings-logo-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  if(file.size > 2 * 1024 * 1024){
    document.getElementById('settings-error').textContent = 'Please choose an image under 2MB.';
    document.getElementById('settings-error').classList.remove('hidden');
    e.target.value = '';
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    pendingLogoImage = reader.result;
    document.getElementById('settings-logo-preview').innerHTML = `<img src="${pendingLogoImage}" alt="" style="width:100%;height:100%;object-fit:cover;">`;
  };
  reader.readAsDataURL(file);
});

document.getElementById('settings-logo-reset-btn').addEventListener('click', () => {
  pendingLogoImage = '';
  document.getElementById('settings-logo-preview').innerHTML = '🏫';
});

document.getElementById('save-settings-btn').addEventListener('click', async () => {
  hideSettingsMessages();
  const siteTitle = document.getElementById('settings-title-input').value.trim();
  const footerText = document.getElementById('settings-footer-input').value.trim();
  try{
    const body = { siteTitle, footerText };
    if(pendingLogoImage !== null) body.logoImage = pendingLogoImage;
    const updated = await apiFetch('/api/admin/settings', { method: 'PUT', body: JSON.stringify(body) });
    applySettings(updated);
    pendingLogoImage = null;
    document.getElementById('settings-success').textContent = 'Branding updated.';
    document.getElementById('settings-success').classList.remove('hidden');
  }catch(err){
    document.getElementById('settings-error').textContent = err.message;
    document.getElementById('settings-error').classList.remove('hidden');
  }
});

document.getElementById('export-all-btn').addEventListener('click', async () => {
  try{
    const res = await fetch('/api/admin/export-all', { credentials: 'same-origin' });
    if(!res.ok) throw new Error('Export failed.');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-school-full-backup.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }catch(err){
    alert(err.message);
  }
});

function renderAdminDashboard(data){
  const { active, terminated } = data;
  document.getElementById('admin-stat-total').textContent = active.length + terminated.length;
  document.getElementById('admin-stat-active').textContent = active.length;
  document.getElementById('admin-stat-terminated').textContent = terminated.length;

  renderStudentGrid('active-student-grid', active, false);
  renderStudentGrid('terminated-student-grid', terminated, true);
}

function renderStudentGrid(containerId, students, isTerminated){
  const grid = document.getElementById(containerId);
  grid.innerHTML = '';
  if(!students.length){
    grid.innerHTML = `<p class="empty-state">No ${isTerminated ? 'terminated' : 'active'} students yet.</p>`;
    return;
  }
  const total = totalConcepts();
  students.forEach(s => {
    const conceptsPct = Math.round((s.conceptsCompleted / total) * 100);
    const card = document.createElement('div');
    card.className = 'student-card' + (isTerminated ? ' terminated-card' : '');
    card.innerHTML = `
      <div class="student-card-head">
        <span class="student-avatar">${s.profilePic ? `<img src="${s.profilePic}" alt="">` : s.name[0].toUpperCase()}</span>
        <div>
          <p class="student-name">${s.name} ${s.classLevel ? `<span class="role-badge">Class ${s.classLevel}</span>` : ''}</p>
          <p class="student-email">${s.email}</p>
        </div>
      </div>
      <div class="student-stat-line"><span>Concepts</span><span>${s.conceptsCompleted}/${total} (${conceptsPct}%)</span></div>
      <div class="student-stat-line"><span>Levels unlocked</span><span>${s.levelsUnlocked}/${LEVELS.length}</span></div>
      <div class="student-stat-line"><span>Avg. quiz score</span><span>${s.averageQuizScore !== null ? s.averageQuizScore + '%' : '—'}</span></div>
      <div class="student-stat-line"><span>Subject quizzes tried</span><span>${s.subjectQuizzesAttempted}</span></div>
      <div class="student-card-actions">
        <button class="btn btn-ghost view-profile-btn" type="button">View profile</button>
        <button class="btn ${isTerminated ? 'btn-primary' : 'btn-ghost'} toggle-status-btn" type="button">${isTerminated ? 'Reactivate' : 'Terminate'}</button>
      </div>
    `;
    card.querySelector('.view-profile-btn').addEventListener('click', () => openStudentDetail(s.id));
    card.querySelector('.toggle-status-btn').addEventListener('click', () => toggleStudentStatus(s.id, isTerminated));
    grid.appendChild(card);
  });
}

async function toggleStudentStatus(id, isCurrentlyTerminated){
  const action = isCurrentlyTerminated ? 'reactivate' : 'terminate';
  if(!confirm(`Are you sure you want to ${action} this student's account?`)) return;
  try{
    await apiFetch(`/api/admin/students/${id}/${action}`, { method: 'POST' });
    goAdmin();
  }catch(err){ alert(err.message); }
}

async function openStudentDetail(id){
  const backdrop = document.getElementById('student-detail-backdrop');
  const panel = document.getElementById('student-detail-panel');
  panel.innerHTML = `<p class="empty-state">Loading...</p>`;
  backdrop.classList.remove('hidden');
  backdrop.onclick = (e) => { if(e.target === backdrop) closeStudentDetail(); };

  try{
    const s = await apiFetch(`/api/admin/students/${id}`);
    const breakdown = buildLevelBreakdown(s.progress);
    panel.innerHTML = `
      <button class="student-detail-close" id="close-detail-btn" type="button">✕</button>
      <div class="student-card-head" style="margin-bottom:18px;">
        <span class="student-avatar" style="width:52px;height:52px;font-size:20px;">${s.profilePic ? `<img src="${s.profilePic}" alt="">` : s.name[0].toUpperCase()}</span>
        <div>
          <p class="student-name" style="font-size:17px;">${s.name} ${s.classLevel ? `<span class="role-badge">Class ${s.classLevel}</span>` : ''}</p>
          <p class="student-email">${s.email}</p>
          <span class="role-badge" style="margin-left:0;background:${s.status === 'active' ? 'var(--primary-tint)' : 'var(--danger-tint)'};color:${s.status === 'active' ? 'var(--primary-dark)' : 'var(--danger)'};">${s.status}</span>
        </div>
      </div>
      ${s.bio ? `<p style="font-size:13.5px;color:var(--ink-soft);margin-bottom:18px;">${s.bio}</p>` : ''}
      <h3 style="font-size:15px;margin:0 0 12px;">Level-by-level progress (Spoken English)</h3>
      ${breakdown.map(lv => `
        <div class="detail-level-row">
          <h4>Level ${lv.levelId}: ${lv.levelTitle} ${lv.unlocked ? '' : '🔒'}</h4>
          <div class="detail-level-meta">
            <span>Concepts: ${lv.concepts.completed}/${lv.concepts.total} (${lv.concepts.percentComplete}%)</span>
            <span>Quiz: ${lv.quiz.attempted ? lv.quiz.scorePercent + '% (' + lv.quiz.correctAnswers + ' correct, ' + lv.quiz.incorrectAnswers + ' incorrect, ' + lv.quiz.skippedQuestions + ' skipped)' : 'Not attempted'}</span>
          </div>
        </div>
      `).join('')}
      <h3 style="font-size:15px;margin:22px 0 12px;">School subjects</h3>
      ${Object.keys(s.progress.subjectStats).length ? Object.entries(s.progress.subjectStats).map(([key, stat]) => `
        <div class="detail-level-row">
          <h4>${stat.label || key}</h4>
          <div class="detail-level-meta">
            <span>Score: ${stat.scorePercent}% (${stat.correct} correct, ${stat.incorrect} incorrect, ${stat.skipped} skipped)</span>
            <span>Last attempt: ${stat.lastAttempt ? new Date(stat.lastAttempt).toLocaleDateString() : '—'}</span>
          </div>
        </div>
      `).join('') : `<p class="empty-state">No subject quizzes attempted yet.</p>`}
    `;
    document.getElementById('close-detail-btn').addEventListener('click', closeStudentDetail);
  }catch(err){
    panel.innerHTML = `<button class="student-detail-close" id="close-detail-btn" type="button">✕</button><p class="empty-state">Couldn't load this student: ${err.message}</p>`;
    document.getElementById('close-detail-btn').addEventListener('click', closeStudentDetail);
  }
}

function closeStudentDetail(){
  document.getElementById('student-detail-backdrop').classList.add('hidden');
}

/* ============================================================
   GO-TO-TOP BUTTON
   ============================================================ */
(function setUpGotoTop(){
  const btn = document.createElement('button');
  btn.id = 'goto-top-btn';
  btn.type = 'button';
  btn.title = 'Back to top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
})();
