const countries = [
  ["Afghanistan", "Kabul"], ["Albania", "Tirana"],
  ["Algeria", "Algiers"], ["Andorra", "Andorra la Vella"],
  ["Angola", "Luanda"], ["Antigua and Barbuda", "Saint John's"],
  ["Argentina", "Buenos Aires"], ["Armenia", "Yerevan"],
  ["Australia", "Canberra"], ["Austria", "Vienna"],
  ["Azerbaijan", "Baku"], ["Bahamas", "Nassau"],
  ["Bahrain", "Manama"], ["Bangladesh", "Dhaka"],
  ["Barbados", "Bridgetown"], ["Belarus", "Minsk"],
  ["Belgium", "Brussels"], ["Belize", "Belmopan"],
  ["Benin", "Porto-Novo"], ["Bhutan", "Thimphu"],
  ["Bolivia", "Sucre"], ["Bosnia and Herzegovina", "Sarajevo"],
  ["Botswana", "Gaborone"], ["Brazil", "Brasilia"],
  ["Brunei", "Bandar Seri Begawan"], ["Bulgaria", "Sofia"],
  ["Burkina Faso", "Ouagadougou"], ["Burundi", "Gitega"],
  ["Cabo Verde", "Praia"], ["Cambodia", "Phnom Penh"],
  ["Cameroon", "Yaounde"], ["Canada", "Ottawa"],
  ["Central African Republic", "Bangui"], ["Chad", "N'Djamena"],
  ["Chile", "Santiago"], ["China", "Beijing"],
  ["Colombia", "Bogota"], ["Comoros", "Moroni"],
  ["Costa Rica", "San Jose"], ["Croatia", "Zagreb"],
  ["Cuba", "Havana"], ["Cyprus", "Nicosia"],
  ["Czechia", "Prague"], ["Democratic Republic of the Congo", "Kinshasa"],
  ["Denmark", "Copenhagen"], ["Djibouti", "Djibouti"],
  ["Dominica", "Roseau"], ["Dominican Republic", "Santo Domingo"],
  ["Ecuador", "Quito"], ["Egypt", "Cairo"],
  ["El Salvador", "San Salvador"], ["Equatorial Guinea", "Malabo"],
  ["Eritrea", "Asmara"], ["Estonia", "Tallinn"],
  ["Eswatini", "Mbabane"], ["Ethiopia", "Addis Ababa"],
  ["Fiji", "Suva"], ["Finland", "Helsinki"],
  ["France", "Paris"], ["Gabon", "Libreville"],
  ["Gambia", "Banjul"], ["Georgia", "Tbilisi"],
  ["Germany", "Berlin"], ["Ghana", "Accra"],
  ["Greece", "Athens"], ["Grenada", "Saint George's"],
  ["Guatemala", "Guatemala City"], ["Guinea", "Conakry"],
  ["Guinea-Bissau", "Bissau"], ["Guyana", "Georgetown"],
  ["Haiti", "Port-au-Prince"], ["Honduras", "Tegucigalpa"],
  ["Hungary", "Budapest"], ["Iceland", "Reykjavik"],
  ["India", "New Delhi"], ["Indonesia", "Jakarta"],
  ["Iran", "Tehran"], ["Iraq", "Baghdad"],
  ["Ireland", "Dublin"], ["Israel", "Jerusalem"],
  ["Italy", "Rome"], ["Jamaica", "Kingston"],
  ["Japan", "Tokyo"], ["Jordan", "Amman"],
  ["Kazakhstan", "Astana"], ["Kenya", "Nairobi"],
  ["Kiribati", "South Tarawa"], ["Kuwait", "Kuwait City"],
  ["Kyrgyzstan", "Bishkek"], ["Laos", "Vientiane"],
  ["Latvia", "Riga"], ["Lebanon", "Beirut"],
  ["Lesotho", "Maseru"], ["Liberia", "Monrovia"],
  ["Libya", "Tripoli"], ["Liechtenstein", "Vaduz"],
  ["Lithuania", "Vilnius"], ["Luxembourg", "Luxembourg"],
  ["Madagascar", "Antananarivo"], ["Malawi", "Lilongwe"],
  ["Malaysia", "Kuala Lumpur"], ["Maldives", "Male"],
  ["Mali", "Bamako"], ["Malta", "Valletta"],
  ["Marshall Islands", "Majuro"], ["Mauritania", "Nouakchott"],
  ["Mauritius", "Port Louis"], ["Mexico", "Mexico City"],
  ["Micronesia", "Palikir"], ["Moldova", "Chisinau"],
  ["Monaco", "Monaco"], ["Mongolia", "Ulaanbaatar"],
  ["Montenegro", "Podgorica"], ["Morocco", "Rabat"],
  ["Mozambique", "Maputo"], ["Myanmar", "Naypyidaw"],
  ["Namibia", "Windhoek"], ["Nauru", "Yaren"],
  ["Nepal", "Kathmandu"], ["Netherlands", "Amsterdam"],
  ["New Zealand", "Wellington"], ["Nicaragua", "Managua"],
  ["Niger", "Niamey"], ["Nigeria", "Abuja"],
  ["North Korea", "Pyongyang"], ["North Macedonia", "Skopje"],
  ["Norway", "Oslo"], ["Oman", "Muscat"],
  ["Pakistan", "Islamabad"], ["Palau", "Ngerulmud"],
  ["Palestine", "East Jerusalem"], ["Panama", "Panama City"],
  ["Papua New Guinea", "Port Moresby"], ["Paraguay", "Asuncion"],
  ["Peru", "Lima"], ["Philippines", "Manila"],
  ["Poland", "Warsaw"], ["Portugal", "Lisbon"],
  ["Qatar", "Doha"], ["Republic of the Congo", "Brazzaville"],
  ["Romania", "Bucharest"], ["Russia", "Moscow"],
  ["Rwanda", "Kigali"], ["Saint Kitts and Nevis", "Basseterre"],
  ["Saint Lucia", "Castries"], ["Saint Vincent and the Grenadines", "Kingstown"],
  ["Samoa", "Apia"], ["San Marino", "San Marino"],
  ["Sao Tome and Principe", "Sao Tome"], ["Saudi Arabia", "Riyadh"],
  ["Senegal", "Dakar"], ["Serbia", "Belgrade"],
  ["Seychelles", "Victoria"], ["Sierra Leone", "Freetown"],
  ["Singapore", "Singapore"], ["Slovakia", "Bratislava"],
  ["Slovenia", "Ljubljana"], ["Solomon Islands", "Honiara"],
  ["Somalia", "Mogadishu"], ["South Africa", "Pretoria"],
  ["South Korea", "Seoul"], ["South Sudan", "Juba"],
  ["Spain", "Madrid"], ["Sri Lanka", "Sri Jayawardenepura Kotte"],
  ["Sudan", "Khartoum"], ["Suriname", "Paramaribo"],
  ["Sweden", "Stockholm"], ["Switzerland", "Bern"],
  ["Syria", "Damascus"], ["Tajikistan", "Dushanbe"],
  ["Tanzania", "Dodoma"], ["Thailand", "Bangkok"],
  ["Timor-Leste", "Dili"], ["Togo", "Lome"],
  ["Tonga", "Nuku'alofa"], ["Trinidad and Tobago", "Port of Spain"],
  ["Tunisia", "Tunis"], ["Turkey", "Ankara"],
  ["Turkmenistan", "Ashgabat"], ["Tuvalu", "Funafuti"],
  ["Uganda", "Kampala"], ["Ukraine", "Kyiv"],
  ["United Arab Emirates", "Abu Dhabi"], ["United Kingdom", "London"],
  ["United States", "Washington, D.C."], ["Uruguay", "Montevideo"],
  ["Uzbekistan", "Tashkent"], ["Vanuatu", "Port Vila"],
  ["Vatican City", "Vatican City"], ["Venezuela", "Caracas"],
  ["Vietnam", "Hanoi"], ["Yemen", "Sana'a"],
  ["Zambia", "Lusaka"], ["Zimbabwe", "Harare"]
];

