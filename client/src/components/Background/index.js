import React from "react";
import Video from "../Video/video.mp4";
import "./index.css"

function BackgroundVid() {
  return (
    <div className="bgVid">
      <video
        src={Video}
        controls
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      ></video>
    </div>
  );
}

export default BackgroundVid;


