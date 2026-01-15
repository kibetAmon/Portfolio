import React from 'react';
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="#">Kenya Revenue Authority</a>
                        <a href="#" className="float-right">Feb 2025 - Present</a>
                        <p>
                            Software Developer
                    </p>
                    </li>
                    <li>
                        <a href="#">Oracle</a>
                        <a href="#" className="float-right">Feb 2021 - Aug 2021</a>
                        <p>
                            Graduate Trainee - Software Developer
                    </p>
                    </li>
                     <li>
                        <a target="_blank" href="#">Konza Technopolis Development Authority</a>
                        <a href="#" className="float-right">Dec 2023 - Oct 2024</a>
                        <p>
                            Software Developer
                    </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;