import React from 'react';

import classes from './pageContent.module.css';
import ImageParagraph from '../../components/ImageParagraph/imageParagraph';

const pageContent = () => (
    <section className={classes}>
        <ImageParagraph/>
        <ImageParagraph/>
    </section>
);

export default pageContent;