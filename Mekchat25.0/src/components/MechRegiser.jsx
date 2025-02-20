import React from "react";
import "../styles/mechregister.css";
import Header from "./Header";
import Footer from "./Footer";

const MechRegiser = () => {
  return (
    <div className="hole">
      <Header />
      <div className="mr-container">
        <div className="mhead-container" id="mr-head">
          <h2 className="event-heading" id="mekchat-underline">
            Registration
          </h2>
        </div>
        {/* <h1 className='mr-main-head'>Registration</h1> */}
        <div className="mr-content">
          <div className="mr-tech">
            <h1>🚀Events</h1>
            <p>If you wish to participate in Technical and Non-Technical Events, entry fees - ₹250</p>
            <a
              to="/register"
              id="neon-btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfN6u4P8YSY3hxGFMdVDRZF0022wkvAEpoWF4c42cSzBdW2Qw/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="mr-custom-btn1 mr-btn-12">
                <span>Events</span>
              </button>
            </a>
          </div>
          <div className="mr-workshop">
            <h1>🚀Workshop</h1>
            <p>1. Industry 4.O - ₹300</p>
            <p>2. 3D - Innovation V6 Engine Design - ₹350 (Only 40 Student Allowed)
            </p>            <a
              to="/register"
              id="neon-btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSedQIkhKUjhMMS90CcnTyfEHTVIn3qYGiQXpt8RZbwbA2Whpw/viewform?usp=header"
              target="_blank"
            >
              <button className="mr-custom-btn1 mr-btn-12">
                <span>Workshop</span>
              </button>
            </a>
          </div>
          <div className="mr-ewaste">
            <h1>🚀E-waste</h1>
            <p>The Enrollment fee for e-waste management is ₹200</p>
            <a
              to="/register"
              id="neon-btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlJ4mxlm5KeyIGfvlUDH2DIK6xtcCIxF7mFm7X1Ib7pezsaA/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="mr-custom-btn1 mr-btn-12">
                <span>E-waste</span>
              </button>
            </a>
            <p id="pay-note">Note:For onspot registration extra ₹50 will be added for every programs.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MechRegiser;
