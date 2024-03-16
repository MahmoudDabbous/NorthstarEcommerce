import Authenticator from "../src/authenticator.js";

const form = document.querySelector("#app #register form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const result = Authenticator.register(email, { password, name, cart: [], wishlist: [] });
    if (result) {
        window.location.href = "/ITI-Javascrit-Project/login";
    } else {
        const error = document.getElementById("form-alert");
        error.innerHTML = "User already exists";
        error.classList.remove("d-none");
    }
});
