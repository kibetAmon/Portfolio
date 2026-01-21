import React from 'react';
import '../App.css';

function Experience() {
    return (
        <section id="experience" className="container">
            <div className="container mt-5 mb-5">
                <h2>Experience</h2>
                <ul className="timeline">
                    <li>
                        <span className="timeline-company">Kenya Revenue Authority</span>
                        <span className="float-right">Feb 2025 - Present</span>
                        <p>
                            Software Developer
                        </p>
                    </li>
                    <li>
                        <span className="timeline-company">Oracle</span>
                        <span className="float-right">Feb 2021 - Aug 2021</span>
                        <p>
                            Graduate Trainee - Software Developer
                        </p>
                    </li>
                    <li>
                        <span className="timeline-company">Konza Technopolis Development Authority</span>
                        <span className="float-right">Dec 2023 - Oct 2024</span>
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