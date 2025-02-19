import React from "react";
import { Link } from "react-router-dom";
import ewaste from "../assets/ewaste2.png";
import "../styles/ewsate.css";

const Ewaste = () => {
  return (
    <div className="ewaste-container">
      <h1>E-Waste Management</h1>
      <div className="inner-ewaste">
        <div className="e-content1">
          <p>
            E-waste recycling transforms discarded electronics into valuable
            materials, reducing environmental impact and conserving resources.
            Recycled plastics from e-waste can be repurposed into products like
            home appliances, office furniture, and playground equipment.
          </p>
          <div className="home-btn">
            <Link to="/mechregister" id="neon-btn">
              <button className="register-btn">REGISTER</button>
            </Link>
          </div>
        </div>
        <div className="e-content2">
          <img src={ewaste} alt="ewaste" />
        </div>
      </div>
    </div>
  );
};

export default Ewaste;
