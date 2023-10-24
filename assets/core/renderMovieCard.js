import { selectedMovieFunction } from "./selectedMovieDialog.js";

const sectionMovie = document.querySelector(".movies");

export const renderMovieCard = (movie) => {
  const template = document.querySelector(".template-movie");
  const clone = template.content.cloneNode(true);

  const card = clone.querySelector(".card-movie");

  const title = clone.querySelector(".title");
  title.textContent = movie.title;

  const imgContent = clone.querySelector(".img-movie");

  const image = document.createElement("img");
  image.classList.add("image");
  image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  image.alt = movie.title;

  imgContent.appendChild(image);

  const score = clone.querySelector(".score");

  const numberOfRate = document.createElement("label");
  numberOfRate.classList.add("numberRate");
  numberOfRate.textContent = movie.vote_average;
  score.appendChild(numberOfRate);

  const starsLabel = document.createElement("label");
  starsLabel.classList.add("stars");

  const starsNumbers = Math.round(parseInt(movie.vote_average));

  for (let i = 0; i < starsNumbers; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    star.style.color = "#e52a15";
    starsLabel.appendChild(star);
  }
  numberOfRate.appendChild(starsLabel);

  let infoButton = clone.querySelector(".info-button");

  infoButton.onclick = () => {
    selectedMovieFunction(movie);
  };

  sectionMovie.appendChild(clone);
};
