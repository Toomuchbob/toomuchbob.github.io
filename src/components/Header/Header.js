import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {

    const [hide, setHide] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
          setHide(window.scrollY > 0)
        }
      
        window.addEventListener('scroll', scrollListener);
      
        // on unmount, remove scrollListener
        return () => {
          window.removeEventListener('scroll', scrollListener);
        };
      }, []);

    const handleOnClick = () => {
        console.log(hide);
        setHide(!hide);
    };

    return (
        <div className={`header ${hide ? "hide" : ""}`} onClick={handleOnClick}>
            <span className="text">Portfolio of </span>
            <span className="text">Gino </span>
            <span className="text">Zaccardelli </span>
        </div>
    );
};

export default Header;