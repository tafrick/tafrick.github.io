import React from 'react';

import './Arrow.css';
import { Link, animateScroll } from "react-scroll";

const Arrow = (props) => {
    return (
        <Link
            activeClass="active"
            to={props.Linked}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        ><div className="arrow bounce">
            </div></Link>
    );
}

export default Arrow;