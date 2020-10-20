import React from 'react';

import classes from './education.module.css';
import School from './School/school';

import SJSU from '../../assets/images/sjsu_logo.png';
import UCSC from '../../assets/images/ucsc_logo.png';

import Arrow from '../UI/Arrow/Arrow'

const education = (props) => {
    return (
        <div className={classes.EducationWrapper} id="EduContent">
            <div className={classes.Educated}>
                <h1>Education</h1>
                <ul>
                    <li><School
                        schoolName="San Jose State University"
                        source={SJSU}
                        alter="sjsu"
                        degree="M.S. in Computer Science"
                        gradDate="2020-2022" /></li>
                    <li><School
                        schoolName="University of California, Santa Cruz"
                        source={UCSC}
                        alter="ucsc"
                        degree="B.S. in Computer Science"
                        gradDate="2015-2019" /></li>
                </ul>
            </div>
            <Arrow Linked="section5" />
        </div>
    );
}

export default education;