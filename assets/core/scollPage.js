import { getInfoApi } from "./mocks.js";

const currentNumberPage = document.querySelector(".current-page");
const toTheTopButton = document.querySelector(".slider--home");
const homeButton = document.querySelector(".inicio-button");

homeButton.onclick = () => {
  window.location.reload();
};

const currentPage = (pageNumber) => {
  getInfoApi(pageNumber);
};

const handleScroll = () => {
  let totalHeight = document.documentElement.scrollHeight;

  let visibleHeight = window.innerHeight;

  let scroll = window.scrollY;

  const percentage = (scroll / (totalHeight - visibleHeight)) * 100;

  if (percentage > 98) {
    const number = parseInt(currentNumberPage.textContent);
    currentNumberPage.textContent = number + 1;
    currentPage(currentNumberPage.textContent);
  }
};

window.addEventListener("scroll", handleScroll);

toTheTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
