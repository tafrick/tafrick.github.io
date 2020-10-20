import React from 'react';

import classes from './projects.module.css';
import Project from './Project/project';
import Arrow from '../UI/Arrow/Arrow';

import DLA from '../../assets/images/Screen Shot 2020-10-19 at 5.18.23 PM.png';
import BB from '../../assets/images/Screen Shot 2020-10-19 at 7.26.10 PM.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const projects = (skills) => {
    return (
        <div className={classes.ProjectsWrapper} id="Content">
            {/* <h1>My Projects:</h1>
            <div className={classes.Project}>
                <h2>Web Dev</h2> */}
            <Carousel>
                {/* <div>
                        <img src={DLA} alt="DLA" />
                        <p>DuelLinksAcademy.xyz"</p>
                    </div>
                    <img src={BB} alt="burger-builder" />
                    <p>BurgerBuilder</p> */}
                <Project
                    title="DuelLinksAcademy.xyz"
                    source={DLA} alt="DLA"
                    clicked={() => window.open("https://duellinksacademy.xyz")}
                    clicked2={() => window.open("https://github.com/tafrick/DuelLinks-Site")}
                    description="A card searching website for mobile game, with deck building functionality and community elements" />
                <Project
                    title="BurgerBuilder"
                    source={BB} alt="BurgerBuilder"
                    clicked={() => window.open("https://react-my-burger-58f16.web.app/")}
                    clicked2={() => window.open("https://github.com/tafrick/Burger-Builder-Udemy-")}
                    description="Udemy course project used to learn React" />
            </Carousel>
            {/* </div> */}
            <Arrow Linked="section4" />
            {/* <div className={classes.Project}>
                <h2>Cyber Security</h2>
                <ul>
                    <li><Project title="MysteryTwister Brute Force Attack on 3DES" src="" alt="" /></li>
                </ul>
            </div> */}
            {/* <div className={classes.Project}>
                <h2>Intelligent Computing</h2>
                <ul>
                    <li><Project title="Adversarial Learning" src="" alt="" /></li>
                </ul>
            </div> */}
        </div >
    );
}

export default projects;