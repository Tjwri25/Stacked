import React from "react";
import Video from "../Video/video.mp4"



function BackgroundVid() {
    return (
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
  
  <src source={Video} type="video/mp4"/>
</video>
    )
}

export default BackgroundVid;


