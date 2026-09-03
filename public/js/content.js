/* ============================================================
   CONTENT: a 4-level, day-by-day spoken English course.
   Each level is split into 6 days; each day groups a small
   cluster of concepts (days[].conceptIds reference concepts[].id).
   Every concept is checked against a real English-teaching
   resource (British Council LearnEnglish, BBC Learning English),
   linked as "source" below. Explanations are written fresh, not
   copied, then verified against these pages.
   ============================================================ */
const LEVELS = [
  {
    "id": 1,
    "title": "Foundations for Speaking",
    "desc": "The everyday building blocks: greeting people, talking about facts and routines, describing things, and asking simple questions.",
    "concepts": [
      {
        "id": "l1c1",
        "title": "Greetings & Introductions",
        "explain": "Every conversation starts with a greeting. In spoken English, the greeting you choose depends on the time of day and how well you know the person. Keep it short and natural — you don't need a full sentence to say hello.",
        "examples": [
          "Good morning! or Good afternoon! or Good evening! (formal or with strangers)",
          "Hi! or Hey! or Hey there! (casual, with friends or colleagues)",
          "Nice to meet you. — used the first time you meet someone",
          "I'm Jyo. or My name's Jyo. — introducing yourself"
        ],
        "tip": "Spoken tip: native speakers often skip 'How are you?' as a real question — they just say it as part of the greeting and expect a quick 'Good, you?' in return, not a detailed answer.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l1c2",
        "title": "Personal Pronouns & the Verb \"To Be\"",
        "explain": "The verb 'to be' (am or is or are) is probably the single most-used verb in spoken English — you'll need it constantly for introductions, descriptions, and small talk, so it's worth mastering early.\n\nEach pronoun pairs with a specific form: I am, you are, he or she or it is, we are, they are. In real speech, these almost always contract: I'm, you're, he's, she's, it's, we're, they're — the full form ('I am fine') can even sound a little stiff or emphatic in casual conversation.\n\nThe negative simply adds 'not': I'm not, you aren't or you're not, he isn't or he's not. Both negative contractions are correct — pick whichever feels more natural to say.",
        "examples": [
          "I'm a software engineer. or You're right about that.",
          "She's from Hyderabad. or They're on their way.",
          "I'm not sure. or He isn't ready yet.",
          "Is she coming today? or Are you free tomorrow?"
        ],
        "tip": "Spoken tip: contractions aren't just casual shortcuts — using 'I'm' instead of 'I am' in daily conversation is what native speakers actually do most of the time. Practising the contracted forms out loud will make you sound more natural, not less correct.",
        "source": {
          "label": "British Council LearnEnglish — Present simple: 'to be'",
          "url": "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/present-simple-be"
        }
      },
      {
        "id": "l1c3",
        "title": "Simple Present Tense in Conversation",
        "explain": "The simple present is used for more than you might think: facts and general truths ('Water boils at 100°C'), habits and routines ('I wake up at six'), permanent situations ('She lives in Pune'), scheduled or timetabled events ('The train leaves at 9 pm'), and even step-by-step instructions ('You turn left, then go straight').\n\nFormation is simple but has one small trap: for he or she or it, add -s or -es to the base verb (work → works, watch → watches, go → goes). For I or you or we or they, use the base verb with no change. Questions and negatives use the helper verb 'do' or 'does' — Do you work here? or She doesn't work here — and once 'does' appears, the main verb drops its -s (never 'She doesn't works').\n\nFrequency adverbs — always, usually, often, sometimes, rarely, never — usually sit before the main verb, but after the verb 'to be': 'I usually walk to work' but 'I am usually early.' Getting this placement right is one of the fastest ways to sound more fluent.\n\nThe -s ending itself has three different pronunciations depending on the sound before it: an s sound after quiet consonants (works, sits), a z sound after voiced sounds (goes, plays), and an extra iz syllable after hissing sounds (watches, misses). Native speakers do this automatically without thinking — with practice, so will you.",
        "examples": [
          "I go to the gym every morning. (habit)",
          "Water boils at 100 degrees. (fact)",
          "The train leaves at 9 pm sharp. (schedule)",
          "She usually arrives early, but today she's late. (frequency + exception)",
          "He doesn't drink coffee. or Do they live nearby? (negative & question)"
        ],
        "tip": "Spoken tip: try saying these three endings out loud — 'works' (s sound), 'goes' (z sound), 'watches' (extra iz syllable). Feeling the difference in your mouth is often faster than memorising the rule.",
        "source": {
          "label": "British Council LearnEnglish — Present simple",
          "url": "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/present-simple"
        }
      },
      {
        "id": "l1c4",
        "title": "Numbers, Time & Everyday Vocabulary",
        "explain": "Being able to say numbers and times quickly, without translating in your head, is one of the biggest confidence boosters in spoken English. Practise saying clock times, dates, and quantities out loud until they feel automatic.",
        "examples": [
          "It's half past six. or It's six thirty.",
          "It's a quarter to nine. or It's eight forty-five.",
          "I have two meetings today and three tomorrow.",
          "See you on the fifteenth of March."
        ],
        "tip": "Spoken tip: say the time two ways ('half past six' and 'six thirty') until both come out equally easily — different speakers prefer different styles.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c5",
        "title": "Family, Colours & Everyday Objects",
        "explain": "Being able to describe the people and objects around you without pausing to translate is a huge confidence boost. Family words, colours, and common household or office items come up constantly in everyday conversation — in small talk, introductions, and casual descriptions.\n\nA few family words are easy to mix up: 'uncle' and 'aunt' don't distinguish between mother's or father's side the way some languages do, and 'cousin' is used for both male and female cousins, of any age relative to you.",
        "examples": [
          "This is my brother, and that's my sister-in-law.",
          "My uncle works in Bangalore.",
          "I like the blue one better than the red one.",
          "Can you pass me that pen on the table?"
        ],
        "tip": "Spoken tip: describing objects by colour and position ('the blue folder on the left') is one of the most common everyday speaking tasks — practise it with things around your desk or home.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c6",
        "title": "Asking Simple Questions",
        "explain": "There are two main question types: Yes or No questions (answered with yes or no) and Wh-questions (asking for information, starting with what, where, when, who, why, how). Getting the word order right matters more in speech than people think, because listeners rely on it to know a question is coming.",
        "examples": [
          "Do you live near here? (Yes or No question)",
          "Where do you live? (Wh-question)",
          "What time does the meeting start?",
          "Why did you choose that one?"
        ],
        "tip": "Spoken tip: your voice usually rises at the end of a Yes or No question, and falls at the end of a Wh-question. Try both out loud — you'll hear the difference.",
        "source": {
          "label": "British Council LearnEnglish — Question words",
          "url": "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/question-words"
        }
      },
      {
        "id": "l1c7",
        "title": "Pronunciation Basics: Word Stress & Rhythm",
        "explain": "English is a 'stress-timed' language — some syllables are stressed (said longer, louder, clearer) and others are quickly reduced, almost swallowed. This is very different from languages where every syllable gets roughly equal weight, and it's one of the biggest reasons learners feel they're not understood even when their grammar is correct.\n\nIn longer words, one syllable always carries the main stress: PHOtograph, phoTOGraphy, photoGRAPHic — notice how the stress moves as the word changes form. In two-syllable noun or verb pairs, stress often shifts too: PREsent (a gift) vs preSENT (to give); REcord (noun) vs reCORD (verb).\n\nGetting every single sound perfect matters far less than hitting the right stressed syllable — native listeners rely on stress patterns to recognise words quickly in fast speech.",
        "examples": [
          "reCORD (verb: to record a video) vs REcord (noun: a music record)",
          "I'll inTROduce you to the team. (stress on TRO)",
          "comFORtable is often said quickly as 'COMFtable' in casual speech",
          "Can you conFIRM the booking? (stress on FIRM)"
        ],
        "tip": "Spoken tip: when learning a new word, always check (and say aloud) which syllable is stressed — a dictionary's pronunciation guide usually marks it. This single habit improves how clearly you're understood more than almost anything else.",
        "source": {
          "label": "BBC Learning English — The Pronunciation Lounge",
          "url": "https://www.bbc.co.uk/learningenglish/features/the_pronunciation_lounge"
        }
      },
      {
        "id": "l1c8",
        "title": "Prepositions of Time & Place (in, on, at)",
        "explain": "Prepositions of time and place are small words that carry a lot of meaning, and mixing them up is one of the most common mistakes learners make — even at higher levels. For time, the rule of thumb is: use 'at' for precise clock times and a few fixed phrases, 'on' for days and dates, and 'in' for longer periods like months, years, and seasons.\n\nFor place, a similar three-way pattern applies: 'at' for a specific point (at the door, at the bus stop), 'on' for a surface (on the table, on the wall), and 'in' for an enclosed space (in the room, in the car). These aren't absolute rules — a few expressions are simply fixed and have to be learned as they are, like 'at night' or 'in the morning'.",
        "examples": [
          "I wake up at 6:30 and leave for work at 8. (precise times)",
          "The meeting is on Monday, on the 5th of March. (days and dates)",
          "She was born in July, in 2014. (months and years)",
          "Wait for me at the entrance. or The keys are on the table. or He's in the kitchen. (place)"
        ],
        "tip": "Spoken tip: a few common phrases don't follow the pattern and just have to be memorised as chunks — 'at night', 'in the morning or afternoon or evening', 'at the weekend' (or 'on the weekend' in American English).",
        "source": {
          "label": "British Council LearnEnglish — Prepositions of time: 'at', 'in', 'on'",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on"
        }
      },
      {
        "id": "l1c9",
        "title": "Countable & Uncountable Nouns (a, some, any)",
        "explain": "Some things in English can be counted one by one (an apple, two apples) and some can't (water, rice, advice) — and this single distinction quietly controls which small words you put in front of a noun. Countable nouns take 'a or an' in the singular, and 'some' in the plural for positive sentences. Uncountable nouns never take 'a or an' and never have a plural form — you can't say 'two rices' or 'a water'.\n\nIn positive sentences, use 'some' for both plural countables and uncountables ('some apples', 'some water'). In negatives and questions, switch to 'any' ('I don't have any apples', 'Is there any water?').",
        "examples": [
          "I need a pen and some paper. (countable + uncountable)",
          "There isn't any milk left. (negative, uncountable)",
          "Do you have any questions? (question, countable plural)",
          "She gave me some advice. (advice is always uncountable)"
        ],
        "tip": "Spoken tip: a handful of nouns are uncountable in English even though they feel countable — advice, information, news, furniture, and luggage are common traps. Say 'a piece of advice', not 'an advice'.",
        "source": {
          "label": "British Council LearnEnglish — Nouns: countable and uncountable",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable"
        }
      },
      {
        "id": "l1c10",
        "title": "Everyday Verbs & Collocations (have, make, take, go, do)",
        "explain": "A small set of very common verbs — have, make, take, go, do — combine with certain nouns in fixed, slightly unpredictable ways called collocations. Native speakers 'have breakfast', 'take a shower', 'make a decision', and 'do homework' — and swapping the verbs sounds noticeably wrong, even though the meaning would still be clear.\n\nThere's no single rule that predicts every combination, which is exactly why these are worth learning as fixed chunks rather than working them out from the individual meaning of 'have' or 'make'.",
        "examples": [
          "I usually have breakfast at 8 and take a shower before that.",
          "We need to make a decision by Friday.",
          "Can you do me a favour?",
          "Let's go for a walk after lunch."
        ],
        "tip": "Spoken tip: when you learn a new noun (like 'decision' or 'mistake'), learn its verb partner at the same time — 'make a decision', 'make a mistake' — rather than the noun alone.",
        "source": {
          "label": "British Council LearnEnglish — Delexical verbs: have, take, make, give, go, do",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/delexical-verbs-have-take-make-give-go-do"
        }
      },
      {
        "id": "l1c11",
        "title": "Adjectives for Describing Feelings",
        "explain": "Beyond 'good' and 'bad', a small set of everyday adjectives lets you describe how you feel far more precisely — happy, tired, excited, nervous, bored, worried. These come up constantly in small talk and everyday check-ins ('How are you feeling today?'), and having more than two or three options makes you sound noticeably more expressive.\n\nMost of these adjectives follow the pattern 'I feel + adjective' or 'I'm + adjective', and many can be intensified with 'a bit', 'really', or 'quite' — 'I'm a bit nervous' vs 'I'm really excited'.",
        "examples": [
          "I'm really excited about the trip next week.",
          "She looked a bit nervous before the interview.",
          "I feel tired after such a long day.",
          "He was quite worried when the flight was delayed."
        ],
        "tip": "Spoken tip: pairing a feeling adjective with a reason makes small talk flow much better — 'I'm a bit tired, I didn't sleep well' invites a natural follow-up question.",
        "source": {
          "label": "British Council LearnEnglish Teens — Feelings",
          "url": "https://learnenglishteens.britishcouncil.org/topics/feelings/term"
        }
      },
      {
        "id": "l1c12",
        "title": "Imperatives & Giving Simple Instructions",
        "explain": "The imperative is the simplest verb form in English — just the base verb, with no subject at all — and it's used for instructions, directions, recipes, warnings, and friendly advice. 'Turn left', 'Close the door', and 'Be careful' are all imperatives, with 'you' understood but never said.\n\nOn its own, an imperative can sound like an order, which is fine for instructions and emergencies but can come across as blunt in other situations. Adding 'please', or turning it into a question ('Could you close the door?'), softens it considerably.",
        "examples": [
          "Turn on the machine, then press the green button.",
          "Please take a seat — I'll be with you shortly.",
          "Don't forget your umbrella, it might rain.",
          "Be careful on the stairs, they're a bit wet."
        ],
        "tip": "Spoken tip: 'Let's...' is the imperative's friendly plural cousin, used to suggest doing something together — 'Let's go' includes the speaker, while a plain imperative like 'Go' doesn't.",
        "source": {
          "label": "British Council LearnEnglish Kids — Imperatives",
          "url": "https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice/imperatives"
        }
      },
      {
        "id": "l1c13",
        "title": "Days, Months & Ordinal Numbers",
        "explain": "Knowing the days of the week, the months of the year, and ordinal numbers (first, second, third...) fluently is essential for talking about schedules, birthdays, and appointments without hesitating. English uses ordinal numbers for dates ('the third of April'), while cardinal numbers (one, two, three) are used for quantities.\n\nMost ordinal numbers are formed by adding '-th' to the cardinal number (four becomes fourth, six becomes sixth), but a few are irregular and have to be memorised individually: one becomes first, two becomes second, three becomes third, and five becomes fifth.",
        "examples": [
          "My birthday is on the twenty-second of July.",
          "We have a meeting every Wednesday.",
          "This is the first time I've visited Delhi.",
          "The report is due by the end of March."
        ],
        "tip": "Spoken tip: when you say a date aloud, only the day needs the ordinal form — 'the third of April', not 'the three of April'. The month itself stays in its normal form.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c14",
        "title": "Possessive Adjectives & Pronouns",
        "explain": "Possessive adjectives (my, your, his, her, its, our, their) go directly before a noun to show who something belongs to — 'my phone', 'her idea'. Possessive pronouns (mine, yours, his, hers, ours, theirs) replace the noun entirely and stand alone — 'That phone is mine', not 'That phone is my'.\n\nA common mix-up is 'its' versus 'it's': 'its' with no apostrophe is the possessive adjective ('The dog wagged its tail'), while 'it's' with an apostrophe is always a contraction of 'it is' or 'it has'.",
        "examples": [
          "Is this your bag? — No, it's not mine.",
          "Her office is bigger than ours.",
          "The company changed its logo last year.",
          "Those are their seats, not yours."
        ],
        "tip": "Spoken tip: if you can replace the word with 'it is' and the sentence still makes sense, use 'it's'. If not, use 'its' — this quick test clears up the confusion instantly.",
        "source": {
          "label": "British Council LearnEnglish — Possessives: adjectives",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/possessives-adjectives"
        }
      },
      {
        "id": "l1c15",
        "title": "This, That, These, Those",
        "explain": "These four words, called demonstratives, point to specific people or things, and the choice between them depends on two things: distance and number. 'This' and 'these' are for things that are close to you, singular and plural. 'That' and 'those' are for things further away, singular and plural.\n\nThey can be used directly before a noun ('this book') or alone, standing in for the noun entirely ('This is mine').",
        "examples": [
          "This is my desk, and that one over there is yours.",
          "These shoes are new; those ones are older.",
          "Can I try this on?",
          "Those mountains in the distance look beautiful."
        ],
        "tip": "Spoken tip: on the phone, 'this' often refers to the situation happening right now — 'This is a bit awkward, but...' — even without pointing at anything physical.",
        "source": {
          "label": "British Council LearnEnglish — Demonstratives",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/demonstratives"
        }
      },
      {
        "id": "l1c16",
        "title": "There is / There are",
        "explain": "'There is' and 'there are' are used to say that something exists, or to describe what's in a place, without making that thing the main subject of the sentence. Use 'there is', or the contraction 'there's', with singular and uncountable nouns, and 'there are' with plural nouns.\n\nIn casual speech, 'there's' is often used even before a plural noun ('There's two cafés on this street'), though this isn't considered fully correct in careful or written English.",
        "examples": [
          "There's a supermarket just around the corner.",
          "There are three meeting rooms on this floor.",
          "Is there any milk left in the fridge?",
          "There isn't a direct flight, unfortunately."
        ],
        "tip": "Spoken tip: 'there' in this structure is different from 'their' and 'they're' — all three sound identical when spoken, so context is the only way listeners tell them apart.",
        "source": {
          "label": "British Council LearnEnglish — Using 'there is' and 'there are'",
          "url": "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/using-there-there-are"
        }
      },
      {
        "id": "l1c17",
        "title": "Can for Ability and Permission",
        "explain": "'Can' is one of the most useful modal verbs for beginners, covering two very different jobs: expressing ability ('I can swim') and asking or giving permission ('Can I leave early today?'). Like all modal verbs, 'can' never changes form for he, she, or it, and it's always followed directly by the base verb with no 'to'.\n\nThe negative, 'cannot' or 'can't', works the same way for both meanings — 'I can't swim' for no ability, and 'You can't park here' for not being allowed.",
        "examples": [
          "She can speak three languages.",
          "Can I use your phone for a minute?",
          "I can't come to the meeting today.",
          "Can you hear me okay?"
        ],
        "tip": "Spoken tip: 'can' is almost always contracted and said quickly in speech, while 'can't' is said clearly and a little longer — this stress difference is actually how listeners tell them apart in fast conversation.",
        "source": {
          "label": "British Council LearnEnglish — Modals: permission and obligation",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation"
        }
      },
      {
        "id": "l1c18",
        "title": "Plural Nouns & Spelling Rules",
        "explain": "Most English nouns simply add '-s' to become plural (book becomes books), but a set of spelling rules covers the exceptions. Nouns ending in -s, -x, -ch, -sh, or -ss add '-es' (box becomes boxes, watch becomes watches). Nouns ending in a consonant plus '-y' change the 'y' to 'i' and add '-es' (city becomes cities), while those ending in a vowel plus '-y' just add '-s' (day becomes days).\n\nA small number of very common nouns are irregular altogether and simply have to be learned individually: child becomes children, person becomes people, man becomes men, woman becomes women, foot becomes feet, tooth becomes teeth.",
        "examples": [
          "I have two boxes and three watches to pack.",
          "How many cities have you visited?",
          "There are twenty children in this class.",
          "She bought a few new toys for her nephew."
        ],
        "tip": "Spoken tip: irregular plurals like 'people', 'children', and 'men' are extremely common in everyday speech, so hearing them often in conversation is often faster than memorising a list.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l1c19",
        "title": "Talking About Personal Information",
        "explain": "Sharing basic personal information — your name, age, nationality, and job — is often the very first real conversation you'll have in English, whether at a border crossing, a new workplace, or meeting someone for the first time. Each piece of information has its own simple, fixed question-and-answer pattern worth knowing by heart.\n\nNationality words are capitalised in English, Indian, French, Japanese, even though they aren't at the start of a sentence — a small but noticeable detail in writing.",
        "examples": [
          "What's your name? — My name's Jyo.",
          "Where are you from? — I'm from India.",
          "What do you do? — I'm a software engineer.",
          "How old are you? — I'm thirty-four."
        ],
        "tip": "Spoken tip: 'What do you do?' is the standard way to ask about someone's job in English — a direct translation like 'What is your work?' is understandable but sounds noticeably non-native.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c20",
        "title": "Short Answers (Yes, I am. No, I don't.)",
        "explain": "In spoken English, answering a yes or no question with just 'yes' or 'no' can sound abrupt or even rude. Native speakers almost always add a short answer that echoes the verb from the question — 'Are you ready?' 'Yes, I am.' rather than a bare 'Yes.'\n\nThe auxiliary verb used in the short answer matches whatever helping verb appeared in the question: 'do' or 'does' for simple present, 'did' for simple past, 'is', 'are', or 'am' for the verb 'to be', and so on.",
        "examples": [
          "Do you like coffee? — Yes, I do.",
          "Did you finish the report? — No, I didn't.",
          "Is she coming tonight? — Yes, she is.",
          "Can you help me? — Yes, I can."
        ],
        "tip": "Spoken tip: short answers are one of the fastest ways to sound more natural in English — practise them as fixed pairs of question type and matching short answer until they're automatic.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l1c21",
        "title": "Prepositions of Movement (to, from, into, out of)",
        "explain": "Prepositions of movement describe the direction something or someone travels, as opposed to prepositions of place, which describe a fixed position. 'To' shows movement towards a destination, 'from' shows the starting point, and 'into' and 'out of' describe entering and leaving an enclosed space.\n\nThese small words are easy to overlook but genuinely change the meaning of a sentence — 'walk to the door' and 'walk from the door' describe opposite directions using the exact same verb.",
        "examples": [
          "She walked into the room and sat down.",
          "We're driving from Hyderabad to Bangalore tomorrow.",
          "He took the milk out of the fridge.",
          "The train goes through three stations before the airport."
        ],
        "tip": "Spoken tip: 'into' is one word describing movement to the inside of something, while 'in to' (two words) is rare and usually means something quite different — stick with 'into' for movement.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l1c22",
        "title": "Basic Weather Vocabulary",
        "explain": "Talking about the weather is one of the most common icebreakers in English, and a small set of adjectives covers almost every everyday situation: sunny, rainy, cloudy, windy, hot, cold, warm, and cool. These adjectives usually follow the pattern 'It's + adjective', describing the general condition outside rather than any specific object.\n\nTemperature and weather adjectives are also commonly combined with 'a bit', 'really', or 'quite' to show intensity, just like feeling adjectives from an earlier lesson.",
        "examples": [
          "It's really sunny today — don't forget your sunglasses.",
          "It was pouring rain all morning.",
          "It's a bit chilly this evening, isn't it?",
          "It gets extremely hot here in the summer."
        ],
        "tip": "Spoken tip: 'It's pouring' or 'It's pouring rain' is a common, natural way to say it's raining very heavily, more vivid than just saying 'It's raining a lot.'",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c23",
        "title": "Phone Numbers & Spelling Your Name Aloud",
        "explain": "Saying a phone number or spelling a name aloud clearly is a small, very practical skill that comes up constantly — booking appointments, giving contact details, or confirming an email address over the phone. Phone numbers in English are usually said digit by digit, sometimes with a small pause after groups of two or three numbers, rather than as one long number.\n\nWhen spelling a name, saying each letter clearly, and using a well-known word to clarify an easily confused letter ('B as in Bravo', or simply 'B for banana'), avoids a lot of misunderstanding.",
        "examples": [
          "My number is oh-seven-two, four-five-six, one-two-three-four.",
          "It's spelled J-Y-O — J as in Juliet, Y, O.",
          "Could you repeat that number, please?",
          "My email is jyo, at example, dot com."
        ],
        "tip": "Spoken tip: the number '0' is usually said as 'oh' in phone numbers in everyday speech, even though it's written as zero — 'oh-seven-two' rather than 'zero-seven-two'.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l1c24",
        "title": "Simple Past of 'To Be' (was / were)",
        "explain": "The verb 'to be' has its own simple past forms, separate from the regular -ed pattern used by most verbs: 'was' for I, he, she, and it, and 'were' for you, we, and they. Unlike most simple past verbs, 'was' and 'were' are never contracted in positive sentences, though the negative forms 'wasn't' and 'weren't' are extremely common in speech.\n\nQuestions are formed by simply moving 'was' or 'were' before the subject — 'Were you at the party?' — without needing an extra helper verb like 'did'.",
        "examples": [
          "I was at home yesterday evening.",
          "They were really happy with the results.",
          "She wasn't at work on Monday.",
          "Were you at school yesterday?"
        ],
        "tip": "Spoken tip: 'was' and 'were' also describe past states and feelings, not just locations — 'I was tired', 'It was a great day' — making them some of the most frequently used past-tense words in everyday conversation.",
        "source": {
          "label": "British Council LearnEnglish Kids — Past simple: verb 'to be'",
          "url": "https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice/past-simple-verb-be"
        }
      }
    ],
    "quiz": [
      {
        "q": "Which greeting fits a casual chat with a friend?",
        "opts": [
          "Good evening, madam.",
          "Hey! How's it going?",
          "To whom it may concern.",
          "Kindly be informed."
        ],
        "a": 1,
        "hint": "Think about which option sounds relaxed and informal, not office-memo formal.",
        "explain": "'Hey! How's it going?' is casual and friendly — perfect for a friend. The other options are overly formal or oddly phrased for everyday conversation."
      },
      {
        "q": "Choose the correct sentence.",
        "opts": [
          "She are happy.",
          "She is happy.",
          "She be happy.",
          "She am happy."
        ],
        "a": 1,
        "hint": "The verb 'to be' changes with every pronoun — which form goes with 'she'?",
        "explain": "'She' takes 'is' — the verb 'to be' changes form with each pronoun: I am, you or we or they are, he or she or it is."
      },
      {
        "q": "Choose the correct sentence.",
        "opts": [
          "She work in Chennai.",
          "She working in Chennai.",
          "She works in Chennai.",
          "She to work in Chennai."
        ],
        "a": 2,
        "hint": "For he or she or it in the simple present, the verb usually needs an ending.",
        "explain": "For he or she or it, the simple present verb takes an -s ending: work → works. 'Work', 'working' (without is), and 'to work' are all incorrect here."
      },
      {
        "q": "How do you say 8:45 another way?",
        "opts": [
          "Quarter past eight",
          "Quarter to nine",
          "Half past eight",
          "Eight and quarter"
        ],
        "a": 1,
        "hint": "Think in terms of minutes before the next hour.",
        "explain": "8:45 can be said as 'eight forty-five' or 'a quarter to nine' — both mean fifteen minutes before nine o'clock."
      },
      {
        "q": "Which word correctly completes: 'My ___ is a doctor.' (your parent's brother)",
        "opts": [
          "uncle",
          "aunt",
          "cousin",
          "nephew"
        ],
        "a": 0,
        "hint": "This word is specifically for a parent's brother, not any relative.",
        "explain": "'Uncle' refers to your parent's brother (or a similarly close male relative by marriage). 'Aunt' is the female equivalent, 'cousin' is your aunt or uncle's child, and 'nephew' is your sibling's son."
      },
      {
        "q": "Which is a Wh-question?",
        "opts": [
          "Do you like tea?",
          "Where is the station?",
          "Is he coming?",
          "Can you help?"
        ],
        "a": 1,
        "hint": "Wh-questions start with a question word asking for information, not just yes or no.",
        "explain": "'Where is the station?' asks for information using the question word 'where', making it a Wh-question. The others are Yes or No questions, answerable with a simple yes or no."
      },
      {
        "q": "In 'PREsent' (a gift) vs 'preSENT' (to give), what actually changes?",
        "opts": [
          "The spelling",
          "Which syllable is stressed",
          "The number of syllables",
          "Nothing changes"
        ],
        "a": 1,
        "hint": "The letters stay the same — listen for which syllable is emphasised.",
        "explain": "English has many two-syllable words where stress shifts between the noun and verb forms — PREsent (noun) vs preSENT (verb). Getting the stress right changes the meaning and makes you easier to understand."
      },
      {
        "q": "Choose the correct preposition: 'The meeting is ___ Monday morning.'",
        "opts": [
          "at",
          "on",
          "in",
          "by"
        ],
        "a": 1,
        "hint": "Days of the week usually pair with one specific preposition.",
        "explain": "We use 'on' with days and dates — 'on Monday'. 'At' is for precise times, and 'in' is for longer periods like months or years."
      },
      {
        "q": "Which sentence is correct?",
        "opts": [
          "I need an advice.",
          "I need some advice.",
          "I need a advices.",
          "I need advices."
        ],
        "a": 1,
        "hint": "This noun has no plural form and never takes 'a or an'.",
        "explain": "'Advice' is uncountable in English — it has no plural form and never takes 'a or an'. The correct phrasing is 'some advice' or 'a piece of advice'."
      },
      {
        "q": "Which verb correctly completes: 'Can you ___ me a favour?'",
        "opts": [
          "make",
          "do",
          "take",
          "have"
        ],
        "a": 1,
        "hint": "This is a fixed pairing — think of the phrase as one chunk, not separate words.",
        "explain": "'Do someone a favour' is a fixed collocation in English — 'make a favour' and 'take a favour' aren't natural phrasings, even though the individual words seem logical."
      },
      {
        "q": "Which sentence uses a feeling adjective naturally?",
        "opts": [
          "I am tiredness today.",
          "I'm a bit tired today.",
          "I do tired today.",
          "I'm tiredly today."
        ],
        "a": 1,
        "hint": "Feeling adjectives usually follow the pattern 'I'm + adjective'.",
        "explain": "'I'm a bit tired' follows the natural pattern 'I'm + adjective', optionally softened with 'a bit'. 'Tiredness' is a noun, and 'tiredly' isn't a standard word."
      },
      {
        "q": "Which sentence is a correctly softened imperative?",
        "opts": [
          "Close door!",
          "Closing the door.",
          "Could you close the door, please?",
          "You close the door now."
        ],
        "a": 2,
        "hint": "Turning a command into a question, with 'please', makes it sound polite rather than like an order.",
        "explain": "'Could you close the door, please?' turns a blunt command into a polite question — the other options are either grammatically incorrect or sound like an order."
      },
      {
        "q": "Choose the correct negative.",
        "opts": [
          "She isn't ready.",
          "She not is ready.",
          "She don't is ready.",
          "She isn't be ready."
        ],
        "a": 0,
        "hint": "The negative of 'is' simply adds 'not' — no extra helper verb needed.",
        "explain": "'Isn't' is the contracted negative of 'is not' — no additional 'do' or 'is' is needed."
      },
      {
        "q": "Which sentence correctly places the frequency adverb?",
        "opts": [
          "I always am on time.",
          "I am always on time.",
          "Always I am on time.",
          "I am on time always."
        ],
        "a": 1,
        "hint": "Frequency adverbs go after the verb 'to be', but before other main verbs.",
        "explain": "With the verb 'to be', frequency adverbs like 'always' go AFTER it: 'I am always on time.' With other verbs, they go before: 'I always arrive on time.'"
      },
      {
        "q": "How would you naturally say the date 15 March?",
        "opts": [
          "Fifteen three",
          "The fifteenth of March",
          "Fifteen of March three",
          "March fifteen three"
        ],
        "a": 1,
        "hint": "English dates are usually said as 'the [ordinal] of [month]'.",
        "explain": "'The fifteenth of March' is the natural way to say this date — using the ordinal number 'fifteenth' plus 'of' before the month."
      },
      {
        "q": "What do you call your parent's parent?",
        "opts": [
          "Uncle",
          "Cousin",
          "Grandparent",
          "Nephew"
        ],
        "a": 2,
        "hint": "Think one generation above your parents.",
        "explain": "Your parent's parent is your grandparent — a distinct word for that generation, unlike 'uncle' or 'cousin'."
      },
      {
        "q": "Which syllable normally carries the stress in 'photograph'?",
        "opts": [
          "pho-TO-graph",
          "PHO-to-graph",
          "pho-to-GRAPH",
          "photo-GRAPH-y"
        ],
        "a": 1,
        "hint": "Say the word naturally out loud — where does your voice land hardest?",
        "explain": "'PHOtograph' stresses the first syllable. Interestingly, related words shift the stress: phoTOGraphy, photoGRAPHic."
      },
      {
        "q": "Which sentence is correct?",
        "opts": [
          "How much apples do you want?",
          "How many apples do you want?",
          "How much apple do you want?",
          "How many apple do you want?"
        ],
        "a": 1,
        "hint": "'Apples' is countable and plural — which question word pairs with countable plural nouns?",
        "explain": "'How many' is used with countable plural nouns like 'apples'. 'How much' is used with uncountable nouns."
      },
      {
        "q": "Choose the correct negative imperative.",
        "opts": [
          "No touch that.",
          "Don't touch that.",
          "Not touch that.",
          "Touch not that."
        ],
        "a": 1,
        "hint": "Negative imperatives use one specific helper word before the verb.",
        "explain": "Negative imperatives are formed with 'don't' + base verb — 'Don't touch that.' The other options aren't grammatically correct English."
      },
      {
        "q": "Which sentence correctly uses a feeling adjective with an intensifier?",
        "opts": [
          "I'm really excite about it.",
          "I'm real excited about it.",
          "I'm really excited about it.",
          "I'm excited really about it."
        ],
        "a": 2,
        "hint": "The intensifier goes directly before the adjective, and needs its -ly ending.",
        "explain": "'Really' (with -ly) is the adverb form used to intensify an adjective — placed directly before the adjective it modifies."
      },
      {
        "q": "Choose the correct preposition: 'She walked ___ the room and sat down.'",
        "opts": [
          "into",
          "from",
          "out of",
          "at"
        ],
        "a": 0,
        "hint": "Think about movement to the inside of an enclosed space.",
        "explain": "'Into' describes movement to the inside of a space — 'walked into the room' means she entered it."
      },
      {
        "q": "Which sentence correctly describes heavy rain?",
        "opts": [
          "It's pouring rain today.",
          "It's snowing rain today.",
          "It's a bit sunny rain today.",
          "It's raining sun today."
        ],
        "a": 0,
        "hint": "This phrase means rain is falling very heavily.",
        "explain": "'It's pouring rain' (or just 'It's pouring') means it's raining very heavily — a vivid, common way to describe heavy rain."
      },
      {
        "q": "How is '0' usually said in a spoken phone number?",
        "opts": [
          "Zero",
          "Oh",
          "Nil",
          "Nought"
        ],
        "a": 1,
        "hint": "This short word is the everyday way to say this digit on the phone, even though it's written differently.",
        "explain": "In everyday spoken phone numbers, '0' is usually said as 'oh', even though it's written as zero."
      },
      {
        "q": "Choose the correct sentence.",
        "opts": [
          "I were at home yesterday.",
          "I was at home yesterday.",
          "I am at home yesterday.",
          "I be at home yesterday."
        ],
        "a": 1,
        "hint": "'I' pairs with one specific past form of 'to be'.",
        "explain": "'Was' is the correct past form of 'to be' for I, he, she, and it — 'I was at home yesterday.'"
      }
    ],
    "days": [
      {
        "day": 1,
        "title": "Greetings & The Verb 'To Be'",
        "conceptIds": [
          "l1c1",
          "l1c2",
          "l1c3",
          "l1c4"
        ]
      },
      {
        "day": 2,
        "title": "Everyday Vocabulary & Questions",
        "conceptIds": [
          "l1c5",
          "l1c6",
          "l1c7",
          "l1c8"
        ]
      },
      {
        "day": 3,
        "title": "Nouns, Verbs & Feelings",
        "conceptIds": [
          "l1c9",
          "l1c10",
          "l1c11",
          "l1c12"
        ]
      },
      {
        "day": 4,
        "title": "Numbers, Possession & Existence",
        "conceptIds": [
          "l1c13",
          "l1c14",
          "l1c15",
          "l1c16"
        ]
      },
      {
        "day": 5,
        "title": "Ability, Plurals & Personal Info",
        "conceptIds": [
          "l1c17",
          "l1c18",
          "l1c19",
          "l1c20"
        ]
      },
      {
        "day": 6,
        "title": "Movement, Weather & the Past of 'To Be'",
        "conceptIds": [
          "l1c21",
          "l1c22",
          "l1c23",
          "l1c24"
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Everyday Conversations",
    "desc": "Move from facts to stories: talk about the past and present, make small talk, share preferences, ask politely, and give directions.",
    "concepts": [
      {
        "id": "l2c1",
        "title": "Past Tense for Telling Stories",
        "explain": "The simple past is how we talk about anything finished — yesterday, last week, or years ago. Regular verbs just add '-ed', but many common verbs are irregular and have to be learned by ear, not by rule.",
        "examples": [
          "I watched a movie last night. (regular verb)",
          "We went to the market and bought some vegetables. (irregular verbs)",
          "She didn't call me back. (negative uses didn't + base verb)",
          "Did you enjoy the trip? (question uses Did)"
        ],
        "tip": "Spoken tip: irregular past tense verbs (went, ate, saw, bought) are some of the most common words in spoken English — hearing them often in shows or podcasts helps them stick faster than memorising lists.",
        "source": {
          "label": "British Council LearnEnglish — Past simple",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple"
        }
      },
      {
        "id": "l2c2",
        "title": "Present Continuous for Actions Happening Now",
        "explain": "The present continuous (am or is or are + verb-ing) describes actions happening right now, or temporary situations around the present time — as opposed to the simple present's habits and facts.\n\nIt's also commonly used for fixed future arrangements ('I'm meeting her tomorrow') and for describing a trend or changing situation ('Prices are rising').\n\nA frequent spoken mix-up: 'I work here' (a permanent fact) vs 'I'm working on a report right now' (a temporary, in-progress action). Choosing the wrong one can confuse the listener about whether something is a routine or a one-time happening.",
        "examples": [
          "What are you doing? — I'm just checking my emails.",
          "She's studying for an exam this week. (temporary)",
          "I'm meeting a client at 3 pm. (fixed future plan)",
          "Things are getting better slowly. (a changing trend)"
        ],
        "tip": "Spoken tip: verbs like 'know', 'like', 'want', and 'believe' (called stative verbs) usually aren't used in the continuous form — say 'I know the answer', not 'I'm knowing the answer'.",
        "source": {
          "label": "British Council LearnEnglish — Present continuous",
          "url": "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/present-continuous"
        }
      },
      {
        "id": "l2c3",
        "title": "Daily Routine & Small Talk",
        "explain": "Small talk is the light, friendly conversation that fills gaps — before a meeting starts, in a lift, or while waiting. It's not about deep topics; it's about being warm and easy to talk to.",
        "examples": [
          "How was your weekend?",
          "Busy day today, isn't it?",
          "Did you catch the match last night?",
          "It's been really hot this week, hasn't it?"
        ],
        "tip": "Spoken tip: small talk questions often end with a short tag like 'isn't it?' or 'hasn't it?' — this invites the other person to agree and keep the conversation going.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c4",
        "title": "Talking About Likes and Dislikes",
        "explain": "Talking naturally about preferences is one of the most common things you'll do in conversation — from small talk about food to discussing hobbies. English has a small set of verbs that go from strong dislike to strong liking, and they're almost always followed by a verb in the -ing form (not the infinitive) when talking generally.\n\nBe careful with 'would like', which is different from 'like' — 'I like coffee' states a general preference, while 'I'd like a coffee' is a polite way of ordering or requesting one right now.",
        "examples": [
          "I love travelling to new places.",
          "I really enjoy reading before bed.",
          "I don't mind waiting, it's fine.",
          "I can't stand loud noises early in the morning.",
          "I'd like a cup of tea, please. (a request, not a general preference)"
        ],
        "tip": "Spoken tip: 'I'd like...' is one of the most useful polite phrases in English — it works for ordering food, asking for something, or making a request, all in one simple structure.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l2c5",
        "title": "Making Polite Requests",
        "explain": "In English, being direct can sound rude even when you don't mean it to. Softer phrasing makes the same request sound more polite, especially with people you don't know well.",
        "examples": [
          "Could you pass the salt, please?",
          "Would you mind closing the window?",
          "Do you think you could send that file today?",
          "I was wondering if you could help me with this."
        ],
        "tip": "Spoken tip: softer phrases like 'Would you mind...' are usually said with a gentle, slightly rising tone — a flat, fast delivery can undo the politeness.",
        "source": {
          "label": "British Council LearnEnglish — Requests, offers and invitations",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/requests-offers-invitations"
        }
      },
      {
        "id": "l2c6",
        "title": "Common Phrases & Conversation Fillers",
        "explain": "Fillers and discourse markers — words like 'well', 'you know', 'I mean', 'actually', 'so' — don't add grammatical meaning, but they're essential for natural spoken English. They give you a moment to think, soften a statement, or signal that you're about to explain or correct something.\n\nUsing a few naturally (not too many) makes your speech sound less rehearsed and more like real conversation, rather than a memorised script.",
        "examples": [
          "Well, I think we should wait and see.",
          "It's, you know, a bit complicated to explain.",
          "I mean, it could work, but I'm not fully sure.",
          "Actually, I think there's a better way to do this.",
          "So, what do you think we should do next?"
        ],
        "tip": "Spoken tip: 'actually' in English is often used to politely correct or add unexpected information ('Actually, I think it's Tuesday, not Monday') — it doesn't just mean 'currently'.",
        "source": {
          "label": "British Council LearnEnglish — Keeping a conversation going",
          "url": "https://learnenglish.britishcouncil.org/sites/podcasts/files/LearnEnglish-Speaking-B1-Keeping-a-conversation-going.pdf"
        }
      },
      {
        "id": "l2c7",
        "title": "Asking for and Giving Directions",
        "explain": "Directions rely heavily on prepositions of place and a small set of fixed phrases. Once you know these building blocks, you can describe almost any route.",
        "examples": [
          "Excuse me, how do I get to the station?",
          "Go straight ahead and turn left at the signal.",
          "It's just past the bakery, on your right.",
          "It's about a five-minute walk from here."
        ],
        "tip": "Spoken tip: 'Excuse me' is the standard, polite way to interrupt a stranger to ask something — say it, pause briefly, then ask your question.",
        "source": {
          "label": "British Council LearnEnglish — Prepositions of place",
          "url": "https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/prepositions-place"
        }
      },
      {
        "id": "l2c8",
        "title": "Making & Responding to Invitations",
        "explain": "Inviting someone, and accepting or turning down an invitation gracefully, are everyday conversation skills with their own set of ready-made phrases. Accepting is usually simple and enthusiastic; declining politely takes a bit more care — the standard pattern is to thank the person, give a brief reason, and leave the door open for next time.\n\nA flat 'No' or 'I'm busy' with nothing else can come across as rude, even if that's not the intention — a little cushioning language goes a long way.",
        "examples": [
          "Would you like to come to dinner on Saturday?",
          "I'd love to! What time should I come?",
          "That sounds great, but I already have plans that evening — maybe another time?",
          "Thanks for thinking of me, but I can't make it this time."
        ],
        "tip": "Spoken tip: the pattern 'Thank you + brief reason + keep the door open' works for almost any polite decline — 'Thanks for the invite, I've got something on that day, but let's catch up soon.'",
        "source": {
          "label": "British Council LearnEnglish — Accepting and declining",
          "url": "https://learnenglishteens.britishcouncil.org/functions/accepting-declining/term"
        }
      },
      {
        "id": "l2c9",
        "title": "Talking on the Phone",
        "explain": "Phone conversations follow a fairly fixed script in English, which actually makes them easier once you know the pattern: identify yourself, say who you want to speak to, and use set phrases for waiting, connecting, or leaving a message. Because you can't rely on facial expressions or gestures on a call, being a little more explicit and polite than in person is normal.\n\nIf the person you want isn't available, you'll usually be asked whether you'd like to leave a message — this is where 'Could you tell them...' or 'Could you ask them to call me back' become useful.",
        "examples": [
          "Hello, this is Jyo speaking. Could I speak to Mr Rao, please?",
          "One moment, please — I'll put you through.",
          "I'm afraid she's not available right now. Would you like to leave a message?",
          "Could you ask him to call me back? It's about the report."
        ],
        "tip": "Spoken tip: on the phone, spell out anything easy to mishear — names, numbers, email addresses — letter by letter or digit by digit, and don't be afraid to ask the other person to do the same.",
        "source": {
          "label": "British Council LearnEnglish — Leaving a message",
          "url": "https://learnenglish.britishcouncil.org/skills/listening/a2-listening/leaving-message"
        }
      },
      {
        "id": "l2c10",
        "title": "Shopping & Ordering Food",
        "explain": "Shops and cafés run on a small, very predictable set of exchanges, which makes them a great place to practise speaking with low pressure. 'I'll have...' and 'Can I get...?' are the two most natural ways to order, far more common in speech than the more textbook-sounding 'I want'.\n\nWhen paying or asking about price, 'How much is it?' and 'Can I pay by card?' cover most situations, and 'Could I have a bag or receipt, please?' rounds off almost any shopping interaction politely.",
        "examples": [
          "I'll have a cappuccino and a slice of banana cake, please.",
          "Can I get that without sugar?",
          "How much is this, please?",
          "Could I pay by card? or Could I have a receipt, please?"
        ],
        "tip": "Spoken tip: 'I'll have...' sounds far more natural than 'I want...' when ordering — 'I want a coffee' isn't wrong, but it can come across as blunt compared with 'I'll have a coffee, please.'",
        "source": {
          "label": "British Council LearnEnglish — Ordering in a café",
          "url": "https://learnenglish.britishcouncil.org/skills/listening/a1-listening/ordering-cafe"
        }
      },
      {
        "id": "l2c11",
        "title": "Talking About Health & Feeling Unwell",
        "explain": "Explaining that you're not feeling well, and describing what's wrong, is a genuinely useful everyday skill — with your doctor, your manager, or a friend. 'I have a headache' and 'My stomach hurts' are the two basic patterns: 'have + a or an + symptom' for things like a headache, a cold, or a fever, and 'my ___ hurts' for a specific body part.\n\n'I'm not feeling well' or 'I feel a bit off' are useful general phrases when you're unwell but don't want to go into detail.",
        "examples": [
          "I have a headache and a bit of a fever.",
          "My back hurts after sitting all day.",
          "I'm not feeling well — I think I'm coming down with something.",
          "I've got a cold, so my voice sounds a bit strange."
        ],
        "tip": "Spoken tip: 'I'm coming down with something' is a natural, slightly vague way to say you're starting to feel ill, without needing to name the exact problem yet.",
        "source": {
          "label": "British Council LearnEnglish Teens — Health",
          "url": "https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/health"
        }
      },
      {
        "id": "l2c12",
        "title": "Asking for Permission",
        "explain": "Asking permission is a slightly different skill from making a request — you're asking if you're allowed to do something, not asking someone else to do something for you. 'Can I...?' is the everyday, informal option; 'Could I...?' and 'Is it okay if I...?' sound a little more polite and considerate; 'May I...?' is the most formal of all.\n\nA useful pattern for the middle ground is 'Do you mind if I...?' — literally asking whether it would bother the other person, and answered with 'No, not at all' (meaning yes, go ahead) rather than 'yes'.",
        "examples": [
          "Can I sit here?",
          "Could I borrow your pen for a moment?",
          "Is it okay if I leave a bit early today?",
          "Do you mind if I open the window? — No, not at all, go ahead."
        ],
        "tip": "Spoken tip: answering 'Do you mind if...?' is a common trap — 'No, not at all' means yes, you may; a plain 'yes' would confusingly suggest you DO mind.",
        "source": {
          "label": "British Council LearnEnglish — Permission",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/permission"
        }
      },
      {
        "id": "l2c13",
        "title": "Present Perfect: Have You Ever...?",
        "explain": "The present perfect (have or has plus a past participle) is used to talk about life experiences — things that happened at some unspecified point before now, where the exact time isn't the point. 'Have you ever been to Japan?' asks about your whole life up to now, not a specific date.\n\n'Ever' is used in questions to mean 'at any time in your life', and 'never' is used in negative statements to mean 'at no time'. Once you mention a specific time, like 'I went to Japan in 2019', you switch to the simple past instead.",
        "examples": [
          "Have you ever tried sushi?",
          "I've never been skydiving.",
          "She's visited fifteen countries so far.",
          "Has he finished the project yet?"
        ],
        "tip": "Spoken tip: 'ever' and 'never' always sit directly before the main verb, the past participle — 'I have never seen', not 'I never have seen'.",
        "source": {
          "label": "British Council LearnEnglish — Present perfect",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect"
        }
      },
      {
        "id": "l2c14",
        "title": "Present Perfect vs Past Simple",
        "explain": "Choosing between the present perfect and the past simple trips up even confident speakers, but there's a reliable test: if you mention or imply a specific finished time, like yesterday or last week, use the past simple. If the time is unspecified, or the period is still continuing, like today or so far, use the present perfect.\n\n'I saw that film' in past simple suggests a specific occasion, possibly with a time following. 'I've seen that film' in present perfect simply states the experience, with no particular time attached.",
        "examples": [
          "I visited Paris in 2018. (specific past time)",
          "I've visited Paris twice. (unspecified, life experience)",
          "She finished the report this morning. (specific, and likely gives more detail)",
          "She's finished the report. (relevant now — it's done)"
        ],
        "tip": "Spoken tip: if a time expression like 'yesterday' or 'last year' appears anywhere in the sentence, the verb almost always has to be simple past, not present perfect — the two rarely mix in the same clause.",
        "source": {
          "label": "British Council LearnEnglish — Present perfect",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect"
        }
      },
      {
        "id": "l2c15",
        "title": "Making Suggestions with Let's / Shall We",
        "explain": "'Let's', short for 'let us', is the most common way to suggest doing something together — it always includes the speaker as part of the plan. 'Shall we...?' is a softer, more inviting way to suggest the same thing, phrased as a question rather than a statement, and is especially common in British English.\n\nBoth are followed directly by the base verb, with no 'to' — 'Let's go', not 'Let's to go'.",
        "examples": [
          "Let's grab lunch before the meeting.",
          "Shall we start with the budget first?",
          "Let's not decide this right now — let's sleep on it.",
          "Shall we head out? It's getting late."
        ],
        "tip": "Spoken tip: 'Let's' can be softened even further by adding a tag at the end — 'Let's get started, shall we?' — combining both suggestion patterns into one friendly sentence.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c16",
        "title": "Talking About Hobbies & Free Time",
        "explain": "Describing what you do in your free time is a reliable, low-pressure conversation topic that comes up constantly — in interviews, on dates, and in casual small talk. English has several slightly different structures depending on the type of activity: 'play' for sports and games, 'go' for -ing activities like swimming or hiking, and 'do' for other activities without a fixed verb partner.\n\nStating how often you do something, like most weekends or a couple of times a month, makes the description more natural and specific than a bare list of hobbies.",
        "examples": [
          "I play badminton most weekends.",
          "I go hiking whenever I get the chance.",
          "I do a bit of painting in my free time.",
          "I'm really into photography these days."
        ],
        "tip": "Spoken tip: 'I'm into...' is a casual, very common way to say you enjoy something as a hobby — 'I'm into photography' sounds more natural in conversation than 'My hobby is photography.'",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l2c17",
        "title": "Describing Your Home",
        "explain": "Describing where you live — the type of home, the rooms, and the area — is a natural extension of small talk and comes up often when getting to know someone. English distinguishes between a flat, in British English, or apartment, in American English, and a house, and room names are fairly fixed: living room, bedroom, kitchen, bathroom, and, in British English, lounge or sitting room as alternatives to living room.\n\n'There is' and 'there are' combine naturally here, as in 'There are three bedrooms', to describe a home's layout.",
        "examples": [
          "I live in a two-bedroom flat in the city centre.",
          "There's a small balcony off the living room.",
          "My favourite room is the kitchen — it gets a lot of natural light.",
          "We're thinking of moving to a quieter neighbourhood."
        ],
        "tip": "Spoken tip: 'city centre' in British English and 'downtown' in American English both mean the middle of a city — worth knowing both, since you'll hear either depending on who you're speaking with.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l2c18",
        "title": "Public Transport Vocabulary & Phrases",
        "explain": "Getting around by public transport — buses, trains, the metro — requires a small, very practical set of vocabulary and phrases that make travelling far less stressful. Knowing how to ask for a ticket, check a platform or stop, and confirm you're on the right route covers most situations.\n\n'Get on' and 'get off' are the standard phrasal verbs for boarding and leaving public transport, not 'enter' and 'exit', which sound overly formal in this context.",
        "examples": [
          "Which platform does the train to the airport leave from?",
          "Excuse me, does this bus stop near the museum?",
          "I need to get off at the next stop, please.",
          "Is this seat taken?"
        ],
        "tip": "Spoken tip: 'Excuse me, does this bus go to...?' is one of the most useful travel phrases in English — short, polite, and works in almost any public transport situation.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l2c19",
        "title": "Apologising & Responding to Apologies",
        "explain": "Apologising well in English depends on how serious the situation is. 'Sorry' alone covers small, everyday things, like bumping into someone or being a minute late. For anything more significant, 'I'm really sorry about...' plus a brief explanation or offer to fix things sounds more sincere and complete.\n\nWhen someone apologises to you, 'That's okay' or 'No worries' are the standard, friendly responses for minor things — brushing off a small apology with silence can feel awkward in English-speaking contexts.",
        "examples": [
          "Sorry, I didn't catch that — could you repeat it?",
          "I'm really sorry about the delay. It won't happen again.",
          "Sorry to keep you waiting.",
          "That's okay, don't worry about it."
        ],
        "tip": "Spoken tip: 'My bad' is a very casual American English way to say 'sorry, that was my mistake' — fine with friends, but best avoided in formal or professional settings.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c20",
        "title": "Thanking Someone Sincerely",
        "explain": "A plain 'thank you' covers most everyday situations, but sounding genuinely grateful — for a bigger favour, a gift, or real help — usually calls for a bit more detail. Naming specifically what you're thankful for makes gratitude land better: 'Thank you for staying late to help me' is more sincere than a bare 'thanks'.\n\n'I really appreciate it' is a slightly more heartfelt alternative to 'thank you', often used alongside it rather than instead of it.",
        "examples": [
          "Thanks so much for your help today.",
          "I really appreciate you taking the time to explain this.",
          "Thank you for the lovely gift — that was really thoughtful.",
          "I can't thank you enough for covering my shift."
        ],
        "tip": "Spoken tip: replying to thanks with 'You're welcome', 'No problem', or 'Anytime' are all natural — 'anytime' specifically signals you'd happily help again.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c21",
        "title": "Talking About Frequency in More Detail",
        "explain": "Beyond the basic frequency adverbs (always, usually, sometimes, never), English has a set of more specific phrases for describing exactly how often something happens — useful once simple adverbs feel too vague. 'Once a week', 'every other day', 'a couple of times a month', and 'hardly ever' all give a more precise picture than 'sometimes' alone.\n\nThese phrases usually go at the end of a sentence, or sometimes at the beginning for emphasis: 'I go to the gym twice a week' or 'Twice a week, I go to the gym.'",
        "examples": [
          "I go swimming once a week, usually on Sundays.",
          "We meet for coffee every other Friday.",
          "I hardly ever eat out during the week.",
          "She calls her parents a couple of times a month."
        ],
        "tip": "Spoken tip: 'every other day' or 'every other week' means alternating — one day yes, one day no — not simply 'often'. It's a common source of confusion worth getting right.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      },
      {
        "id": "l2c22",
        "title": "Asking Someone to Repeat or Clarify",
        "explain": "Not catching what someone said is completely normal, even for fluent speakers, and English has a set of polite, ready-made phrases for asking someone to repeat or explain themselves without feeling embarrassed. 'Sorry, could you say that again?' is far more natural than a blunt 'What?', which can sound rude depending on tone.\n\n'Sorry, what do you mean by...?' is useful when you understood the words but not the meaning or intention behind them — a slightly different situation from simply not hearing clearly.",
        "examples": [
          "Sorry, could you say that again, please?",
          "I didn't quite catch that — could you repeat it?",
          "Sorry, what do you mean by 'reschedule'?",
          "Could you speak a little more slowly, please?"
        ],
        "tip": "Spoken tip: 'Sorry, come again?' is a casual, friendly way to ask someone to repeat themselves — fine with friends or colleagues, though 'Could you say that again?' is safer in more formal situations.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c23",
        "title": "Making Plans by Text or Message",
        "explain": "Arranging plans over text or chat messages uses a slightly more relaxed, shortened style of English than a spoken phone call, while still following similar patterns for suggesting, confirming, and changing plans. Full sentences often get shortened ('Free tonight?' instead of 'Are you free tonight?'), and confirmation is usually brief and quick.\n\nEven in this casual style, being clear about time, place, and confirmation avoids the classic miscommunication of two people assuming different plans.",
        "examples": [
          "Free tonight? Fancy grabbing dinner?",
          "Sounds good — see you at 7 at the usual place?",
          "Running a bit late, be there in 10!",
          "Can we push it to tomorrow instead? Something's come up."
        ],
        "tip": "Spoken tip: 'Fancy...?' is a casual British English way to suggest something in a text or in speech — 'Fancy a coffee?' means 'Would you like a coffee?', slightly more relaxed in tone.",
        "source": {
          "label": "British Council LearnEnglish — Small talk",
          "url": "https://learnenglish.britishcouncil.org/free-resources/learning-hub/discussions/small-talk"
        }
      },
      {
        "id": "l2c24",
        "title": "Restaurant Etiquette & Paying the Bill",
        "explain": "Beyond ordering food, a few extra phrases make the end of a restaurant meal go smoothly — asking for the bill, understanding how splitting the cost works, and leaving a tip where it's customary. 'Could we have the bill, please?' is the standard, polite way to ask to pay, and 'Could we split the bill?' is the usual way to ask to divide the cost between everyone at the table.\n\nTipping customs vary a lot by country, so it's worth knowing the local expectation rather than assuming it's the same everywhere English is spoken.",
        "examples": [
          "Could we have the bill, please?",
          "Shall we split the bill, or is everyone paying separately?",
          "Is service included, or should we leave a tip?",
          "I'll get this one — you can get the next round."
        ],
        "tip": "Spoken tip: in American English, 'the check' is used instead of 'the bill' — 'Could we get the check, please?' means exactly the same thing in a US restaurant.",
        "source": {
          "label": "British Council LearnEnglish — Vocabulary",
          "url": "https://learnenglish.britishcouncil.org/vocabulary"
        }
      }
    ],
    "quiz": [
      {
        "q": "Choose the correct past tense sentence.",
        "opts": [
          "I go to the market yesterday.",
          "I goed to the market yesterday.",
          "I went to the market yesterday.",
          "I going to the market yesterday."
        ],
        "a": 2,
        "hint": "This is an irregular verb — its past form doesn't follow the usual -ed pattern.",
        "explain": "'Go' is irregular — its past tense is 'went', not 'goed'. Irregular verbs like this have to be memorised individually since they don't follow the regular -ed pattern."
      },
      {
        "q": "Which sentence describes something happening right now?",
        "opts": [
          "I work in an office.",
          "I'm working on a report right now.",
          "I worked on a report yesterday.",
          "I will work on a report."
        ],
        "a": 1,
        "hint": "Look for the verb form built with am or is or are + -ing.",
        "explain": "The present continuous (am or is or are + -ing) describes an action in progress at this moment — 'I'm working on it right now' — while the simple present describes general facts or routines."
      },
      {
        "q": "Which is natural small talk?",
        "opts": [
          "State your business immediately.",
          "Busy day today, isn't it?",
          "I require your assistance now.",
          "Explain your weekend in detail."
        ],
        "a": 1,
        "hint": "Small talk is light and friendly, often ending with a little tag question.",
        "explain": "'Busy day today, isn't it?' is a natural, friendly small talk question with a tag ending that invites agreement — the other options sound like formal demands, not casual chat."
      },
      {
        "q": "Which sentence correctly expresses a strong dislike?",
        "opts": [
          "I don't mind loud noises.",
          "I can't stand loud noises.",
          "I'd like loud noises.",
          "I'm knowing I dislike loud noises."
        ],
        "a": 1,
        "hint": "One phrase here is much stronger than simply 'not liking' something.",
        "explain": "'Can't stand' expresses strong dislike. 'Don't mind' is neutral, 'I'd like' expresses a want, and 'know' isn't normally used in the continuous form."
      },
      {
        "q": "Which sentence is the most polite request?",
        "opts": [
          "Give me the file.",
          "Send the file now.",
          "Would you mind sending the file?",
          "File. Now."
        ],
        "a": 2,
        "hint": "Softer phrasing, not a direct command, tends to sound more polite.",
        "explain": "'Would you mind sending the file?' softens the request politely. Direct commands like 'Send the file now' can sound abrupt, especially with people you don't know well."
      },
      {
        "q": "Which sentence uses 'actually' the way native speakers typically do?",
        "opts": [
          "Actually, I am doing this task right now.",
          "Actually, I think the meeting is on Tuesday, not Monday.",
          "I actually to go now.",
          "Actually is a nice word."
        ],
        "a": 1,
        "hint": "'Actually' is often used to gently correct or add a surprising detail.",
        "explain": "'Actually' is commonly used to politely correct information or add something unexpected — here, gently correcting the assumed day of the meeting."
      },
      {
        "q": "What's the polite way to stop a stranger and ask for directions?",
        "opts": [
          "Hey you!",
          "Excuse me...",
          "Listen...",
          "You there..."
        ],
        "a": 1,
        "hint": "This is the standard opener before asking a stranger anything.",
        "explain": "'Excuse me' is the polite way to get a stranger's attention before asking a question — direct or abrupt openers can come across as rude, even unintentionally."
      },
      {
        "q": "Which is the most natural way to decline an invitation politely?",
        "opts": [
          "No.",
          "I'm busy.",
          "Thanks for the invite, but I already have plans that evening.",
          "I don't want to come."
        ],
        "a": 2,
        "hint": "A polite decline usually thanks the person and gives a brief reason.",
        "explain": "A polite decline usually thanks the person, gives a brief reason, and leaves the door open — a flat 'no' or 'I'm busy' with nothing else can sound abrupt."
      },
      {
        "q": "On the phone, what should you say if the person you want isn't available?",
        "opts": [
          "Just hang up.",
          "Could you ask him to call me back?",
          "Tell me his home address.",
          "I'll call again in ten years."
        ],
        "a": 1,
        "hint": "Think about what you'd naturally ask the person who answered instead.",
        "explain": "If the person isn't available, it's natural to ask the other person to pass on a message or ask them to call back — this is a standard phone phrase."
      },
      {
        "q": "Which is the most natural way to order in a café?",
        "opts": [
          "I want a coffee.",
          "Give me a coffee.",
          "I'll have a coffee, please.",
          "Coffee. Now."
        ],
        "a": 2,
        "hint": "This phrase is far more common in speech than saying 'I want'.",
        "explain": "'I'll have...' is the natural, polite way to order in English — 'I want' isn't wrong, but it sounds blunter, and the other two options are impolite."
      },
      {
        "q": "Which sentence correctly describes a symptom?",
        "opts": [
          "I hurt headache.",
          "I have a headache.",
          "I feel headache.",
          "I'm headache."
        ],
        "a": 1,
        "hint": "Symptoms like a headache usually follow the pattern 'have + a or an + symptom'.",
        "explain": "'I have a headache' follows the standard pattern for symptoms — 'have + a or an + symptom'. The other options aren't grammatically natural."
      },
      {
        "q": "What does 'Do you mind if I open the window?' — 'No, not at all' mean?",
        "opts": [
          "No, you can't.",
          "Yes, you may.",
          "I don't understand.",
          "Ask someone else."
        ],
        "a": 1,
        "hint": "Think about what 'not minding' something actually means — does it bother the person or not?",
        "explain": "'No, not at all' means 'I don't mind', which is a way of saying yes — a confusing pattern for many learners, since a plain 'yes' here would actually suggest the opposite."
      },
      {
        "q": "Choose the correct negative past tense.",
        "opts": [
          "I no went there.",
          "I didn't went there.",
          "I didn't go there.",
          "I not go there."
        ],
        "a": 2,
        "hint": "The negative past tense uses 'didn't' + the BASE form of the verb, not the past form.",
        "explain": "'Didn't' already carries the past tense, so the main verb returns to its base form: 'I didn't go', not 'I didn't went'."
      },
      {
        "q": "Choose the correct negative.",
        "opts": [
          "She not is working today.",
          "She isn't working today.",
          "She don't working today.",
          "She no working today."
        ],
        "a": 1,
        "hint": "Negate the 'be' verb, not the main verb.",
        "explain": "'Isn't working' correctly negates the 'be' verb in the present continuous — 'is' + not + verb-ing."
      },
      {
        "q": "Which is natural small talk about weather?",
        "opts": [
          "The meteorological conditions are unfavourable.",
          "Horrible weather, isn't it?",
          "I demand information about precipitation.",
          "Weather is currently occurring."
        ],
        "a": 1,
        "hint": "Small talk is casual — look for the option with a friendly tag question.",
        "explain": "'Horrible weather, isn't it?' is natural, casual small talk with a tag question. The other options sound oddly formal or robotic."
      },
      {
        "q": "Choose the correct sentence.",
        "opts": [
          "I enjoy to read before bed.",
          "I enjoy reading before bed.",
          "I enjoy read before bed.",
          "I enjoy readed before bed."
        ],
        "a": 1,
        "hint": "'Enjoy' is followed by the -ing form of the verb, not the infinitive.",
        "explain": "'Enjoy' is followed by a gerund (-ing form): 'enjoy reading', not 'enjoy to read'."
      },
      {
        "q": "Choose the correct preposition: 'The bank is ___ the supermarket and the pharmacy.'",
        "opts": [
          "between",
          "among",
          "at",
          "on"
        ],
        "a": 0,
        "hint": "This preposition is for exactly two things, not three or more.",
        "explain": "'Between' is used for a position relative to exactly two things; 'among' is used for three or more."
      },
      {
        "q": "Which is the natural way to ask the price?",
        "opts": [
          "What is this cost?",
          "How much is this?",
          "This costs what?",
          "How many is this?"
        ],
        "a": 1,
        "hint": "Price is asked about with 'how much', not 'how many'.",
        "explain": "'How much is this?' is the natural way to ask about price — 'how many' is for countable quantities, not cost."
      },
      {
        "q": "What might a doctor ask you?",
        "opts": [
          "What are your symptoms?",
          "What is your favourite colour?",
          "How many siblings do you have?",
          "What time is it?"
        ],
        "a": 0,
        "hint": "Think about what a doctor needs to know to help you.",
        "explain": "'What are your symptoms?' is a standard question a doctor asks to understand what's wrong."
      },
      {
        "q": "How do you respond if you're happy to help after 'Would you mind helping me?'",
        "opts": [
          "Yes, I would.",
          "No, not at all.",
          "Yes, of course I mind.",
          "I mind, sorry."
        ],
        "a": 1,
        "hint": "Think about what 'not minding' something actually means.",
        "explain": "'No, not at all' means you don't mind, so you're happy to help — a common source of confusion since a plain 'yes' would suggest the opposite."
      },
      {
        "q": "Which phrase describes something happening on alternating days?",
        "opts": [
          "Every other day",
          "Hardly ever",
          "Once in a while",
          "All the time"
        ],
        "a": 0,
        "hint": "This phrase means one day yes, one day no.",
        "explain": "'Every other day' means alternating days — one day yes, the next day no — a common source of confusion for learners."
      },
      {
        "q": "Which is the most polite way to ask someone to repeat themselves?",
        "opts": [
          "What?",
          "Huh?",
          "Sorry, could you say that again?",
          "Say it again now."
        ],
        "a": 2,
        "hint": "Look for the option that softens the request politely.",
        "explain": "'Sorry, could you say that again?' is polite and natural — a blunt 'What?' can sound rude depending on tone."
      },
      {
        "q": "Which phrase is a casual way to suggest something in a text message?",
        "opts": [
          "I formally propose that we...",
          "Fancy grabbing dinner?",
          "Kindly confirm your availability.",
          "I require your presence at dinner."
        ],
        "a": 1,
        "hint": "Look for the short, relaxed British English way to suggest something.",
        "explain": "'Fancy...?' is a casual, common British English way to suggest something — 'Fancy grabbing dinner?' means 'Would you like to grab dinner?'"
      },
      {
        "q": "What does 'Could we split the bill?' mean?",
        "opts": [
          "Can we break the plates?",
          "Can we divide the cost between everyone?",
          "Can we cancel the order?",
          "Can we get a discount?"
        ],
        "a": 1,
        "hint": "Think about what happens to the total cost among a group of diners.",
        "explain": "'Split the bill' means dividing the total cost between everyone at the table, rather than one person paying for all of it."
      }
    ],
    "days": [
      {
        "day": 1,
        "title": "Talking About Past & Present",
        "conceptIds": [
          "l2c1",
          "l2c2",
          "l2c3",
          "l2c4"
        ]
      },
      {
        "day": 2,
        "title": "Small Talk & Everyday Requests",
        "conceptIds": [
          "l2c5",
          "l2c6",
          "l2c7",
          "l2c8"
        ]
      },
      {
        "day": 3,
        "title": "Getting Around & Getting Help",
        "conceptIds": [
          "l2c9",
          "l2c10",
          "l2c11",
          "l2c12"
        ]
      },
      {
        "day": 4,
        "title": "Present Perfect & Suggestions",
        "conceptIds": [
          "l2c13",
          "l2c14",
          "l2c15",
          "l2c16"
        ]
      },
      {
        "day": 5,
        "title": "Hobbies, Home & Transport",
        "conceptIds": [
          "l2c17",
          "l2c18",
          "l2c19",
          "l2c20"
        ]
      },
      {
        "day": 6,
        "title": "Clarifying, Planning & Dining Out",
        "conceptIds": [
          "l2c21",
          "l2c22",
          "l2c23",
          "l2c24"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Building Fluency",
    "desc": "Sound more natural: talk about future plans, express possibility and opinions, give advice, use phrasal verbs, describe things, and compare.",
    "concepts": [
      {
        "id": "l3c1",
        "title": "Talking About the Future",
        "explain": "English has three common ways to talk about the future, and each one carries a slightly different feeling: 'will' for quick decisions or predictions, 'going to' for plans you've already decided, and present continuous for fixed arrangements.",
        "examples": [
          "I think it will rain later. (prediction)",
          "I'm going to start a new course next month. (already decided plan)",
          "I'm meeting a client on Friday. (fixed arrangement)",
          "I'll help you with that. (decision made right now)"
        ],
        "tip": "Spoken tip: 'going to' is very often shortened in casual speech to 'gonna' — you'll hear it constantly, though it's best kept out of formal writing.",
        "source": {
          "label": "British Council LearnEnglish — Future forms",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/future-forms-will-be-going-present-continuous"
        }
      },
      {
        "id": "l3c2",
        "title": "Modal Verbs for Possibility & Necessity",
        "explain": "Modal verbs — can, could, may, might, must, should, have to — add meaning like possibility, ability, permission, or necessity to a main verb, without changing form for he or she or it (no -s ending, ever: 'she can', not 'she cans').\n\nDifferent modals show different strengths of certainty or obligation: 'must' and 'have to' show strong necessity (though 'must' often feels more personal, 'have to' more like an external rule); 'should' gives advice or a recommendation; 'might' and 'could' show possibility, without certainty.\n\nIn spoken English, 'have to' is far more common than 'must' for everyday obligations — 'must' can sound quite formal or strict in casual conversation.",
        "examples": [
          "I might join later, I'm not sure yet. (possibility)",
          "You must submit the form by Friday. (strong necessity or rule)",
          "I have to leave early today. (everyday obligation)",
          "You should try the new restaurant nearby. (advice)",
          "Could you help me with this? (polite request, not just ability)"
        ],
        "tip": "Spoken tip: modal verbs are always followed directly by the base verb with no 'to' in between — 'You should to go' is incorrect; it's simply 'You should go'.",
        "source": {
          "label": "British Council LearnEnglish — Modals: permission and obligation",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation"
        }
      },
      {
        "id": "l3c3",
        "title": "Expressing Opinions & Agreeing or Disagreeing",
        "explain": "Sharing an opinion confidently, and disagreeing without sounding harsh, are key fluency skills. English has soft, ready-made phrases for both.",
        "examples": [
          "I think this approach makes more sense.",
          "In my opinion, the second option is better.",
          "I see your point, but I'd look at it differently.",
          "That's a fair point — though I'd add one thing."
        ],
        "tip": "Spoken tip: disagreeing directly with 'You're wrong' can sound harsh — softeners like 'I see your point, but...' keep the tone friendly while still saying what you think.",
        "source": {
          "label": "British Council LearnEnglish — Agreeing and disagreeing",
          "url": "https://learnenglish.britishcouncil.org/free-resources/speaking/b1/agreeing-disagreeing"
        }
      },
      {
        "id": "l3c4",
        "title": "Giving Advice & Suggestions",
        "explain": "Giving advice or making a suggestion comes up constantly — helping a colleague, recommending a place to eat, or responding to a friend's problem. English has several ready-made structures for this, ranging from strong advice to gentle suggestion.\n\n'Should' gives fairly direct advice, while 'Why don't you...?' and 'How about...?' are softer, more like friendly suggestions than instructions.",
        "examples": [
          "You should really see a doctor about that.",
          "Why don't you try calling them directly?",
          "How about we meet a bit earlier next time?",
          "If I were you, I'd double-check the numbers first.",
          "Maybe you could ask your manager for more time."
        ],
        "tip": "Spoken tip: 'How about' and 'What about' are followed by a noun or an -ing verb, not the base verb — 'How about going for a walk?' not 'How about go for a walk?'.",
        "source": {
          "label": "British Council LearnEnglish — Have to, must and should for obligation and advice",
          "url": "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/have-must-should-obligation-advice"
        }
      },
      {
        "id": "l3c5",
        "title": "Common Phrasal Verbs in Speech",
        "explain": "Phrasal verbs (a verb + a small word like up, on, out) are everywhere in spoken English, even though they're rare in formal writing. Learning them in short phrases, rather than as single words, makes them easier to recall while speaking.",
        "examples": [
          "I'm really looking forward to the weekend.",
          "Don't give up — you're almost there.",
          "We get along really well with our new manager.",
          "Can you look into this and get back to me?"
        ],
        "tip": "Spoken tip: don't try to translate phrasal verbs word by word — 'give up' has nothing to do with 'give' or 'up' separately. Learn the whole chunk as one unit.",
        "source": {
          "label": "British Council LearnEnglish — Phrasal verbs",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/phrasal-verbs"
        }
      },
      {
        "id": "l3c6",
        "title": "Describing People, Places & Things",
        "explain": "Describing people, places, and things naturally requires putting adjectives in the right order and choosing vocabulary that's specific rather than vague. English adjective order generally follows: opinion → size → age → shape → colour → origin → material → purpose — though in speech we rarely stack more than two or three at once.\n\nUsing more specific, varied adjectives ('spacious' instead of just 'big', 'charming' instead of just 'nice') also makes descriptions sound noticeably more fluent.",
        "examples": [
          "It's a small, cosy café near my office.",
          "She's a tall, friendly person with a great sense of humour.",
          "That's a beautiful old wooden table.",
          "The city is busy, but it has a lot of green parks too."
        ],
        "tip": "Spoken tip: when in doubt about adjective order, opinion words (nice, beautiful, interesting) usually come before more factual ones (size, colour, age) — 'a nice small room', not 'a small nice room'.",
        "source": {
          "label": "British Council LearnEnglish — Adjective order",
          "url": "https://learnenglish.britishcouncil.org/comment/166989"
        }
      },
      {
        "id": "l3c7",
        "title": "Making Comparisons",
        "explain": "Comparisons let you describe differences clearly and are used constantly in daily speech — comparing prices, people, places, and choices.",
        "examples": [
          "This one is cheaper than that one.",
          "She's more confident than she used to be.",
          "It's the best option we've seen so far.",
          "This is just as good as the other one."
        ],
        "tip": "Spoken tip: for short adjectives add '-er/-est' (cheap → cheaper → cheapest); for longer ones use 'more or most' (confident → more confident → most confident).",
        "source": {
          "label": "British Council LearnEnglish — Comparative and superlative adjectives",
          "url": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparative-superlative-adjectives"
        }
      },
      {
        "id": "l3c8",
        "title": "Talking About Past Habits (used to or would)",
        "explain": "When describing something that used to happen regularly but doesn't anymore, English has two special structures beyond the simple past: 'used to' and 'would'. Both describe repeated past actions, but only 'used to' can describe past states (things that were simply true, not actions) — 'would' can't be used for those.\n\n'I used to live in Delhi' and 'I would live in Delhi' are NOT interchangeable — only the first is correct, because 'live' here describes a state, not a repeated action.",
        "examples": [
          "We used to go to the beach every summer. (repeated action — 'would' also works here)",
          "I used to be much shyer when I was younger. (a past state — only 'used to' works)",
          "She would always bring snacks to class. (repeated action, storytelling tone)",
          "Did you use to play an instrument? (question form)"
        ],
        "tip": "Spoken tip: 'would' for past habits tends to appear when telling a story or reminiscing, often after 'used to' has already set the scene — 'I used to visit my grandmother every summer. We would sit on the porch for hours.'",
        "source": {
          "label": "British Council LearnEnglish — Past habits: 'used to', 'would' and the past simple",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-habits-used-to-would-past-simple"
        }
      },
      {
        "id": "l3c9",
        "title": "Expressing Certainty & Uncertainty",
        "explain": "Beyond simple modal verbs, English has a rich set of phrases for signalling exactly how confident you are about something — from total certainty to genuine doubt. Adverbs like 'definitely', 'probably', 'possibly', and 'maybe' sit on a sliding scale, and phrases like 'I'm sure', 'I doubt it', and 'I have no idea' let you be explicit about your confidence level.\n\nBeing able to hedge appropriately (rather than sounding either falsely certain or constantly vague) is a mark of a more advanced, natural speaker.",
        "examples": [
          "I'm sure she'll say yes. (high certainty)",
          "It'll probably rain later. (fairly confident)",
          "It might possibly work, but I wouldn't bet on it. (low confidence)",
          "I have no idea what time it starts. (no certainty at all)"
        ],
        "tip": "Spoken tip: 'I doubt it' means you think something probably won't happen — it's stronger than 'I'm not sure', so save it for when you're genuinely leaning towards 'no'.",
        "source": {
          "label": "British Council LearnEnglish — The future: degrees of certainty",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-degrees-certainty"
        }
      },
      {
        "id": "l3c10",
        "title": "Sequencing & Explaining a Process",
        "explain": "When explaining how to do something, or telling a story in order, sequencing words act like signposts that help the listener follow along without getting lost. 'First', 'then', 'after that', 'next', and 'finally' are the core set — simple, but genuinely effective at making spoken explanations easier to follow.\n\nThis matters more in speech than in writing, because listeners can't re-read a sentence if they lose the thread — clear sequencing does a lot of the work that punctuation does on the page.",
        "examples": [
          "First, turn on the machine. Then, add the water. After that, press start.",
          "So first we discussed the budget, then we moved on to the timeline, and finally we agreed on next steps.",
          "I woke up late, so first I called the office, and then I rushed to get ready.",
          "Next, you'll need to sign here — and that's it, you're all done."
        ],
        "tip": "Spoken tip: even just three sequencing words — first, then, finally — instantly make a spoken explanation easier to follow, even without any other changes to what you're saying.",
        "source": {
          "label": "British Council LearnEnglish — Tell a story or personal anecdote",
          "url": "https://learnenglishteens.britishcouncil.org/exams/speaking-exams/tell-story-or-personal-anecdote"
        }
      },
      {
        "id": "l3c11",
        "title": "Cause & Effect: Explaining Reasons and Results",
        "explain": "Explaining why something happened, and what resulted from it, is central to giving clear, connected explanations rather than just a list of facts. 'Because' and 'since' introduce a reason; 'so', 'as a result', and 'therefore' introduce the result of that reason — and mixing up which side of the sentence each belongs on is a common mistake.\n\n'Because' comes directly before the reason itself ('I was late because I missed the bus'), while 'so' comes directly before the result ('I missed the bus, so I was late') — the same two facts, connected from opposite directions.",
        "examples": [
          "I was late because I missed the bus.",
          "I missed the bus, so I was late.",
          "The flight was cancelled due to the storm.",
          "Sales dropped this quarter; as a result, we're reviewing the budget."
        ],
        "tip": "Spoken tip: 'so' is the natural, everyday choice for showing a result in speech — 'therefore' and 'consequently' are correct too, but sound noticeably more formal, more suited to presentations or reports.",
        "source": {
          "label": "British Council LearnEnglish Teens — Linking words: cause and effect",
          "url": "https://learnenglishteens.britishcouncil.org/grammar/linking-words-cause-and-effect/term"
        }
      },
      {
        "id": "l3c12",
        "title": "Relative Clauses for Fluent Description (who, which, that)",
        "explain": "Relative clauses let you add extra information to a noun within the same sentence, instead of breaking it into two short, choppy ones — turning 'I have a colleague. She speaks four languages.' into the smoother 'I have a colleague who speaks four languages.' 'Who' is for people, 'which' is for things, and 'that' can replace either in everyday speech.\n\nThis single structure is one of the fastest ways to sound more fluent, because it lets you pack more detail into a sentence naturally, the way native speakers do without even thinking about it.",
        "examples": [
          "That's the restaurant that we talked about last week.",
          "She's the colleague who helped me with the report.",
          "I bought a phone which has a great camera.",
          "This is the book that everyone's been talking about."
        ],
        "tip": "Spoken tip: in casual speech, 'that' is often used for both people and things, and the relative pronoun can even be dropped entirely when it's not the subject — 'the book I read' works just as well as 'the book that I read'.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l3c13",
        "title": "First Conditional for Real Possibilities",
        "explain": "The first conditional, if plus present simple, followed by will plus base verb, is used to talk about realistic future situations and their likely results — things the speaker genuinely believes could happen. It's one of the most commonly used conditional structures in everyday speech, for planning, warning, and making simple predictions.\n\nThe order of the two clauses can be switched without changing the meaning — 'If it rains, we'll stay in' means exactly the same as 'We'll stay in if it rains' — only the comma placement changes.",
        "examples": [
          "If it rains tomorrow, we'll postpone the picnic.",
          "I'll call you if anything changes.",
          "If you don't leave now, you'll miss your train.",
          "She'll be upset if we forget her birthday."
        ],
        "tip": "Spoken tip: 'unless' can replace 'if not' in first conditionals — 'Unless you hurry, you'll be late' means the same as 'If you don't hurry, you'll be late', and sounds more natural in speech.",
        "source": {
          "label": "British Council LearnEnglish — Conditionals: zero, first and second",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second"
        }
      },
      {
        "id": "l3c14",
        "title": "Second Conditional for Imagined Situations",
        "explain": "The second conditional, if plus past simple, followed by would plus base verb, describes imaginary, unlikely, or purely hypothetical situations, not real plans, but 'what if' scenarios. Using the past tense here doesn't refer to the past at all; it signals distance from reality, making the situation feel less likely or purely imaginary.\n\nThis is the structure behind 'If I were you...' — using 'were' for all subjects, even 'I' and 'he or she', is a small grammatical quirk worth remembering.",
        "examples": [
          "If I won the lottery, I'd travel the world.",
          "If I were you, I'd take the job offer.",
          "What would you do if you had more free time?",
          "If she spoke French, she'd apply for that role."
        ],
        "tip": "Spoken tip: the difference between 'If I get the job, I'll celebrate', which is realistic, and 'If I got the job, I'd celebrate', which is more hypothetical, is subtle but genuinely changes how confident you sound.",
        "source": {
          "label": "British Council LearnEnglish — Conditionals: zero, first and second",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second"
        }
      },
      {
        "id": "l3c15",
        "title": "Present Perfect Continuous (I've Been Doing)",
        "explain": "The present perfect continuous, have or has plus been plus verb-ing, emphasises the duration of an activity that started in the past and continues, or has just stopped, now — with the focus on the ongoing action itself, not just the result. 'I've been waiting for an hour' highlights the waiting itself; 'I've waited an hour' focuses more on the completed fact.\n\nThis structure is especially natural with 'for' and 'since' to talk about how long something has been happening: 'I've been learning English for two years.'",
        "examples": [
          "I've been working on this report all morning.",
          "How long have you been living here?",
          "She's been feeling a bit tired lately.",
          "We've been waiting for the bus for twenty minutes."
        ],
        "tip": "Spoken tip: this structure often explains a visible result in the present — 'I've been running', explaining why you're out of breath right now — connecting a past activity directly to how things look or feel in this moment.",
        "source": {
          "label": "British Council LearnEnglish — Present perfect simple and continuous",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-simple-continuous"
        }
      },
      {
        "id": "l3c16",
        "title": "Wishes & Regrets (I wish / If only)",
        "explain": "'I wish' and 'If only' both express a desire for something to be different from reality — 'If only' is simply a stronger, more emotional version of 'I wish'. The tense that follows depends on the timing of the wish: past simple for a present situation you'd like to change, and past perfect for a regret about something that already happened.\n\n'I wish I spoke French', a present regret using past simple, is different from 'I wish I had studied French at school', a past regret using past perfect — the second describes something that's now too late to change.",
        "examples": [
          "I wish I had more free time these days.",
          "If only I'd left the house five minutes earlier.",
          "I wish you didn't have to travel so much for work.",
          "If only we'd booked the tickets sooner."
        ],
        "tip": "Spoken tip: after 'I wish', the verb 'be' is technically 'were' for every subject in careful English, as in 'I wish I were taller', though 'was' is extremely common in casual speech too.",
        "source": {
          "label": "British Council LearnEnglish — Wishes: 'wish' and 'if only'",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/wishes-wish-if-only"
        }
      },
      {
        "id": "l3c17",
        "title": "Expressing Preferences (I'd rather / I'd prefer)",
        "explain": "Beyond simple 'like' and 'love', English has dedicated structures for stating a preference between options. 'I'd prefer' plus a noun or 'to' plus a verb, and 'I'd rather' plus a base verb, both express a preference, but they take different grammar afterwards — 'I'd prefer to leave early' but 'I'd rather leave early', with no 'to' after 'rather'.\n\nTo compare two specific options, 'I'd rather X than Y' is the natural pattern — 'I'd rather walk than take the bus.'",
        "examples": [
          "I'd prefer to stay in tonight, if that's okay.",
          "I'd rather walk than take the bus.",
          "Would you prefer tea or coffee?",
          "I'd rather not talk about it right now."
        ],
        "tip": "Spoken tip: 'I'd rather not' is a soft, polite way to decline something without a lengthy explanation — a useful, very natural phrase on its own.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l3c18",
        "title": "Talking About Past Ability (could / was able to)",
        "explain": "For general abilities in the past — things you could do over a period of time — 'could' and 'couldn't' are the natural choice: 'I could swim by the time I was five.' For a specific achievement on one particular occasion, 'was' or 'were able to', or 'managed to', is more accurate — 'was able to' emphasises success under some kind of difficulty or effort.\n\nThis distinction rarely matters in the negative — 'couldn't' works for both general and specific past inability without any issue.",
        "examples": [
          "My grandmother could speak four languages.",
          "We were able to get the last two tickets.",
          "I couldn't find my keys this morning.",
          "She managed to fix the printer just before the meeting."
        ],
        "tip": "Spoken tip: 'managed to' often implies the task was genuinely difficult — 'I managed to finish on time' suggests it was a close call, not just a routine success.",
        "source": {
          "label": "British Council LearnEnglish — Past ability",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-ability"
        }
      },
      {
        "id": "l3c19",
        "title": "Question Tags",
        "explain": "Question tags, the short 'isn't it?', 'don't you?', 'can't we?' added to the end of a statement, turn it into a question, usually to check something or invite agreement. The tag uses the opposite polarity of the main sentence: a positive statement gets a negative tag, as in 'It's cold today, isn't it?', and a negative statement gets a positive tag, as in 'You don't smoke, do you?'.\n\nThe auxiliary verb in the tag must match the one in the main sentence — 'is' pairs with 'isn't', 'do' pairs with 'don't', and so on.",
        "examples": [
          "You're coming to the party, aren't you?",
          "She doesn't live here anymore, does she?",
          "We've met before, haven't we?",
          "It's a lovely day, isn't it?"
        ],
        "tip": "Spoken tip: the intonation on the tag changes its meaning — a rising tone genuinely asks a question, while a falling tone just invites agreement, almost like a friendly comment rather than a real question.",
        "source": {
          "label": "British Council LearnEnglish — Question tags",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/question-tags"
        }
      },
      {
        "id": "l3c20",
        "title": "Narrating with Past Perfect",
        "explain": "When telling a story with more than one past event, the past perfect, had plus past participle, shows which event happened first, earlier than the other past events in the story. Without it, listeners have to guess the order from context alone; with it, the sequence becomes completely clear.\n\n'When I arrived, the meeting had already started' makes it obvious the meeting began before you arrived — compare this to 'When I arrived, the meeting started', which suggests your arrival triggered the start.",
        "examples": [
          "By the time we got to the cinema, the film had already begun.",
          "She realised she'd forgotten her passport at the airport.",
          "I'd never seen snow before that winter.",
          "He was tired because he'd been travelling all day."
        ],
        "tip": "Spoken tip: the past perfect is especially useful for explaining a reason behind a past situation — 'I was late because I'd missed my train' clearly separates the two events in time.",
        "source": {
          "label": "British Council LearnEnglish — Past perfect",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/past-perfect"
        }
      },
      {
        "id": "l3c21",
        "title": "Talking About Trends & Change Over Time",
        "explain": "Describing how something is changing over time — improving, worsening, becoming more common — comes up often in both everyday and professional conversation. 'Get + comparative adjective' is a simple, very common pattern: 'It's getting colder', 'Prices are getting higher'. 'Increasingly' and 'tend to' add more nuance for describing gradual shifts or general patterns.\n\nThese structures are especially useful for describing statistics, habits, or social changes without needing complex grammar.",
        "examples": [
          "The weather's been getting warmer earlier each year.",
          "More people are increasingly working from home.",
          "Prices tend to rise around the holiday season.",
          "Things have gradually gotten better since the change."
        ],
        "tip": "Spoken tip: 'tend to' is a soft, natural way to describe a general pattern without sounding like an absolute rule — 'Meetings tend to run long' feels more accurate than 'Meetings are always long.'",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l3c22",
        "title": "Giving Balanced Arguments",
        "explain": "Presenting both sides of an issue fairly, rather than only your own opinion, is a genuinely useful fluency skill — in debates, discussions, and even everyday decision-making conversations. 'On one hand... on the other hand...' is the classic structure for this, clearly signalling a shift from one perspective to a contrasting one.\n\n'Having said that' and 'that said' work similarly, introducing a counterpoint partway through, without needing the full 'on one hand' setup.",
        "examples": [
          "On one hand, working from home saves commuting time. On the other hand, it can feel isolating.",
          "The plan is cheaper, having said that, it will take longer to deliver.",
          "There are pros and cons to both options.",
          "That said, I still think it's worth trying."
        ],
        "tip": "Spoken tip: you don't always need to use both halves of 'on one hand... on the other hand...' — native speakers often just say 'on the other hand' alone, introducing a single contrasting point.",
        "source": {
          "label": "British Council LearnEnglish — Contrasting ideas: although, despite and others",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/contrasting-ideas-although-despite-others"
        }
      },
      {
        "id": "l3c23",
        "title": "Describing the Cause of a Problem",
        "explain": "Troubleshooting language — describing what might be causing a problem — relies on softer, hedged phrases rather than firm statements, since the cause often isn't fully certain. 'It seems to be...', 'It might be due to...', and 'It could be a problem with...' all describe a likely cause without overstating your certainty.\n\nThis kind of language is especially common in technical support conversations, but works just as well for everyday problems, like a delayed delivery or a malfunctioning appliance.",
        "examples": [
          "It seems to be a connection issue on our end.",
          "It might be due to the recent update.",
          "There could be a problem with the wiring.",
          "It looks like the delay is caused by the weather."
        ],
        "tip": "Spoken tip: 'It looks like...' and 'It seems like...' are softer, more natural alternatives to 'I think', especially useful when describing evidence you can see rather than a personal opinion.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l3c24",
        "title": "Making Polite Refusals",
        "explain": "Turning something down without causing offence relies on a similar pattern to declining an invitation: acknowledge the request, give a brief, polite reason or softener, and avoid a flat 'no'. 'I'm afraid I can't...' and 'I'd rather not, if that's okay' both soften a refusal considerably compared with a bare rejection.\n\nOffering an alternative, where possible, also softens a refusal further — showing you're not simply shutting the conversation down.",
        "examples": [
          "I'm afraid I can't make it on Thursday.",
          "I'd rather not, if that's okay with you.",
          "I don't think that'll work for me, unfortunately.",
          "I can't help with that today, but I could look into it tomorrow."
        ],
        "tip": "Spoken tip: 'I'm afraid...' doesn't literally mean fear here — it's a common, gentle way to introduce disappointing news or a refusal, softening whatever comes next.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      }
    ],
    "quiz": [
      {
        "q": "Which sentence describes an already-decided plan?",
        "opts": [
          "I think it will rain.",
          "I'm going to visit my parents next week.",
          "I'll answer that.",
          "It might rain."
        ],
        "a": 1,
        "hint": "One structure specifically signals a plan made before the moment of speaking.",
        "explain": "'Going to' describes a plan that's already been decided before the moment of speaking — here, visiting parents next week. 'Will' is more for quick decisions or predictions made in the moment."
      },
      {
        "q": "Which sentence expresses strong necessity or obligation?",
        "opts": [
          "I might go to the gym.",
          "I could go to the gym.",
          "I have to go to the gym.",
          "I would go to the gym."
        ],
        "a": 2,
        "hint": "This modal is used constantly for everyday obligations, more than 'must'.",
        "explain": "'Have to' expresses necessity or obligation. 'Might' and 'could' show possibility, and 'would' is used for hypotheticals or polite offers, not obligation."
      },
      {
        "q": "Which is a softer way to disagree?",
        "opts": [
          "You're wrong.",
          "That's not true at all.",
          "I see your point, but I'd look at it differently.",
          "No, that's incorrect."
        ],
        "a": 2,
        "hint": "Look for the option that acknowledges the other person's view first.",
        "explain": "'I see your point, but I'd look at it differently' acknowledges the other person's view before disagreeing — this softer structure keeps disagreement polite and constructive."
      },
      {
        "q": "Which is a gentle suggestion rather than a command?",
        "opts": [
          "Do this now.",
          "Why don't you try calling them directly?",
          "You must call them.",
          "Call them immediately."
        ],
        "a": 1,
        "hint": "This phrase invites the other person, rather than instructing them.",
        "explain": "'Why don't you...?' is a soft, friendly way to suggest an action, rather than instructing or commanding someone directly."
      },
      {
        "q": "What does 'give up' mean?",
        "opts": [
          "To donate something",
          "To stop trying",
          "To hand over an object",
          "To celebrate"
        ],
        "a": 1,
        "hint": "Think about someone who stops trying partway through a task.",
        "explain": "'Give up' is a phrasal verb meaning to stop trying or to quit — its meaning can't be guessed from 'give' and 'up' separately, so it's best learned as one chunk."
      },
      {
        "q": "Which sentence uses adjective order naturally?",
        "opts": [
          "A wooden beautiful old table.",
          "A beautiful old wooden table.",
          "An old wooden beautiful table.",
          "A table beautiful old wooden."
        ],
        "a": 1,
        "hint": "Opinion words usually come before more factual ones like age or material.",
        "explain": "English typically orders adjectives as opinion → age → material: 'beautiful' (opinion), 'old' (age), 'wooden' (material) — 'a beautiful old wooden table'."
      },
      {
        "q": "Choose the correct comparative.",
        "opts": [
          "This is more cheap.",
          "This is cheaper.",
          "This is cheap-er than.",
          "This is most cheap."
        ],
        "a": 1,
        "hint": "Short adjectives usually just add one small ending, not an extra word.",
        "explain": "For short adjectives like 'cheap', we add '-er' to form the comparative: 'cheaper'. 'More cheap' incorrectly mixes both comparative forms together."
      },
      {
        "q": "Which sentence describes a past STATE (not an action)?",
        "opts": [
          "We used to go skiing every winter.",
          "I used to be much shyer.",
          "She would always bring snacks.",
          "They used to play football on Sundays."
        ],
        "a": 1,
        "hint": "Only one structure here can describe something that was simply true, not a repeated action.",
        "explain": "'Used to be shy' describes a state, not a repeated action — only 'used to' can be used for past states; 'would' cannot."
      },
      {
        "q": "Which phrase shows the LEAST certainty?",
        "opts": [
          "I'm sure she'll come.",
          "She'll definitely come.",
          "She'll probably come.",
          "She might possibly come."
        ],
        "a": 3,
        "hint": "Look for the option that stacks two uncertain words together.",
        "explain": "'Might possibly' stacks two markers of low confidence together, making it the weakest, most uncertain option of the four."
      },
      {
        "q": "Which word is a sequencing word for explaining a process?",
        "opts": [
          "however",
          "first",
          "although",
          "despite"
        ],
        "a": 1,
        "hint": "This word shows order, not contrast.",
        "explain": "'First' is a sequencing word that shows order — 'however', 'although', and 'despite' show contrast, not sequence."
      },
      {
        "q": "Which sentence correctly uses 'so' to show a result?",
        "opts": [
          "So I missed the bus, I was late.",
          "I was late so I missed the bus.",
          "I missed the bus, so I was late.",
          "I missed so the bus, I was late."
        ],
        "a": 2,
        "hint": "'So' comes directly before the result, not the reason.",
        "explain": "'So' introduces the result of what came before — 'I missed the bus, so I was late' correctly places the reason first and the result after 'so'."
      },
      {
        "q": "Which sentence uses a relative clause?",
        "opts": [
          "I have a colleague. She speaks four languages.",
          "I have a colleague who speaks four languages.",
          "I have a colleague, speaks four languages.",
          "A colleague of mine, four languages."
        ],
        "a": 1,
        "hint": "Look for the sentence that joins the two ideas together using 'who'.",
        "explain": "'I have a colleague who speaks four languages' uses a relative clause ('who speaks four languages') to add detail about the colleague within one smooth sentence."
      },
      {
        "q": "Which sentence is a spontaneous decision, not a plan?",
        "opts": [
          "I'm going to call her tomorrow.",
          "I'll call her now.",
          "I'm calling her at 5pm.",
          "I call her tomorrow."
        ],
        "a": 1,
        "hint": "Look for the decision made at the moment of speaking.",
        "explain": "'I'll call her now' uses 'will' for a decision made right at the moment of speaking — spontaneous, not pre-planned."
      },
      {
        "q": "Which modal expresses the weakest possibility?",
        "opts": [
          "will",
          "must",
          "might",
          "should"
        ],
        "a": 2,
        "hint": "This modal shows something is possible but far from certain.",
        "explain": "'Might' expresses a weak possibility — much less certain than 'will' (near-certainty) or 'must' (strong deduction)."
      },
      {
        "q": "Which phrase correctly introduces an opinion?",
        "opts": [
          "I opinion that...",
          "In my opinion, ...",
          "My opinion say...",
          "Opinion of mine...."
        ],
        "a": 1,
        "hint": "This is a fixed phrase — 'in my ___, ...'.",
        "explain": "'In my opinion, ...' is the standard, fixed phrase for introducing a personal opinion in English."
      },
      {
        "q": "Which is the correct structure for advice with 'should'?",
        "opts": [
          "You should to rest.",
          "You should resting.",
          "You should rest.",
          "You should rested."
        ],
        "a": 2,
        "hint": "Modal verbs are followed directly by the base verb.",
        "explain": "'Should' is a modal verb, followed directly by the base verb with no 'to' — 'You should rest.'"
      },
      {
        "q": "What does 'look into' mean?",
        "opts": [
          "To stare at something",
          "To investigate something",
          "To look upward",
          "To ignore something"
        ],
        "a": 1,
        "hint": "Think about what you'd do if asked to check a problem more carefully.",
        "explain": "'Look into' means to investigate or examine something more closely — not literally to look inside anything."
      },
      {
        "q": "Choose the correct sentence.",
        "opts": [
          "This is as good than that.",
          "This is as good as that.",
          "This is so good as that.",
          "This is like good as that."
        ],
        "a": 1,
        "hint": "This structure for equal comparison uses the same word twice.",
        "explain": "'As...as' is used to show two things are equal — 'as good as', not 'as good than'."
      },
      {
        "q": "Choose the correct negative of 'used to'.",
        "opts": [
          "I usedn't to smoke.",
          "I didn't used to smoke.",
          "I didn't use to smoke.",
          "I not used to smoke."
        ],
        "a": 2,
        "hint": "'Did' takes the past tense, so 'used' returns to its base form.",
        "explain": "The negative of 'used to' is 'didn't use to' — once 'did' carries the past tense, 'use' returns to its base form (no -d)."
      },
      {
        "q": "Which sentence correctly uses 'due to'?",
        "opts": [
          "The match was cancelled due to it rained.",
          "The match was cancelled due to the rain.",
          "The match was cancelled due the rain.",
          "The match was due to cancelled the rain."
        ],
        "a": 1,
        "hint": "'Due to' is followed by a noun phrase, not a full clause with a verb.",
        "explain": "'Due to' is followed by a noun phrase ('the rain'), not a full clause with a subject and verb — 'because' would be used for that instead."
      },
      {
        "q": "Which sentence describes a gradual change over time?",
        "opts": [
          "It's getting warmer each year.",
          "It is warm today.",
          "It was warm yesterday.",
          "It will be warm tomorrow."
        ],
        "a": 0,
        "hint": "Look for the structure 'get + comparative adjective'.",
        "explain": "'Getting warmer' uses 'get + comparative adjective' to describe a gradual change over time, not a single moment."
      },
      {
        "q": "Which phrase introduces a contrasting viewpoint?",
        "opts": [
          "As a result",
          "On the other hand",
          "First of all",
          "In addition"
        ],
        "a": 1,
        "hint": "This phrase is the second half of a classic two-sided argument structure.",
        "explain": "'On the other hand' introduces a contrasting perspective, often after 'on one hand' has introduced the first viewpoint."
      },
      {
        "q": "Which sentence hedges appropriately about an uncertain cause?",
        "opts": [
          "It is definitely the wiring.",
          "It might be due to the wiring.",
          "The wiring is the cause, no doubt.",
          "It's 100% the wiring."
        ],
        "a": 1,
        "hint": "Look for the option that shows this is a possible cause, not a certainty.",
        "explain": "'It might be due to...' softly suggests a possible cause without overstating certainty — appropriate when the cause isn't fully confirmed."
      },
      {
        "q": "Which is a polite way to refuse a request?",
        "opts": [
          "No.",
          "Never.",
          "I'd rather not, if that's okay.",
          "Absolutely not."
        ],
        "a": 2,
        "hint": "Look for the option that softens the refusal politely.",
        "explain": "'I'd rather not, if that's okay' softens the refusal politely — the other options are blunt or overly firm."
      }
    ],
    "days": [
      {
        "day": 1,
        "title": "Future, Modals & Opinions",
        "conceptIds": [
          "l3c1",
          "l3c2",
          "l3c3",
          "l3c4"
        ]
      },
      {
        "day": 2,
        "title": "Phrasal Verbs & Comparisons",
        "conceptIds": [
          "l3c5",
          "l3c6",
          "l3c7",
          "l3c8"
        ]
      },
      {
        "day": 3,
        "title": "Certainty, Sequence & Cause",
        "conceptIds": [
          "l3c9",
          "l3c10",
          "l3c11",
          "l3c12"
        ]
      },
      {
        "day": 4,
        "title": "Conditionals & Perfect Continuous",
        "conceptIds": [
          "l3c13",
          "l3c14",
          "l3c15",
          "l3c16"
        ]
      },
      {
        "day": 5,
        "title": "Wishes, Preference & Past Ability",
        "conceptIds": [
          "l3c17",
          "l3c18",
          "l3c19",
          "l3c20"
        ]
      },
      {
        "day": 6,
        "title": "Trends, Arguments & Polite Refusals",
        "conceptIds": [
          "l3c21",
          "l3c22",
          "l3c23",
          "l3c24"
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Confident & Advanced Speaking",
    "desc": "Speak with more precision: hypothetical situations, professional English, reported speech, natural idioms, intonation, and telling a connected story.",
    "concepts": [
      {
        "id": "l4c1",
        "title": "Conditional Sentences for Hypotheticals",
        "explain": "Conditionals let you talk about 'what if' situations. The two most useful ones in speech are the real condition (likely situations) and the unreal condition (imagined or unlikely situations).",
        "examples": [
          "If it rains, we'll stay indoors. (real or likely condition)",
          "If I were you, I'd take the offer. (unreal or hypothetical advice)",
          "If I had more time, I would learn another language.",
          "If you don't leave now, you'll miss the train."
        ],
        "tip": "Spoken tip: 'If I were you...' is one of the most common ways to give advice in spoken English — notice it uses 'were' even with 'I', which feels unusual but is correct here.",
        "source": {
          "label": "British Council LearnEnglish — Conditionals: zero, first and second",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/conditionals-1"
        }
      },
      {
        "id": "l4c2",
        "title": "Passive Voice in Spoken English",
        "explain": "The passive voice (is or was + past participle) shifts focus from who did something to what happened, or to the thing that was affected. It's used constantly in spoken English when the doer is unknown, unimportant, or obvious from context.\n\nIn everyday conversation, passive voice is often used to sound less accusatory ('The report wasn't finished on time' instead of pointing at exactly who didn't finish it) or when describing processes and general situations rather than specific people's actions.",
        "examples": [
          "The meeting has been rescheduled to Friday.",
          "My phone was stolen last week.",
          "This decision was made by senior management.",
          "English is spoken in many countries around the world."
        ],
        "tip": "Spoken tip: overusing passive voice can make speech sound distant or evasive — use it when it genuinely fits (the doer is unknown or unimportant), but keep most everyday speech active for a more natural, direct feel.",
        "source": {
          "label": "British Council LearnEnglish — Passives",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/passives"
        }
      },
      {
        "id": "l4c3",
        "title": "Professional & Formal English",
        "explain": "Meetings, presentations, and professional conversations call for a slightly more formal register — less slang, clearer structure, and more cushioning language.",
        "examples": [
          "I'd like to walk you through the key numbers.",
          "Could we circle back to this point later?",
          "I take your point, but I'd like to add some context.",
          "Let's touch base again once the report is ready."
        ],
        "tip": "Spoken tip: 'circle back' and 'touch base' are common workplace phrases meaning to return to a topic or reconnect later — very useful in meetings.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c4",
        "title": "Reported Speech in Conversation",
        "explain": "Reported speech lets you tell someone what another person said, without quoting them word for word. In casual spoken English, verb tenses often shift back one step into the past ('I am tired' becomes 'She said she was tired'), though in fast conversation, especially about something still true, people often keep the original tense too.\n\nCommon reporting verbs include 'say', 'tell', and 'ask' — note that 'tell' always needs an object (tell someone), while 'say' usually doesn't (say something).",
        "examples": [
          "She said (that) she was running late.",
          "He told me he'd call back later.",
          "They asked if we were coming to the party.",
          "My manager said the deadline is next Friday. (kept present tense — still true now)"
        ],
        "tip": "Spoken tip: in relaxed conversation, native speakers often drop the word 'that' after 'said' — 'She said she was tired' is just as natural as 'She said that she was tired'.",
        "source": {
          "label": "British Council LearnEnglish — Reported speech: statements",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements"
        }
      },
      {
        "id": "l4c5",
        "title": "Idioms & Natural Expressions",
        "explain": "Idioms are fixed expressions whose meaning isn't obvious from the individual words. Using a few naturally, in the right situation, makes speech sound noticeably more fluent.",
        "examples": [
          "It's not a big deal — don't worry about it.",
          "Let's just play it by ear and decide later.",
          "That project is a piece of cake for her.",
          "I'm on the fence about which one to choose."
        ],
        "tip": "Spoken tip: idioms work best in casual conversation. In a formal presentation, it's usually safer to use plainer language instead.",
        "source": {
          "label": "British Council LearnEnglish — Idioms and expressions",
          "url": "https://learnenglish.britishcouncil.org/learning-hub/topics/idioms-expressions"
        }
      },
      {
        "id": "l4c6",
        "title": "Emphasis & Natural Intonation Patterns",
        "explain": "Beyond grammar and vocabulary, how you say something changes what it means. Stressing a particular word in a sentence can shift emphasis entirely — the same words can mean several different things depending on which word gets the stress.\n\nRising intonation at the end of a statement can turn it into a question or express uncertainty or surprise, even without changing the words at all. Falling intonation signals confidence and completion. Native listeners rely heavily on these patterns, sometimes more than on exact word choice, to understand tone and intent.",
        "examples": [
          "I didn't say SHE took it. (someone else said it)",
          "I didn't say she TOOK it. (maybe she just borrowed it)",
          "You're coming tonight? (rising tone — a question, checking)",
          "You're coming tonight. (falling tone — a confident statement)"
        ],
        "tip": "Spoken tip: try saying the same sentence while stressing a different word each time — notice how the meaning shifts. This is one of the most powerful, and most overlooked, tools for sounding fluent and natural.",
        "source": {
          "label": "BBC Learning English — The Pronunciation Lounge",
          "url": "https://www.bbc.co.uk/learningenglish/features/the_pronunciation_lounge"
        }
      },
      {
        "id": "l4c7",
        "title": "Storytelling & Linking Ideas",
        "explain": "Longer spoken stories or explanations flow better with linking words that show relationships between ideas — contrast, result, and sequence — instead of a string of short, disconnected sentences.",
        "examples": [
          "I wanted to leave early; however, the meeting ran long.",
          "The flight was delayed. As a result, we missed the connection.",
          "Although it was raining, we still went for a walk.",
          "First we discussed the budget, and then we moved to the timeline."
        ],
        "tip": "Spoken tip: in speech, 'however' and 'although' are often replaced by simpler 'but' and 'even though' — both are correct, but the simpler versions sound more natural in casual talk.",
        "source": {
          "label": "British Council LearnEnglish — Contrasting ideas: although, despite and others",
          "url": "https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/contrasting-ideas-although-despite-others"
        }
      },
      {
        "id": "l4c8",
        "title": "Making Polite Complaints",
        "explain": "Complaining effectively in English, without sounding aggressive, relies on a fairly fixed structure: a polite opener, a clear statement of the problem, and a specific request for what you'd like to happen next. British English in particular tends to soften complaints heavily with phrases like 'I'm afraid' and 'I'm not entirely happy with...' even when the speaker is quite firm underneath.\n\nStaying calm and specific gets better results than raising your voice or being vague — 'This is broken' invites a shrug, while 'This isn't working, and I'd like a replacement or a refund' gives the other person something concrete to act on.",
        "examples": [
          "Excuse me, I'm afraid there's a problem with my order.",
          "I'm not entirely happy with the service — could someone look into it?",
          "This isn't quite what I ordered — could I get it corrected?",
          "I'd appreciate it if you could resolve this by tomorrow."
        ],
        "tip": "Spoken tip: opening with 'I'm afraid...' or 'Excuse me, but...' softens even a firm complaint and tends to get a more cooperative response than starting with the problem itself.",
        "source": {
          "label": "British Council LearnEnglish — A response to a complaint",
          "url": "https://learnenglish.britishcouncil.org/skills/writing/c1-writing/response-complaint"
        }
      },
      {
        "id": "l4c9",
        "title": "Hedging & Diplomatic Language",
        "explain": "Hedging is the skill of softening a statement so it sounds less blunt or absolute — especially useful when giving feedback, raising a concern, or disagreeing with someone senior. Words like 'sort of', 'a bit', 'somewhat', and phrases like 'I might be wrong, but...' or 'Correct me if I'm mistaken...' all lower the emotional temperature of a sentence without changing its actual meaning.\n\nOveruse can make you sound unsure of everything, so the skill is using hedges selectively, at exactly the moments where directness would land too hard.",
        "examples": [
          "This is sort of a sensitive topic, so let me put it carefully.",
          "I might be wrong, but I think there's an error in this figure.",
          "The results were somewhat disappointing this quarter.",
          "Correct me if I'm mistaken, but didn't we agree on a different date?"
        ],
        "tip": "Spoken tip: hedging works best on the difficult part of a sentence, not the whole thing — 'I think this approach is a bit risky' hedges just the criticism, while still stating your view clearly.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l4c10",
        "title": "Presenting Ideas & Persuading",
        "explain": "Presenting an idea persuasively in English usually follows a simple shape: state the point clearly, back it up with a reason or evidence, and close with what you want the listener to take away or do. Phrases like 'The main reason is...', 'What this means is...', and 'So, my recommendation would be...' act as signposts that make an argument easy to follow, even when spoken off the cuff.\n\nRepeating your key point in slightly different words near the end (rather than introducing something new) helps it stick with the listener — a technique used constantly in presentations and pitches.",
        "examples": [
          "The main reason we should do this is cost — it saves us about 20% a year.",
          "What this means in practice is fewer delays for the whole team.",
          "So, my recommendation would be to move ahead with option two.",
          "To sum up, this gets us the same result for less effort."
        ],
        "tip": "Spoken tip: 'What this means is...' is a great bridge phrase — it lets you pause, restate a point in simpler words, and keep your audience with you even if your first sentence was too complex.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c11",
        "title": "Meeting Language: Interrupting & Turn-Taking",
        "explain": "In a meeting or group discussion, jumping in without any warning can feel abrupt, even in English-speaking cultures where interrupting to add a point is fairly normal. A short signal phrase — 'Sorry to jump in...', 'Can I just add something here?' — buys you a polite entry point without derailing the conversation.\n\nIf you're the one who gets interrupted and haven't finished, it's equally normal (and not rude) to say so directly: 'Sorry, can I just finish this point?' keeps the floor without sounding defensive.",
        "examples": [
          "Sorry to jump in, but I think there's another option worth considering.",
          "Can I just add something here before we move on?",
          "Sorry, can I just finish this point? I'll come back to you.",
          "Let's park that for now and come back to it later."
        ],
        "tip": "Spoken tip: 'Let's park that' (or 'put a pin in that') is common meeting shorthand for setting a topic aside to revisit later, without ignoring it entirely.",
        "source": {
          "label": "British Council LearnEnglish — Changing a meeting time (listening)",
          "url": "https://learnenglish.britishcouncil.org/sites/podcasts/files/LearnEnglish-Listening-A2-Changing-meeting-time.pdf"
        }
      },
      {
        "id": "l4c12",
        "title": "Business Idioms & Workplace Expressions",
        "explain": "Beyond everyday idioms, the workplace has its own set of figurative expressions that show up constantly in meetings, emails, and casual office chat. 'Think outside the box' (be creative), 'get the ball rolling' (start something), and 'back to the drawing board' (start over after a failure) are all common enough that not recognising them can genuinely cause confusion in a meeting.\n\nLike all idioms, these work best used sparingly and naturally — dropping in one or two in a conversation sounds fluent; stacking several in a row can sound like you're reciting a list.",
        "examples": [
          "Let's think outside the box for this one — the usual approach isn't working.",
          "I'll get the ball rolling and send the first draft today.",
          "That plan didn't work, so it's back to the drawing board.",
          "We're all on the same page about the new deadline."
        ],
        "tip": "Spoken tip: 'on the same page' (meaning everyone agrees or understands the same thing) is one of the most common business idioms — genuinely useful to check understanding in a meeting: 'Just to make sure we're on the same page...'",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c13",
        "title": "Third Conditional: Talking About Past Regrets",
        "explain": "The third conditional, if plus past perfect, followed by would have plus past participle, talks about an imaginary change to a past event that's already finished, and as a result can never actually happen. It's the grammar of hindsight and regret: describing how things would have turned out differently, if only something had been different.\n\nThis is distinct from the second conditional, which imagines present or future alternatives — the third conditional is always firmly about the unchangeable past.",
        "examples": [
          "If I had known about the traffic, I would have left earlier.",
          "She wouldn't have missed the flight if she'd arrived on time.",
          "If we'd booked in advance, we would have saved money.",
          "I would have called you if I'd had your number."
        ],
        "tip": "Spoken tip: in fast, casual speech, 'would have' is almost always contracted to 'would've', which can sound like 'would of' when written by ear — worth knowing it's actually 'would have' underneath.",
        "source": {
          "label": "British Council LearnEnglish — Conditionals: zero, first and second",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second"
        }
      },
      {
        "id": "l4c14",
        "title": "Advanced Reported Speech: Questions & Commands",
        "explain": "Reporting a question uses normal statement word order, not question word order — a common mistake even among fairly advanced speakers. 'Where do you live?' becomes 'She asked where I lived', not 'She asked where did I live'. Yes or no questions are reported using 'if' or 'whether': 'Are you coming?' becomes 'He asked if I was coming.'\n\nReporting a command or instruction uses a completely different structure: 'tell' or 'ask' plus object plus 'to' plus base verb — 'Close the door' becomes 'She told me to close the door', with no tense shift needed at all.",
        "examples": [
          "She asked where the nearest station was.",
          "He asked if I'd finished the report.",
          "The manager told us to arrive early on Monday.",
          "I asked her whether she'd received the email."
        ],
        "tip": "Spoken tip: reported commands never use 'that' or a full clause — 'She told me that I close the door' is incorrect; it's always 'told me to close the door'.",
        "source": {
          "label": "British Council LearnEnglish — Reported speech: statements",
          "url": "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements"
        }
      },
      {
        "id": "l4c15",
        "title": "Negotiating & Reaching Agreement",
        "explain": "Negotiating in English relies on a set of phrases that let you push for what you want while still sounding cooperative rather than combative. 'Would you be open to...?' and 'What if we...?' float an idea without committing either side, while 'I can meet you halfway on...' explicitly signals compromise.\n\nClosing a negotiation cleanly matters too — 'Shall we call that a deal?' or 'So, to confirm, we've agreed that...' makes sure both sides genuinely understand what's been settled, avoiding misunderstandings later.",
        "examples": [
          "Would you be open to a slightly later deadline?",
          "What if we split the difference on the price?",
          "I can meet you halfway on this — how about Wednesday instead?",
          "So, to confirm, we've agreed on the revised timeline?"
        ],
        "tip": "Spoken tip: 'Let me think about that and get back to you' is a perfectly acceptable, professional way to avoid committing on the spot during a negotiation — you're not obligated to decide instantly.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c16",
        "title": "Giving Constructive Feedback",
        "explain": "Constructive feedback in English typically follows a soft-hard-soft pattern: something positive first, the actual concern stated clearly, and something encouraging or forward-looking at the end. Phrases like 'One thing you might consider...' or 'It would be even stronger if...' deliver criticism without it sounding like an attack.\n\nBeing vague to avoid discomfort often backfires — specific, actionable feedback, such as 'The introduction could be more concise', is more genuinely helpful than a soft but empty comment like 'It's okay, I guess.'",
        "examples": [
          "This is a strong start — one thing you might consider is tightening the introduction.",
          "It would be even more effective if you led with the main result.",
          "I really like the structure here; the only concern is the length.",
          "Have you thought about presenting the data as a chart instead?"
        ],
        "tip": "Spoken tip: framing feedback as a question, like 'Have you thought about...?', rather than a command, like 'You should...', often makes it feel more like a suggestion and less like an order.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c17",
        "title": "Discourse Markers for Formal Speech",
        "explain": "Discourse markers are words and short phrases that organise a formal talk or speech, signposting what's coming next so the audience can follow along easily. 'Firstly... secondly... finally' structures a list of points; 'That being said...' signals a shift or a slight contrast; 'To put it another way...' introduces a simpler restatement of something complex.\n\nUsed well, these markers make even a fairly dense, formal talk feel organised and easy to follow, rather than a wall of unbroken information.",
        "examples": [
          "Firstly, let's look at the current figures. Secondly, we'll discuss next steps.",
          "That being said, there are a few risks worth mentioning.",
          "To put it another way, we're spending more to save more later.",
          "Moving on, let's turn to the budget."
        ],
        "tip": "Spoken tip: 'That being said' is a particularly useful marker for gently introducing a counterpoint without sounding like you're contradicting yourself or the previous speaker.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l4c18",
        "title": "Understatement & British Politeness Conventions",
        "explain": "British English in particular has a strong culture of understatement — deliberately downplaying something rather than stating it directly, often for politeness or humour. 'Not bad' can mean genuinely very good; 'a bit of a problem' can describe something quite serious; 'I wasn't overly impressed' is a polite way of saying something was actually disappointing.\n\nRecognising understatement matters as much as using it — taking these phrases too literally is a common source of miscommunication for learners used to more direct communication styles.",
        "examples": [
          "The food was not bad at all. (often means genuinely good)",
          "We've had a bit of a problem with the server. (could be serious)",
          "I wasn't overly impressed with the service. (likely means quite disappointed)",
          "It's a bit chilly out. (could mean genuinely cold)"
        ],
        "tip": "Spoken tip: tone of voice carries a lot of the real meaning behind British understatement — the same words said flatly versus with a slight emphasis can shift from mild to clearly serious.",
        "source": {
          "label": "British Council LearnEnglish — Grammar",
          "url": "https://learnenglish.britishcouncil.org/grammar"
        }
      },
      {
        "id": "l4c19",
        "title": "Job Interview Language",
        "explain": "Job interviews in English follow fairly predictable question patterns, and having a few structured response habits ready makes a real difference under pressure. The STAR method, Situation, Task, Action, Result, is a common way to structure answers to 'Tell me about a time when...' questions, giving a clear, complete answer instead of a rambling one.\n\nEnding an interview well matters too — asking a thoughtful question of your own, like 'What does success look like in this role in the first six months?', signals genuine interest, not just politeness.",
        "examples": [
          "Could you tell me a bit about the team I'd be working with?",
          "In my previous role, I was responsible for managing client relationships.",
          "That's a great question — let me think about that for a moment.",
          "What would success look like in this role after the first few months?"
        ],
        "tip": "Spoken tip: a short pause before answering a tough question sounds far more composed than rushing into an answer — silence is completely acceptable in an interview.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c20",
        "title": "Structuring a Persuasive Talk",
        "explain": "A persuasive talk generally works best with a simple three-part shape: open with a clear statement of the problem or opportunity, build your case with two or three strong reasons, ideally backed by a number or example, and close with a specific, memorable ask, exactly what you want the audience to do or believe.\n\nRepetition of the core message, in slightly different words, at the beginning and the end of a talk is a deliberate technique — audiences remember what's said last almost as much as what's said first.",
        "examples": [
          "Today, I want to talk about a problem that's costing us time every single week.",
          "There are three reasons this matters: cost, speed, and morale.",
          "The numbers speak for themselves — a twenty percent improvement in just one quarter.",
          "So, my ask is simple: let's pilot this for one month and review the results together."
        ],
        "tip": "Spoken tip: ending with a specific, concrete ask, like 'let's pilot this for one month', is far more persuasive than a vague closing like 'so please consider this' — audiences respond better to a clear next step.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c21",
        "title": "Chairing & Facilitating a Meeting",
        "explain": "Leading a meeting relies on a small set of fixed phrases for opening, moving between agenda points, and closing — using them confidently makes the meeting feel organised, regardless of the content itself. 'Let's get started' or 'Shall we begin?' opens a meeting; 'Moving on to the next point' or 'Let's move on to...' transitions between topics.\n\nChecking for input before closing a point ('Any objections?', 'Does everyone agree?') keeps the meeting collaborative rather than one-directional.",
        "examples": [
          "Let's get started — thanks everyone for joining.",
          "Moving on to the next item on the agenda.",
          "Does anyone have any objections to this approach?",
          "I think that covers everything — shall we wrap up here?"
        ],
        "tip": "Spoken tip: 'Let's park that for now' is a polite way to postpone a point that's taking too long, without dismissing it — signalling it'll be revisited, just not right now.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c22",
        "title": "Diplomatic Disagreement in Formal Settings",
        "explain": "Disagreeing with someone more senior, or in a formal setting, calls for extra care beyond the everyday softeners covered earlier. 'I see it a little differently...' and 'With respect, I'd push back on that...' both signal genuine disagreement while staying professional and non-confrontational.\n\n'I'm not sure I fully agree, and here's why...' invites explanation rather than just flat contradiction, keeping the conversation constructive rather than combative.",
        "examples": [
          "I see it a little differently, if I can offer another view.",
          "With respect, I'd push back on that point.",
          "I'm not sure I fully agree — could I explain why?",
          "That's a fair point, though I'd frame it slightly differently."
        ],
        "tip": "Spoken tip: 'With respect...' signals that a direct disagreement is coming next, while still keeping the tone professional — it's a common opener before pushing back on a senior colleague's idea.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c23",
        "title": "Summarising & Closing a Presentation",
        "explain": "Ending a presentation well is just as important as opening it strongly — a clear summary helps the key message stick, rather than trailing off vaguely. 'To wrap up...' or 'To summarise...' signals the close is coming, and restating the single most important takeaway in one sentence gives the audience something concrete to remember.\n\nInviting questions clearly at the end ('I'll now take any questions', 'Happy to answer any questions you might have') closes the loop and hands control back to the audience.",
        "examples": [
          "To wrap up, the key takeaway is that this saves us both time and cost.",
          "To summarise, we recommend moving ahead with option two.",
          "That brings me to the end of my presentation — happy to take questions.",
          "In short, the numbers support making this change now."
        ],
        "tip": "Spoken tip: repeating your single most important point in the closing summary, in slightly different words from the opening, helps it stick far better than introducing something entirely new at the very end.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      },
      {
        "id": "l4c24",
        "title": "Networking Small Talk & Follow-Up",
        "explain": "Professional networking events call for a specific flavour of small talk — friendly, brief, and usually ending with a concrete next step. 'It was great meeting you' and 'Let's stay in touch' are standard, warm ways to close a conversation without it feeling abrupt.\n\nFollowing up afterwards matters as much as the conversation itself — 'I'll follow up by email' or 'I'll send that over to you this week' turns a pleasant chat into an actual professional connection.",
        "examples": [
          "It was great meeting you — I really enjoyed our conversation.",
          "Let's stay in touch — I'll connect with you on LinkedIn.",
          "I'll follow up by email with those details I mentioned.",
          "Thanks for your time today — I'll be in touch soon."
        ],
        "tip": "Spoken tip: 'I'll follow up by email' is a polite, professional way to end a networking conversation with a clear, low-pressure next step, rather than leaving things vague.",
        "source": {
          "label": "British Council — Useful business English phrases",
          "url": "https://www.britishcouncil.my/blog/12-useful-business-english-phrases-and-expressions-professionals"
        }
      }
    ],
    "quiz": [
      {
        "q": "Which is the unreal or hypothetical conditional?",
        "opts": [
          "If it rains, we'll stay in.",
          "If I were you, I'd take the offer.",
          "If you're free, call me.",
          "If he calls, tell him I'm out."
        ],
        "a": 1,
        "hint": "Look for the sentence imagining a different, hypothetical situation.",
        "explain": "'If I were you, I'd take the offer' is the unreal or hypothetical conditional — used to imagine a different situation and give advice, using 'were' with all subjects."
      },
      {
        "q": "Which sentence is in the passive voice?",
        "opts": [
          "Someone stole my phone.",
          "My phone was stolen.",
          "I lost my phone.",
          "My phone is missing since morning."
        ],
        "a": 1,
        "hint": "The passive voice uses a form of 'be' plus a past participle, and focuses on the thing affected.",
        "explain": "'My phone was stolen' uses was + past participle (stolen), focusing on the phone rather than who did it — that's the passive voice."
      },
      {
        "q": "'Could we circle back to this later?' means...",
        "opts": [
          "Let's return to this topic later",
          "Let's walk in a circle",
          "Let's cancel this topic",
          "Let's speed up the meeting"
        ],
        "a": 0,
        "hint": "Think of it as 'let's return to' rather than anything literal about circles.",
        "explain": "'Circle back' is a common workplace phrase meaning to return to a topic later, once there's more information or time to discuss it properly."
      },
      {
        "q": "Choose the correct reported speech for: She said, \"I am tired.\"",
        "opts": [
          "She said she is tired.",
          "She said she was tired.",
          "She said I am tired.",
          "She say she was tired."
        ],
        "a": 1,
        "hint": "In reported speech, present tense usually shifts back one step into the past.",
        "explain": "In reported speech, the present tense 'am' typically shifts back one step into the past tense 'was' — 'She said she was tired.'"
      },
      {
        "q": "'It's a piece of cake' means the task is...",
        "opts": [
          "delicious",
          "very easy",
          "related to baking",
          "very difficult"
        ],
        "a": 1,
        "hint": "This idiom has nothing to do with actual baking.",
        "explain": "'A piece of cake' is an idiom meaning something is very easy to do — it has nothing to do with actual cake."
      },
      {
        "q": "A statement said with rising intonation at the end often signals...",
        "opts": [
          "confidence and completion",
          "a question or uncertainty",
          "anger",
          "no particular meaning"
        ],
        "a": 1,
        "hint": "Think about what happens to your voice when you ask a question.",
        "explain": "Rising intonation at the end of a sentence often turns a statement into a question, or signals surprise or uncertainty — even if the words themselves don't change."
      },
      {
        "q": "Which word shows contrast between two ideas?",
        "opts": [
          "as a result",
          "and then",
          "however",
          "first"
        ],
        "a": 2,
        "hint": "This word works like a slightly more formal version of 'but'.",
        "explain": "'However' introduces a contrast with what was just said — similar to 'but', just slightly more formal. 'As a result' shows a consequence, and 'and then' or 'first' show sequence."
      },
      {
        "q": "Which is the most effective way to open a polite complaint?",
        "opts": [
          "This is broken.",
          "I'm afraid there's a problem with my order.",
          "This is unacceptable!",
          "Fix this now."
        ],
        "a": 1,
        "hint": "Look for the option that stays calm and specific rather than blunt or aggressive.",
        "explain": "'I'm afraid there's a problem...' softens the complaint while still stating it clearly — a calm, specific opener tends to get a more cooperative response than a blunt or aggressive one."
      },
      {
        "q": "Which sentence uses hedging language?",
        "opts": [
          "This is definitely wrong.",
          "I might be wrong, but I think there's an error here.",
          "You made a mistake.",
          "That's completely incorrect."
        ],
        "a": 1,
        "hint": "Hedging softens a statement — look for a phrase that adds a cushion before the opinion.",
        "explain": "'I might be wrong, but...' softens the statement, making it hedging language — the other options are direct, unhedged statements."
      },
      {
        "q": "Which phrase helps restate a point more simply while presenting?",
        "opts": [
          "As previously mentioned",
          "What this means is...",
          "On the contrary",
          "In conclusion, however"
        ],
        "a": 1,
        "hint": "This phrase acts as a bridge to rephrase something in simpler words.",
        "explain": "'What this means is...' is a bridge phrase used to restate a point in simpler words, helping the audience follow along — it's especially useful right after a more complex sentence."
      },
      {
        "q": "Which is the most polite way to interrupt in a meeting?",
        "opts": [
          "Sorry to jump in, but I think there's another option.",
          "Stop talking, it's my turn.",
          "Hey, listen to me now.",
          "I disagree, be quiet."
        ],
        "a": 0,
        "hint": "Look for a short, polite signal phrase before adding your point.",
        "explain": "'Sorry to jump in, but...' politely signals that you want to add something without abruptly cutting the other person off — the other options sound rude or aggressive."
      },
      {
        "q": "What does 'let's think outside the box' mean?",
        "opts": [
          "Let's think inside a box-shaped room.",
          "Let's be creative and try unusual ideas.",
          "Let's pack the boxes now.",
          "Let's follow the usual process exactly."
        ],
        "a": 1,
        "hint": "This idiom is about creativity, not literal boxes.",
        "explain": "'Think outside the box' means to think creatively, beyond the usual or expected approach — it has nothing to do with an actual box."
      },
      {
        "q": "Which is a zero conditional (general truth)?",
        "opts": [
          "If I were rich, I'd travel.",
          "If you heat water, it boils.",
          "If it rains, we'll stay in.",
          "If I'd known, I would have come."
        ],
        "a": 1,
        "hint": "Zero conditionals describe things that are always true, not hypothetical or future.",
        "explain": "'If you heat water, it boils' is a zero conditional — describing a general truth, using present simple in both parts."
      },
      {
        "q": "Choose the correct passive sentence with the agent included.",
        "opts": [
          "The email was sent for John.",
          "The email was sent by John.",
          "The email sent by John.",
          "The email was send by John."
        ],
        "a": 1,
        "hint": "The person who did the action is introduced with one specific preposition in the passive.",
        "explain": "'By' introduces the agent (the doer) in a passive sentence — 'was sent by John'."
      },
      {
        "q": "Which is an appropriately professional way to end an email?",
        "opts": [
          "Bye bye!",
          "Best regards,",
          "See ya!",
          "Later!"
        ],
        "a": 1,
        "hint": "Look for the option that fits a formal business tone.",
        "explain": "'Best regards,' is a standard, professional email closing — the other options are far too casual for professional correspondence."
      },
      {
        "q": "Choose the correct reported question for: 'Are you coming?'",
        "opts": [
          "She asked if I am coming.",
          "She asked if I was coming.",
          "She asked am I coming.",
          "She asked if was I coming."
        ],
        "a": 1,
        "hint": "Reported questions shift tense back and drop the question word order.",
        "explain": "Reported questions shift the tense back ('am' → 'was') and use normal statement word order, not question order — 'if I was coming'."
      },
      {
        "q": "What does 'back to the drawing board' mean?",
        "opts": [
          "Go back to school",
          "Start over after a failed attempt",
          "Draw a picture",
          "Return to the office"
        ],
        "a": 1,
        "hint": "Think about what happens after a plan doesn't work out.",
        "explain": "'Back to the drawing board' means starting over after something hasn't worked — like a plan or design that failed."
      },
      {
        "q": "How does your voice usually move through a list, until the final item?",
        "opts": [
          "Rising on each item, falling on the last",
          "Falling on every item",
          "Rising only on the last item",
          "Flat, no change at all"
        ],
        "a": 0,
        "hint": "Think about a shopping list read aloud — what happens to your voice before 'and'?",
        "explain": "In a list, intonation typically rises on each item except the last, which falls — signalling the list is complete."
      },
      {
        "q": "Which is a clear, specific complaint request?",
        "opts": [
          "Fix it.",
          "This is bad.",
          "I'd like a replacement or a refund, please.",
          "Whatever."
        ],
        "a": 2,
        "hint": "Look for the option that specifies exactly what outcome is wanted.",
        "explain": "'I'd like a replacement or a refund, please' is specific and actionable — it tells the other person exactly what you want to happen next."
      },
      {
        "q": "Which sentence uses hedging correctly?",
        "opts": [
          "This is sort of a problem.",
          "This is sort a problem.",
          "This sort of is a problem.",
          "This is a sort problem."
        ],
        "a": 0,
        "hint": "'Sort of' sits directly before the noun or adjective it softens.",
        "explain": "'This is sort of a problem' places 'sort of' correctly before the noun phrase, softening the statement naturally."
      },
      {
        "q": "Which phrase would a chairperson use to open a meeting?",
        "opts": [
          "Let's get started.",
          "The meeting is over.",
          "I refuse to begin.",
          "Nobody is here yet."
        ],
        "a": 0,
        "hint": "Look for the natural opening phrase for a meeting.",
        "explain": "'Let's get started' is a natural, standard way to open a meeting and signal that proceedings are beginning."
      },
      {
        "q": "Which phrase signals a polite but firm disagreement?",
        "opts": [
          "Whatever you say.",
          "With respect, I'd push back on that.",
          "I don't care.",
          "You're completely wrong."
        ],
        "a": 1,
        "hint": "Look for the option that stays professional while still disagreeing clearly.",
        "explain": "'With respect, I'd push back on that' signals genuine disagreement while remaining professional and non-confrontational."
      },
      {
        "q": "Which phrase signals the close of a presentation?",
        "opts": [
          "To wrap up...",
          "Let's begin with...",
          "Firstly...",
          "As I was saying earlier today...(mid-talk)"
        ],
        "a": 0,
        "hint": "Look for the phrase that specifically signals an ending is coming.",
        "explain": "'To wrap up...' clearly signals that the presentation is coming to a close, helping the audience prepare for the summary."
      },
      {
        "q": "Which is an appropriate way to end a networking conversation?",
        "opts": [
          "Goodbye forever.",
          "It was great meeting you — let's stay in touch.",
          "I have to go now, bye.",
          "This conversation is over."
        ],
        "a": 1,
        "hint": "Look for the warm, professional closing phrase.",
        "explain": "'It was great meeting you — let's stay in touch' is a warm, professional way to close a networking conversation and signal a future connection."
      }
    ],
    "days": [
      {
        "day": 1,
        "title": "Conditionals & Passive Voice",
        "conceptIds": [
          "l4c1",
          "l4c2",
          "l4c3",
          "l4c4"
        ]
      },
      {
        "day": 2,
        "title": "Idioms, Intonation & Linking",
        "conceptIds": [
          "l4c5",
          "l4c6",
          "l4c7",
          "l4c8"
        ]
      },
      {
        "day": 3,
        "title": "Complaints, Hedging & Persuading",
        "conceptIds": [
          "l4c9",
          "l4c10",
          "l4c11",
          "l4c12"
        ]
      },
      {
        "day": 4,
        "title": "Advanced Conditionals & Reported Speech",
        "conceptIds": [
          "l4c13",
          "l4c14",
          "l4c15",
          "l4c16"
        ]
      },
      {
        "day": 5,
        "title": "Negotiating & Feedback",
        "conceptIds": [
          "l4c17",
          "l4c18",
          "l4c19",
          "l4c20"
        ]
      },
      {
        "day": 6,
        "title": "Chairing Meetings & Networking",
        "conceptIds": [
          "l4c21",
          "l4c22",
          "l4c23",
          "l4c24"
        ]
      }
    ]
  }
];
