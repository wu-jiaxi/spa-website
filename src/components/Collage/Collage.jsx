import React from "react";
import "./Collage.css"; // Import your CSS file for styling

const Collage = () => {
  return (
    <div className="collage">
      <div className="collage-item item1">{/* Content for first item */}</div>
      <div className="collage-item item2">{/* Content for second item */}</div>
      <div className="collage-item item3">{/* Content for third item */}</div>
      <div className="collage-item item1">{/* Content for first item */}</div>
      <div className="collage-item item2">{/* Content for second item */}</div>
      <div className="collage-item item3">{/* Content for third item */}</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default Collage;
