import env from "../../env.js";
import { buttonTrailer } from "../selectedMovieDialog.js";

const getYoutubeVideo = (movieTitle) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${env.apiYoutubeToken}&q=${movieTitle}trailer&type=video&order=viewCount`
  )
    .then((resp) => resp.json())
    .then((json) => {
      let videoId = json.items[0].id.videoId;
      buttonTrailer.onclick = () => {
        let url = `https://youtube.com/watch?v=${videoId}`;
        window.open(url, "_blank");
      };
    });
};

export const getVideoSelectedData = (movie) => {
  let movieTitle = `${movie.title} Official trailer`;
  getYoutubeVideo(movieTitle);
};
