function startQuiz() {
  const startScreen = document.getElementById("start-screen");
  startScreen.style.display = "none";
  questions.style.display = "flex";
}

const startButton = document.getElementById("start");

startButton.addEventListener("click", startQuiz);
