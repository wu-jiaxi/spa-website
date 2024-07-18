import "./VideoBackground.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SpaLandingPhoto from "../../assets/NYC Spa_files/pexels.jpg"; // Adjust the path as necessary

const VideoBackground = () => {
  return (
    <div
      className="video-background"
      style={{ backgroundImage: `url(${SpaLandingPhoto})` }}
    >
      <div className="video-background__content">
        <div className="navBar">
          <h1>NYC Spa and Facial</h1>
        </div>
      </div>
      <div className="buttonDiv">
        <Button
          className="button"
          variant="contained"
          style={{ borderRadius: 50 }}
        >
          <Link to="/form" className="spaHomepageButtonLink">
            Plan your Trip
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default VideoBackground;
