import "./App.css";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import facial from "./assets/facial.jpg";
import flowers from "./assets/NYC Spa_files/flowers.jpg";
import oils from "./assets/NYC Spa_files/oils.jpg";
import roll from "./assets/NYC Spa_files/roll.jpg";
import wash from "./assets/NYC Spa_files/wash.jpg";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Form />} />
              <Route path="Admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

//<VideoBackground />
//<HotelDetails />
//<ReactPhotoCollage {...setting} />
