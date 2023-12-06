var questions = [
    {
      question: "WWhat does the acronym DOM stand for in JavaScript?",
      option1: "Document Object Model", 
      option2:"Data Object Model", 
      option3:"Document Order Model", 
      option4:"Dynamic Object Manipulation",
      correctAnswer: "Document Object Model"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      option1: "var myVar", 
      option2:"let myVar", 
      option3:"const myVar", 
      option4:"All of the above",
      correctAnswer: "All of the above"
    },
    {
        question: "What does the === operator do in JavaScript?",
        options: ["Assigns a value to a variable", "Compares values for equality without type coercion", "Compares values for equality with type coercion", "Concatenates two strings"],
        correctAnswer: "Compares values for equality without type coercion"
      },
    
      {
        question: "How do you include an external JavaScript file in an HTML document?",
        options: ["<js src=script.js>", "<script href=script.js>", "<script src=script.js>","<link rel=script href=script.js>"],
        correctAnswer: "<script src=script.js>"
      },

      {
        question: "Which keyword is used to define a function in JavaScript?",
        options: ["function", "def", "func", "method"],
        correctAnswer: "function"
      },
    
      {
        question: "How can you comment a single line in JavaScript?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "' This is a comment"],
        correctAnswer: "// This is a comment"
      },
];

const question = document.querySelector("#questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const counter  = document.querySelector(".timer");
const questionTime = 10; //sets 10 secs for every question
const lastQuestion = questions.length -1;
let currentQuestion = 0;
let score = 0;
let count = 0;
let timer;
document.getElementById("start").addEventListener("click", function() {
    var timeleft = 80;

   var downloadTimer = setInterval(function function1(){
        document.getElementById("time").innerHTML = timeleft + 
        "&nbsp" + "seconds remaining";

        timeleft--;
        if (timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("time").innerHTML = "Game Over"
        }
    }, 1000);
    console.log(countdown);

});





function startQuiz(){
renderQuestion();
renderCounter();

timer = setInterval(renderCounter,1000)
}


function renderQuestion(){
   let q = questions[currentQuestion];

   question.innerHTML = "<p>"+q.question+"</p>"
   option1.innerHTML = q.option1;
   option2.innerHTML = q.option2;
   option3.innerHTML = q.option3;
   option4.innerHTML = q.option4;
}

function renderCounter(){
  if(count <= questionTime) {
    counter.innerHTML = count;
    count++
  } else{
    count = 0;
  }
}

startButton.addEventListener("click", startGame)

