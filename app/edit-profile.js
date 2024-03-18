const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const telRegex = /^\d+$/;

const emailInput = document.querySelector("#email");
const telInput = document.querySelector(".tel-edit");

function validateForm(e) {
  e.preventDefault();

  removeErrorMessages();

  /*Email validation*/
  if (!emailRegex.test(emailInput.value)) {
    const emailErrorMessage = createErrorMessage("Invalid Email Format");
    emailInput.parentNode.appendChild(emailErrorMessage);
  }

  /* Telephone Number validation*/
  if (!telRegex.test(telInput.value)) {
    const telErrorMessage = createErrorMessage("Enter Numbers Only");
    telInput.parentNode.appendChild(telErrorMessage);
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

const btn = document.querySelector(".btn-edit");
btn.addEventListener("click", validateForm);
