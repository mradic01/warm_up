import React from 'react';

import classes from './navigationHeader.module.css';
import Logo from '../Logo/logo'; 

const navigationHeader = (props) => (
    <section className={classes.NavigationHeader}>
        <Logo/>
        <div>Navigation</div>
    </section>
);

export default navigationHeader;