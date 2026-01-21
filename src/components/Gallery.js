import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import Healthcare from '../images/Portfolio/App_ui.png'
import Food from '../images/Portfolio/food.jpg'
import Portfolio from '../images/Portfolio/portfolio.PNG'
import PFE from '../images/Portfolio/pfe.PNG'


function Gallery() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [hover, setHover] = useState(false);
    // Removed unused 'tags' variable
    
    /**
     * Add portfolio project here
     */
    const portfolio = [
        {
            title: "MIOLA PFE",
            stack: "Full Stack Spring/ReactJS",
            image: PFE,
            category: ['all', 'Java EE', 'Spring boot', 'Spring Security', 'ReactJS', 'PostgreSQL', 'Git'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://miolapfe.herokuapp.com ',
        },
        {
            title: "React Portfolio",
            stack: "ReactJS",
            image: Portfolio,
            category: ['all', 'ReactJS'],
            description: "Une plateforme de faire le suivi, l'accompagnement et l'encadrement des etudiants pendant leurs stages de PFE.",
            link: 'https://github.com/ilyasstrh/React_Portfolio',
        },
        {
            title: 'Food delivery system',
            stack: "JAVA Desktop",
            image: Food,
            category: ['all', 'Java', 'JavaFX', 'Maven', 'Git'],
            description: "The main purpose of our application is to allow users to minimize travel time to restaurants and enjoy their home food in a short time by viewing the progress of their order, thus facilitating the task of order management for restaurants, thus offering an optimal path for deliveries, with several IoT-based functionalities.",
            link: 'https://github.com/ilyasstrh/FOOD_SYSTEM',
        },
        {
            title: 'Healthcare Mobile App',
            stack: "Android",
            image: Healthcare,
            category: ['all', 'Android', 'Gradle', 'Firebase', 'Firestore', 'Git', 'UI/UX'],
            description: "A mobile application that facilitates making appointments and monitoring patients",
            link: 'https://github.com/ilyasstrh/Health_Care_App',
        }
    ];

    useEffect(() => {
        setProjects(portfolio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    return (
        <div>
            <div id="filter">
                {/* Tags to filter projects */}
                <button className="btn btn-project" onClick={() => setFilter('all')}>
                    All
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Javascript')}>
                    Javascript
                </button>
                <button className="btn btn-project" onClick={() => setFilter('ReactJS')}>
                    ReactJS
                </button>
                <button className="btn btn-project" onClick={() => setFilter('UI/UX')}>
                    UI/UX
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Java')}>
                    Java
                </button>
                <button className="btn btn-project" onClick={() => setFilter('NodeJS')}>
                    NodeJS
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Firebase')}>
                    Firebase
                </button>
                <button className="btn btn-project" onClick={() => setFilter('MongoDB')}>
                    MongoDB
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Spring boot')}>
                    Spring boot
                </button>
            </div>
            <div className="image-grid">
                {projects.map(item => item.filtered === true ? (
                    <div className="box" key={item.title} >
                        <div className="grid-image">
                            <img src={item.image} alt={item.title} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                        </div>
                        <div className={hover ? 'hidden' : 'display-content'}>
                            <h2>{item.title}</h2>
                            <p>{item.stack}</p>
                            <button className="btn hero-btn title">
                                <a id="title" href={item.link} target="_blank" rel="noreferrer">Learn more</a>
                            </button>
                        </div>
                    </div>
                ) : '')}
            </div>
        </div>
    );
}

export default Gallery;