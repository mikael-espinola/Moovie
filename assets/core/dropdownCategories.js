import { findGenreId } from "./idMoviesFunction.js";
import { getAllCategoriesApi } from "./mocks.js";
import { reloadHomePage } from "./querystringURL.js";
import { labelSearch, nameLinkCategories } from "./searchingMovie.js";

const genreContainer = document.querySelector(".dropdown-genre-list");

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

const observerGenres = () => {
  const genresButtons = document.querySelectorAll(
    ".dropdown--generic-li-label"
  );

  genresButtons.forEach((genre) => {
    genre.onclick = () => {
      labelSearch.classList.remove("label-visibility--active");
      let genreName = genre.textContent;

      if (genreName === "All") {
        isAllButton();
        reloadHomePage();
        return;
      } else {
        nameLinkCategories.textContent = genreName;

        const genreContainer = document.querySelector(".categories-button");
        genreContainer.classList.remove("active");
        findGenreId(genreName);
      }
    };
  });
};

const renderGenres = (category) => {
  const li = document.createElement("li");
  li.classList.add("generic-li");

  const link = document.createElement("label");

  const labelValue = document.createElement("label");
  labelValue.classList.add("dropdown--generic-li-label");

  labelValue.textContent = category;
  link.appendChild(labelValue);

  li.appendChild(link);
  genreContainer.appendChild(li);

  observerGenres();
};

export const caughtGenres = async () => {
  const categories = await getAllCategoriesApi();

  let allCategoriesName = categories.map((category) => category.name);
  allCategoriesName.forEach((category) => renderGenres(category));
};

const isAllButton = () => {
  nameLinkCategories.textContent = "Categories";
  window.location.reload();
};

caughtGenres();
