const modalBox = document.getElementById("instructions_box");
const instructions_button = document.getElementById("instruction_btn");
const closeIcon=  document.getElementsByClassName("close-modal")[0];

// event listeners
instructions_button.addEventListener("click", showModal) ;
closeIcon.addEventListener("click", closeModal);


// homepage functions
function showModal() {
    modalBox.style.display="block";
}
function closeModal () {
modalBox.style.display= "none";
}