var questionEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var titleEl = document.getElementById("title-page");
var buttonEl = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var score = 0;
var time = null;
var count = 90;
var currentQuestionIndex = 0;
var myQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with:",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answers: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answers: [
            "Javascript",
            "Terminal/bash",
            "For loops",
            "Console.log"
        ],
        correctAnswer: "Console.log"
    }
];


function timeInterval () {
    timerEl.innerHTML = "<p> Time left:" + count + " seconds</p>"
    count--;
    if (count == 0) {
        endGame ();
    }
}

function startTimer () {
    time = setInterval(timeInterval, 1000);
}

var selectedAnswer = function () {
    if (this.textContent == myQuestions[currentQuestionIndex].correctAnswer) {
        window.alert("Correct!")
    }
    else {
        window.alert("Wrong!")
        count -= 10;
    }
    nextQuestion();
}

var displayAnswers = function() {
    answersEl.innerHTML = "";
    for (let i = 0; i < myQuestions[currentQuestionIndex].answers.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.onclick = selectedAnswer;
        answerButton.textContent = myQuestions[currentQuestionIndex].answers[i];
        answersEl.appendChild(answerButton);
    }
}

function nextQuestion () {
    currentQuestionIndex++; 
    if (currentQuestionIndex >= myQuestions.length) {
        endGame();
    }
    else {
        questionEl.textContent = myQuestions[currentQuestionIndex].question;
        displayAnswers();
    }
}

function endGame () {
    window.prompt("Game Over! Enter your initials to save your score!");
    score = count;
    localStorage.setItem("score", score);

}

buttonEl.onclick = function() {
    startTimer ();
    titleEl.style.display = "none";
    questionEl.textContent = myQuestions[currentQuestionIndex].question;
    answersEl.textContent = "";
    displayAnswers();
}


