import React, { useEffect, useState, useContext } from 'react';
import "./NavCanvasLinks.css";
import { NavContext } from "../../contexts/NavContext.js"

function NavCanvasLinks() {
    const [coords, setCoords] = useState();

    const value = useContext(NavContext);

    useEffect(() => {
        console.log(coords);
    }, [coords])

    const handleMouseOver = e => {

        setCoords(e.target.getBoundingClientRect());

    };

    return (
        <div>
            <a href ="#value">{value}</a>
            <a href="#aboutMe" id="nav-canvas-links-about-me" onMouseOver={handleMouseOver}>About Me</a>
            <a href="#portfolio" id="nav-canvas-links-portfolio" onMouseOver={handleMouseOver}>Portfolio</a>
            <a href="#aboutthis" id="nav-canvas-links-about-this-page" onMouseOver={handleMouseOver}>About This Page</a>
        </div>
    );

};

export default NavCanvasLinks;
