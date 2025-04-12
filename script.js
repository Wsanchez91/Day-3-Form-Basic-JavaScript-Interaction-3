const signUpBtn = document.querySelector("#signup-btn");
const usernameInput = document.querySelector("#username-input");
const usernameError = document.querySelector("#username .error");
const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password .error");
const confirmInput = document.querySelector("#password-input-confirm");
const confirmError = document.querySelector("#password-confirm .error");
const success = document.querySelector(".success");
const form = document.querySelector("#form");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  usernameError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  let valid = true;
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Please enter a username";
    usernameInput.classList.add("error");
    valid = false;
  } else {
    usernameInput.classList.remove("error");
  }
  if (!regex.test(passwordInput.value) || passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters and contain both a letter and a number.";
    passwordInput.classList.add("error");
    valid = false;
  } else {
    passwordInput.classList.remove("error");
  }
  if (confirmInput.value !== passwordInput.value) {
    confirmError.textContent = "Does not match password";
    confirmInput.classList.add("error");
    valid = false;
  } else {
    confirmInput.classList.remove("error");
  }
  if (valid) {
    success.textContent = "You have successfully created your account";
    form.reset();
    setTimeout(() => {
        success.textContent = "";
      }, 4000);
  }
});
