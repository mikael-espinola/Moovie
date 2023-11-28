import { idMoviesFunction } from "./idMoviesFunction.js";

const closeSelectedMovieModal = document.querySelector(
  ".selected-movie--cancel-button"
);

export let buttonTrailer = document.querySelector(".button-trailer");

const selectedMovie = document.querySelector("#selected-movie-dialog");

export const selectedMovieFunction = (movie, genre) => {
  selectedMovie.showModal();

  let title = document.querySelector("#selected-movie--title");
  title.textContent = movie.title;

  let img = document.querySelector(".selected-movie--img");
  img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  img.alt = movie.title;

  let overview = document.querySelector(".selected-movie--overview");
  overview.textContent = movie.overview;

  let releasedOn = document.querySelector(".data-released");
  releasedOn.textContent = movie.release_date;

  let rate = document.querySelector(".current-score");
  let value = Math.round(parseFloat(movie.vote_average)) / 2;
  rate.textContent = value;

  let movieGender = document.querySelector(".list-of-genders");
  movieGender.textContent = idMoviesFunction(movie, genre);
};

let closeSelectedDialog = () => {
  selectedMovie.close();
};
closeSelectedMovieModal.onclick = () => {
  closeSelectedDialog();
};
