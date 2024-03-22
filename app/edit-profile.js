import User from "../src/user.js";
import Authenticator from "../src/authenticator.js";

/* Regex for email and telephone number  */
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const telRegex = /^\d+$/;

/* Taking inputs from html */
let emailInput = document.querySelector("#email");
let telInput = document.querySelector(".tel-edit");
let nameInput = document.querySelector("#username");
let addressInput = document.querySelector("#address");
let labelName = document.querySelector("#label-name");

/* getting current user from authenticator */
const currentUser = Authenticator.currentUser();
const user = new User(currentUser);
labelName.innerHTML = user.name; /* changing label's name dynamically */

/* To populate data */
nameInput.value = user.name;
emailInput.value = user.email;
telInput.value = user.phoneNum;
addressInput.value = user.address;

/* function to validate form and used when clicking the button  */
function validateForm(e) {
  e.preventDefault();

  removeErrorMessages();

  let hasError = false;

  /*Email validation*/
  if (!emailRegex.test(emailInput.value)) {
    const emailErrorMessage = createErrorMessage("Invalid Email Format");
    emailInput.parentNode.appendChild(emailErrorMessage);
    hasError = true;
  }

  /* Telephone Number validation*/
  if (!telRegex.test(telInput.value)) {
    const telErrorMessage = createErrorMessage("Enter Numbers Only");
    telInput.parentNode.appendChild(telErrorMessage);
    hasError = true;
  }

  if (!hasError) {
    /* Assigning new inputs "updated user" */
    let updatedUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: user.password,
      phoneNum: telInput.value,
      address: addressInput.value,
    };

    User.updateUser(currentUser, updatedUser);
    labelName.innerHTML = nameInput.value;
    window.location.href = "profile";
  }
}

/* Creates the error message needed and passed in 'message' */
function createErrorMessage(message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("text-danger");
  errorMessage.innerHTML = message;
  return errorMessage;
}

/* Remove previous error messages */
function removeErrorMessages() {
  const errorMessages = document.querySelectorAll(".text-danger");
  errorMessages.forEach((errorMessage) => {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}

/* event listener to make the function when clicking the button */
const btn = document.querySelector(".btn-edit");
btn.addEventListener("click", validateForm);
