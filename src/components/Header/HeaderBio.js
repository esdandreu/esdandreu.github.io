import React, { Component } from "react";
import "./HeaderBio.css";
import IconLink from "../IconLink";
import { withRouter } from "react-router-dom";

// Hardcoded from
const IMG_FILENAMES = ["bike", "graduate", "NY", "prize", "radio"];

class HeaderBio extends Component {
  constructor(props) {
    super(props);
    this.state = { imgIndex: 0, fadeIn: true };
    this.fade_duration = 1000;
    this.image_duration = 6 * 1000;
  }

  componentDidMount() {
    this.timeout = setTimeout(
      () => this.setState({ fadeIn: false }),
      this.image_duration - this.fade_duration
    );
    this.animateImages();
  }

  componentWillUnmount() {
    clearInterval(this.imgInterval);
    clearTimeout(this.timeout);
  }

  animateImages = () => {
    this.imgInterval = setInterval(() => {
      const imgIndex = (this.state.imgIndex + 1) % IMG_FILENAMES.length;
      this.setState({ imgIndex, fadeIn: true }, () => {
        this.timeout = setTimeout(
          () => this.setState({ fadeIn: false }),
          this.image_duration - this.fade_duration
        );
      });
    }, this.image_duration);
  };

  render() {
    const { fadeIn, imgIndex } = this.state;
    return (
      <div className="bio_container" id="header_bio">
        <div className="bio_pic" id={fadeIn ? "img-fade-in" : "img-fade-out"}>
          {/* Keep two images loaded in order to improve stability*/}
          <img
            style={imgIndex % 2 ? { display: "none" } : {}}
            src={
              process.env.PUBLIC_URL +
              `/profile/${
                IMG_FILENAMES[
                  (imgIndex + (imgIndex % 2)) % IMG_FILENAMES.length
                ]
              }.jpg`
            }
            alt="profile"
          />
          <img
            style={imgIndex % 2 ? {} : { display: "none" }}
            src={
              process.env.PUBLIC_URL +
              `/profile/${
                IMG_FILENAMES[
                  (imgIndex - (imgIndex % 2) + 1) % IMG_FILENAMES.length
                ]
              }.jpg`
            }
            alt="profile"
          />
        </div>
        <div className="bio_info-container">
          <div className="bio_info">
            <h1>Andreu Giménez Bolinches</h1>
            <IconLink
              className="header-icon"
              href="mailto:esdandreu@gmail.com"
              icon="fas fa-envelope"
            />
            <IconLink
              className="header-icon"
              href="https://www.linkedin.com/in/andreu-gimenez/"
              icon="fab fa-linkedin-in"
            />
            <IconLink
              className="header-icon"
              href="https://raw.githubusercontent.com/esdandreu/esdandreu/main/cv/andreu-gimenez-bolinches.pdf"
              icon="fas fa-file-alt"
            />
            <IconLink
              className="header-icon"
              href="https://stackoverflow.com/users/13180090/andreu-gimenez"
              icon="fab fa-stack-overflow"
            />
            <IconLink
              className="header-icon"
              href="https://github.com/esdandreu"
              icon="fab fa-github"
            />
            <IconLink
              className="header-icon"
              href="https://gitlab.com/esdandreu"
              icon="fab fa-gitlab"
            />
            <h3>Aerospace | Robotics | Maker</h3>
            <p>
              Self-learning skills and limited time problem solving; High
              English level; Team management and social skills; Quick adaptation
              to any programming language or software tool.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderBio);
