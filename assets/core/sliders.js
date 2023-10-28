import { getInfoApi } from "./mocks.js";

const leftButton = document.querySelector(".slider-left");
const rightButton = document.querySelector(".slider-right");
const firstPageButton = document.querySelector(".slider-first");
const lastPageButton = document.querySelector(".slider-last");
const currentNumberPage = document.querySelector(".current-page");
const allButtons = [leftButton, rightButton, firstPageButton, lastPageButton];

const reloadButton = document.querySelector(".slider-reload");
const toTheTopButton = document.querySelector(".slider--home");

export const currentPage = (pageNumber) => {
  console.log(pageNumber);
  getInfoApi(pageNumber);
};

reloadButton.onclick = () => {
  const number = parseInt(currentNumberPage.textContent);
  currentNumberPage.textContent = number + 1;
  currentPage(currentNumberPage.textContent);
};

toTheTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
