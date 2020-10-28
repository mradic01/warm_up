import React from 'react';

import classes from './navigationHeader.module.css';
import Logo from '../Logo/logo';
import Navigation from '../Navigation/navigation';
import ComboBox from '../ComoBox/ComoBox';
import ContactBar from '../ContactBar/contactBar';

const navigationHeader = (props) => (
    <>
        <ContactBar />
        <section className={classes.NavigationHeader}>
            <Logo />
            <Navigation activeBar={props.activeTab} />
            <ComboBox />
        </section>
    </>
);

export default navigationHeader;