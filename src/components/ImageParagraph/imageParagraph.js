import React from 'react';

import classes from './imageParagraph.module.css';

const imageParagraph = ({ image, title, text, reversed }) => (
    <section className={reversed ? `${classes.imageParagraph} ${classes.reverse}` : classes.imageParagraph}>
        <div className={classes.imageHalf}>{image}</div>
        <div className={classes.articleHalf}>
            <article >
                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        </div>
    </section>
)

export default imageParagraph;