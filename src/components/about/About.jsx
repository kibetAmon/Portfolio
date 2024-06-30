import React from "react";
import "./about.css";
import AboutImg from "../../assets/DSC_0111.JPG";
import CV from "../../assets/Amon_Kibet_Sigei_Resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About me</h2>
      <span className="section_subtitle">Get to know much more..</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about_data">
          <Info />

          <p className="about_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            reprehenderit vel quod iusto tempore est, reiciendis obcaecati
            excepturi soluta doloremque officiis optio facere! Sit expedita
            molestias assumenda dicta pariatur in!
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button_icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="file-alt"
            >
              <path
                fill="var(--container-color)"
                d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
