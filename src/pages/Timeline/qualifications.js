import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const qualifications = {
    y2013: () =>  (
        <div>
            <p>• Involved in “Campus Científicos de Verano 2013” in a robotics course</p>
        </div>
    ),
    y2014: () => (
        <div>
            <p>• Involved in “Prakticum 2014” in a chemistry course</p>
        </div>
    ),
    y2015: () => (
        <div>
            <p>• Grade of 13.32 out of 14 in the national university access exam</p>
        </div>
    ),
    y2016: () => (
        <div>
            <p>
                <a href="http://www.upv.es/noticias-upv/noticia-8236-materials-week-es.html" rel="noopener noreferrer" target="_blank">
                • Winner of the international contest “Desafío de Selección de Materiales 2016” 
                </a>
            </p>
        </div>
    ),
    y2017: () => (
        <div>
            <p>• 4th classified in the Olympic Robotics Challenge 2017 UPV</p>
            <p>
                <a href="https://www.upv.es/rtv/tv/actualidad-en-la-upv/59131" rel="noopener noreferrer" target="_blank">
                • Winner of two prizes in the “Hackathon Castellón 2017”, 1st prize in the “AI-Machine Learning” challenge and winners of the most popular project 
                </a>
            </p>
            <p>• 2nd classified in the “Game of Cloud” 2017 Valencia hackathon, sponsored by Capgemini and IBM</p>
            <p>• One of the 100 students selected from the UPV to participate in the QdaT (2017) talent recruiting event where companies like Airbus and Amazon find the most prepared young students.</p>
        </div>
    ),
    y2018: () => (
        <div>
            <p>• Involved in the&nbsp;
                <a href="http://www.auvsi-suas.org/" rel="noopener noreferrer" target="_blank">
                AUVSI SUAS
                </a> competition with the robotics student association of Embry-Riddle Aeronautical University
            </p>
            <p>
                <a href="https://www.jamesdysonaward.org/2018/project/eogu/" rel="noopener noreferrer" target="_blank">
                • National finalist in the James Dyson Award international competition with the team EOGU
                </a>
            </p>
            <p>
                <a href="http://www.upv.es/noticias-upv/noticia-10449-climatelaunchp-es.html" rel="noopener noreferrer" target="_blank">
                • National Winner of the Climate Launchpad 2018 competition with the team EOGU
                </a>
            </p>
            <p>• Winner of the most popular project in the “Hackathon Castellón 2018”, with a Facial Recognition app</p>
            <p>• One of the 10% accepted applicants for the&nbsp;
                <a href="https://hackjunction.com/" rel="noopener noreferrer" target="_blank">
                Junction hackathon 2018
                </a> in Helsinki
            </p>
            <p>• Winner of the “V Ideas Challenge UPV” in the Energy and IoT section (November 2018) with the EOGU team</p>
            <p>• Winner of the “StartUPV 2018” in the Advanced Idea section (December 2018) with the EOGU team</p>
        </div>
    ),
    y2019: () => (
        <div>
            <p>
                <NavLink smooth to='/experience#DBF'>
                • Design, Build and Fly minor
                </NavLink>
            </p>
            <p>• Winner of&nbsp;
                <a href="https://2019.hackjunction.com/challenges/effective-radiation-therapy-plan-review" rel="noopener noreferrer" target="_blank">
                Effective Radiation Therapy Plan Review
                </a> challenge proposed by Varian in the Healthtech category at&nbsp;
                <a href="http://www.upv.es/noticias-upv/noticia-11673-makers-upv-tri-es.html" rel="noopener noreferrer" target="_blank">
                Junction hackathon 2019
                </a> in Helsinki
            </p>
        </div>
    ),
};

export default qualifications;