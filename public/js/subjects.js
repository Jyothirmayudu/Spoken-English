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
      { q: "Who is Rama's father, the king of Ayodhya?", opts: ["Dasharatha", "Janaka", "Dhritarashtra", "Vasudeva"], a: 0,
        hint: "He has three wives, and Rama is his eldest son.", explain: "Dasharatha, the king of Ayodhya, is Rama's father." },
      { q: "How did Rama win Sita's hand in marriage?", opts: ["By breaking the divine bow of Shiva at her swayamvar", "By winning a chariot race", "By defeating Ravana", "By a royal arrangement alone"], a: 0,
        hint: "It happened at a contest held by Sita's father.", explain: "Rama won Sita's hand by breaking the divine bow of Shiva at her swayamvar (marriage contest)." },
      { q: "Who is Sita's father?", opts: ["King Janaka", "King Dasharatha", "King Dhritarashtra", "King Vibhishana"], a: 0,
        hint: "He is the king of Mithila.", explain: "King Janaka, the ruler of Mithila, is Sita's father." },
      { q: "What is the name of Ravana's kingdom?", opts: ["Ayodhya", "Lanka", "Mithila", "Kishkindha"], a: 1,
        hint: "Rama and his allies build a bridge across the ocean to reach it.", explain: "Ravana rules the kingdom of Lanka." },
      { q: "Which bird tries to save Sita from Ravana and is fatally wounded in the attempt?", opts: ["Jatayu", "Garuda", "Sampati", "Kaka"], a: 0,
        hint: "This brave bird fights Ravana mid-air as he carries Sita away.", explain: "Jatayu, a brave bird, tries to rescue Sita and is fatally wounded fighting Ravana." },
      { q: "Which vanara (monkey) king becomes Rama's ally and helps him gather an army?", opts: ["Sugriva", "Vali", "Angada", "Jambavan"], a: 0,
        hint: "Rama helps him reclaim his kingdom in return for his support.", explain: "Sugriva becomes Rama's ally after Rama helps him regain his kingdom from his brother Vali." },
      { q: "Hanuman is the son of which wind god?", opts: ["Indra", "Vayu", "Agni", "Varuna"], a: 1,
        hint: "This is why Hanuman has the power of flight.", explain: "Hanuman is the son of Vayu, the wind god, which is often linked to his ability to fly." },
      { q: "How does Hanuman travel from India to Lanka to find Sita?", opts: ["By boat", "By leaping across the ocean", "By an underground tunnel", "By a magic carpet"], a: 1,
        hint: "It is a famous, dramatic feat of strength.", explain: "Hanuman makes an enormous leap across the ocean to reach Lanka in search of Sita." },
      { q: "What is Rama's just and celebrated rule as king of Ayodhya, after the war, traditionally called?", opts: ["Rama Rajya", "Ramayana Kaal", "Dharma Yuga", "Satya Yuga"], a: 0,
        hint: "The term is still used today to describe an ideal, fair government.", explain: "Rama's reign is remembered as \"Rama Rajya\" — a golden age of just and fair rule." },
      { q: "Who is Bharata's younger brother, who stays close to him rather than joining Rama's exile?", opts: ["Shatrughna", "Lakshmana", "Vibhishana", "Angada"], a: 0,
        hint: "He is often mentioned alongside Bharata as a loyal, less prominent brother.", explain: "Shatrughna, the youngest brother, remains close to Bharata while Rama is in exile." },
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
      { q: "Who is the blind king of Hastinapur and father of the hundred Kauravas?", opts: ["Dhritarashtra", "Bhishma", "Pandu", "Vidura"], a: 0,
        hint: "His blindness is often seen as a symbol in the story.", explain: "Dhritarashtra, the blind king of Hastinapur, is the father of the Kauravas." },
      { q: "Who is the elder statesman who commands the Kaurava army in the early part of the war, known for a vow of celibacy?", opts: ["Bhishma", "Drona", "Karna", "Shakuni"], a: 0,
        hint: "He took an oath never to marry or take the throne.", explain: "Bhishma, bound by a lifelong vow, commands the Kaurava army in the early days of the war." },
      { q: "Who is Arjuna's son, a great young warrior killed in the war through an unfair tactic?", opts: ["Abhimanyu", "Ghatotkacha", "Uttar", "Iravan"], a: 0,
        hint: "He is famously trapped and killed inside a complex battle formation.", explain: "Abhimanyu, Arjuna's brave son, is killed after being trapped in the Chakravyuha formation." },
      { q: "What event leads to the Pandavas losing their kingdom and going into exile?", opts: ["A game of dice", "A wrestling match", "A chariot race", "A war"], a: 0,
        hint: "Shakuni is known for manipulating this game.", explain: "The Pandavas lose their kingdom in a rigged game of dice, leading to their long exile." },
      { q: "Who is revealed to be Karna's true birth mother later in the story?", opts: ["Kunti", "Gandhari", "Draupadi", "Madri"], a: 0,
        hint: "This is also the mother of the Pandava brothers.", explain: "Kunti is revealed to be Karna's birth mother, making him an elder half-brother to the Pandavas." },
      { q: "Who trains both the Pandavas and Kauravas in the art of warfare?", opts: ["Drona (Dronacharya)", "Bhishma", "Krishna", "Vidura"], a: 0,
        hint: "He is a renowned teacher of archery and combat.", explain: "Drona, also called Dronacharya, trains both the Pandava and Kaurava princes." },
      { q: "How many days does the great war of Kurukshetra last?", opts: ["7 days", "12 days", "18 days", "30 days"], a: 2,
        hint: "It's a commonly cited number tied closely to the epic.", explain: "The war at Kurukshetra is traditionally described as lasting eighteen days." },
      { q: "Who is the wise uncle of the Kauravas who repeatedly advises peace during the conflict?", opts: ["Vidura", "Shakuni", "Karna", "Drona"], a: 0,
        hint: "He is known for his wisdom and moral counsel to King Dhritarashtra.", explain: "Vidura, known for his wisdom, repeatedly counsels peace and righteousness." },
      { q: "What does the word \"Mahabharata\" broadly mean?", opts: ["The great tale of the Bharata dynasty", "The book of kings", "The war of the gods", "The story of Krishna"], a: 0,
        hint: "\"Bharata\" refers to an ancient royal lineage in the story.", explain: "\"Mahabharata\" means the great tale of the Bharata dynasty, the royal family at the heart of the epic." },
      { q: "Who is Duryodhana's maternal uncle, known for manipulating the fateful game of dice?", opts: ["Shakuni", "Vidura", "Drona", "Bhishma"], a: 0,
        hint: "He is infamous for using loaded dice against the Pandavas.", explain: "Shakuni, Duryodhana's uncle, is known for rigging the dice game that leads to the Pandavas' exile." },
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
    { q: "Who was independent India's first Prime Minister?", opts: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"], a: 0,
      hint: "He famously gave the \"Tryst with Destiny\" speech at midnight in 1947.", explain: "Jawaharlal Nehru became independent India's first Prime Minister in 1947." },
    { q: "In which year did India gain independence from British rule?", opts: ["1930", "1942", "1947", "1950"], a: 2,
      hint: "This is one of the most important dates in Indian history.", explain: "India gained independence from British rule on 15 August 1947." },
    { q: "Who is known as the \"Iron Man of India\" for unifying princely states after independence?", opts: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "B.R. Ambedkar", "Lal Bahadur Shastri"], a: 0,
      hint: "A tall statue in Gujarat, the world's tallest, is built in his honour.", explain: "Sardar Vallabhbhai Patel earned the title \"Iron Man of India\" for integrating the princely states after independence." },
    { q: "Which queen is especially remembered for leading resistance against the British during the 1857 uprising?", opts: ["Rani Lakshmibai of Jhansi", "Razia Sultana", "Ahilyabai Holkar", "Rani Padmini"], a: 0,
      hint: "She is remembered for her courage while defending her kingdom of Jhansi.", explain: "Rani Lakshmibai, the Rani of Jhansi, is celebrated for her brave resistance during the 1857 uprising." },
    { q: "Onam, a major harvest festival featuring boat races, is celebrated mainly in which state?", opts: ["Kerala", "Karnataka", "Odisha", "Bihar"], a: 0,
      hint: "This festival includes the famous \"snake boat races.\"", explain: "Onam is a major harvest festival celebrated with great enthusiasm across Kerala." },
    { q: "Bihu, a major festival marking the harvest and new year, is celebrated mainly in which state?", opts: ["Assam", "Rajasthan", "Punjab", "Gujarat"], a: 0,
      hint: "This northeastern state is known for its tea gardens.", explain: "Bihu is a major festival celebrated across Assam." },
    { q: "The classical dance form Bharatanatyam originates from which state?", opts: ["Tamil Nadu", "Punjab", "West Bengal", "Uttar Pradesh"], a: 0,
      hint: "This ancient dance form has roots in temple traditions.", explain: "Bharatanatyam is a classical dance form that originated in Tamil Nadu." },
    { q: "Which Mughal emperor built the Taj Mahal?", opts: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"], a: 1,
      hint: "He built it in memory of his wife, Mumtaz Mahal.", explain: "Emperor Shah Jahan built the Taj Mahal in memory of his wife, Mumtaz Mahal." },
    { q: "Sanskrit is the ancient language most closely associated with which of these?", opts: ["The Vedas", "The Quran", "The Bible", "Modern newspapers only"], a: 0,
      hint: "It's considered the classical, sacred language of many ancient Indian texts.", explain: "Sanskrit is the classical language most closely associated with the ancient Vedas and much of early Indian literature." },
    { q: "Which region is traditionally known for its wide, colourful turbans and vibrant folk dress, especially in desert areas?", opts: ["Rajasthan", "Kerala", "West Bengal", "Goa"], a: 0,
      hint: "This desert state is famous for its forts, palaces, and colourful traditional attire.", explain: "Rajasthan is well known for its vibrant, colourful traditional dress, including distinctive turbans." },
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
    { q: "Which Indian city hosted the 2010 Commonwealth Games?", opts: ["Mumbai", "New Delhi", "Chennai", "Kolkata"], a: 1,
      hint: "It's the national capital of India.", explain: "New Delhi hosted the 2010 Commonwealth Games." },
    { q: "How many squares are there on a standard chessboard?", opts: ["32", "48", "64", "100"], a: 2,
      hint: "It's an 8-by-8 grid.", explain: "A standard chessboard has 64 squares, arranged in an 8x8 grid." },
    { q: "Which Indian chess player is a former World Chess Champion?", opts: ["Viswanathan Anand", "Sachin Tendulkar", "P.V. Sindhu", "Milkha Singh"], a: 0,
      hint: "He is often called India's first chess grandmaster.", explain: "Viswanathan Anand, a former World Chess Champion, is one of India's greatest chess players." },
    { q: "Which Indian badminton player won an Olympic silver medal at the 2016 Rio Games?", opts: ["Saina Nehwal", "P.V. Sindhu", "Sania Mirza", "Mary Kom"], a: 1,
      hint: "She later also won an Olympic bronze in Tokyo 2020.", explain: "P.V. Sindhu won a silver medal in badminton at the 2016 Rio Olympics." },
    { q: "What is the national bird of India?", opts: ["Peacock", "Parrot", "Sparrow", "Eagle"], a: 0,
      hint: "It's known for its colourful, fanned-out tail feathers.", explain: "The peacock is the national bird of India." },
    { q: "What is the national animal of India?", opts: ["Lion", "Elephant", "Bengal Tiger", "Leopard"], a: 2,
      hint: "It's a large striped big cat, and the focus of a major conservation project.", explain: "The Bengal Tiger is the national animal of India." },
    { q: "Which is the highest mountain peak in the world?", opts: ["K2", "Kangchenjunga", "Mount Everest", "Nanga Parbat"], a: 2,
      hint: "It lies in the Himalayas, on the border of Nepal and Tibet.", explain: "Mount Everest, in the Himalayas, is the highest mountain peak in the world." },
    { q: "On which continent is India located?", opts: ["Africa", "Asia", "Europe", "Australia"], a: 1,
      hint: "It's the largest continent by both area and population.", explain: "India is located on the continent of Asia." },
    { q: "Terms like \"googly\" and \"yorker\" are used in which sport?", opts: ["Cricket", "Football", "Hockey", "Tennis"], a: 0,
      hint: "These are types of deliveries bowled at a batter.", explain: "\"Googly\" and \"yorker\" are bowling terms used in cricket." },
    { q: "What is the largest ocean on Earth?", opts: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], a: 2,
      hint: "It lies between Asia and the Americas.", explain: "The Pacific Ocean is the largest and deepest ocean on Earth." },
  ]
};

