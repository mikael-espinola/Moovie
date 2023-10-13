const openLoginButton = document.querySelector("#user-login");
const loginPage = document.querySelector("#login-page");
const closeLoginButton = document.querySelector("#close-dialog-login");

openLoginButton.onclick = () => {
  loginPage.showModal();
};

closeLoginButton.onclick = () => {
  loginPage.close();
};
