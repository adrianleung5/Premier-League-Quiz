const welcome = document.getElementById("welcome");
const checkInput = document.getElementById("quiz_username");
const quizButton = document.getElementById("quiz_button")
const modalBox = document.getElementById("username");
const nextButton =document.getElementById("next_button");
const quizSection =document.getElementById("quiz") ; 

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD")


const quizQuestions = [
    {
        question: "Q1. When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2012",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "Q2 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "Q3 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "4 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "5 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "6 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "7 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "8 When year did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2013",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    }

]
let currentQuestion = 0;
let counter = 70;


// event listeners
quizButton.addEventListener("click", hideModal)



// functions
function hideModal () {
    if (checkInput.value.length>0) {
        modalBox.style.display="none";
        startQuiz();
    }

}
// starting quiz from here
function startQuiz () {
    document.getElementById("progress-bar").setAttribute("style", `width:${0}%`)
    quizSection.style.display = "block";
    const interval = setInterval(function () {
        welcome.innerHTML = `Hello ${checkInput.value} you have ${counter} seconds left!`;
        counter--;
        if (counter < 15) {
            welcome.style.color = "red";
        }
        if (counter === -1) {
            clearInterval(interval);
            // Redirect user to result page
            window.location = "../timeout.html";
        }
    }, 1000)

}

// get the questions and options
function getQuizQuestions () {
    document.getElementById("progress_number").innerHTML=`question ${currentQuestion+1} of 8 `
    const questions = quizQuestions [currentQuestion];
    question.innerHTML = "<h1>" + questions.question +" </h1>";
    optionA.innerHTML = "<p class = 'option' id = 'A'>" + questions.optionA + "</p>" ; 
    optionB.innerHTML =  "<p class = 'option' id ='B'>" + questions.optionB + "</p>" ;
    optionC.innerHTML = "<p class = 'option' id = 'C'>" + questions.optionC + "</p>" ;
    optionD.innerHTML = "<p class = 'option' id = 'D'>" + questions.optionD + "</p>" ;

    if (currentQuestion === 7) {
        document.querySelector("#next_button").innerHTML="View Results"
    } 

    optionA.style.pointerEvents="auto";
    optionB.style.pointerEvents="auto";
    optionC.style.pointerEvents="auto";
    optionD.style.pointerEvents="auto";
    nextButton.setAttribute("disabled" ,"true");

   
} 

function checkAnswer (option) {
    const selectedAnswer = document.getElementById(option);
    const questions = quizQuestions[currentQuestion];
    const correctAnswer = document.getElementById (questions.correctAnswer) 
    if (selectedAnswer.innerText===correctAnswer.innerText) {
        selectedAnswer.style.backgroundColor="green"; 
    }
    else {
        selectedAnswer.style.backgroundColor="red";
        correctAnswer.style.background="green";
    
    }
    optionA.style.pointerEvents="none";
    optionB.style.pointerEvents="none";
    optionC.style.pointerEvents="none";
    optionD.style.pointerEvents="none";
    nextButton.removeAttribute("disabled");
    currentQuestion++; // incrementing to next question
}

function nextQuestion () {
    const progress= ((currentQuestion)/8)*100;
    document.getElementById("progress-bar").setAttribute("style", `width:${progress}%`)
    if (currentQuestion===8) {
        getResult(); 
    }
    else {
        getQuizQuestions();
    }
}

 function getResult () {
    window.location = "../result.html"
}

document.addEventListener("DOMContentLoaded", function () {
    getQuizQuestions();
})

