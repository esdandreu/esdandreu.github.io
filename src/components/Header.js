import React, {Component} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

import HeaderBio from './Header/HeaderBio';
import './Header/Header.css';

// Custom scroll function to navigate with offset, used to take into account the header

class Header extends Component  {
    constructor(props) {
        super(props);
        this.navbar_height = 0;
        this.navbar_borderColor = "blue"
    }
    
    updateNavbarHeight = () => {
        if (document.getElementById("header_navbar")){
            this.navbar_height = parseInt(
                getComputedStyle(document.getElementById("header_navbar")).getPropertyValue("height")
            );
        }
    }

    updateNavbarBorderColor = () => {
        if (document.getElementById("root")){
            switch(window.location.pathname) {
                case "/home":
                    this.navbar_borderColor = getComputedStyle(
                        document.getElementById("root")
                        ).getPropertyValue("--header_link_color-home");
                    break;
                case "/experience":
                    this.navbar_borderColor = getComputedStyle(
                        document.getElementById("root")
                        ).getPropertyValue("--header_link_color-experience");
                    break;
                case "/timeline":
                    this.navbar_borderColor = getComputedStyle(
                        document.getElementById("root")
                        ).getPropertyValue("--header_link_color-timeline");
                    break;
                default:
                    this.navbar_borderColor = getComputedStyle(
                        document.getElementById("root")
                        ).getPropertyValue("--header_link_color-home");
            }
        }
    }
    scrollWithOffset = (element, offset) => {
        const elementPosition = element.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });
    }

    componentDidMount() {
        this.updateNavbarHeight();
    }

    render() {
        this.updateNavbarHeight();
        this.updateNavbarBorderColor();
        return (
            <div className="header__container">
                <div className="header__bio">
                    <HeaderBio />
                </div>
                <div className="header__navbar"
                    id="header_navbar"
                    style={{"borderColor": this.navbar_borderColor}}>
                    <h3 className = "header__link-home" id="header_link-home">
                        <NavLink scroll={el => this.scrollWithOffset(el, this.navbar_height)} to='/home#objective'>
                            Home
                        </NavLink>
                    </h3>
                    <h3 className = "header__link-home" id="header_link-skills">
                        <NavLink scroll={el => this.scrollWithOffset(el, this.navbar_height)} to='/home#skills'>
                            Skills
                        </NavLink>
                    </h3>
                    <h3 className = "header__link-experience" id="header_link-portfolio">
                        <NavLink scroll={el => this.scrollWithOffset(el, this.navbar_height)} to='/experience#portfolio'>
                        Portfolio
                        </NavLink>
                    </h3>
                    <h3 className = "header__link-timeline" id="header_link-education">
                        <NavLink scroll={el => this.scrollWithOffset(el, this.navbar_height)} to='/timeline#education-title'>
                            Education
                        </NavLink>
                    </h3>
                    <h3 className = "header__link-timeline" id="header_link-qualifications">
                        <NavLink scroll={el => this.scrollWithOffset(el, this.navbar_height)} to='/timeline#qualifications-title'>
                            Qualifications
                        </NavLink>
                    </h3>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);