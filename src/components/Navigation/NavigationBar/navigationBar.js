import React from 'react';

import classes from './navigationBar.module.css';
import { navTabs } from '../../../Constants/Constants';
import { Link } from 'gatsby';

const navigationbar = ({ activeBar, useThisStyle }) => {
    return (
        < nav className={useThisStyle ? classes.footer : classes.navigationBar} >
            {
                navTabs.map(({ tab, to }) => (
                    <Link to={to}>
                        <li key={tab} className={tab === activeBar ? classes.active : ''}>{tab}</li>
                    </Link>
                ))
            }
        </nav >
    );
};

export default navigationbar;