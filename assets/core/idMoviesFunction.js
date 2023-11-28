import { searchingByCategoryMovie } from "./mocks.js";

export const idMoviesFunction = (movie, genresList) => {
  let movieId = movie.genre_ids;
  let idsCorrespondentes = genresList
    .filter((genreId) => movieId.includes(genreId.id))
    .map((genre) => genre.name);

  return idsCorrespondentes.join(", ");
};

export const findGenderId = (genreList, genderName) => {
  let currentGenre = genreList.find((category) => category.name === genderName);

  let currentGenreId = currentGenre ? currentGenre.id : undefined;
  searchingByCategoryMovie(currentGenreId);
};