// Subjects available on the class dashboard. `available: true` subjects have
// real quiz content wired to the existing quiz engine; `comingSoon: true`
// subjects are shown honestly as not yet built, filtered by class range only
// for display purposes (their content isn't grade-differentiated yet).
const SUBJECTS = [
  { id: "mythology", title: "Indian Mythology", icon: "🕉️", description: "Stories and figures from the Ramayana and the Mahabharata.", minClass: 3, maxClass: 10, available: true, hasVariants: true, hasDifficulty: true },
  { id: "history", title: "Indian History & Culture", icon: "🏛️", description: "Freedom fighters, festivals, and regional traditions.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "sportsgk", title: "Sports & GK", icon: "🏆", description: "Sports facts and general knowledge.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "social", title: "Social Studies", icon: "🌍", description: "History, geography, and civics — including a randomised State & Capital quiz.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "maths", title: "Maths", icon: "🔢", description: "Numbers, sums, and problem solving — a fresh set of random problems every time.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "english", title: "English", icon: "📖", description: "Grammar, spelling, and vocabulary.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "biology", title: "Biology", icon: "🧬", description: "Cells, plants, animals, and the human body.", minClass: 6, maxClass: 10, available: true, hasDifficulty: true },
  { id: "physicalscience", title: "Physical Science", icon: "⚗️", description: "Force, energy, chemicals, and materials.", minClass: 6, maxClass: 10, available: true, hasDifficulty: true },
  { id: "hindi", title: "Hindi", icon: "अ", description: "व्याकरण, शब्द और वाक्य।", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "telugu", title: "Telugu", icon: "తె", description: "పదాలు, వ్యాకరణం మరియు అర్థాలు.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
  { id: "computer", title: "Computer", icon: "💻", description: "Hardware, software, and the internet.", minClass: 3, maxClass: 10, available: true, hasDifficulty: true },
];

/* ---------- Shared helpers ---------- */
function shuffleArray(arr){ return [...arr].sort(() => Math.random() - 0.5); }

// Splits an existing flat question list into three difficulty bands by
// position (earlier = generally more foundational). Used to retrofit
// difficulty onto Mythology/History/Sports & GK without rewriting them.
function splitByDifficulty(all){
  const third = Math.ceil(all.length / 3);
  return {
    basic: all.slice(0, third),
    medium: all.slice(third, third * 2),
    hard: all.slice(third * 2),
  };
}

// Picks `count` random questions from a pool, in random order.
function sampleQuestions(pool, count){
  return shuffleArray(pool).slice(0, Math.min(count, pool.length));
}

/* ---------- State & Capital: difficulty changes which states are asked ---------- */
const STATE_POOLS = {
  basic: ["Maharashtra", "Tamil Nadu", "Karnataka", "Gujarat", "Rajasthan", "West Bengal", "Uttar Pradesh", "Kerala", "Punjab", "Telangana"],
  hard: ["Arunachal Pradesh", "Nagaland", "Mizoram", "Manipur", "Meghalaya", "Sikkim", "Tripura", "Goa", "Himachal Pradesh", "Uttarakhand", "Chhattisgarh", "Jharkhand"],
};
function buildStateCapitalQuiz(count, difficulty){
  let sourceList = INDIAN_STATES_CAPITALS;
  if(difficulty === 'basic'){
    sourceList = INDIAN_STATES_CAPITALS.filter(s => STATE_POOLS.basic.includes(s.state));
  }else if(difficulty === 'hard'){
    sourceList = INDIAN_STATES_CAPITALS.filter(s => STATE_POOLS.hard.includes(s.state));
  }
  count = Math.min(count || 10, sourceList.length);
  const picked = shuffleArray(sourceList).slice(0, count);
  return picked.map(item => {
    const wrongPool = INDIAN_STATES_CAPITALS.filter(s => s.state !== item.state);
    const wrongs = shuffleArray(wrongPool).slice(0, 3).map(s => s.capital);
    const opts = shuffleArray([item.capital, ...wrongs]);
    return {
      q: `What is the capital of ${item.state}?`,
      opts: opts,
      a: opts.indexOf(item.capital),
      hint: `Think of ${item.state}'s main administrative city.`,
      explain: `The capital of ${item.state} is ${item.capital}.`,
    };
  });
}

/* ---------- Maths: genuinely random problems every attempt ---------- */
function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
function buildMathsQuiz(count, difficulty){
  const questions = [];
  for(let i = 0; i < count; i++){
    let a, b, op, correct, qText;
    if(difficulty === 'basic'){
      a = randInt(1, 20); b = randInt(1, 20);
      op = Math.random() < 0.5 ? '+' : '-';
      if(op === '-' && b > a){ [a, b] = [b, a]; }
      correct = op === '+' ? a + b : a - b;
      qText = `What is ${a} ${op} ${b}?`;
    }else if(difficulty === 'medium'){
      const type = randInt(0, 2);
      if(type === 0){
        a = randInt(10, 50); b = randInt(10, 50); op = '+';
        correct = a + b; qText = `What is ${a} + ${b}?`;
      }else if(type === 1){
        a = randInt(20, 99); b = randInt(1, 19); op = '-';
        correct = a - b; qText = `What is ${a} - ${b}?`;
      }else{
        a = randInt(2, 12); b = randInt(2, 12); op = '×';
        correct = a * b; qText = `What is ${a} × ${b}?`;
      }
    }else{
      const type = randInt(0, 2);
      if(type === 0){
        a = randInt(5, 20); b = randInt(2, 12); op = '×';
        correct = a * b; qText = `What is ${a} × ${b}?`;
      }else if(type === 1){
        b = randInt(2, 12); correct = randInt(2, 15); a = b * correct;
        qText = `What is ${a} ÷ ${b}?`;
      }else{
        const percent = [10, 20, 25, 50][randInt(0, 3)];
        a = randInt(2, 40) * 10;
        correct = (a * percent) / 100;
        qText = `What is ${percent}% of ${a}?`;
      }
    }
    const wrongSet = new Set();
    while(wrongSet.size < 3){
      const offset = randInt(1, Math.max(5, Math.round(Math.abs(correct) * 0.3) || 5));
      const wrong = Math.random() < 0.5 ? correct + offset : correct - offset;
      if(wrong !== correct && wrong >= 0) wrongSet.add(wrong);
    }
    const opts = shuffleArray([correct, ...wrongSet]).map(String);
    questions.push({
      q: qText,
      opts: opts,
      a: opts.indexOf(String(correct)),
      hint: "Work through it step by step, then check the options.",
      explain: `${qText.replace('What is ', '').replace('?', '')} = ${correct}.`,
    });
  }
  return questions;
}

/* ---------- English, Biology, Physical Science, Hindi, Telugu, Computer:
   pools of real questions, split by difficulty. A random subset is
   sampled and shuffled fresh on every attempt. ---------- */
const ENGLISH_POOL = {
  basic: [
    { q: "Choose the correct plural of \"child.\"", opts: ["Childs", "Children", "Childes", "Childrens"], a: 1, hint: "It's an irregular plural.", explain: "\"Children\" is the correct, irregular plural of \"child.\"" },
    { q: "Which word is a noun?", opts: ["Run", "Quickly", "Table", "Blue"], a: 2, hint: "A noun names a person, place, or thing.", explain: "\"Table\" is a noun — it names a thing." },
    { q: "Choose the correct verb: \"She ___ to school every day.\"", opts: ["go", "goes", "going", "gone"], a: 1, hint: "Think about the -s ending for he/she/it.", explain: "\"Goes\" is correct for the subject \"she\" in the simple present." },
    { q: "What is the opposite of \"happy\"?", opts: ["Sad", "Glad", "Joyful", "Excited"], a: 0, hint: "Think of the opposite feeling.", explain: "\"Sad\" is the opposite (antonym) of \"happy\"." },
    { q: "Which word means the same as \"big\"?", opts: ["Small", "Tiny", "Large", "Short"], a: 2, hint: "Look for a similar-meaning word (synonym).", explain: "\"Large\" is a synonym for \"big\"." },
    { q: "Choose the correct article: \"___ apple a day keeps the doctor away.\"", opts: ["A", "An", "The", "No article needed"], a: 1, hint: "\"Apple\" starts with a vowel sound.", explain: "\"An\" is used before words starting with a vowel sound, like \"apple\"." },
    { q: "Which of these is a question?", opts: ["I am happy.", "Are you coming?", "She is here.", "Sit down."], a: 1, hint: "Look for the sentence ending with a question mark's typical structure.", explain: "\"Are you coming?\" is phrased as a question." },
    { q: "Choose the correct spelling.", opts: ["Becuase", "Because", "Becouse", "Bekause"], a: 1, hint: "Sound it out slowly: be-cause.", explain: "\"Because\" is the correct spelling." },
  ],
  medium: [
    { q: "Identify the adjective: \"The tall boy ran fast.\"", opts: ["Boy", "Ran", "Tall", "Fast"], a: 2, hint: "An adjective describes a noun.", explain: "\"Tall\" describes the noun \"boy\", making it the adjective here." },
    { q: "Choose the correct past tense of \"go.\"", opts: ["Goed", "Went", "Gone", "Going"], a: 1, hint: "This is an irregular verb.", explain: "\"Went\" is the irregular past tense of \"go.\"" },
    { q: "What type of word is \"quickly\"?", opts: ["Noun", "Verb", "Adverb", "Pronoun"], a: 2, hint: "It describes how an action is done.", explain: "\"Quickly\" is an adverb, describing how something is done." },
    { q: "Choose the correctly punctuated sentence.", opts: ["Where is your book", "where is your book?", "Where is your book?", "Where is your book!"], a: 2, hint: "Questions need a capital letter and a question mark.", explain: "\"Where is your book?\" is correctly capitalised and punctuated." },
    { q: "What is the plural of \"mouse\" (the animal)?", opts: ["Mouses", "Mice", "Mices", "Mouse"], a: 1, hint: "It's an irregular plural.", explain: "\"Mice\" is the irregular plural of \"mouse.\"" },
    { q: "Choose the correct sentence.", opts: ["She don't like coffee.", "She doesn't like coffee.", "She not like coffee.", "She isn't like coffee."], a: 1, hint: "\"She\" needs \"doesn't\", not \"don't\".", explain: "\"She doesn't like coffee\" correctly uses \"doesn't\" with \"she\"." },
    { q: "Which word means the same as \"difficult\"?", opts: ["Easy", "Hard", "Simple", "Clear"], a: 1, hint: "Look for a synonym.", explain: "\"Hard\" is a synonym for \"difficult.\"" },
    { q: "Which of these is a pronoun?", opts: ["Table", "She", "Quickly", "Beautiful"], a: 1, hint: "A pronoun replaces a noun.", explain: "\"She\" is a pronoun, used in place of a person's name." },
  ],
  hard: [
    { q: "Which sentence correctly uses \"who\"?", opts: ["Who is calling?", "Whom is calling?", "Who calling is?", "Whom calling is?"], a: 0, hint: "\"Who\" is used for the subject of a sentence.", explain: "\"Who is calling?\" correctly uses \"who\" as the subject." },
    { q: "Choose the correct passive voice: \"The cake ___ by Sara.\"", opts: ["made", "was made", "making", "makes"], a: 1, hint: "Passive voice uses a form of \"be\" plus the past participle.", explain: "\"Was made\" correctly forms the passive voice." },
    { q: "Which word means the same as \"enormous\"?", opts: ["Tiny", "Huge", "Average", "Narrow"], a: 1, hint: "Look for a synonym meaning very large.", explain: "\"Huge\" is a synonym for \"enormous.\"" },
    { q: "Choose the correct conditional: \"If it rains, we ___ stay inside.\"", opts: ["will", "would", "were", "had"], a: 0, hint: "This describes a realistic future possibility.", explain: "\"Will\" completes this first conditional sentence correctly." },
    { q: "Identify the conjunction: \"I like tea but not coffee.\"", opts: ["Like", "But", "Not", "Tea"], a: 1, hint: "A conjunction joins two ideas.", explain: "\"But\" is the conjunction joining the two contrasting ideas." },
    { q: "What is the correct comparative form of \"good\"?", opts: ["Gooder", "More good", "Better", "Best"], a: 2, hint: "This is an irregular comparative.", explain: "\"Better\" is the correct, irregular comparative of \"good.\"" },
    { q: "Which sentence correctly uses a semicolon?", opts: ["I have a test tomorrow; I need to study.", "I have a test tomorrow, I need to study;", "I; have a test tomorrow I need to study.", "I have a test tomorrow I; need to study."], a: 0, hint: "A semicolon can join two related complete sentences.", explain: "The semicolon correctly joins two related, complete sentences." },
    { q: "What is the term for two words that sound alike but have different meanings and spellings?", opts: ["Synonym", "Antonym", "Homophone", "Adjective"], a: 2, hint: "Think of \"there\" and \"their.\"", explain: "\"Homophone\" describes words that sound the same but differ in meaning and spelling." },
  ],
};

const BIOLOGY_POOL = {
  basic: [
    { q: "What is the basic unit of life?", opts: ["Cell", "Tissue", "Organ", "Atom"], a: 0, hint: "All living things are made of these.", explain: "The cell is the basic structural and functional unit of life." },
    { q: "Which organ pumps blood around the human body?", opts: ["Lungs", "Heart", "Liver", "Kidney"], a: 1, hint: "It beats continuously.", explain: "The heart pumps blood throughout the body." },
    { q: "What gas do plants absorb from the air for photosynthesis?", opts: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: 2, hint: "Plants release oxygen but absorb this gas instead.", explain: "Plants absorb carbon dioxide from the air for photosynthesis." },
    { q: "Which part of the plant absorbs water from the soil?", opts: ["Leaves", "Roots", "Flowers", "Stem"], a: 1, hint: "This part grows underground.", explain: "Roots absorb water and nutrients from the soil." },
    { q: "What is the process by which plants make their own food called?", opts: ["Respiration", "Digestion", "Photosynthesis", "Excretion"], a: 2, hint: "It uses sunlight, water, and carbon dioxide.", explain: "Photosynthesis is the process plants use to make their own food using sunlight." },
    { q: "How many bones are there in an adult human body?", opts: ["106", "156", "206", "306"], a: 2, hint: "It's a commonly cited three-digit number.", explain: "An adult human body has 206 bones." },
    { q: "Which organ is mainly responsible for breathing?", opts: ["Heart", "Lungs", "Stomach", "Brain"], a: 1, hint: "You have two of these in your chest.", explain: "The lungs are the main organs responsible for breathing." },
    { q: "What do we call animals that eat only plants?", opts: ["Carnivores", "Omnivores", "Herbivores", "Insectivores"], a: 2, hint: "\"Herb\" is a clue in the word.", explain: "Animals that eat only plants are called herbivores." },
  ],
  medium: [
    { q: "What is the \"powerhouse of the cell\" called?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], a: 1, hint: "It produces energy for the cell.", explain: "The mitochondria is often called the powerhouse of the cell, producing its energy." },
    { q: "Which blood cells help fight infections?", opts: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], a: 1, hint: "Think of the body's defence system.", explain: "White blood cells help the body fight off infections." },
    { q: "What is the green pigment found in plants called?", opts: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"], a: 1, hint: "It's essential for photosynthesis.", explain: "Chlorophyll is the green pigment in plants that captures sunlight for photosynthesis." },
    { q: "Which organ filters waste from the blood?", opts: ["Kidneys", "Liver", "Lungs", "Pancreas"], a: 0, hint: "You have two of these in your lower back area.", explain: "The kidneys filter waste products from the blood." },
    { q: "What is the scientific study of living organisms called?", opts: ["Physics", "Chemistry", "Biology", "Geology"], a: 2, hint: "\"Bio\" means life.", explain: "Biology is the scientific study of living organisms." },
    { q: "Which vitamin is produced when skin is exposed to sunlight?", opts: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], a: 2, hint: "It's often called the \"sunshine vitamin.\"", explain: "Vitamin D is produced by the skin when exposed to sunlight." },
    { q: "What is the term for animals that eat both plants and meat?", opts: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"], a: 2, hint: "\"Omni\" means \"all.\"", explain: "Omnivores are animals that eat both plants and meat." },
    { q: "Which part of the brain controls balance and coordination?", opts: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], a: 1, hint: "It's located at the back, lower part of the brain.", explain: "The cerebellum controls balance and coordination." },
  ],
  hard: [
    { q: "What is the process of cell division for growth and repair called?", opts: ["Meiosis", "Mitosis", "Fertilisation", "Osmosis"], a: 1, hint: "It produces two identical daughter cells.", explain: "Mitosis is the process of cell division used for growth and repair." },
    { q: "Which molecule carries genetic information in living organisms?", opts: ["RNA only", "DNA", "Protein", "Glucose"], a: 1, hint: "It has a famous double-helix shape.", explain: "DNA carries the genetic information of living organisms." },
    { q: "What is an organism's complete set of genetic material called?", opts: ["Genome", "Chromosome", "Gene pool", "Cell wall"], a: 0, hint: "\"Genome\" contains the word \"gene.\"", explain: "The genome is an organism's complete set of genetic material." },
    { q: "Which gland regulates metabolism in the human body?", opts: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], a: 1, hint: "It's located in the neck.", explain: "The thyroid gland regulates the body's metabolism." },
    { q: "What is the biological process by which organisms produce offspring called?", opts: ["Respiration", "Reproduction", "Digestion", "Circulation"], a: 1, hint: "It's how species continue across generations.", explain: "Reproduction is the process by which organisms produce offspring." },
    { q: "Which blood vessels carry oxygenated blood away from the heart?", opts: ["Veins", "Arteries", "Capillaries", "Venules"], a: 1, hint: "These have thick, muscular walls.", explain: "Arteries carry oxygenated blood away from the heart." },
    { q: "What is a permanent change in a DNA sequence called?", opts: ["Mutation", "Mitosis", "Metabolism", "Membrane"], a: 0, hint: "It can sometimes be inherited by offspring.", explain: "A mutation is a permanent change in a DNA sequence." },
    { q: "Which cell organelle is responsible for protein synthesis?", opts: ["Ribosome", "Nucleus", "Vacuole", "Golgi body"], a: 0, hint: "It reads genetic instructions to build proteins.", explain: "Ribosomes are responsible for synthesising proteins within a cell." },
  ],
};

