import env from "../../env.js";

const trailerIframe = document.querySelector(".iframe-trailer");

const getYoutubeVideo = (movieTitle) => {
  const loader = document.querySelector(".iframe--loader");

  loader.style.display = "block";
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${env.apiYoutubeToken}&q=${movieTitle}&type=video`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let videoId = json.items[0].id.videoId;
      trailerIframe.src = `https://www.youtube.com/embed/${videoId}`;
    })
    .finally(() => {
      loader.style.display = "none";
      trailerIframe.style.display = "block";
      trailerIframe.style.opacity = "1";
    });
};

export const getVideoSelectedData = (movie) => {
  let name = `${movie.title} Official movie trailer`;
  let movieTrailerName = name.replace(/ /g, "+");
  getYoutubeVideo(movieTrailerName);
};
