import { getInfoApi, searchingByCategoryMovie } from "./mocks.js";
import {
  getCategoryUrlParams,
  getSearchUrlParams,
  reloadHomePage,
} from "./querystringURL.js";

export const currentNumberPage = document.querySelector(".current-page");
const toTheTopButton = document.querySelector(".slider--home");
const homeButton = document.querySelector(".inicio-button");

homeButton.onclick = () => {
  reloadHomePage();
  localStorage.clear();
};

let isLoadingData = false;

export const handleScroll = () => {
  let totalHeight = document.documentElement.scrollHeight;
  let visibleHeight = window.innerHeight;
  let scroll = window.scrollY;
  const percentage = (scroll / (totalHeight - visibleHeight)) * 100;

  if (percentage > 92 && !isLoadingData) {
    let genreParams = getCategoryUrlParams();
    let searchParams = getSearchUrlParams();

    const number = parseInt(currentNumberPage.textContent);
    currentNumberPage.textContent = number + 1;
    requestApiByParams(genreParams, searchParams, currentNumberPage);
  }
};

window.addEventListener("scroll", handleScroll);

toTheTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const requestApiByParams = async (
  genreParams,
  searchParams,
  numberPage
) => {
  isLoadingData = true;

  if (genreParams) {
    await searchingByCategoryMovie(genreParams, numberPage.textContent);
  } else if (searchParams) {
    return;
  } else {
    await getInfoApi(numberPage.textContent);
  }
  isLoadingData = false;
};
