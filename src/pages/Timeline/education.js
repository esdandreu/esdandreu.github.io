import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const education = {
    highschool: () => (
        <div>
            <h3>Highschool</h3>
            <h4>2013-2015</h4>
            <p>I.E.S. Sivera Font, Canals, with honors</p>
        </div>
    ),
    valencia: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>2015-2019</h4>
            <h4>BSc degree in the ARA group</h4>
            <p>Universitat Politècnica de Valencia</p>
            <p>Spain</p>
        </div>
    ),
    USA: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>Spring 2018</h4>
            <h4>Exchange Student</h4>
            <p>Embry-Riddle Aeronautical University</p>
            <p>USA</p>
        </div>
    ),
    Stadler: () => (
        <div>
            <NavLink smooth to='/experience#experience-stadler' >
                <h3>Software Engineer</h3>
                <h4>Autumn 2018</h4>
                <h4>STADLER</h4>
            </NavLink>
        </div>
    ),
    amsterdam: () => (
        <div>
            <h3>Aerospace Engineering</h3>
            <h4>Spring 2019</h4>
            <h4>Exchange Student</h4>
            <p>Amsterdam Univesity of Applied Sciences</p>
            <p>Netherlands</p>
        </div>
    ),
    ProntoPro: () => (
        <div>
            <NavLink smooth to='/experience#experience-prontopro' >
                <h3>Junior Marketing Automation Engineer</h3>
                <h4>November 2019 - May 2020</h4>
                <h4>ProntoPro</h4>
            </NavLink>
        </div>
    ),
};

export default education;