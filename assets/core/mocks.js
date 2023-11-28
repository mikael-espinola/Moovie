import { renderMovieCard } from "./renderMovieCard.js";

import env from "../env.js";
import { getCategories } from "./dropdownCategories.js";
import { container } from "./searchingMovie.js";

export const credentials = [
  {
    nome: "Ana",
    sobrenome: "Silva",
    idade: "28",
    email: "ana.silva@email.com",
    senha: "1234",
  },
  {
    nome: "Pedro",
    sobrenome: "Santos",
    idade: "35",
    senha: "5678",
    email: "pedro.santos@email.com",
  },
  {
    nome: "Maria",
    sobrenome: "Oliveira",
    idade: "22",
    senha: "9012",
    email: "maria.oliveira@email.com",
  },
  {
    nome: "João",
    sobrenome: "Pereira",
    idade: "40",
    senha: "3456",
    email: "joao.pereira@email.com",
  },
  {
    nome: "Luísa",
    sobrenome: "Fernandes",
    idade: "31",
    senha: "7890",
    email: "luisa.fernandes@email.com",
  },
  {
    nome: "Mikael",
    sobrenome: "Espinola",
    idade: "24",
    senha: "1234",
    email: "mikaelespinolaa@gmail.com",
  },
];

let movies = [];

const language = window.navigator.language;

export const getInfoApi = (value) => {
  let pageNumber = value || 1;
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${env.apiToken}&language=${language}&page=${pageNumber}`
  )
    .then((resp1) => resp1.json())
    .then((json1) => {
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${env.apiToken}&page=3`
      )
        .then((resp2) => resp2.json())
        .then((json2) => {
          let genresList = json2.genres;

          movies = json1.results;
          movies.map((movie) => {
            renderMovieCard(movie, genresList);
          });
          getCategories(genresList);
        });
    })

    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    })

    .finally(() => {
      const loader = document.querySelector(".loader");

      loader.classList.add("loader--hidden");
    });
};

export const searchingByNameMovie = (movieName) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${env.apiToken}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let searchs = json.results;
      searchs.map((movie) => {
        renderMovieCard(movie);
      });
    });
};

export const searchingByCategoryMovie = (categoryId) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${env.apiToken}&with_genres=${categoryId}`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let movies = json.results;

      container.innerHTML = "";

      movies.map((movie) => {
        renderMovieCard(movie);
      });
    });
};

getInfoApi();
