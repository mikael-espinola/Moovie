import { getAllCategoriesApi } from "./mocks.js";
import { setQueryString, verifyingParams } from "./querystringURL.js";
import { container } from "./searchingMovie.js";

export const idMoviesFunction = async (movie) => {
  const categories = await getAllCategoriesApi();

  let movieId = movie.genre_ids;
  let idsCorrespondentes = categories
    .filter((genreId) => movieId.includes(genreId.id))
    .map((genre) => genre.name);

  return idsCorrespondentes.join(", ");
};

export const findGenreId = async (genreName) => {
  const categories = await getAllCategoriesApi();

  let currentGenre = categories.find((category) => category.name === genreName);

  let currentGenreId = currentGenre ? currentGenre.id : undefined;
  container.innerHTML = "";
  setQueryString(currentGenreId, undefined);

  localStorage.setItem("genreId", currentGenreId);

  verifyingParams(undefined, currentGenreId, undefined);
};
