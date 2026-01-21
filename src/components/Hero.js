import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import Typed from "react-typed";



function Hero() {
    return (
        <section id="hero" className="container">
            <div className="row">
                <div id="card" className="card text-center">
                    <div className="card-header">
                        <div className="profile-img"></div>
                        <div className="header-description">
                            <h1>Amon Kibet</h1>
                            <Typed className={"descriptionTyped"} strings={["Full Stack Developer", "Cloud and DevOps Engineer", "UI/UX Designer"]} typeSpeed={40} backSpeed={50}
                                loop />
                            <div className="social-icons">
                                <span>
                                    <a href="https://twitter.com/ilyass_trh" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                                </span>
                                <span>
                                    <a href="https://github.com/kibetAmon" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/amon-kibet" target="_blank" rel="noreferrer"><i
                                        className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">About me</h2>
                        <p className="card-text">
                        Hello 👋🏼, I am Amon Kibet, Full-Stack Developer, based in Kenya, 
                        I am passionate about software Development, DevOps and Cloud. 
                        I focus on modern, responsive solutions that are easy to use by the end user. 
                        If you have an opportunity, feel free to contact me.
                             
                    </p>
                        <a href="https://drive.google.com/file/d/1t0OMlmOlYm_aJHREWc-71SO2KZp2Fu_9/view?usp=sharing" target="_blank" rel="noreferrer" id="download" className="btn  hero-btn">Download CV</a>
                        <Link to="projects" spy={true} smooth={true} className="btn hero-btn">My Projects</Link>
                    </div>
                </div>
            </div>
            <Link to="education" spy={true} smooth={true}>
                <div onclick="smoothScroll()" type="button" id="scroll-down" className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </section>
    );
}

export default Hero;