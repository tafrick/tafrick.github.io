import React from 'react';

import classes from './skills.module.css';
import Arrow from '../UI/Arrow/Arrow';

const skills = (props) => {
    return (
        <div className={classes.SkillsWrapper} id="Content">
            <h1>My Skills</h1>
            <div className={classes.SkillList}>
                <h4>Languages</h4>
                <ul>
                    <li><p>Javascript</p></li>
                    <li><p>Java</p></li>
                    <li><p>Python</p></li>
                    <li><p>C#</p></li>
                    <li><p>Haskell</p></li>
                </ul>
            </div>
            <div className={classes.SkillList}>
                <h4>Web Dev</h4>
                <ul>
                    <li><p>Node.js</p></li>
                    <li><p>React</p></li>
                    <li><p>Express.js</p></li>
                    <li><p>MongoDB</p></li>
                    <li><p>REST APIs</p></li>
                    <li><p>CSS</p></li>
                    <li><p>HTML</p></li>
                </ul>
            </div>
            <Arrow Linked="section3" />
            {/* <div className={classes.SkillList}>
                <h4>Cyber Security</h4>
                <ul>
                    <li><p>Crypto</p></li>
                    <li><p>Cryptanalysis</p></li>
                </ul>
            </div>
            <div className={classes.SkillList}>
                <h4>Machine Learning</h4>
                <ul>
                    <li><p>Nueral Networks</p></li>
                    <li><p>Recommender Systems</p></li>
                    <li><p>KDD</p></li>
                    <li><p>NLP</p></li>
                    <li><p>Adversarial Learning</p></li>
                </ul>
            </div> */}
        </div>
    );
}

export default skills;