import React from 'react';
import '../App.css';

function Education() {
    return (
        <section id="education" className="container">
            <div className="container mt-5 mb-5">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <span className="timeline-company">Moi University</span>
                        <span className="float-right">Aug 2017 - Dec 2022</span>
                        <p>
                            Bachelor's degree: Informatics
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education;