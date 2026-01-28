/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link } from 'react-scroll'


export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        
        const handleMediaQueryChange = (e) => {
            setIsSmallScreen(e.matches);
            // Close menu when switching to desktop
            if (!e.matches) {
                setNavVisibility(false);
            }
        };
        
        mediaQuery.addEventListener('change', handleMediaQueryChange);
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
            {(!isSmallScreen || isNavVisible) && (
                <nav className="Nav">
                    <Link to="projects" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Projects</Link>
                    <Link to="certifications" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Certifications</Link>
                    <Link to="blog" spy={true} smooth={true} onClick={toggleNav} className="menu-link">Blogs</Link>
                </nav>
            )}
            <button onClick={toggleNav} className="Burger">
                <i className='fa fa-bars'></i>
            </button>
        </header>
    );
}