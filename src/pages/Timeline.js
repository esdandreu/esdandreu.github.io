import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Timeline/Timeline.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

import education from "./Timeline/education";
import qualifications from "./Timeline/qualifications";

class Timeline extends Component {
  timeline_ini = 2013;
  timeline_end = 2019;

  year2row = (year_ini, year_end) => {
    const row_ini = 2 + 2 * (year_ini - this.timeline_ini);
    const row_end = 2 + 2 * (year_end - this.timeline_ini);
    return row_ini + " / " + row_end;
  };

  render() {
    // Pass the value to css for last row for education
    document.documentElement.style.setProperty(
      "--educationEnd",
      this.year2row(this.timeline_end + 1, this.timeline_end + 1.5)
    );
    const is_education =
      "#education".localeCompare(this.props.location.hash) + 1 ||
      "#education-title".localeCompare(this.props.location.hash) + 1;
    const is_desktop = window.innerWidth > 500;
    return (
      <div className="timeline-container">
        <div
          className="grid-container"
          id={is_education ? "education-grid" : "qualifications-grid"}
        >
          <div id="education-title">
            {is_desktop ? (
              <h1>
                <NavLink smooth to="/timeline#education">
                  Education
                </NavLink>
              </h1>
            ) : (
              <h1>Education</h1>
            )}
          </div>
          <div
            id="timeline_education-highschool"
            className="education_items"
            style={{ gridRow: this.year2row(2013.5, 2015.5) }}
          >
            {education.highschool()}
          </div>
          <div
            id="timeline_education-valencia"
            className="education_items"
            style={{ gridRow: this.year2row(2015.5, 2019.5) }}
          >
            {education.valencia()}
          </div>
          <div
            id="timeline_education-exchangeUSA"
            className="education_items"
            style={{ gridRow: this.year2row(2018, 2018.5) }}
          >
            {education.USA()}
          </div>
          <div
            id="timeline_education-stadler"
            className="education_items"
            style={{ gridRow: this.year2row(2018.5, 2019) }}
          >
            {education.Stadler()}
          </div>
          <div
            id="timeline_education-exchangeAMS"
            className="education_items"
            style={{ gridRow: this.year2row(2019, 2019.5) }}
          >
            {education.amsterdam()}
          </div>
          <div
            id="timeline_education-prontopro"
            className="education_items"
            style={{ gridRow: this.year2row(2019.5, 2020) }}
          >
            {education.ProntoPro()}
          </div>
          <div
            id="qualifications-title"
            // {is_desktop ?
            //  {gridRow: '1 / 2'}
            //  : {gridRow: this.year2row(this.timeline_end+1,this.timeline_end+1.5)}}
          >
            {is_desktop ? (
              <h1>
                <NavLink smooth to="/timeline#qualifications">
                  Qualifications
                </NavLink>
              </h1>
            ) : (
              <h1>Qualifications</h1>
            )}
          </div>
          <div className="timeline-year">2013</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2013()}
          </div>
          <div className="timeline-year">2014</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2014()}
          </div>
          <div className="timeline-year">2015</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2015()}
          </div>
          <div className="timeline-year">2016</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2016()}
          </div>
          <div className="timeline-year">2017</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2017()}
          </div>
          <div className="timeline-year">2018</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2018()}
          </div>
          <div className="timeline-year">2019</div>
          <div className="timeline_qualifications-container">
            {qualifications.y2019()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Timeline);
