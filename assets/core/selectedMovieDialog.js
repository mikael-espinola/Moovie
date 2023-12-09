import { idMoviesFunction } from "./idMoviesFunction.js";

const closeSelectedMovieModal = document.querySelector(
  ".selected-movie--cancel-button"
);

const selectedMovie = document.querySelector("#selected-movie-dialog");

export const selectedMovieFunction = async (movie) => {
  selectedMovie.showModal();

  let title = document.querySelector("#selected-movie--title");
  title.textContent = movie.title;

  let container = document.querySelector("#selected-movie--container");

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

  let movieGenre = document.querySelector(".list-of-genres");
  movieGenre.textContent = await idMoviesFunction(movie);
};

const dialogPosition = () => {
  let scrollTop = document.documentElement.scrollTop;
  let topPosition =
    scrollTop + window.innerHeight / 2 - selectedMovie.clientHeight / 2;
  selectedMovie.style.top = topPosition + "px";
};

let closeSelectedDialog = () => {
  selectedMovie.close();
};

closeSelectedMovieModal.onclick = () => {
  closeSelectedDialog();
};
