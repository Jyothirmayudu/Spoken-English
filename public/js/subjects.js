/* ============================================================
   SCHOOL SUBJECTS — class-based dashboard (Classes 3–10)
   Real, complete content: Indian Mythology, Indian History &
   Culture, Sports & GK, and Social Studies (with a randomised
   State & Capital quiz mode). The remaining subjects below are
   marked comingSoon — real, grade-board-aligned content for
   Maths, Biology, Physical Science, Hindi, Telugu, Computer, and
   English grammar is a much larger curriculum project on its own,
   so placeholders are shown honestly rather than guessed content.
   ============================================================ */

const INDIAN_STATES_CAPITALS = [
  { state: "Andhra Pradesh", capital: "Amaravati" },
  { state: "Arunachal Pradesh", capital: "Itanagar" },
  { state: "Assam", capital: "Dispur" },
  { state: "Bihar", capital: "Patna" },
  { state: "Chhattisgarh", capital: "Raipur" },
  { state: "Goa", capital: "Panaji" },
  { state: "Gujarat", capital: "Gandhinagar" },
  { state: "Haryana", capital: "Chandigarh" },
  { state: "Himachal Pradesh", capital: "Shimla" },
  { state: "Jharkhand", capital: "Ranchi" },
  { state: "Karnataka", capital: "Bengaluru" },
  { state: "Kerala", capital: "Thiruvananthapuram" },
  { state: "Madhya Pradesh", capital: "Bhopal" },
  { state: "Maharashtra", capital: "Mumbai" },
  { state: "Manipur", capital: "Imphal" },
  { state: "Meghalaya", capital: "Shillong" },
  { state: "Mizoram", capital: "Aizawl" },
  { state: "Nagaland", capital: "Kohima" },
  { state: "Odisha", capital: "Bhubaneswar" },
  { state: "Punjab", capital: "Chandigarh" },
  { state: "Rajasthan", capital: "Jaipur" },
  { state: "Sikkim", capital: "Gangtok" },
  { state: "Tamil Nadu", capital: "Chennai" },
  { state: "Telangana", capital: "Hyderabad" },
  { state: "Tripura", capital: "Agartala" },
  { state: "Uttar Pradesh", capital: "Lucknow" },
  { state: "Uttarakhand", capital: "Dehradun" },
  { state: "West Bengal", capital: "Kolkata" },
];

