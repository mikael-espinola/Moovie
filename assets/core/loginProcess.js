import { credentials } from "./mocks.js";
import { loginPage } from "./registerDialogs.js";

const exitLogin = document.querySelector(".logoff-button--hidden");
const form = document.querySelector(".form-box--login");
let loginUserName = document.querySelector("#user-name");

form.onsubmit = (event) => {
  event.preventDefault();

  const currentUserEmail = event.target.user.value.trim();
  const currentPassword = event.target.password.value;

  const user = credentials.find(
    ({ email, senha }) =>
      email === currentUserEmail && senha === currentPassword
  );

  if (user) {
    exitLogin.classList.remove("logoff-button--hidden");
    form.reset();
    loginPage.close();

    const userToLocal = JSON.stringify(user);
    localStorage.setItem("user", userToLocal);

    let userFromLocal = localStorage.getItem("user");
    if (userFromLocal) {
      const currentUserName = JSON.parse(userFromLocal);

      loginUserName.textContent = currentUserName.nome;
    }
  } else {
    alert("Usuáro inválido!");
    form.reset();
  }
};

exitLogin.onclick = () => {
  localStorage.removeItem("user");
  loginUserName.textContent = "Login";
  exitLogin.classList.add("logoff-button--hidden");
};
