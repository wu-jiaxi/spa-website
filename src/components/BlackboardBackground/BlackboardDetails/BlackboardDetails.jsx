import "./BlackboardDetails.css";
import teach from "../../../assets/teach.jpg";

const BlackboardDetails = () => {
  return (
    <div>
      <div className="imageDetailsAndCarousel">
        <div className="spaDetails">
          <div className="spaceDetailsTitle">
            <h1>
              Outdoor panoramic spa pools open year-round, a 5-minute ferry ride
              from downtown Manhattan
            </h1>
          </div>
          <div className="spaDetailsParagraphs">
            <p>
              Welcome to HerSpace MedSpa nestled in the picturesque town of
              Little Silver, New Jersey. At HerSpace we take great pride in our
              mission to help our patients look and feel their absolute best.
              Our exceptional team of warm, highly skilled professionals
              utilizes a personalized, holistic, and patient-centered approach
              to ensure that you achieve natural, rejuvenating results through a
              comprehensive range of treatments and procedures.
            </p>
            <p>
              Our commitment lies in upholding the utmost standards of patient
              care, experience and quality and safety in the field of aesthetic
              medicine, and we take great pride in our consistent five-star
              ratings from our patients.
            </p>
          </div>
        </div>
        <div className="spaCarousel">
          <img
            src={teach}
            alt="Description of Image"
            style={{ width: "100%", height: "auto", borderRadius: "25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlackboardDetails;