const MYTHOLOGY_QUIZZES = {
  ramayana: {
    label: "Ramayana",
    questions: [
      { q: "Who is the main hero of the Ramayana?", opts: ["Rama", "Krishna", "Arjuna", "Bharata"], a: 0,
        hint: "He is the prince of Ayodhya.", explain: "Rama, the prince of Ayodhya, is the central hero of the Ramayana." },
      { q: "Who is Rama's wife?", opts: ["Draupadi", "Sita", "Radha", "Kunti"], a: 1,
        hint: "She is kidnapped by Ravana, which leads to the war in Lanka.", explain: "Sita is Rama's wife, and her kidnapping by Ravana is central to the story." },
      { q: "Who is Rama's devoted companion, famous for his strength and loyalty?", opts: ["Hanuman", "Ravana", "Lakshmana", "Vibhishana"], a: 0,
        hint: "He is often shown as a mighty monkey warrior.", explain: "Hanuman is Rama's loyal companion, known for his devotion, strength, and courage." },
      { q: "Who is the demon king of Lanka who kidnaps Sita?", opts: ["Kumbhakarna", "Ravana", "Indrajit", "Maricha"], a: 1,
        hint: "He has ten heads in traditional depictions.", explain: "Ravana, the ten-headed demon king of Lanka, kidnaps Sita, setting the war in motion." },
      { q: "Which brother accompanies Rama into exile in the forest?", opts: ["Bharata", "Shatrughna", "Lakshmana", "None"], a: 2,
        hint: "He stays by Rama's side throughout the fourteen years.", explain: "Lakshmana, Rama's devoted younger brother, accompanies him and Sita into exile." },
      { q: "For how many years was Rama exiled to the forest?", opts: ["7 years", "10 years", "14 years", "20 years"], a: 2,
        hint: "It's a well-known number tied closely to the whole story.", explain: "Rama was exiled for fourteen years, as promised to fulfil his father's word." },
      { q: "Who rules Ayodhya in Rama's place during the exile, keeping his sandals on the throne out of respect?", opts: ["Bharata", "Ravana", "Hanuman", "Vibhishana"], a: 0,
        hint: "He is Rama's younger brother who never wanted the throne for himself.", explain: "Bharata rules as a caretaker, placing Rama's sandals on the throne rather than claiming it himself." },
      { q: "Which festival celebrates Rama's return to Ayodhya after defeating Ravana?", opts: ["Holi", "Diwali", "Navratri", "Pongal"], a: 1,
        hint: "It's known as the festival of lights.", explain: "Diwali celebrates Rama, Sita, and Lakshmana's joyful return to Ayodhya." },
      { q: "Who is Ravana's brother who helps Rama by revealing important information about Lanka?", opts: ["Vibhishana", "Kumbhakarna", "Indrajit", "Maricha"], a: 0,
        hint: "He chooses righteousness over loyalty to his brother.", explain: "Vibhishana, Ravana's brother, sides with Rama, believing Ravana's actions to be wrong." },
      { q: "The Ramayana is traditionally considered one of the two great epics of India, alongside which other epic?", opts: ["The Mahabharata", "The Panchatantra", "The Vedas", "The Puranas"], a: 0,
        hint: "It tells the story of the Pandavas and Kauravas.", explain: "The Ramayana and the Mahabharata are the two great epics of ancient India." },
    ]
  },
  mahabharata: {
    label: "Mahabharata",
    questions: [
      { q: "The Mahabharata describes a great war between which two groups of cousins?", opts: ["Pandavas and Kauravas", "Yadavas and Kauravas", "Pandavas and Yadavas", "Kauravas and Nagas"], a: 0,
        hint: "One group has five brothers; the other has a hundred.", explain: "The Mahabharata centres on the war between the five Pandava brothers and their cousins, the Kauravas." },
      { q: "How many Pandava brothers are there?", opts: ["Three", "Four", "Five", "Six"], a: 2,
        hint: "Each one has a distinct personality and skill.", explain: "There are five Pandava brothers: Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva." },
      { q: "Who is the eldest Pandava brother, known for his honesty and sense of duty?", opts: ["Bhima", "Arjuna", "Yudhishthira", "Nakula"], a: 2,
        hint: "He is famous for almost always speaking the truth.", explain: "Yudhishthira, the eldest Pandava, is known for his commitment to truth and righteousness." },
      { q: "Which Pandava brother is renowned as the greatest archer?", opts: ["Arjuna", "Bhima", "Sahadeva", "Yudhishthira"], a: 0,
        hint: "Krishna serves as his charioteer during the war.", explain: "Arjuna is celebrated as the finest archer among the Pandavas." },
      { q: "Who serves as Arjuna's charioteer and guide, delivering the Bhagavad Gita on the battlefield?", opts: ["Krishna", "Bhishma", "Drona", "Karna"], a: 0,
        hint: "He is considered a close friend and guide to the Pandavas.", explain: "Krishna guides Arjuna as his charioteer and delivers the Bhagavad Gita before the war begins." },
      { q: "Who is the eldest of the hundred Kaurava brothers?", opts: ["Dushasana", "Duryodhana", "Karna", "Shakuni"], a: 1,
        hint: "His rivalry with the Pandavas drives much of the story.", explain: "Duryodhana is the eldest Kaurava, and his rivalry with the Pandavas is central to the epic." },
      { q: "What is the name of the sacred conversation between Krishna and Arjuna on the battlefield?", opts: ["The Ramayana", "The Bhagavad Gita", "The Upanishads", "The Panchatantra"], a: 1,
        hint: "It's one of the most widely read texts in Indian philosophy.", explain: "The Bhagavad Gita is Krishna's teaching to Arjuna on duty and righteousness, delivered before the war." },
      { q: "On which battlefield is the great war of the Mahabharata fought?", opts: ["Kurukshetra", "Lanka", "Ayodhya", "Hastinapur"], a: 0,
        hint: "This place lends its name to the war itself, sometimes called by that name.", explain: "The war is fought at Kurukshetra, and is sometimes referred to as the Kurukshetra War." },
      { q: "Who is the shared wife of the five Pandava brothers?", opts: ["Draupadi", "Sita", "Kunti", "Gandhari"], a: 0,
        hint: "Her humiliation in the Kaurava court is a major turning point in the story.", explain: "Draupadi, married to all five Pandava brothers, plays a central role in the epic." },
      { q: "Which Pandava brother is known for his immense physical strength?", opts: ["Nakula", "Sahadeva", "Bhima", "Yudhishthira"], a: 2,
        hint: "He is famous for his size and mighty feats in battle.", explain: "Bhima, the second Pandava, is renowned for his extraordinary strength." },
    ]
  }
};

