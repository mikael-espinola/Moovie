import {
  getInfoApi,
  searchingByCategoryMovie,
  searchingByNameMovie,
} from "./mocks.js";

let urlDefault = window.location.href;

export const setQueryString = (dataGenre, dataNamed) => {
  const url = new URL(urlDefault);

  if (dataGenre && !dataNamed) {
    url.searchParams.set("query", encodeURIComponent(dataGenre));
    window.history.replaceState({}, "", url.toString());
  } else if (!dataGenre && dataNamed) {
    url.searchParams.set("search", encodeURIComponent(dataNamed));
    window.history.replaceState({}, "", url.href);
  }
};

export const reloadHomePage = () => {
  window.history.replaceState({}, "", urlDefault.toString());
  window.location.reload();
};

export const verifyingParams = (
  name = null,
  genre = null,
  currentNumberPage
) => {
  if (name) {
    searchingByNameMovie(name);
  } else if (genre) {
    searchingByCategoryMovie(genre, currentNumberPage);
  } else if (currentNumberPage) {
    getInfoApi(currentNumberPage);
  }
};

export const getCategoryUrlParams = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("query");
};
export const getSearchUrlParams = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("search");
};
