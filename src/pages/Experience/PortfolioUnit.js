import React from 'react';

function PortfolioUnit(props) {
    const {id, title, project_url, period, image, highlights, description} = props.project;

    return(
        <div className="project" id={id}>
            <div className="project_container">
                <div id="project-title" className="project-title_container">
                    <h2>
                        <a href={project_url} rel="noopener noreferrer" target="_blank">
                            {title}
                        </a>
                    </h2>
                </div>
            </div>
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project_container">
                <div className="project-title_container">
                    <span>
                        {period}
                    </span>
                </div>
                <div className="project-content">
                    <h4>
                        {highlights}
                    </h4>
                    <div className="project-description">
                        {description()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioUnit;