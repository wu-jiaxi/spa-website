import "./App.css";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import facial from "./assets/facial.jpg";
import flowers from "./assets/NYC Spa_files/flowers.jpg";
import oils from "./assets/NYC Spa_files/oils.jpg";
import roll from "./assets/NYC Spa_files/roll.jpg";
import wash from "./assets/NYC Spa_files/wash.jpg";
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "100%",
  height: ["380px", "320px"],
  layout: [1, 4],
  photos: [
    { source: flowers },
    { source: facial },
    { source: oils },
    { source: roll },
    { source: wash },
  ],
};

function App() {
  return (
    <>
      <div>
        <VideoBackground />
        <HotelDetails />
        <ReactPhotoCollage {...setting} />
      </div>
    </>
  );
}

export default App;
