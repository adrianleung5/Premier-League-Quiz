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


const allQuizQuestions = [
    {
        question: "Q1. At the end of which season did Sir Alex Ferguson retire?", 
        optionA: "A - 2010", 
        optionB: "B - 2012",
        optionC: "C - 2009",
        optionD: "D - 2014",
        correctAnswer: "B"
    },

    {
        question: "Q2. Who is currently the longest serving manager in the Premier League in their current club?", 
        optionA: "A - David Moyes", 
        optionB: "B - Jurgen Klopp",
        optionC: "C - Pep Guardiola",
        optionD: "D - Brenden Rodgers",
        correctAnswer: "B"
    },

    {
        question: "Q3. Who has the second highest record number of goals from midfield in the Premier League?", 
        optionA: "A - Yaya Toure", 
        optionB: "B - David Beckham",
        optionC: "C - Matt Le Tissier",
        optionD: "D - Paul Scholes",
        correctAnswer: "A"
    },

    {
        question: "Q4. Who has the highest number of assits in the premier league?", 
        optionA: "A - Thierry Henry", 
        optionB: "B - Steven Gerrard",
        optionC: "C - Ryan Giggs",
        optionD: "D - Cesc Fabregas",
        correctAnswer: "C"
    },

    {
        question: "Q5. When year did Arsene Wenger make his managerial debut?", 
        optionA: "A - 1994", 
        optionB: "B - 1998",
        optionC: "C - 1996",
        optionD: "D - 1993",
        correctAnswer: "C"
    },

    {
        question: "Q6. When season did Alan Shearer set the record for the highest premier league goals in a season?", 
        optionA: "A - 1993", 
        optionB: "B - 1996",
        optionC: "C - 2000",
        optionD: "D - 1994",
        correctAnswer: "D"
    },

    {
        question: "Q7. What player has the record amount of red cards in the premier league?", 
        optionA: "A - Duncan Ferguson", 
        optionB: "B - Patrick Viera",
        optionC: "C - Roy Keane",
        optionD: "D - Richard Dunne",
        correctAnswer: "A"
    },

    {
        question: "Q8. What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    },
    {
        question: "Q9. What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    },
    {
        question: "10. What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    },

    {
        question: "11. What player the highest amount of premier league appearances?", 
        optionA: "A - Ryan Giggs", 
        optionB: "B - James Milner",
        optionC: "C - Frank Lampard",
        optionD: "D - Gareth Barry",
        correctAnswer: "D"
    }

]
// shuffling the original array
const shuffleArray = allQuizQuestions.sort(()=> 0.5 - Math.random());
const quizQuestions = shuffleArray.slice(0,8)
let currentQuestion = 0;
let counter = 75;


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

let totalCorrectAnswer = 0;
function checkAnswer (option) {
    const selectedAnswer = document.getElementById(option);
    const questions = quizQuestions[currentQuestion];
    const correctAnswer = document.getElementById (questions.correctAnswer) 
    if (selectedAnswer.innerText===correctAnswer.innerText) {
        selectedAnswer.style.backgroundColor="green"; 
        totalCorrectAnswer++;
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
    const result = (totalCorrectAnswer/8) *100;
    // store the variable result which can be accessed by another js file
    localStorage.setItem("result",result.toString());
    const username = checkInput.value;
    localStorage.setItem("username", username);
    // redirect user to results page

    window.location = "results.html"
}

document.addEventListener("DOMContentLoaded", function () {
    getQuizQuestions();
})

