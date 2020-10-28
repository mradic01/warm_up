import React from 'react';

import classes from './inquiryBlock.module.css';

const inquiryBlock = () => (
    <section className={classes.inquiryBlock}>
        <div className={classes.dateBoxContainer}>
            <span>Arrival date</span>
            <div className={classes.dateBox}>
                <img src="https://github.com/n00ne1mportant/PublicFilesRepo/blob/master/appvd-calendar-2.png?raw=true" />
                <span>{`${(new Date()).getDate()}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`}</span>
            </div>
        </div>
        <div className={classes.dateBoxContainer}>
            <span>Departure date</span>
            <div className={classes.dateBox}>
                <img src="https://github.com/n00ne1mportant/PublicFilesRepo/blob/master/appvd-calendar-2.png?raw=true" />
                <span>{`${(new Date()).getDate() + 1}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`}</span>
            </div>
        </div>
        <button>Send inquiry</button>
    </section>
);

export default inquiryBlock;