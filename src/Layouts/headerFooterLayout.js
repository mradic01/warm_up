import React from 'react';

import NavigationHeader from '../modules/NavigationHeader/navigationHeader';
import Footer from '../modules/Footer/footer';

const headerFooterLayout = ({ children, activeTab }) => (
    <>
        <NavigationHeader activeTab={activeTab} />
        {children}
        <Footer/>
    </>
);

export default headerFooterLayout;