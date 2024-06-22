import React from "react";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Amon Kibet</h1>
      <h3 className="home_subtitle">Software Engineer</h3>
      <p className="home_description">I build products people LO-OVE to use.</p>
      <a href="#contact" className="button button--flex">
        Say hello
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="button_icon"
          width="16"
          height="16"
          fill="var(--container-color)"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
        </svg>
      </a>
    </div>
  );
};

export default Data;
