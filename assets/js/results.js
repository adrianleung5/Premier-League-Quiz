const result = +localStorage.getItem("result");
const username = localStorage.getItem("username");
const score = document.getElementById("score");
const resultSection =document.getElementById("results_note");
const navigate = document.getElementById("back_to_home");
const trophy = document.getElementById("trophy");

// event listeners
navigate.addEventListener("click", redirectPage);

// functions
function redirectPage () {
 return window.location.assign ("index.html");
}

if (result<=50) {
    trophy.setAttribute("style", "color: #4d4b48")
    resultSection.innerHTML=`<p> Sorry <strong> ${username} </strong> you ll need to better. Do you call yourself a football fan?</p>`;
    score.innerHTML=`<p class = "fail"> ${result}% </p> `;
}

else if (result>=50 && result<=75 ) {
    trophy.setAttribute("style", "color: silver")
    resultSection.innerHTML=`<p> not bad <strong> ${username} </strong> Well done you are quite knowledgeable!</p>`;
    score.innerHTML=`<p class = "average"> ${result}% </p> `;
}

else {
    trophy.setAttribute("style", "color: gold")
    resultSection.innerHTML=`<p> Awesome <strong> ${username} </strong> Excellent you a true fan! </p>`;
    score.innerHTML=`<p class = "excellent"> ${result}% </p> `;
}
