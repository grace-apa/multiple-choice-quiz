const startButton = document.getElementById("start");
const questionsScreen = document.getElementById("questions");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  questionsScreen.classList.remove('hide')
  setNextQuestion()
  // const startScreen = document.getElementById("start-screen");
  // startScreen.style.display = "none";
  // const questionsScreen = document.getElementById("questions");
  // questions.style.display = "flex";
  // questionsScreen.classList.remove("hide");
  // showQuestion();
}

function setNextQuestion()







