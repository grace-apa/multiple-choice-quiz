const questions = [
  {
    question: "Commonly used data types DO not include:",
    answers: [
      { text: "1. Strings", correct: false },
      { text: "2. Booleans", correct: false },
      { text: "3. Alerts", correct: true },
      { text: "4. Numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: [
      { text: "1. Quotes", correct: false },
      { text: "2. Curly brackets", correct: false },
      { text: "3. Parenthesis", correct: true },
      { text: "4. Square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store_____.",
    answers: [
      { text: "1. Numbers and strings", correct: false },
      { text: "2. Other arrays", correct: false },
      { text: "3. Booleans", correct: false },
      { text: "4. All of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within_____ when being assigned to variables.",
    answers: [
      { text: "1. Commas", correct: false },
      { text: "2. Curly brackets", correct: false },
      { text: "3. Quotes", correct: true },
      { text: "4. Parenthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. Terminal/Bash", correct: false },
      { text: "3. For loops", correct: false },
      { text: "4. Console.log", correct: true },
    ],
  },
];

// First code:

// const questionElement = document.getElementById("questions");
// const answerButton = document.getElementById("choices");
// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionsNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionsNo + ". " + currentQuestion.questions;
// }

// currentQuestion.answers.forEach((answers) => {
//   const button = document.createElement("button");
//   button.innerHTML = answer.text;
//   button.classList.add("choices");
//   answersButtons.appendChild(button);
//   if (answers.correct) {
//     button.dataset.correct = answer.correct;
//     button.addEventListener("click", selectAnswer);
//   }
// });

// function selectAnswer(e) {
//   const selectedChoices = e.target;
//   const isCorrect = selectedChoices.dataset.correct === "true";

//   if (isCorrect) {
//     selectedChoices.classList.add("correct");
//     score++;
//   } else {
//     selectedChoices.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore() {
//   questionElement.innerHTML = "You scored ${score} out of ${questions.length}!";
//   nextButton.innerHTML = "Play again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });
// startQuiz();
