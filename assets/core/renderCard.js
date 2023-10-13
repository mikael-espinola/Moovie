import { database } from "./databaseFilms.js";

const movieSection = document.querySelector(".movies");

function renderCard() {
  database.forEach((movie) => {
    const cardMovie = document.createElement("div");
    cardMovie.classList.add("card-movie");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = movie.title;
    cardMovie.appendChild(title);

    const moldura = document.createElement("div");
    moldura.classList.add("img-movie");
    cardMovie.appendChild(moldura);

    const image = document.createElement("img");
    image.src = movie.img;
    image.alt = movie.title;
    moldura.appendChild(image);

    const score = document.createElement("div");
    score.classList.add("score");
    cardMovie.appendChild(score);

    const numberOfRate = document.createElement("label");
    numberOfRate.classList.add("numberRate");
    numberOfRate.textContent = movie.rate;
    score.appendChild(numberOfRate);

    const starsLabel = document.createElement("label");
    starsLabel.classList.add("stars");

    const starsNumbers = parseInt(movie.rate);

    for (let i = 0; i < starsNumbers; i++) {
      const star = document.createElement("i");
      star.classList.add("fa-regular", "fa-star");
      star.style.color = "#e52a15";
      starsLabel.appendChild(star);
    }
    numberOfRate.appendChild(starsLabel);

    movieSection.appendChild(cardMovie);

    const infoButton = document.createElement("button");
    infoButton.classList.add("info-button");
    cardMovie.appendChild(infoButton);

    const textButton = document.createElement("h4");
    textButton.textContent = "More info!";
    infoButton.appendChild(textButton);

    console.log(movieSection);
  });
}

renderCard();
