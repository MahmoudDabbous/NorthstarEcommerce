import Authenticator from "../src/authenticator.js";

const form = document.querySelector("#app #login form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const result = Authenticator.login(email, password);
  if (result) {
    window.location.href = window.location.origin + "/profile";
  } else {
    const error = document.getElementById("form-error");
    error.classList.remove("d-none");
    error.innerHTML = "Invalid email or password";
  }
});
