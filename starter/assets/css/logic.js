const startButton = document.getElementById("start");
const questionElement = document.getElementById("questions");

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionElement.classList.remove("hide");
}

function setNextQuestion() {}

function selectAnswer() {}

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

// startButton.addEventListener("click", startQuiz);
