import User from "../src/user.js";
import Authenticator from "../src/authenticator.js";
import Storage from "../src/storage.js";

// window.location.reload();

// (function () {
// needs to be checked for refreshing page
const nameLabel = document.querySelector(".label-name");
const nameInput = document.querySelector(".text-name");
const email = document.querySelector("#email");
const phoneNum = document.querySelector("#phoneNum");
const address = document.querySelector("#city");

const currentUser = Authenticator.currentUser();
console.log(currentUser);

const user = new User(currentUser);
console.log(user);

const storage = new Storage("users");
if (storage.exists(currentUser)) {
  nameLabel.innerHTML = user.name;
  nameInput.innerHTML = user.name;
  phoneNum.innerHTML = user.phoneNum;
  address.innerHTML = user.address;
  email.innerHTML = user.email;
} else {
  console.log("ayhaga");
}
// })();
