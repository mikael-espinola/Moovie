const createButton = document.querySelector("#create-credential-button");
export const createPage = document.querySelector("#create-account-page");
const closeRegisterModal = document.querySelector(".cancel-button");

const openLoginButton = document.querySelector("#user-login");
export const loginPage = document.querySelector("#login-page");
const closeLoginButton = document.querySelector("#close-dialog-login");

const inputUserEmail = document.querySelector("#input-user");

createButton.onclick = () => {
  createPage.showModal();
};

closeRegisterModal.onclick = () => {
  createPage.close();
};

openLoginButton.onclick = () => {
  loginPage.showModal();
  inputUserEmail.focus();
};

closeLoginButton.onclick = () => {
  loginPage.close();
};
