import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const homeData = {
    objective: "Join a company in the R&D Aerospace sector with projects like the implementation of “AI” and “Computer Vision” to build autonomous drones. And to save the world, obviously.",
    strengths: "Self-learning skills and limited time problem solving due to my experience in several hackathons and competitions; Fluent technical english level because of my continuous studies in the “ARA” (High Academic Performance) group of Aerospace Engineering that is taught in English and my exchange experiences in the USA and Netherlands; Team management and social skills because of my sportive formation as a handball player and my participation in the Makers UPV association; Quick adaptation to any programming language or software tool due to my electronics, code developer and 3D design hobbies.",
    skills: () => (
        <div id="skills-data" className="home_element-container">
            <div id="skill-two-row-span" className="home_element-set">
                <h3>Programming</h3>
                <ul>
                    <li>C (raw and 
                        <a href="https://upvedues-my.sharepoint.com/:v:/g/personal/angibo2_upv_edu_es/ETrqmyQj6KNImlt3FanFGikBlCkNjppx5wb5KkzE0tn9Kw?e=OqgkY4" rel="noopener noreferrer" target="_blank">
                            &nbsp;Arduino
                        </a>)</li>
                    <li>C++</li>
                    <li>
                        <NavLink smooth to="/experience#KinectRobot">
                            Matlab
                        </NavLink>
                    </li>
                    <li>
                        <NavLink smooth to="/experience#WakePi">
                            Python
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://upvedues-my.sharepoint.com/:u:/g/personal/angibo2_upv_edu_es/ETaWDNUyblxIqIkNyW4DvDcBsdFcUHXAwTgoXQZw0w33lQ?e=QgRHTe" rel="noopener noreferrer" target="_blank">
                            Mathematica
                        </a>
                    </li>
                    <li>
                        <a href="https://upvedues-my.sharepoint.com/:x:/g/personal/angibo2_upv_edu_es/EfTPtToGfh1CrKBstVgSwmEBwcJ7DpnxDUw-aj9cjhPmmw?e=2qtvFl" rel="noopener noreferrer" target="_blank">
                            VBA
                        </a>
                    </li>
                    <li>
                        <NavLink smooth to="/experience#project-web">
                            JavaScript
                        </NavLink>
                    </li>
                    <li>
                        <NavLink smooth to="/experience#project-web">
                            HTML 5
                        </NavLink>
                    </li>
                    <li>
                        <NavLink smooth to="/experience#project-web">
                            CSS 3
                        </NavLink>
                    </li>
                    <li>git workflow</li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CAD</h3>
                <ul>
                    <li>
                        <a href="https://upvedues-my.sharepoint.com/:b:/g/personal/angibo2_upv_edu_es/EUtWh5y9Va1Fn52d6J5N30gBtDo-7yYD0GaZpQkmxJwDEw?e=fUjmYa" rel="noopener noreferrer" target="_blank">
                            Fusion 360
                        </a>
                    </li>
                    <li>SolidWorks</li>
                    <li>
                        <a href="https://1drv.ms/b/s!AqZvnCxLmXx9getBJQlXX68lp_KZpA" rel="noopener noreferrer" target="_blank">
                            NX
                        </a>
                    </li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CAM</h3>
                <ul>
                    <li>
                        <a href="https://upvedues-my.sharepoint.com/:v:/g/personal/angibo2_upv_edu_es/EdjN2F7wqulLhB52aju3Q_cBvuYI8B9KSRrEgAU7Ta_I_g?e=SFogxW" rel="noopener noreferrer" target="_blank">
                            Fusion 360
                        </a>
                    </li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>CFD</h3>
                <ul>
                    <li>Ansys Fluent</li>
                    <li>
                        <a href="https://upvedues-my.sharepoint.com/:b:/g/personal/angibo2_upv_edu_es/EVhcbEOmw_FPo2JSqTHaVQsByceY1kdJl8uHM2W-14jOsA?e=JxOw3u" rel="noopener noreferrer" target="_blank">
                            Star-CCM+
                        </a>
                    </li>
                </ul>
            </div>
            <div className="home_element-set">
                <h3>FEM</h3>
                <ul>
                    <li>Ansys Mechanical</li>
                </ul>
            </div>
        </div>
    ),
    languages: () => (
        <div className="home_element-container">
            <div className="home_element-set">
                <ul>
                    <li>Spanish (Native)</li>
                    <li>Catalonian (Native) C1 certificate</li>
                    <li>English (Fluent)
                        <a href="https://upvedues-my.sharepoint.com/:b:/g/personal/angibo2_upv_edu_es/EfpKlOKvzn1GlsNVsejwsHMB-4n1z00U9Z1Rra9upJHNBg?e=f1LV5Z" rel="noopener noreferrer" target="_blank">
                            &nbsp;TOEFL 99 IBT,&nbsp;
                        </a>
                        most degree courses in English, two semester
                        <NavLink smooth to="/timeline#education">
                            &nbsp;exchange student.
                        </NavLink>
                    </li>
                    <li>German (Basic competence)</li>
                    <li>Italian (Limited working competence)</li>
                </ul>
            </div>
        </div>
    ),
    otherDetails: () => (
        <div className="home_element-container">
            <div className="home_element-set">
                <ul>
                    <li>Car Driving License since April 2015</li>
                    <li>Handball player in the Levante-Marni Team (12th team
                        in the Vezprem Cell Cup 2015 tournament (Hungary),
                        1st of the Spanish assistants; 2nd team in U-24 tournament
                        Generation Handball 2016 (Denmark))</li>
                </ul>
            </div>
        </div>
    ),
};

export default homeData;