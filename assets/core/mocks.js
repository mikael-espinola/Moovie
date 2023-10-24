import { renderMovieCard } from "./renderMovieCard.js";

import env from "../env.js";

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

fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${env.apiToken}&language=en-US`
)
  .then((resp) =>
    resp.json().then((data) => {
      movies = [...data.results];
      movies.map((movie) => {
        renderMovieCard(movie);
      });
    })
  )
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });
