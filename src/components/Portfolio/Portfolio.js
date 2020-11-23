import React from 'react';
import "./Portfolio.css";
import hw_4 from "../../assets/photos/portfolio/HW_4.gif";
import Proj1 from "../../assets/photos/portfolio/Proj1.gif";
import HW_13 from "../../assets/photos/portfolio/HW_13.png";
import Project_2 from "../../assets/photos/portfolio/Project_2.png";
import HW_6 from "../../assets/photos/portfolio/HW_6.png";
import StudyMate from "../../assets/photos/portfolio/StudyMate.png";

function Portfolio() {

    return (
        <>
            <div className="title" id="portfolio-title">My Work</div>
            <div className="content-container" id="portfolio">
                <div id="portfolio-content">
                    <div className="portfolio-image">
                        <a href="https://floating-journey-44508.herokuapp.com/"><img
                            src={StudyMate} alt="StudyMate" id="StudyMate-id" />
                        </a>
                    </div>
                    <div className="portfolio-image">
                        <a href="https://github.com/DanielGerrald/Project_1"><img
                            src={Proj1} alt="Project 1" id="project1-id" />
                        </a>
                    </div>
                    <div className="portfolio-image">
                        <a href="https://github.com/Toomuchbob/06-Server-Side-APIs"><img
                            src={HW_6} alt="Homework 6" id="homework-6-id" />
                        </a>
                    </div>
                    <div className="portfolio-image">
                        <a href="https://github.com/Toomuchbob/04-Code-Quiz"><img
                            src={hw_4} alt="Homework 4" id="homework-4-id" />
                        </a>
                    </div>
                    <div className="portfolio-image">
                        <a href="https://github.com/Toomuchbob/Eat-Da-Burger"><img
                            src={HW_13} alt="Homework 13" id="homework-13-id" />
                        </a>
                    </div>
                    <div className="portfolio-image">
                        <a href="http://project-2-agrc.herokuapp.com/"><img
                            src={Project_2} alt="Project 2" id="project2-13-id" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="portfolio-pixel"></div>
        </>
    );
};

export default Portfolio;