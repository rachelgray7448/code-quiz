var questionEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var titleEl = document.getElementById("title-page");
var buttonEl = document.getElementById("start-button");
var timerEl = document.getElementbyId("timer");
var score = 0;
var time = 0;

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


var timeInterval = setInterval(function() {

})

var currentQuestionIndex = 0;

var selectedAnswer = function () {
    console.dir(this);
    console.log(this.textContent);
    console.log(myQuestions[currentQuestionIndex].correctAnswer);
    if (this.textContent == myQuestions[currentQuestionIndex].correctAnswer) {
        window.alert("Correct!")
        currentQuestionIndex++1
    }
    else {
        window.alert("Wrong!")
    }
    
}



var displayAnswers = function() {
    for (let i = 0; i < myQuestions[currentQuestionIndex].answers.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.onclick = selectedAnswer;
        answerButton.textContent = myQuestions[currentQuestionIndex].answers[i];
        answersEl.appendChild(answerButton);
    }
}


buttonEl.onclick = function() {
    titleEl.style.display = "none";
    buttonEl.textContent = "Next";
    console.dir(questionEl); 
    questionEl.textContent = myQuestions[currentQuestionIndex].question;
    answersEl.textContent = "";
    displayAnswers();
}


