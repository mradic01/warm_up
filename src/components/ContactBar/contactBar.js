import React from 'react';

import classes from './contactBar.module.css';
import Aux from '../../hoc/auxiliary/auxiliary';

import { AiFillPhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";

const contactBar = () => (
    <main className={classes.contactBar}>
        <div className={classes.contact}>
            <SiMinutemailer style={{marginRight: "5px"}}/>
            <span>panicioJoni@gmail.com</span>
        </div>
        <div className={classes.contact}>
            <AiFillPhone style={{marginRight: "5px"}}/>
            <span>+385 95 874 8698</span>
        </div>
    </main>
);

export default contactBar;
