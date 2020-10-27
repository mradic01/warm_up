import React from 'react';

import classes from './navigationBar.module.css';
import { navTabs } from '../../../Constants/Constants';

const navigationbar = ({ activeBar, useThisStyle }) => {
    return (
        < nav className={useThisStyle ? classes.footer: classes.navigationBar} >
            {
                navTabs.map(Tab => (
                    <li key={Tab} className={Tab === activeBar ? classes.active : ''}>{Tab}</li>
                ))
            }
        </nav >
    );
};

export default navigationbar;