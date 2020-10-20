import React from 'react';

import classes from './aboutMe.module.css';
import Resume from '../../../src/assets/files/Resume (2).pdf';

const aboutMe = (props) => {
    return (
        <div className={classes.AboutWrapper}>
            <div className={classes.AboutME}>
                <div>
                    <p>Hello!</p>
                </div>
                <p>I am a current graduate student in the MS in CS program and <u>San Jose State University</u> and am looking for internship opportunities. I just started my master's program this past fall and am expecting to graduate in 2022. Currently I am taking classes in Cyber Security and Computational Intelligence!</p>
                <a href={Resume} target="_blank"><button>Get Resume</button></a>
            </div>
        </div>
    );
}

export default aboutMe;