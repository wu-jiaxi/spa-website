import "./Blackboard.css";
import SpaLandingPhoto from "../../assets/blackboard.jpg"; // Adjust the path as necessary
import BlackboardDetails from "../BlackboardBackground/BlackboardDetails/BlackboardDetails";
import Navbar from "../BlackboardBackground/Navbar/Navbar";

const Blackboard = () => {
  return (
    <div
      className="video-background"
      style={{ backgroundImage: `url(${SpaLandingPhoto})` }}
    >
      <div className="video-background__content">
        <div className="navBar">
          <Navbar />
        </div>
      </div>
      <div>
        <BlackboardDetails />
      </div>
      <div className="buttonDiv"></div>
    </div>
  );
};

export default Blackboard;
