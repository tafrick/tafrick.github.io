import React from 'react';

import { Link, animateScroll } from "react-scroll";
import classes from './navbar.module.css';

const navbar = (props) => {
    return (
        <div>
            <ul id="nav">
                <li className={classes.navItem}><Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Top</Link></li>
                <li className={classes.navItem}><Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link></li>
                <li className={classes.navItem}><Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Projects</Link></li>
                <li className={classes.navItem}><Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Education</Link></li>
                <li className={classes.navItem}><Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </div>
    );
}

export default navbar;