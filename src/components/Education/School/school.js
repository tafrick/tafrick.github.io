import React from 'react';

import classes from './school.module.css';

const school = (props) => {
    return (
        <div className={classes.School}>
            <img src={require('../../../assets/images/' + props.source + '.png')} alt={props.alter} />
            <p>{props.degree} degree</p>
            <p>{props.gradDate}</p>
        </div>
    );
}

export default school;