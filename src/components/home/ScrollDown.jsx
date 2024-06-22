import React from "react";

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll-button button--flex">
        <i className="uil uil-mouse-alt home_social-icon"></i>
        <span className="home_scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home_scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
