import React from "react";
const Video = () => {
  return (
    <video width="100%" height="100%" style={{objectFit:"cover"}} autoPlay loop>
      <source src="./video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
