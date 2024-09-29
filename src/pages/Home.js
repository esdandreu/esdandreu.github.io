import React from "react";
import { withRouter } from "react-router-dom";

import homeText from "./Home/homeData";
import skills_img from "./Home/images/skills.jpg";
import strengths_img from "./Home/images/strengths.jpg";
import languages_img from "./Home/images/languages.png";
import objective_img from "./Home/images/objective.png";
import "./Home/Home.css";

function Home() {
  return (
    <div className="home_container">
      <div id="objective">
        <div className="title-container">
          <h1>Objective</h1>
        </div>
        <div className="image-container">
          <img src={objective_img} alt="objective" />
        </div>
        <div>
          <p>{homeText.objective}</p>
        </div>
        <div className="title-container">
          <h1>Strengths</h1>
        </div>
        <div className="image-container">
          <img src={strengths_img} alt="strengths" />
        </div>
        <div>
          <p>{homeText.strengths}</p>
        </div>
      </div>
      <div id="skills">
        <div className="title-container">
          <h1>Skills</h1>
        </div>
        <div className="image-container">
          <img src={skills_img} alt="skills" />
        </div>
        <div>{homeText.skills()}</div>
        <div className="title-container">
          <h1>Languages</h1>
        </div>
        <div className="image-container">
          <img src={languages_img} alt="languages" />
        </div>
        <div>{homeText.languages()}</div>
      </div>
      <div>
        <h1>Other Details</h1>
        {homeText.otherDetails()}
      </div>
    </div>
  );
}

export default withRouter(Home);
