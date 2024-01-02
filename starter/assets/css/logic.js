const startContainer = document.getElementById("start-screen");
const questionElement = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const answerList = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

startContainer.addEventListener("click", startGame);

// have a timer function making use of the setInterval in js
let timer;
let seconds = 0;

function startTimer() {
  timer = setInterval(function () {
    seconds--;
    console.log(seconds);

    if (seconds <= 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

startTimer();

// clearInterval() to stop the timer whe time hits 0

function startGame() {
  startContainer.classList.add("hide");
  questionElement.classList.remove("hide");

  setNextQuestion();
  // call the timer function in here
}

function setNextQuestion() {
  answerList.innerHTML = "";
  showQuestion();
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
    currentQuestionIndex++;
    setNextQuestion();
  } else {
    seconds -= 10;
    if (seconds < 0) {
      seconds = 0;
    }
    console.log("Wrong answer! 10 seconds deducted.");
  }
}
