const modalBox = document.getElementById("instructions_box");
const instructions_button = document.getElementById("instruction_btn");
const closeIcon=  document.getElementsByClassName("close-modal")[0];
const getStartedButton = document.getElementById("lets_start_button");
const signUpBox = document.getElementById("signup_box")
const closeSignup = document.getElementsByClassName("close-signup")[0];
const form = document.getElementById("form")

/* event listeners */
instructions_button.addEventListener("click", showModal) ;
closeIcon.addEventListener("click", closeModal);
getStartedButton.addEventListener("click", redirect) 
closeSignup.addEventListener("click", closeSignupModal)
   
/* Homepage functions */

/** This method is used to display the instructions 
 * of the quiz on the landing page 
 */

function showModal() {
    modalBox.style.display="block";
}

/** This method is used to display the signup details
 * of the quiz on the landing page 
 */

function showSignupModal() {
    signUpBox.style.display="block";
}

/** This method is used to close the instructions
 * of the quiz on the landing page 
 */

function closeModal () {
modalBox.style.display= "none";
}

/** This method is used to close the signup details
 * of the quiz on the landing page 
 */

function closeSignupModal () {
    signUpBox.style.display= "none";
    form.reset();
    // bring user back to the quiz section
    window.scrollTo({top:0})
}

/** This method is used to redirect 
 * the user to the quiz page
 */

function redirect () {
    return window.location.assign("./quiz.html")
}

