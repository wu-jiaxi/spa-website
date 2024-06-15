import React from "react";
import "./VideoBackground.css";
import NavBar from "../NavBar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-background__video">
        <source src="src\assets\spa_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-background__content">
        <div className="navBar">
          <MenuIcon />
          <h1>NYC Spa and Facial</h1>
          <div></div>
        </div>
      </div>
      <div className="buttonDiv">
        <Button
          className="button"
          variant="contained"
          style={{ borderRadius: 50 }}
        >
          Plan your Trip
        </Button>
      </div>
      <div className="downArrow">
        <ArrowDownwardIcon />
      </div>
    </div>
  );
};

export default VideoBackground;
