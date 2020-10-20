import React from 'react';

import classes from './contact.module.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope);

function Contact() {
    return (
        <div className={classes.ContactWrapper}>
            <h1>
                contact me
            </h1>
            <p>let's get in touch!</p>
            {/* <p>
                Lets work together on a project together
            </p> */}
            <ul className={classes.ContactList}>
                <li><a href="mailto: tyfrick25@gmail.com"><FontAwesomeIcon icon="envelope" size="lg" /></a></li>
                <li><a href="https://www.linkedin.com/in/tyler-frick-13764a183/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" /></a></li>
                <li><a href="https://github.com/tafrick" target="_blank"><FontAwesomeIcon icon={["fab", "github-alt"]} size="lg" /></a></li>
            </ul>
        </div >
    );
}

export default Contact;