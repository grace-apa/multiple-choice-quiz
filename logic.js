const startContainer = document.getElementById("start-screen");
const questionElement = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const answerList = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const endscreenElement = document.getElementById("end-screen");
const counterTime = document.querySelector(".count");
let highScore = 0;

let currentQuestionIndex = 0;

startContainer.addEventListener("click", startGame);

let timer;
let count;

function stopTimer() {
  clearInterval(timer);
}

function startGame() {
  count = 60;
  startContainer.classList.add("hide");
  questionElement.classList.remove("hide");
  setNextQuestion();
  startTimer();
}

function setNextQuestion() {
  answerList.innerHTML = "";
  showQuestion();
}

function startTimer() {
  timer = setInterval(function () {
    count--;
    counterTime.textContent = count;
    console.log("time remaining", count);
    if (count === 0) {
      clearInterval(timer);
      window.alert("Time's up!");
      finishGame();
    }
  }, 1000);
}
function showQuestion() {
  questionTitle.innerText = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerList.appendChild(button);
  });
}

function selectAnswer(event) {
  if (event.target.dataset.correct === "true") {
    highScore += 5;
    currentQuestionIndex++;
    setNextQuestion();
    // if (questions[4] === "true" || "false") {
    //   console.log("Finished game");
    //   finishGame();
  } else {
    count -= 10;
    console.log("Wrong answer! 10 seconds deducted.");
  }

  function finishGame() {
    localStorage.setItem("recentScore", highScore);
    return (window.location.href = "finalPage.html");
  }
}
