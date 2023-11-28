import { searchingByNameMovie } from "./mocks.js";

export let container = document.querySelector(".movies");
let searchInput = document.querySelector(".dropdown--search-input");
let searchInputButton = document.querySelector(".dropdown--search-button");
const searchButton = document.querySelector("#search-button");

searchInputButton.onclick = (event) => {
  event.preventDefault();
  let name = searchInput.value;
  let caracters = name.replace(/ /g, "+");

  container.innerHTML = "";
  searchingByNameMovie(caracters);
  searchInput.value = "";
  searchButton.classList.remove("active");
};