const HISTORY_CULTURE_QUIZ = {
  title: "Indian History & Culture",
  questions: [
    { q: "Who gave the famous slogan \"Give me blood, and I shall give you freedom\"?", opts: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"], a: 1,
      hint: "He led the Indian National Army during the freedom struggle.", explain: "Subhas Chandra Bose, also known as Netaji, gave this famous rallying call." },
    { q: "Who is widely known as the \"Father of the Nation\" in India?", opts: ["Bhagat Singh", "Sardar Patel", "Mahatma Gandhi", "Subhas Chandra Bose"], a: 2,
      hint: "He led India's independence movement through non-violent protest.", explain: "Mahatma Gandhi is widely regarded as the Father of the Nation for his leadership in the freedom struggle." },
    { q: "Which freedom fighter is associated with the slogan \"Inquilab Zindabad\" (Long live the revolution)?", opts: ["Bhagat Singh", "Lal Bahadur Shastri", "Rajendra Prasad", "Sarojini Naidu"], a: 0,
      hint: "He was a young revolutionary executed by the British in 1931.", explain: "Bhagat Singh popularised the slogan \"Inquilab Zindabad\" during India's freedom struggle." },
    { q: "Who led the Salt March (Dandi March) in 1930?", opts: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"], a: 1,
      hint: "The march protested a British tax on a common kitchen ingredient.", explain: "Mahatma Gandhi led the Salt March to protest the British salt tax, a landmark act of civil disobedience." },
    { q: "Which festival is known as the \"Festival of Lights\"?", opts: ["Holi", "Diwali", "Onam", "Baisakhi"], a: 1,
      hint: "Homes are decorated with diyas (oil lamps) during this festival.", explain: "Diwali, marked by lamps and lights, is celebrated as the Festival of Lights across India." },
    { q: "Pongal, a major harvest festival, is mainly celebrated in which Indian state?", opts: ["Punjab", "Tamil Nadu", "Gujarat", "West Bengal"], a: 1,
      hint: "This festival gives thanks for a good harvest, over several days.", explain: "Pongal is a major harvest festival celebrated especially in Tamil Nadu." },
    { q: "Baisakhi, marked by bhangra dance and giddha, is especially associated with which state?", opts: ["Kerala", "Punjab", "Odisha", "Assam"], a: 1,
      hint: "This state is known as the \"Land of Five Rivers.\"", explain: "Baisakhi is a major harvest festival celebrated with great energy across Punjab." },
    { q: "Who is popularly known by the title \"Netaji\"?", opts: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"], a: 0,
      hint: "This Bengali freedom fighter led the Indian National Army.", explain: "\"Netaji,\" meaning respected leader, is the title popularly given to Subhas Chandra Bose." },
    { q: "Who wrote India's national anthem, \"Jana Gana Mana\"?", opts: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Muhammad Iqbal"], a: 1,
      hint: "He was a Bengali poet and the first non-European to win the Nobel Prize in Literature.", explain: "Rabindranath Tagore composed \"Jana Gana Mana,\" India's national anthem." },
    { q: "Which ancient civilisation, known for well-planned cities, flourished along the Indus River?", opts: ["Vedic Civilisation", "Indus Valley Civilisation", "Maurya Empire", "Gupta Empire"], a: 1,
      hint: "Cities like Mohenjo-daro and Harappa belonged to this civilisation.", explain: "The Indus Valley Civilisation, one of the world's oldest, was known for its advanced, well-planned cities." },
  ]
};

