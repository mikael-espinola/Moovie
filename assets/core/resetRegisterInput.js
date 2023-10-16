export const resetRegisterInput = (e) => {
  e.preventDefault();

  document.querySelector("#register-first-name-input").value = "";
  document.querySelector("#register-last-name-input").value = "";
  document.querySelector("#register-age-input").value = "";
  document.querySelector("#register-email-input").value = "";
  document.querySelector("#register-password-input").value = "";
  document.querySelector("#register-repeat-password-input").value = "";
  document.querySelector("#register-button").value = "";
};
