/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-scroll'


export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        
        const handleMediaQueryChange = (e) => {
            setIsSmallScreen(e.matches);
        };
        
        // Modern way - use addEventListener
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        
        // Set initial value
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (           
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <Link to="projects" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Projects</Link>
                    <Link to="certifications" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Certifications</Link>
                    <Link to="blog" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Blogs</Link>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}