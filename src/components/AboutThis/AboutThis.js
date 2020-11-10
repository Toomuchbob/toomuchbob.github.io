import React from 'react';
import "./AboutThis.css"

function AboutThis() {

    return (
        <>
            <div className="title" id="about-this-title">About This Page</div>
            <div className="content-container" id="about-this">
                <div id="about-this-content">
                    <div id="flaticon">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                    &nbsp;from&nbsp;
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a>
                    </div>
                </div>
            </div>
            <div id="about-this-pixel"></div>
        </>
    );
};

export default AboutThis;
