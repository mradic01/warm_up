import React from 'react';

import classes from './navigationHeader.module.css';
import Logo from '../../components/Logo/logo';
import Navigation from '../../components/Navigation/navigation';
// import ComboBox from '../../components/ComoBox/ComoBox';
import ContactBar from '../../components/ContactBar/contactBar';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const navigationHeader = (props) => (
    <>
        <ContactBar />
        <section className={classes.NavigationHeader}>
            <Logo />
            <Navigation activeBar={props.activeTab} />
            <ReactFlagsSelect countries={['GB', 'IT', 'DE']}
                className={classes.combobox}
                placeholder="ENGLISH"
                customLabels={{ "GB": "English", "DE": "Deutsche", "IT": "Italiano" }}
            />
        </section>
    </>
);

export default navigationHeader;