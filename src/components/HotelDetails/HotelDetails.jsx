import "./HotelDetails.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const VideoBackground = () => {
  return (
    <div>
      <div className="hotelDetails">
        <h1>A complete spa and facial experience</h1>
        <h3>
          NYC Spa Club offers an unparalleled facial and spa experience — a
          re-imagined spa, bringing spa cultures and
        </h3>
        <h3>treatments from around the world under one roof</h3>
      </div>
      <div className="imageDetailsAndCarousel">
        <div className="spaDetails">
          <h3>
            Welcome to HerSpace MedSpa nestled in the picturesque town of Little
            Silver, New Jersey. At HerSpace we take great pride in our mission
            to help our patients look and feel their absolute best. Our
            exceptional team of warm, highly skilled professionals utilizes a
            personalized, holistic, and patient-centered approach to ensure that
            you achieve natural, rejuvenating results through a comprehensive
            range of treatments and procedures.
          </h3>
          <h3>
            Our commitment lies in upholding the utmost standards of patient
            care, experience and quality and safety in the field of aesthetic
            medicine, and we take great pride in our consistent five-star
            ratings from our patients.
          </h3>
          <h3>
            Whether you visit us in person or give us a call to schedule a
            complimentary consultation, we look forward to the opportunity to
            listen, provide advice, and guide you on your journey to achieving
            your aesthetic goals.
          </h3>
        </div>
        <div className="spaCarousel">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
