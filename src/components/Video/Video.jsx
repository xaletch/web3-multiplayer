import { useState } from "react";
import "./Video.css";
import link_img from "../../assets/LinkImg";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video">
      {!isPlaying ? (
        <div className="video-thumbnail">
          <img
            className="video-thumbnail_img"
            src={link_img.hoveVideoImg}
            alt="video"
          />
          <div className="button-video_play">
            <p className="button-video_play-text">watch</p>
            <span className="button-video_play-btn" onClick={handlePlay}>
              <svg
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.14487 0.705L42.0281 21.105C43.2434 21.795 44 22.83 44 23.985C44 25.14 43.2204 26.175 42.0281 26.865L6.21365 47.25L5.61751 47.595C5.04429 47.85 4.35643 48 3.62272 48C1.62793 48 0 46.89 0 45.51V2.49C0 1.11 1.62793 0 3.62272 0C4.37936 0 5.09015 0.165 5.66337 0.435L6.14487 0.705Z"
                  fill="white"
                />
              </svg>
            </span>
            <p className="button-video_play-text">trailer</p>
          </div>
        </div>
      ) : (
        <video
          className="video-player"
          src={link_img.homeVideo}
          autoPlay
          controls={false}
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};
