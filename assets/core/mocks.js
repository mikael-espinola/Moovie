import { renderMovieCard } from "./renderMovieCard.js";
import env from "../env.js";
import { requestApiByParams } from "./scollPage.js";
const loader = document.querySelector(".loader");

export const credentials = [
  {
    nome: "Mikael",
    sobrenome: "Espinola",
    idade: "24",
    senha: "1234",
    email: "mikael@email.com",
  },
];

let movies = [];

const language = window.navigator.language;

export const getInfoApi = (pageNumber) => {
  errorImage.classList.add("error-screen--hidden");
  const currentPageNumber = pageNumber || 1;
  loader.classList.remove("loader--hidden");

  const savedGenreId = localStorage.getItem("genreId");
  const savedSearchId = localStorage.getItem("search");
  if (savedGenreId) {
    const intoNumber = parseInt(savedGenreId);
    requestApiByParams(intoNumber, undefined, currentPageNumber);
  } else if (savedSearchId) {
    searchingByNameMovie(savedSearchId);
  } else {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${env.apiToken}&language=${language}&page=${currentPageNumber}`
    )
      .then((resp) => resp.json())
      .then((json) => {
        movies = json.results;
        movies.map((movie) => {
          renderMovieCard(movie);
        });
      })

      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      })

      .finally(() => {
        loader.classList.add("loader--hidden");
      });
  }
};

export const getAllCategoriesApi = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${env.apiToken}&page=3`
  )
    .then((resp) => resp.json())
    .then((json) => json.genres);
};

export const searchingByNameMovie = (movieName) => {
  errorImage.classList.add("error-screen--hidden");
  loader.classList.remove("loader--hidden");
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${env.apiToken}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let searchs = json.results;
      if (searchs.length === 0) {
        errorScreen();
      }
      searchs.map((movie) => {
        renderMovieCard(movie);
      });
    })
    .finally(() => {
      loader.classList.add("loader--hidden");
    });
};

export const searchingByCategoryMovie = (categoryId, pageNumber) => {
  errorImage.classList.add("error-screen--hidden");
  loader.classList.remove("loader--hidden");
  const currentNumberPage = pageNumber || 1;

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${env.apiToken}&with_genres=${categoryId}&page=${currentNumberPage}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let movies = json.results;

      movies.map((movie) => {
        renderMovieCard(movie);
      });
    })
    .finally(() => {
      loader.classList.add("loader--hidden");
    });
};

const errorImage = document.querySelector(".error-screen--container");
const errorScreen = () => {
  errorImage.classList.remove("error-screen--hidden");
};

getInfoApi();
