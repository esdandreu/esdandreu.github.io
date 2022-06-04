import IconLink from "./IconLink";
import Quote from "./Footer/Quote";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Footer/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>&#x24B8; {new Date().getFullYear()} Andreu Giménez Bolinches </p>
        <div className="footer-container">
          <div className="footer_quote-container">
            <Quote />
          </div>
          <div className="footer_social-container">
            <IconLink
              className="footer-icon"
              href="mailto:esdandreu@gmail.com"
              icon="fas fa-envelope"
            />
            <IconLink
              className="footer-icon"
              href="https://www.linkedin.com/in/andreu-gimenez-bolinches-esdandreu/"
              icon="fab fa-linkedin-in"
            />
            <IconLink
              className="footer-icon"
              href="https://raw.githubusercontent.com/esdandreu/esdandreu/main/cv/andreu-gimenez-bolinches.pdf"
              icon="fas fa-file-alt"
            />
            <IconLink
              className="footer-icon"
              href="https://stackoverflow.com/users/13180090/andreu-gimenez"
              icon="fab fa-stack-overflow"
            />
            <IconLink
              className="footer-icon"
              href="https://github.com/esdandreu"
              icon="fab fa-github"
            />
            <IconLink
              className="footer-icon"
              href="https://gitlab.com/esdandreu"
              icon="fab fa-gitlab"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
