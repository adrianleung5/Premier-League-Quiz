const modalBox = document.getElementById("instructions_box");
const instructions_button = document.getElementById("instruction_btn");
const closeIcon=  document.getElementsByClassName("close-modal")[0];
const getStartedButton = document.getElementById("lets_start_button");
const signUpBox = document.getElementById("signup_box")
const closeSignup = document.getElementsByClassName("close-signup")[0];
const form = document.getElementById("form")

// event listeners
instructions_button.addEventListener("click", showModal) ;
closeIcon.addEventListener("click", closeModal);
getStartedButton.addEventListener("click", redirect) 
closeSignup.addEventListener("click", closeSignupModal)
   
// homepage functions
function showModal() {
    modalBox.style.display="block";
}

function showSignupModal() {
    signUpBox.style.display="block";
}

function closeModal () {
modalBox.style.display= "none";
}

function closeSignupModal () {
    signUpBox.style.display= "none";
    form.reset();
    // bring user back to the quiz section
    window.scrollTo({top:0})
}

function redirect () {
    return window.location.assign("./quiz.html")
}

