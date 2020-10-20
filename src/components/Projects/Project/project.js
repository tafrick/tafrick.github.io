import React from 'react';

import classes from './project.module.css';

const project = (props) => {
    return (
        <div className={classes.project}>
            <button onClick={props.clicked}>To project</button>
            <button onClick={props.clicked2}>To Code</button>
            <img src={props.source} alt={props.alter} />
            <p>{props.title}</p>
        </div>
    );
}

export default project;