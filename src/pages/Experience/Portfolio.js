import React from 'react';
import PROJECTS from './portfolioData';
import PortfolioUnit from './PortfolioUnit';

const Portfolio = () => (
    <div>
        {
            PROJECTS.map(PROJECT => (
                <PortfolioUnit key={PROJECT.id} project={PROJECT} />
            ))
        }
    </div>
)

export default Portfolio;