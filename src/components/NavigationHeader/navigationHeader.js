import React from 'react';

import classes from './navigationHeader.module.css'; 

const navigationHeader = (props) => (
    <section className={classes.NavigationHeader}>
        <div>Logo</div>
        <div>Navigation</div>
    </section>
);

export default navigationHeader;