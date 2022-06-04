import React from 'react';
import { withRouter } from 'react-router-dom';
import Portfolio from './Experience/Portfolio'
import './Experience/Experience.css'

function Experience() {
    return(
        <div className="experience-container">
            <div id="portfolio">
                <h1>Portfolio</h1>
                <hr />
                <Portfolio />
            </div>
        </div>
    )
}

export default withRouter(Experience);