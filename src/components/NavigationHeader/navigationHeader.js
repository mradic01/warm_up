import React from 'react';

import classes from './navigationHeader.module.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import ComboBox from '../ComoBox/ComoBox';

const navigationHeader = (props) => (
        <section className={classes.NavigationHeader}>
            <Logo />
            <Navigation activeBar={'HOME'} />
            <ComboBox />
        </section>
);

export default navigationHeader;