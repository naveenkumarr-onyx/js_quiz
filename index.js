var quizData = [
  {
    question: "HTML stands for",
    a: "Hypertext Markup Language",
    b: "Hypertest Markup Language",
    c: "Hypertest Markdown Language",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "CSS stands for",
    a: "Cascading style sheets",
    b: "Cascade style sheets",
    c: "cascadding styling sheet",
    d: "none",
    correct: "a",
  },
  {
    question: "react is a libary of",
    a: "Python",
    b: "Javascript",
    c: "C++",
    d: "C",
    correct: "b",
  },
  {
    question: "Bootstrap is mainly used for",
    a: "less time consume compare manual code",
    b: "responsive design",
    c: "More complex ",
    d: "Copy and paste the code",
    correct: "b",
  },
];

var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("questions");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");
var btn = document.getElementById("btn");

var currentQuestion = 0;
var score = 0;
loadQuiz();

function loadQuiz() {
  deselect();
  question.innerHTML = quizData[currentQuestion].question;
  option_a.innerText = quizData[currentQuestion].a;
  option_b.innerText = quizData[currentQuestion].b;
  option_c.innerText = quizData[currentQuestion].c;
  option_d.innerText = quizData[currentQuestion].d;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

btn.addEventListener("click", () => {
  var selectedOption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedOption = answer.id;
    }
  });
  if ((selectedOption = quizData[currentQuestion].correct)) {
    score = score + 1;
  }
  currentQuestion = currentQuestion + 1;
  if (currentQuestion == quizData.length) {
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<h1>You have answered ${score}correctly out of ${quizData.length}</h1>`;
  } else {
    loadQuiz();
  }
});
