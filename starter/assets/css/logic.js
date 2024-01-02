const startButton = document.getElementById("start-screen");
const questionElement = document.getElementById("questions");
const questionList = document.getElementById("question");
const answerList = document.getElementById("choices");

startButton.addEventListener("click", startGame);

let currentQuestionIndex;

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionElement.classList.remove("hide");
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
}

function showQuestion(question) {
  questionList.innerText = question.question;
  question.answers.forEach;
  (answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answerList.appendChild(button);
    }
  };
}

function selectAnswer(e) {}

// First code:

// const startButton = document.getElementById("start");
// // const questionsScreen = document.getElementById("questions");

// function startQuiz() {
//   const startScreen = document.getElementById("start-screen");
//   startScreen.style.display = "none";
//   const questionsScreen = document.getElementById("questions");
//   questions.style.display = "flex";
//   questionsScreen.classList.remove("hide");
//   showQuestion();
// }

// startButton.addEventListener("click", startQuiz)
