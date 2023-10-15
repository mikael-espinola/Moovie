import { credentialsList } from "./credentials.js";
import { loginPage } from "./dialogLogin.js";

const loginUserName = document.querySelector("#user-name");
export const userInput = document.querySelector("#input-user");
export const passwordInput = document.querySelector("#input-password");
export const buttonInput = document.querySelector("#enter-button-login");
const exitLogin = document.querySelector(".logoff");

exitLogin.style.display = "none";

// porquê só aqui o display funcionou

console.log(credentialsList);

buttonInput.onclick = (e) => {
  e.preventDefault();

  credentialsList.forEach((user) => {
    let currentUser = userInput.value;
    let currentPassword = passwordInput.value;
    if (currentUser === user.email && currentPassword === user.senha) {
      exitLogin.style.display = "inline";
      userInput.value = "";
      passwordInput.value = "";
      loginPage.close();

      const userToLocal = JSON.stringify(user);
      localStorage.setItem("user", userToLocal);
    }
  });
  userInput.value = "";
  passwordInput.value = "";

  let userFromLocal = localStorage.getItem("user");
  let currentUser = JSON.parse(userFromLocal);

  loginUserName.textContent = currentUser.nome;
};

exitLogin.onclick = () => {
  // criar dialog
  localStorage.removeItem("user");
  loginUserName.textContent = "Login";
  exitLogin.style.display = "none";
};
