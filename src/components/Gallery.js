import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import Healthcare from '../images/Portfolio/App_ui.png'
import Food from '../images/Portfolio/food.jpg'
import Portfolio from '../images/Portfolio/portfolio.PNG'
import reqsform1 from '../images/Portfolio/reqsform1.jpg'


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
            title: "KNDC Requirements form",
            stack: "Fullstack Django",
            image: reqsform1,
            category: ['all', 'Django'],
            description: "A web application to capture requirements from various institutions seeking Data Centre services from konza Technopolis.",
            link: 'https://requirements.konza.go.ke/ ',
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
                <button className="btn btn-project" onClick={() => setFilter('ReactJS')}>
                    ReactJS
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Django')}>
                    Django
                </button>
                <button className="btn btn-project" onClick={() => setFilter('Spring boot')}>
                    Spring boot
                </button>
                    <button className="btn btn-project" onClick={() => setFilter('.NET')}>
                    .NET
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