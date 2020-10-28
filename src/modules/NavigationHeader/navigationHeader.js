import React from 'react';

import classes from './navigationHeader.module.css';
import Logo from '../../components/Logo/logo';
import Navigation from '../../components/Navigation/navigation';
import ComboBox from '../../components/ComoBox/ComoBox';
import ContactBar from '../../components/ContactBar/contactBar';

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