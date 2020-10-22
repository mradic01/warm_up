import React from 'react';

import classes from './navigationBar.module.css';

const Navtabs = ['HOME', 'ACCOMMODATION', 'PHOTO GALLERY', 'CONTACT'];

const navigationbar = (props) => (
    <nav className={classes.navigationBar}>
        {Navtabs.map(Tab => (
            <li key={Tab} className={Tab === props.activeBar ? classes.active : ''}>{Tab}</li>
        ))}
    </nav>
);

export default navigationbar;