import React from 'react';
import EXPERIENCES from './experienceData';
import ExperienceUnit from './ExperienceUnit';

const Experiences = () => (
    <div>
        {
            EXPERIENCES.map(EXPERIENCE => (
                <ExperienceUnit key={EXPERIENCE.id} experience={EXPERIENCE} />
            ))
        }
    </div>
)

export default Experiences;