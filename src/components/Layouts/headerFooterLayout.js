import React from 'react';

import NavigationHeader from '../NavigationHeader/navigationHeader';
import Footer from '../Footer/footer';

const headerFooterLayout = ({ children, activeTab }) => (
    <>
        <NavigationHeader activeTab={activeTab} />
        {children}
        <Footer/>
    </>
);

export default headerFooterLayout;