const PHYSICAL_SCIENCE_POOL = {
  basic: [
    { q: "What is the force that pulls objects toward the Earth called?", opts: ["Friction", "Gravity", "Magnetism", "Tension"], a: 1, hint: "It's why things fall when dropped.", explain: "Gravity is the force that pulls objects toward the Earth." },
    { q: "What are the three common states of matter?", opts: ["Solid, liquid, gas", "Hot, cold, warm", "Big, medium, small", "Light, heavy, weightless"], a: 0, hint: "Think of ice, water, and steam.", explain: "The three common states of matter are solid, liquid, and gas." },
    { q: "Which instrument is used to measure temperature?", opts: ["Thermometer", "Barometer", "Speedometer", "Voltmeter"], a: 0, hint: "You might use this when you have a fever.", explain: "A thermometer is used to measure temperature." },
    { q: "What is the standard unit used to measure length?", opts: ["Kilogram", "Metre", "Second", "Litre"], a: 1, hint: "It's used for measuring distance or height.", explain: "The metre is the standard unit used to measure length." },
    { q: "Which form of energy comes from the sun?", opts: ["Wind energy", "Solar energy", "Nuclear energy", "Chemical energy"], a: 1, hint: "\"Solar\" is the clue in the name.", explain: "Solar energy comes from the sun." },
    { q: "What is the process of a liquid turning into a gas called?", opts: ["Freezing", "Melting", "Evaporation", "Condensation"], a: 2, hint: "Think of water boiling and turning to steam.", explain: "Evaporation is the process of a liquid turning into a gas." },
    { q: "What do we call a push or pull on an object?", opts: ["Energy", "Force", "Mass", "Speed"], a: 1, hint: "It's what makes objects move, stop, or change direction.", explain: "A push or pull on an object is called a force." },
    { q: "Which simple machine is a ramp an example of?", opts: ["Lever", "Pulley", "Inclined plane", "Wheel and axle"], a: 2, hint: "It's a flat, sloped surface.", explain: "A ramp is an example of an inclined plane." },
  ],
  medium: [
    { q: "What is the SI (standard) unit of force?", opts: ["Joule", "Newton", "Watt", "Pascal"], a: 1, hint: "It's named after a famous scientist.", explain: "The Newton is the SI unit of force." },
    { q: "What is the chemical symbol for water?", opts: ["H2O", "CO2", "O2", "NaCl"], a: 0, hint: "It has two hydrogen atoms and one oxygen atom.", explain: "H2O is the chemical formula for water." },
    { q: "What is the process of a solid turning directly into a gas called?", opts: ["Evaporation", "Sublimation", "Condensation", "Melting"], a: 1, hint: "Dry ice is a common example of this.", explain: "Sublimation is the process of a solid turning directly into a gas." },
    { q: "What is stored energy called?", opts: ["Kinetic energy", "Potential energy", "Thermal energy", "Sound energy"], a: 1, hint: "Think of a stretched rubber band.", explain: "Stored energy is called potential energy." },
    { q: "Which law states that every action has an equal and opposite reaction?", opts: ["Newton's first law", "Newton's second law", "Newton's third law", "The law of gravity"], a: 2, hint: "It's the third of three famous laws.", explain: "Newton's third law of motion states that every action has an equal and opposite reaction." },
    { q: "What is the SI unit used to measure electric current?", opts: ["Volt", "Ampere", "Ohm", "Watt"], a: 1, hint: "It's often shortened to \"amp.\"", explain: "The Ampere is the SI unit of electric current." },
    { q: "Which subatomic particle carries a negative charge?", opts: ["Proton", "Neutron", "Electron", "Nucleus"], a: 2, hint: "It orbits the nucleus of an atom.", explain: "The electron carries a negative electric charge." },
    { q: "What is the approximate speed of light?", opts: ["300 km per second", "3,000 km per second", "300,000 km per second", "3,000,000 km per second"], a: 2, hint: "It's an extremely large number.", explain: "Light travels at approximately 300,000 kilometres per second." },
  ],
  hard: [
    { q: "What is the formula for calculating speed?", opts: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Distance + Time"], a: 1, hint: "Think of kilometres per hour.", explain: "Speed is calculated as distance divided by time." },
    { q: "What is the process by which plants release water vapour called?", opts: ["Respiration", "Transpiration", "Photosynthesis", "Germination"], a: 1, hint: "It happens mainly through tiny pores in leaves.", explain: "Transpiration is the process by which plants release water vapour, mainly through their leaves." },
    { q: "Which subatomic particle has no electric charge?", opts: ["Proton", "Electron", "Neutron", "Ion"], a: 2, hint: "Its name hints at being \"neutral.\"", explain: "The neutron has no electric charge." },
    { q: "What is the SI unit of energy?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: 1, hint: "It's named after a 19th-century physicist.", explain: "The Joule is the SI unit of energy." },
    { q: "What is the term for an object's resistance to a change in motion?", opts: ["Inertia", "Momentum", "Velocity", "Acceleration"], a: 0, hint: "It's why a stationary object is hard to start moving.", explain: "Inertia describes an object's resistance to a change in its state of motion." },
    { q: "Which type of mirror is commonly used in a car's side mirrors for a wider field of view?", opts: ["Concave mirror", "Convex mirror", "Plane mirror", "Flat mirror"], a: 1, hint: "It curves outward.", explain: "Convex mirrors are used in car side mirrors because they give a wider field of view." },
    { q: "What is the process of splitting an atom's nucleus called?", opts: ["Nuclear fusion", "Nuclear fission", "Radiation", "Ionisation"], a: 1, hint: "It's used in nuclear power plants.", explain: "Nuclear fission is the process of splitting an atom's nucleus." },
    { q: "Which formula correctly relates voltage (V), current (I), and resistance (R)?", opts: ["V = I + R", "V = I ÷ R", "V = I × R", "V = I − R"], a: 2, hint: "This is a well-known law in electricity.", explain: "Ohm's Law states that V = I × R (voltage equals current times resistance)." },
  ],
};

const COMPUTER_POOL = {
  basic: [
    { q: "What does \"CPU\" stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Central Print Unit"], a: 0, hint: "It's often called the \"brain\" of the computer.", explain: "CPU stands for Central Processing Unit." },
    { q: "Which device is used to type text into a computer?", opts: ["Mouse", "Keyboard", "Monitor", "Printer"], a: 1, hint: "It has letter and number keys.", explain: "The keyboard is used to type text into a computer." },
    { q: "What do we call the main screen with icons on a computer?", opts: ["Taskbar", "Desktop", "Browser", "Folder"], a: 1, hint: "It's the first screen you see after logging in.", explain: "The desktop is the main screen displaying icons on a computer." },
    { q: "Which of these is an input device?", opts: ["Monitor", "Mouse", "Printer", "Speaker"], a: 1, hint: "It sends information into the computer.", explain: "The mouse is an input device, used to send commands into the computer." },
    { q: "What is the computer's short-term working memory called?", opts: ["ROM", "RAM", "CPU", "USB"], a: 1, hint: "It's cleared when the computer is turned off.", explain: "RAM (Random Access Memory) is the computer's short-term working memory." },
    { q: "Which keyboard shortcut is used to copy selected text?", opts: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"], a: 1, hint: "\"C\" is for \"copy.\"", explain: "Ctrl+C is the shortcut used to copy selected text." },
    { q: "What is a computer virus?", opts: ["A useful update", "A harmful program that can damage a computer", "A type of hardware", "A type of printer"], a: 1, hint: "It can spread and cause damage.", explain: "A computer virus is a harmful program that can damage a computer or its data." },
    { q: "Which of these is an output device?", opts: ["Keyboard", "Mouse", "Monitor", "Scanner"], a: 2, hint: "It displays information for you to see.", explain: "The monitor is an output device, displaying information from the computer." },
  ],
  medium: [
    { q: "What does \"URL\" stand for?", opts: ["Uniform Resource Locator", "Universal Reading Link", "United Resource Link", "Uniform Reading Locator"], a: 0, hint: "It's the address you type to visit a website.", explain: "URL stands for Uniform Resource Locator." },
    { q: "Which company developed the Windows operating system?", opts: ["Apple", "Microsoft", "Google", "IBM"], a: 1, hint: "It's one of the largest software companies in the world.", explain: "Microsoft developed the Windows operating system." },
    { q: "What is the full form of \"RAM\"?", opts: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Random Application Memory"], a: 0, hint: "\"Random\" is the first word.", explain: "RAM stands for Random Access Memory." },
    { q: "Which of these file extensions is typically used for images?", opts: [".doc", ".jpg", ".mp3", ".exe"], a: 1, hint: "Photos are often saved in this format.", explain: "\".jpg\" is a common file extension used for images." },
    { q: "What does \"WWW\" stand for?", opts: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], a: 0, hint: "It's the system that connects websites globally.", explain: "WWW stands for World Wide Web." },
    { q: "Which keyboard shortcut is used to paste copied text?", opts: ["Ctrl+C", "Ctrl+V", "Ctrl+P", "Ctrl+X"], a: 1, hint: "\"V\" is used here, not \"P.\"", explain: "Ctrl+V is the shortcut used to paste copied text." },
    { q: "What is the \"brain\" of the computer often called?", opts: ["The monitor", "The CPU", "The mouse", "The keyboard"], a: 1, hint: "It processes all the instructions.", explain: "The CPU (processor) is often called the brain of the computer." },
    { q: "Which of these is a web browser?", opts: ["Microsoft Word", "Google Chrome", "Adobe Photoshop", "Microsoft Excel"], a: 1, hint: "It's used to visit websites.", explain: "Google Chrome is a web browser." },
  ],
  hard: [
    { q: "What does \"HTML\" stand for?", opts: ["HyperText Markup Language", "High Text Modern Language", "HyperText Modern Links", "Home Tool Markup Language"], a: 0, hint: "It's the language used to build web pages.", explain: "HTML stands for HyperText Markup Language." },
    { q: "Which of these is a programming language?", opts: ["Python", "Photoshop", "Excel", "Windows"], a: 0, hint: "It's used to write software instructions.", explain: "Python is a widely used programming language." },
    { q: "What does \"GB\" stand for when measuring storage?", opts: ["Gigabyte", "Global Byte", "General Byte", "Graphic Byte"], a: 0, hint: "It's a unit larger than a megabyte.", explain: "GB stands for Gigabyte, a unit of digital storage." },
    { q: "What is the term for harmful software designed to damage a computer?", opts: ["Firmware", "Malware", "Shareware", "Freeware"], a: 1, hint: "\"Mal\" often means \"bad.\"", explain: "Malware is the general term for harmful software." },
    { q: "Which part of a computer permanently stores data even when powered off?", opts: ["RAM", "CPU", "Hard disk", "Cache"], a: 2, hint: "RAM loses its data when the power is off; this doesn't.", explain: "The hard disk stores data permanently, even when the computer is turned off." },
    { q: "What does Wi-Fi mainly allow a device to do?", opts: ["Print documents", "Connect to the internet wirelessly", "Charge its battery", "Scan photos"], a: 1, hint: "It removes the need for a cable to connect online.", explain: "Wi-Fi allows devices to connect to the internet wirelessly." },
    { q: "What is an \"algorithm\" in computing?", opts: ["A type of virus", "A step-by-step set of instructions to solve a problem", "A type of hardware", "A computer brand"], a: 1, hint: "Think of it as a recipe for solving a problem.", explain: "An algorithm is a step-by-step set of instructions used to solve a problem." },
    { q: "What does \"OS\" stand for?", opts: ["Operating System", "Output Software", "Online Server", "Original Software"], a: 0, hint: "Windows and macOS are examples of this.", explain: "OS stands for Operating System." },
  ],
};

