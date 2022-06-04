import React from 'react';

function ExperienceUnit(props) {
    const {id, company, company_url, period, image, position, highlights, description} = props.experience;

    return(
        <div id={id}>
            <div className="experience-image">
                <img src={image} alt={company} />
            </div>
            <div className="experience_container-title">
                <div className="experience-title">
                    <h2>
                        <a href={company_url} rel="noopener noreferrer" target="_blank">
                            {company}
                        </a>
                    </h2>
                    <span>
                        {period}
                    </span>
                </div>
                <h3>
                    {position}
                </h3>
            </div>
            <div className="experience-content">
                <h4>
                    {highlights}
                </h4>
                <div>
                    {description()}
                </div>
        </div>
        </div>
    );
}

export default ExperienceUnit;