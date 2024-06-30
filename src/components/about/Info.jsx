import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">8 years working</span>
      </div>
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">completed</h3>
        <span className="about_subtitle">10 + projects</span>
      </div>
      <div className="about_box">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
