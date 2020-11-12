import React, { useEffect, useContext } from 'react';
import "./NavCanvasLinks.css";
import { NavContext } from "../../contexts/NavContext.js"

function NavCanvasLinks() {
    const {nav, setNav} = useContext(NavContext);

    const handleMouseOver = e => {

        setNav(e.target.getBoundingClientRect());

    };

    return (
        <div className="link">
            <a href="#about-me-title" id="nav-canvas-links-about-me" onMouseOver={handleMouseOver}>About Me</a>
            <a href="#portfolio-title" id="nav-canvas-links-portfolio" onMouseOver={handleMouseOver}>Portfolio</a>
            <a href="#about-this-title" id="nav-canvas-links-about-this-page" onMouseOver={handleMouseOver}>About This Page</a>
        </div>
    );

};

export default NavCanvasLinks;
