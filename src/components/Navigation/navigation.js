import React from 'react';

import NavigationBar from './NavigationBar/navigationBar';
import ComoBox from './ComoBox/ComoBox';

const navigation = (props) => (
    <div>
        <NavigationBar activeBar={props.activeBar}/>
        {/* <ComoBox/> */}
    </div>
);

export default navigation;