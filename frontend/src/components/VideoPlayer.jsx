import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef();

  return (
    <div style={{ marginTop: "20px" }}>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        style={{ borderRadius: "10px" }}
      >
        <source
          src="https://www.pexels.com/download/video/2887463/"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