const HINDI_POOL = {
  basic: [
    { q: "\"पानी\" शब्द का अंग्रेज़ी में अर्थ क्या है?", opts: ["Fire", "Water", "Air", "Earth"], a: 1, hint: "यह एक तरल पदार्थ है।", explain: "\"पानी\" का अर्थ है Water." },
    { q: "\"सूरज\" शब्द का अंग्रेज़ी अर्थ क्या है?", opts: ["Moon", "Star", "Sun", "Sky"], a: 2, hint: "यह दिन में आकाश में चमकता है।", explain: "\"सूरज\" का अर्थ है Sun." },
    { q: "\"बड़ा\" का विलोम शब्द (opposite) क्या है?", opts: ["छोटा", "लंबा", "मोटा", "पतला"], a: 0, hint: "आकार में कम को क्या कहते हैं?", explain: "\"बड़ा\" का विलोम शब्द \"छोटा\" है।" },
    { q: "\"माँ\" शब्द का अंग्रेज़ी अर्थ क्या है?", opts: ["Father", "Sister", "Mother", "Brother"], a: 2, hint: "यह परिवार का एक सदस्य है।", explain: "\"माँ\" का अर्थ है Mother." },
    { q: "हिंदी में \"किताब\" का अर्थ क्या है?", opts: ["Pen", "Book", "Bag", "Desk"], a: 1, hint: "इसे पढ़ते हैं।", explain: "\"किताब\" का अर्थ है Book." },
    { q: "\"अच्छा\" का विलोम शब्द क्या है?", opts: ["सुंदर", "बुरा", "तेज़", "धीमा"], a: 1, hint: "यह \"अच्छा\" के विपरीत भाव को दर्शाता है।", explain: "\"अच्छा\" का विलोम शब्द \"बुरा\" है।" },
    { q: "\"एक\" का अंग्रेज़ी में अर्थ क्या है?", opts: ["Two", "One", "Three", "Zero"], a: 1, hint: "यह पहली गिनती है।", explain: "\"एक\" का अर्थ है One." },
    { q: "\"घर\" शब्द का अर्थ क्या है?", opts: ["Road", "House", "Tree", "River"], a: 1, hint: "हम यहाँ रहते हैं।", explain: "\"घर\" का अर्थ है House." },
  ],
  medium: [
    { q: "\"सूर्य\" का पर्यायवाची (समानार्थी) शब्द क्या है?", opts: ["सूरज", "चाँद", "तारा", "बादल"], a: 0, hint: "इसका अर्थ भी वही है जो \"सूर्य\" का है।", explain: "\"सूर्य\" का पर्यायवाची शब्द \"सूरज\" है।" },
    { q: "हिंदी किस लिपि में लिखी जाती है?", opts: ["रोमन", "देवनागरी", "उर्दू", "तमिल"], a: 1, hint: "यह भारत की एक प्रमुख लिपि है।", explain: "हिंदी देवनागरी लिपि में लिखी जाती है।" },
    { q: "\"मित्र\" का पर्यायवाची शब्द क्या है?", opts: ["शत्रु", "दोस्त", "अजनबी", "पड़ोसी"], a: 1, hint: "यह एक करीबी संबंध को दर्शाता है।", explain: "\"मित्र\" का पर्यायवाची शब्द \"दोस्त\" है।" },
    { q: "\"रात\" का विलोम शब्द क्या है?", opts: ["शाम", "सुबह", "दिन", "दोपहर"], a: 2, hint: "यह उजाले के समय को दर्शाता है।", explain: "\"रात\" का विलोम शब्द \"दिन\" है।" },
    { q: "\"पढ़ना\" शब्द का अंग्रेज़ी अर्थ क्या है?", opts: ["To write", "To read", "To speak", "To listen"], a: 1, hint: "हम किताब के साथ यह करते हैं।", explain: "\"पढ़ना\" का अर्थ है To read." },
    { q: "\"नदी\" का अर्थ क्या है?", opts: ["Mountain", "River", "Ocean", "Lake"], a: 1, hint: "यह बहता हुआ जल स्रोत है।", explain: "\"नदी\" का अर्थ है River." },
    { q: "\"राम स्कूल जाता है\" — इस वाक्य में क्रिया (verb) कौन सी है?", opts: ["राम", "स्कूल", "जाता है", "इस"], a: 2, hint: "क्रिया किसी काम को दर्शाती है।", explain: "इस वाक्य में \"जाता है\" क्रिया है।" },
    { q: "भारत में हिंदी के साथ केंद्र स्तर पर कौन सी भाषा भी आधिकारिक रूप से प्रयोग होती है?", opts: ["फ्रेंच", "अंग्रेज़ी", "जर्मन", "स्पेनिश"], a: 1, hint: "यह भाषा अंतरराष्ट्रीय स्तर पर व्यापक रूप से बोली जाती है।", explain: "हिंदी के साथ अंग्रेज़ी भी केंद्र स्तर पर आधिकारिक भाषा के रूप में प्रयोग होती है।" },
  ],
  hard: [
    { q: "संज्ञा (noun) किसे कहते हैं?", opts: ["किसी काम को", "किसी व्यक्ति, वस्तु या स्थान के नाम को", "किसी गुण को", "किसी क्रिया को"], a: 1, hint: "यह किसी के नाम को दर्शाती है।", explain: "संज्ञा किसी व्यक्ति, वस्तु या स्थान के नाम को कहते हैं।" },
    { q: "\"वह विद्यालय जाता है\" वाक्य में सर्वनाम (pronoun) कौन सा है?", opts: ["विद्यालय", "जाता है", "वह", "है"], a: 2, hint: "यह किसी नाम के स्थान पर प्रयोग होता है।", explain: "\"वह\" इस वाक्य में सर्वनाम है।" },
    { q: "\"सुंदर\" शब्द किस प्रकार का शब्द है?", opts: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"], a: 2, hint: "यह किसी गुण को दर्शाता है।", explain: "\"सुंदर\" एक विशेषण (adjective) है।" },
    { q: "\"प्रकाश\" का विलोम शब्द क्या है?", opts: ["उजाला", "अंधकार", "रोशनी", "चमक"], a: 1, hint: "यह रोशनी के अभाव को दर्शाता है।", explain: "\"प्रकाश\" का विलोम शब्द \"अंधकार\" है।" },
    { q: "दो शब्दों के मेल से बने नए शब्द को हिंदी व्याकरण में क्या कहते हैं?", opts: ["संधि", "समास", "अलंकार", "छंद"], a: 1, hint: "यह शब्दों के संक्षिप्त संयोजन को दर्शाता है।", explain: "दो या अधिक शब्दों के मेल से बने शब्द को समास कहते हैं।" },
    { q: "\"वे पुस्तकें पढ़ते हैं\" — इसमें \"पुस्तकें\" किस प्रकार का शब्द है?", opts: ["सर्वनाम", "क्रिया", "संज्ञा", "विशेषण"], a: 2, hint: "यह किसी वस्तु के नाम को दर्शाता है।", explain: "\"पुस्तकें\" इस वाक्य में संज्ञा है।" },
    { q: "हिंदी दिवस किस तारीख़ को मनाया जाता है?", opts: ["14 सितंबर", "26 जनवरी", "15 अगस्त", "2 अक्टूबर"], a: 0, hint: "यह सितंबर के महीने में आता है।", explain: "हिंदी दिवस हर वर्ष 14 सितंबर को मनाया जाता है।" },
    { q: "\"व्याकरण\" शब्द का अंग्रेज़ी अर्थ क्या है?", opts: ["Literature", "Grammar", "Poetry", "Vocabulary"], a: 1, hint: "यह भाषा के नियमों का अध्ययन है।", explain: "\"व्याकरण\" का अर्थ है Grammar." },
  ],
};