const SPORTS_GK_QUIZ = {
  title: "Sports & General Knowledge",
  questions: [
    { q: "Which sport is often called the \"Gentleman's Game\"?", opts: ["Football", "Cricket", "Hockey", "Badminton"], a: 1,
      hint: "It's the most widely followed sport in India.", explain: "Cricket has long been nicknamed the \"Gentleman's Game.\"" },
    { q: "How many players from one team are on the field at a time in cricket?", opts: ["9", "10", "11", "12"], a: 2,
      hint: "It's the same as the number of players in a standard football team too.", explain: "Each cricket team fields 11 players at a time." },
    { q: "In which year did India first win the Cricket World Cup?", opts: ["1975", "1983", "1996", "2011"], a: 1,
      hint: "The team was captained by Kapil Dev.", explain: "India won its first Cricket World Cup in 1983, under captain Kapil Dev." },
    { q: "Which Indian city is popularly known as the \"Silicon Valley of India\"?", opts: ["Hyderabad", "Pune", "Bengaluru", "Chennai"], a: 2,
      hint: "This city is a major hub for technology companies.", explain: "Bengaluru is widely known as the Silicon Valley of India due to its thriving tech industry." },
    { q: "India has historically won the most Olympic gold medals in which team sport?", opts: ["Football", "Hockey", "Basketball", "Volleyball"], a: 1,
      hint: "India's national hockey team dominated the Olympics for decades in the 20th century.", explain: "India has won 8 Olympic gold medals in field hockey, more than in any other team sport." },
    { q: "Who is known as the \"Flying Sikh\" of Indian athletics?", opts: ["Milkha Singh", "P.T. Usha", "Neeraj Chopra", "Abhinav Bindra"], a: 0,
      hint: "He was a celebrated sprinter, especially in the 400m race.", explain: "Milkha Singh, the legendary sprinter, is famously known as the \"Flying Sikh.\"" },
    { q: "What is the official currency of India?", opts: ["Indian Dollar", "Indian Rupee", "Indian Pound", "Indian Rand"], a: 1,
      hint: "Its symbol is ₹.", explain: "The Indian Rupee (₹) is the official currency of India." },
    { q: "Which is the longest river in India?", opts: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"], a: 2,
      hint: "It is also considered one of the most sacred rivers in India.", explain: "The Ganga (Ganges) is the longest river flowing through India." },
    { q: "Which Indian cricketer is nicknamed \"The Little Master\"?", opts: ["Virat Kohli", "Sachin Tendulkar", "Rahul Dravid", "MS Dhoni"], a: 1,
      hint: "He holds numerous international batting records.", explain: "Sachin Tendulkar is affectionately nicknamed \"The Little Master.\"" },
    { q: "How many players from one team are on the field at a time in football (soccer)?", opts: ["10", "11", "12", "9"], a: 1,
      hint: "This includes the goalkeeper.", explain: "A football team fields 11 players at a time, including the goalkeeper." },
  ]
};

// Subjects available on the class dashboard. `available: true` subjects have
// real quiz content wired to the existing quiz engine; `comingSoon: true`
// subjects are shown honestly as not yet built, filtered by class range only
// for display purposes (their content isn't grade-differentiated yet).
const SUBJECTS = [
  { id: "mythology", title: "Indian Mythology", icon: "🕉️", description: "Stories and figures from the Ramayana and the Mahabharata.", minClass: 3, maxClass: 10, available: true, hasVariants: true },
  { id: "history", title: "Indian History & Culture", icon: "🏛️", description: "Freedom fighters, festivals, and regional traditions.", minClass: 3, maxClass: 10, available: true },
  { id: "sportsgk", title: "Sports & GK", icon: "🏆", description: "Sports facts and general knowledge.", minClass: 3, maxClass: 10, available: true },
  { id: "social", title: "Social Studies", icon: "🌍", description: "History, geography, and civics — including a State & Capital quiz.", minClass: 3, maxClass: 10, available: true, hasStateCapital: true },
  { id: "maths", title: "Maths", icon: "🔢", description: "Numbers, sums, and problem solving.", minClass: 3, maxClass: 10, available: false },
  { id: "english", title: "English", icon: "📖", description: "Grammar, spelling, and reading skills.", minClass: 3, maxClass: 10, available: false },
  { id: "biology", title: "Biology", icon: "🧬", description: "Cells, plants, animals, and the human body.", minClass: 6, maxClass: 10, available: false },
  { id: "physicalscience", title: "Physical Science", icon: "⚗️", description: "Force, energy, chemicals, and materials.", minClass: 6, maxClass: 10, available: false },
  { id: "hindi", title: "Hindi", icon: "अ", description: "व्याकरण, शब्द और वाक्य।", minClass: 3, maxClass: 10, available: false },
  { id: "telugu", title: "Telugu", icon: "తె", description: "పదాలు, వ్యాకరణం మరియు అర్థాలు.", minClass: 3, maxClass: 10, available: false },
  { id: "computer", title: "Computer", icon: "💻", description: "Hardware, software, and the internet.", minClass: 3, maxClass: 10, available: false },
];

// Builds a fresh, randomised 10-question State & Capital quiz each time —
// a genuinely different quiz on every attempt, since it's assembled from
// the state list rather than a fixed pre-written set.
function buildStateCapitalQuiz(count){
  count = Math.min(count || 10, INDIAN_STATES_CAPITALS.length);
  const shuffled = [...INDIAN_STATES_CAPITALS].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, count);
  return picked.map(item => {
    const wrongPool = INDIAN_STATES_CAPITALS.filter(s => s.state !== item.state);
    const wrongs = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3).map(s => s.capital);
    const opts = [item.capital, ...wrongs].sort(() => Math.random() - 0.5);
    return {
      q: `What is the capital of ${item.state}?`,
      opts: opts,
      a: opts.indexOf(item.capital),
      hint: `Think of ${item.state}'s main administrative city.`,
      explain: `The capital of ${item.state} is ${item.capital}.`,
    };
  });
}
