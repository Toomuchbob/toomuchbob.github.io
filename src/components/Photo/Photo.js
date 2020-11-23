import React, { useState, useEffect } from 'react';
import "./Photo.css";
import photo from "../../assets/photos/gino.png"

function Photo() {

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
        <div class={`photo crop-circle ${hide ? "hide-photo" : ""}`}>
            <img src={photo} alt="Gino Zaccardelli" />
        </div>
    );

};

export default Photo;