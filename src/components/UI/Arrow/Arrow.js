import React from 'react';

import './Arrow.css';
import { Link, animateScroll } from "react-scroll";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Arrow = (props) => {
    return (
        <Link
            activeClass="active"
            to={props.Linked}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <div className="arrow bounce">
                <KeyboardArrowDownIcon className="svg_icons" />
            </div>
        </Link>
    );
}

export default Arrow;