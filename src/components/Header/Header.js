import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {

    const [hide, setHide] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
          setHide(window.scrollY > 0)
        }
      
        window.addEventListener('scroll', scrollListener);
      
        //on unmount, remove scrollListener
        return () => {
          window.removeEventListener('scroll', scrollListener);
        };
      }, []);

    return (
        <div className={`header ${hide ? "hide-header" : ""}`}>
            <span className="text">Portfolio of </span>
            <span className="text">Gino </span>
            <span className="text">Zaccardelli </span>
        </div>
    );
};

export default Header;