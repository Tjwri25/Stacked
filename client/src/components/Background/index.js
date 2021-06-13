import React from "react";
import Video from "../Video/background.mp4";

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

{
  /* <video width="750" height="500" controls >
<source src={video} type="video/mp4"/>
</video>

<video
autoPlay
loop
muted
style={{
  position: "absolute",
  width: "100%",
  left: "50%",
  top: "50%",
  height:"100%",
  objectFit: "cover",
  transform: "translate(-50%, -50%)",
  zIndex: "-1"
  

}}
>
  
  <source source={Video} type="video/mp4"/>
</video> */
}
