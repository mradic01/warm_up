import React from 'react';

import NavigationBar from './NavigationBar/navigationBar';
import classes from './navigation.module.css'

const navigation = (props) => (
    <div className={classes.navigation}>
        <NavigationBar activeBar={props.activeBar}/>
    </div>
);

export default navigation;