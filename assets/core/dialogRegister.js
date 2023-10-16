const createButton = document.querySelector("#create-credential-button");
export const createPage = document.querySelector("#create-account-page");
const closeRegisterModal = document.querySelector(".cancel-button");

createButton.onclick = () => {
  createPage.showModal();
};

closeRegisterModal.onclick = () => {
  createPage.close();
};
