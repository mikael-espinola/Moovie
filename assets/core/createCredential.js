import { credentialsList } from "./credentials.js";
import { createPage } from "./dialogRegister.js";
import { resetRegisterInput } from "./resetRegisterInput.js";

let userFirstName = document.querySelector("#register-first-name-input");
let userLastName = document.querySelector("#register-last-name-input");
let userAge = document.querySelector("#register-age-input");
let userEmail = document.querySelector("#register-email-input");
let userPassword = document.querySelector("#register-password-input");
let secondPassword = document.querySelector("#register-repeat-password-input");
let saveRegisterButton = document.querySelector("#register-button");

saveRegisterButton.onclick = (e) => {
  e.preventDefault();

  if (userPassword.value === secondPassword.value) {
    const user = [
      {
        nome: userFirstName.value.trim(),
        sobrenome: userLastName.value.trim(),
        idade: userAge.value,
        email: userEmail.value.trim(),
        senha: userPassword.value,
      },
    ];

    credentialsList.push(user[0]);

    resetRegisterInput(e);
    createPage.close();
  } else {
    console.log("Senha errada!");
    resetRegisterInput();
  }
};
