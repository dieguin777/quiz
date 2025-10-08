
const questions = [
  {
    question: "Quem é melhor?",
    answers: ["vinijr", "neymar", "endrick", "cassio"],
    correct: 1
  },
  {
    question: "qual orgão bombeia sanhgue?",
    answers: ["cerebro", "coração", "pulnão", "olhos"],
    correct: 1
  },
  {
    question: "quantos dedos tem no pe?",
    answers: ["44", "10", "11", "90"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    const li = document.createElement("li");
    li.appendChild(btn);
    answersEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.style.backgroundColor = "#28a745";
      btn.style.color = "#fff";
    } else if (index === selected) {
      btn.style.backgroundColor = "#dc3545";
      btn.style.color = "#fff";
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas! 🎉`;
}

// Inicializa o quiz
showQuestion();