import { movies } from "./mocks.js";
const sectionMovie = document.querySelector(".movies");

const renderMoovieCard = (movie) => {
  const template = document.querySelector(".moovies");
  const clone = template.content.cloneNode(true);

  const card = clone.querySelector(".card-movie");

  const title = clone.querySelector(".title");
  title.textContent = movie.title;

  const imgContent = clone.querySelector(".img-movie");

  const image = document.createElement("img");
  image.src = movie.img;
  image.alt = movie.title;

  imgContent.appendChild(image);

  const score = clone.querySelector(".score");

  const numberOfRate = document.createElement("label");
  numberOfRate.classList.add("numberRate");
  numberOfRate.textContent = movie.rate;
  score.appendChild(numberOfRate);

  const starsLabel = document.createElement("label");
  starsLabel.classList.add("stars");

  const starsNumbers = Math.round(parseFloat(movie.rate));

  for (let i = 0; i < starsNumbers; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    star.style.color = "#e52a15";
    starsLabel.appendChild(star);
  }
  numberOfRate.appendChild(starsLabel);

  let infoButton = clone.querySelector(".info-button");

  sectionMovie.appendChild(clone);
};

movies.map((mmovie) => {
  renderMoovieCard(mmovie);
});
