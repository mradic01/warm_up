import React from 'react';

import classes from './titlePage.module.css';

import TitleImage from '../../components/TitleImage/titleImage';
import InquiryBlock from '../../components/InquiryBlock/inquiryBlock';

const titlePage = () => (
    <section className={classes}> 
        <TitleImage/>
        <InquiryBlock/>
    </section>
);

export default titlePage;