import { findGenderId } from "./idMoviesFunction.js";

const dropdownInput = document.querySelector(".dropdown--search-input");

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

const observerGenders = (genderList) => {
  const gendersButtons = document.querySelectorAll(
    ".dropdown--generic-li-label"
  );

  gendersButtons.forEach((gender) => {
    gender.onclick = () => {
      let genderName = gender.textContent;
      const genderContainer = document.querySelector(".categories-button");
      genderContainer.classList.remove("active");
      findGenderId(genderList, genderName);
    };
  });
};

const renderGender = (category, genderList) => {
  const li = document.createElement("li");
  li.classList.add("generic-li");

  const link = document.createElement("a");
  link.href = "#";

  const labelValue = document.createElement("label");
  labelValue.classList.add("dropdown--generic-li-label");

  labelValue.textContent = category;
  link.appendChild(labelValue);

  li.appendChild(link);
  genderContainer.appendChild(li);

  observerGenders(genderList);
};

const genderContainer = document.querySelector(".dropdown-gender-list");

export const getCategories = (categories) => {
  let allCategoriesName = categories.map((category) => category.name);
  let allCategoriesId = categories.map((category) => category.id);

  allCategoriesName.forEach((category) => renderGender(category, categories));
};
