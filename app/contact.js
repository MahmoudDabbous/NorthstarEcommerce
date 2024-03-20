var form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    var error = document.querySelector("#form-error");
    error.innerHTML = "Please fill in all the fields";
    error.removeAttribute("hidden");
    return;
  }
  document.querySelector(".form-div").innerHTML =
    "<h1>Thank You For Contacting Us</h1>";
  console.log(document.getElementsByClassName("form-div"));
});
