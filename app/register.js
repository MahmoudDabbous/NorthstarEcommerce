import Authenticator from "../src/authenticator.js";

const form = document.querySelector("#app #register form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const phoneNum = form.phoneNum.value;
  const address = form.address.value;
  const name = `${firstName} ${lastName}`;
  const result = Authenticator.register(email, {
    password,
    name,
    cart: [],
    wishlist: [],
    address,
    phoneNum,
  });
  if (result) {
    window.location.href = "/login";
  } else {
    const error = document.getElementById("form-error");
    error.innerHTML = "User already exists";
    error.classList.remove("d-none");
  }
});
