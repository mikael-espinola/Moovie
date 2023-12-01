import { setQueryString, verifyingParams } from "./querystringURL.js";

export let container = document.querySelector(".movies");
export let nameLinkCategories = document.querySelector(".link-categories");

let searchInput = document.querySelector(".dropdown--search-input");
let searchInputButton = document.querySelector(".dropdown--search-button");
const searchButton = document.querySelector("#search-button");
export const labelSearch = document.querySelector(".label-visibility--search");

searchInputButton.onclick = (event) => {
  event.preventDefault();
  let name = searchInput.value;
  let caracters = name.replace(/ /g, "+");

  changeVisibility(name);
  setQueryString(undefined, name);

  localStorage.setItem("search", caracters);

  container.innerHTML = "";
  verifyingParams(caracters, undefined, undefined);
  searchInput.value = "";
  searchButton.classList.remove("active");
};

const changeVisibility = (nameOfSearch) => {
  labelSearch.classList.add("label-visibility--active");
  labelSearch.textContent = nameOfSearch;
  nameLinkCategories.textContent = "Categories";
};

searchButton.onclick = () => {
  searchInput.focus();
};
