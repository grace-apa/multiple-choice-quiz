const startButton = document.getElementById("start");

function startQuiz() {
  startScreen.style.display = "none";
}

questionsDiv.classList.remove("hide");

startButton.addEventListener("click", startQuiz);