const states = [
  ["Andhra Pradesh", "Amaravati"],
  ["Arunachal Pradesh", "Itanagar"],
  ["Assam", "Dispur"],
  ["Bihar", "Patna"],
  ["Chhattisgarh", "Raipur"],
  ["Goa", "Panaji"],
  ["Gujarat", "Gandhinagar"],
  ["Haryana", "Chandigarh"],
  ["Himachal Pradesh", "Shimla"],
  ["Jharkhand", "Ranchi"],
  ["Karnataka", "Bengaluru"],
  ["Kerala", "Thiruvananthapuram"],
  ["Madhya Pradesh", "Bhopal"],
  ["Maharashtra", "Mumbai"],
  ["Manipur", "Imphal"],
  ["Meghalaya", "Shillong"],
  ["Mizoram", "Aizawl"],
  ["Nagaland", "Kohima"],
  ["Odisha", "Bhubaneswar"],
  ["Punjab", "Chandigarh"],
  ["Rajasthan", "Jaipur"],
  ["Sikkim", "Gangtok"],
  ["Tamil Nadu", "Chennai"],
  ["Telangana", "Hyderabad"],
  ["Tripura", "Agartala"],
  ["Uttar Pradesh", "Lucknow"],
  ["Uttarakhand", "Dehradun"],
  ["West Bengal", "Kolkata"],
  ["Andaman and Nicobar Islands", "Port Blair"],
  ["Chandigarh", "Chandigarh"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Daman"],
  ["Delhi", "New Delhi"],
  ["Jammu and Kashmir", "Srinagar (summer), Jammu (winter)"],
  ["Ladakh", "Leh"],
  ["Lakshadweep", "Kavaratti"],
  ["Puducherry", "Puducherry"]
];

function renderTable(data, tableId, query = "") {
  const table = document.getElementById(tableId);
  const q = query.trim().toLowerCase();
  const filtered = data.filter(row =>
    row.some(value => value.toLowerCase().includes(q))
  );

  table.innerHTML = filtered.map((row, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
    </tr>
  `).join("");

  return filtered.length;
}

function updateCountries() {
  const q = document.getElementById("countrySearch").value;
  const count = renderTable(countries, "countryTable", q);
  document.getElementById("countryCount").textContent =
    `${count} results found`;
}

function updateStates() {
  renderTable(
    states,
    "stateTable",
    document.getElementById("stateSearch").value
  );
}

document.getElementById("countrySearch").addEventListener("input", updateCountries);
document.getElementById("stateSearch").addEventListener("input", updateStates);

updateCountries();
updateStates();

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

// Geography quiz
const quizQuestions = [
  { q: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: "Tokyo" },
  { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { q: "What is the capital of Rajasthan?", options: ["Jodhpur", "Jaipur", "Udaipur", "Ajmer"], answer: "Jaipur" },
  { q: "What is the capital of France?", options: ["Rome", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
  { q: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
  { q: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"], answer: "Brasilia" },
  { q: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: "New Delhi" },
  { q: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" }
];

let quizOrder = [];
let quizIndex = 0;
let quizPoints = 0;
let quizAnswered = false;

const questionElement = document.getElementById("quizQuestion");
const optionsElement = document.getElementById("quizOptions");
const feedbackElement = document.getElementById("quizFeedback");
const progressElement = document.getElementById("quizProgress");
const scoreElement = document.getElementById("quizScore");
const nextButton = document.getElementById("nextQuestion");
const startButton = document.getElementById("startQuiz");

function startQuiz() {
  quizOrder = [...quizQuestions].sort(() => Math.random() - 0.5);
  quizIndex = 0;
  quizPoints = 0;
  startButton.hidden = true;
  scoreElement.textContent = "";
  showQuestion();
}

function showQuestion() {
  quizAnswered = false;
  feedbackElement.textContent = "";
  nextButton.hidden = true;
  const item = quizOrder[quizIndex];
  progressElement.textContent =
    `Question ${quizIndex + 1} of ${quizOrder.length}`;
  questionElement.textContent = item.q;
  optionsElement.innerHTML = "";

  item.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(button, option));
    optionsElement.appendChild(button);
  });
}

function answerQuestion(button, option) {
  if (quizAnswered) return;
  quizAnswered = true;
  const correct = quizOrder[quizIndex].answer;

  [...optionsElement.children].forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });

  if (option === correct) {
    quizPoints++;
    feedbackElement.textContent = "Correct answer!";
  } else {
    button.classList.add("wrong");
    feedbackElement.textContent = `Correct answer: ${correct}`;
  }

  if (quizIndex < quizOrder.length - 1) {
    nextButton.hidden = false;
  } else {
    scoreElement.textContent =
      `Quiz complete! Your score: ${quizPoints}/${quizOrder.length}`;
    startButton.textContent = "Play Again";
    startButton.hidden = false;
  }
}

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", () => {
  quizIndex++;
  showQuestion();
});

// Notes are stored in this browser using localStorage
const NOTES_KEY = "4nizz-study-hub-notes";

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function showNotes() {
  const notes = getNotes();
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  if (notes.length === 0) {
    list.textContent = "No notes saved yet.";
    return;
  }

  notes.forEach(note => {
    const card = document.createElement("article");
    card.className = "note-card";

    const title = document.createElement("h3");
    title.textContent = note.title;

    const content = document.createElement("p");
    content.textContent = note.text;

    const date = document.createElement("p");
    date.className = "muted small";
    date.textContent = note.date;

    const remove = document.createElement("button");
    remove.className = "delete-note";
    remove.textContent = "Delete note";
    remove.addEventListener("click", () => {
      saveNotes(getNotes().filter(item => item.id !== note.id));
      showNotes();
    });

    card.append(title, content, date, remove);
    list.appendChild(card);
  });
}

document.getElementById("saveNote").addEventListener("click", () => {
  const titleInput = document.getElementById("noteTitle");
  const textInput = document.getElementById("noteText");
  const message = document.getElementById("noteMessage");
  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (!title || !text) {
    message.textContent = "Please enter both a title and note.";
    return;
  }

  const notes = getNotes();
  notes.unshift({
    id: Date.now(),
    title,
    text,
    date: new Date().toLocaleString()
  });

  saveNotes(notes);
  titleInput.value = "";
  textInput.value = "";
  message.textContent = "Note saved!";
  showNotes();
});

showNotes();

// Calculator
const display = document.getElementById("calcDisplay");
let expression = "";

document.querySelectorAll("[data-calc]").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.calc;

    if (value === "C") {
      expression = "";
      display.value = "0";
      return;
    }

    if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.value = expression || "0";
      return;
    }

    if (value === "=") {
      if (!expression || !/^[0-9+\-*/(). ]+$/.test(expression)) {
        display.value = "Error";
        expression = "";
        return;
      }

      try {
        const result = Function('"use strict"; return (' + expression + ')')();
        if (!Number.isFinite(result)) throw new Error("Invalid result");
        expression = String(result);
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
      return;
    }

    expression += value;
    display.value = expression;
  });
});