const TELUGU_POOL = {
  basic: [
    { q: "\"నీరు\" (Neeru) means what in English?", opts: ["Fire", "Water", "Air", "Earth"], a: 1, hint: "It's something we drink.", explain: "\"నీరు\" (Neeru) means Water." },
    { q: "What script is Telugu written in?", opts: ["Telugu script", "Devanagari", "Tamil script", "Roman script"], a: 0, hint: "It has its own distinctive, rounded letters.", explain: "Telugu is written in its own Telugu script." },
    { q: "\"పుస్తకం\" (Pustakam) means what?", opts: ["Pen", "Bag", "Book", "Desk"], a: 2, hint: "We read this.", explain: "\"పుస్తకం\" (Pustakam) means Book." },
    { q: "\"అమ్మ\" (Amma) means what?", opts: ["Father", "Mother", "Sister", "Brother"], a: 1, hint: "It's a family member.", explain: "\"అమ్మ\" (Amma) means Mother." },
    { q: "\"ఇల్లు\" (Illu) means what?", opts: ["Road", "Tree", "House", "River"], a: 2, hint: "We live here.", explain: "\"ఇల్లు\" (Illu) means House." },
    { q: "\"ఒకటి\" (Okati) means which number?", opts: ["Zero", "One", "Two", "Three"], a: 1, hint: "It's the first counting number.", explain: "\"ఒకటి\" (Okati) means One." },
    { q: "\"పెద్ద\" (Pedda) means what?", opts: ["Small", "Big", "Fast", "Slow"], a: 1, hint: "It describes size.", explain: "\"పెద్ద\" (Pedda) means Big." },
    { q: "\"సూర్యుడు\" (Suryudu) means what?", opts: ["Moon", "Star", "Sun", "Sky"], a: 2, hint: "It shines during the day.", explain: "\"సూర్యుడు\" (Suryudu) means Sun." },
  ],
  medium: [
    { q: "Telugu is the official language of which two Indian states?", opts: ["Kerala and Karnataka", "Andhra Pradesh and Telangana", "Tamil Nadu and Kerala", "Odisha and Bihar"], a: 1, hint: "These two states were once one before 2014.", explain: "Telugu is the official language of both Andhra Pradesh and Telangana." },
    { q: "\"స్నేహితుడు\" (Snehitudu) means what?", opts: ["Enemy", "Stranger", "Friend", "Neighbour"], a: 2, hint: "It describes someone close to you.", explain: "\"స్నేహితుడు\" (Snehitudu) means Friend." },
    { q: "\"పాఠశాల\" (Paatashaala) means what?", opts: ["Hospital", "School", "Market", "Temple"], a: 1, hint: "Children go here to study.", explain: "\"పాఠశాల\" (Paatashaala) means School." },
    { q: "\"రాత్రి\" (Raatri) means what?", opts: ["Morning", "Afternoon", "Night", "Evening"], a: 2, hint: "It's when it's dark outside.", explain: "\"రాత్రి\" (Raatri) means Night." },
    { q: "\"నది\" (Nadi) means what?", opts: ["Mountain", "River", "Forest", "Ocean"], a: 1, hint: "It's a flowing body of water.", explain: "\"నది\" (Nadi) means River." },
    { q: "Telugu belongs to which language family?", opts: ["Indo-Aryan", "Dravidian", "Sino-Tibetan", "Austroasiatic"], a: 1, hint: "This family also includes Tamil, Kannada, and Malayalam.", explain: "Telugu belongs to the Dravidian language family." },
    { q: "\"చదవడం\" (Chadavadam) means what?", opts: ["Writing", "Reading", "Speaking", "Listening"], a: 1, hint: "We do this with a book.", explain: "\"చదవడం\" (Chadavadam) means Reading." },
    { q: "\"పగలు\" (Pagalu) means what?", opts: ["Night", "Day", "Week", "Month"], a: 1, hint: "It's the opposite of \"రాత్రి\" (night).", explain: "\"పగలు\" (Pagalu) means Day." },
  ],
  hard: [
    { q: "Telugu is sometimes called the \"Italian of the East\" because of which quality?", opts: ["Its melodious, vowel-ending pronunciation", "Its use of Roman script", "Its short word lengths", "Its similarity to Italian grammar"], a: 0, hint: "Think about how many Telugu words end in a vowel sound.", explain: "Telugu is called the \"Italian of the East\" for its smooth, vowel-ending pronunciation." },
    { q: "The \"Kavitrayam\" (trinity of poets) is known for translating which epic into Telugu?", opts: ["The Ramayana", "The Mahabharata", "The Puranas", "The Vedas"], a: 1, hint: "It's the epic about the Pandavas and Kauravas.", explain: "Nannayya, Tikkana, and Yerrapragada, known as the Kavitrayam, translated the Mahabharata into Telugu." },
    { q: "What is the Telugu term for a compound word formed by joining two or more words?", opts: ["సమాసం (Samaasam)", "వ్యాకరణం (Vyakaranam)", "అలంకారం (Alankaram)", "ఛందస్సు (Chandassu)"], a: 0, hint: "This grammatical term describes joined words.", explain: "\"సమాసం\" (Samaasam) is the Telugu grammar term for a compound word." },
    { q: "Telugu Language Day is celebrated on which date, marking a poet's birthday?", opts: ["15 August", "29 August", "2 October", "26 January"], a: 1, hint: "It falls in the last week of August.", explain: "Telugu Language Day is celebrated on 29 August, the birthday of poet Gidugu Venkata Ramamurthy." },
    { q: "What is the Telugu word for \"teacher\"?", opts: ["ఉపాధ్యాయుడు (Upadhyayudu)", "విద్యార్థి (Vidyarthi)", "రచయిత (Rachayita)", "వైద్యుడు (Vaidyudu)"], a: 0, hint: "It refers to someone who teaches in a school.", explain: "\"ఉపాధ్యాయుడు\" (Upadhyayudu) means Teacher in Telugu." },
    { q: "\"వ్యాకరణం\" (Vyakaranam) means what in English?", opts: ["Literature", "Grammar", "Poetry", "History"], a: 1, hint: "It's the study of language rules.", explain: "\"వ్యాకరణం\" (Vyakaranam) means Grammar." },
    { q: "What classical status was Telugu granted by the Government of India in 2008?", opts: ["National language status", "Classical language status", "Official script status", "Endangered language status"], a: 1, hint: "It recognises the language's ancient literary heritage.", explain: "Telugu was granted classical language status by the Government of India in 2008." },
    { q: "The Telugu script most likely evolved from which ancient script?", opts: ["Brahmi script", "Roman script", "Arabic script", "Chinese script"], a: 0, hint: "This ancient script is also linked to many other Indian scripts.", explain: "The Telugu script evolved primarily from the ancient Brahmi script." },
  ],
};
