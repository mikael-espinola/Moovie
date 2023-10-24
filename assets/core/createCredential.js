import { credentials } from "./mocks.js";
import { createPage } from "./registerDialogs.js";

let userPassword = document.querySelector("#register-password-input");
let secondPassword = document.querySelector("#register-repeat-password-input");
let theForm = document.querySelector(".register-form");

theForm.onsubmit = (e) => {
  e.preventDefault();

  if (userPassword.value === secondPassword.value) {
    const user = {
      nome: e.target.name.value.trim(),
      sobrenome: e.target.lastName.value.trim(),
      idade: e.target.age.value,
      email: e.target.email.value.trim(),
      senha: e.target.password.value,
    };

    credentials.push(user);

    theForm.reset();
    alert(
      `Usuário cadastrado com sucesso!\nSeja bem-vindo(a) ${user.nome} ${user.sobrenome}\n\nFaça o login para aproveitar!`
    );
    createPage.close();
  } else {
    alert("Senha errada!");
    theForm.reset();
  }
};
