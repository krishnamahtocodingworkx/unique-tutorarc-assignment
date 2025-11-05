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
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
