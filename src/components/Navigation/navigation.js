import React from 'react';

import NavigationBar from './NavigationBar/navigationBar';
import ComoBox from './ComoBox/comoBox';
import classes from './navigation.module.css'

const navigation = (props) => (
    <div className={classes.navigation}>
        <NavigationBar activeBar={props.activeBar}/>
        <ComoBox/>
    </div>
);

export default navigation;