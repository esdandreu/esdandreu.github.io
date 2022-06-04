import React from 'react';
import { withRouter } from 'react-router-dom';
import Experiences from './Experience/Experiences'
import Portfolio from './Experience/Portfolio'
import './Experience/Experience.css'

function Experience() {
    return(
        <div className="experience-container">
            <div id="experience">
                <h1>Experience</h1>
                <hr />
                <Experiences />
            </div>
            <div id="portfolio">
                <h1>Portfolio</h1>
                <hr />
                <Portfolio />
            </div>
        </div>
    )
}

export default withRouter(Experience);