const closeSelectedMovieModal = document.querySelector(
  ".selected-movie--cancel-button"
);

const selectedMovie = document.querySelector("#selected-movie");

export const selectedMovieFunction = (movie) => {
  selectedMovie.showModal();

  let card = document.createElement("div");
  card.classList.add("selected-movie--container");

  let mainDetails = document.createElement("section");
  mainDetails.classList.add("selected-movie--mainDetails");
  card.appendChild(mainDetails);

  let imageBox = document.createElement("div");
  imageBox.classList.add("selected-movie--img-movie-box");
  mainDetails.appendChild(imageBox);

  let image = document.createElement("img");
  image.classList.add("selected-movie--image");
  image.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  image.alt = movie.title;

  imageBox.appendChild(image);

  let title = document.querySelector("#selected-movie--title");
  title.textContent = movie.title;
  mainDetails.appendChild(title);

  let overview = document.createElement("details");
  overview.textContent = "hello";
  mainDetails.appendChild(overview);

  let score = document.createElement("div");
  mainDetails.appendChild(score);

  let numberOfRate = document.createElement("label");
  numberOfRate.classList.add("numberRate");
  numberOfRate.textContent = movie.vote_average;
  score.appendChild(numberOfRate);

  let starsLabel = document.createElement("label");
  starsLabel.classList.add("stars");

  let starsNumbers = Math.round(parseInt(movie.vote_average));

  for (let i = 0; i < starsNumbers; i++) {
    let star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    star.style.color = "#e52a15";
    starsLabel.appendChild(star);
  }
  numberOfRate.appendChild(starsLabel);

  selectedMovie.appendChild(card);
};

let closeSelectedDialog = () => {
  selectedMovie.close();
};
closeSelectedMovieModal.onclick = () => {
  closeSelectedDialog();
};
