import React, { useEffect, useContext } from 'react';
import "./NavCanvasLinks.css";
import { NavContext } from "../../contexts/NavContext.js"

function NavCanvasLinks() {
    const {nav, setNav} = useContext(NavContext);

    useEffect(() => {
        console.log(nav);
    }, [nav])

    const handleMouseOver = e => {

        setNav(e.target.getBoundingClientRect());

    };

    return (
        <div>
            <a href="#aboutMe" id="nav-canvas-links-about-me" onMouseOver={handleMouseOver}>About Me</a>
            <a href="#portfolio" id="nav-canvas-links-portfolio" onMouseOver={handleMouseOver}>Portfolio</a>
            <a href="#aboutthis" id="nav-canvas-links-about-this-page" onMouseOver={handleMouseOver}>About This Page</a>
        </div>
    );

};

export default NavCanvasLinks;
