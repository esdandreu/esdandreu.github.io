import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Quote from './Footer/Quote';

import email_logo from '../images/email.png';
import linkedin_logo from '../images/linkedin.png';
import github_logo from '../images/github.png';
import curriculum_logo from '../images/curriculum.png';

import './Footer/Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className= "footer">
        <p>&#x24B8; {new Date().getFullYear()} Andreu Giménez Bolinches  </p>
        <div className= "footer-container">
          <div className= "footer_quote-container">
            <Quote/>
          </div>
          <div className= "footer_social-container">
            <a href="mailto:angibo2@etsid.upv.es" rel="noopener noreferrer" target="_blank">
                <img className="footer_logo" src={email_logo} alt="email"/>
            </a>
            <a href="https://www.linkedin.com/in/andreu-gimenez-bolinches-esdandreu/" rel="noopener noreferrer" target="_blank">
                <img className="footer_logo" src={linkedin_logo} alt="linkedin"/>
            </a>
            <a href="https://github.com/esdandreu" rel="noopener noreferrer" target="_blank">
                <img className="footer_logo" src={github_logo} alt="github"/>
            </a>
            <a href="https://1drv.ms/b/s!AqZvnCxLmXx9gexK_oR9Z1fuw7b8xg?e=dvXf8y" rel="noopener noreferrer" target="_blank">
                <img className="footer_logo" src={curriculum_logo} alt="CV"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
