import { useState, useEffect, useRef } from "react";
import "./Video.css";
import link_img from "../../assets/LinkImg";

export const Video = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };
  console.log(isLoaded);

  return (
    <div className="video">
      {!isLoaded && (
        <div className="video-thumbnail">
          <img
            className="video-thumbnail_img"
            src={link_img.hoveVideoImg}
            alt="video"
          />
        </div>
      )}
      <video
        className={`video-player ${isLoaded ? "show" : "hide"}`}
        src={link_img.homeVideo}
        ref={videoRef}
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
      />
    </div>
  );
};
