import React from 'react'

import classes from './GalleryContainer.module.css';
import ImagePool from '../ImagePool/ImagePool';

const GalleryContainer = ({ title }) => (
    <section className={classes.galleryContainer}>
        <h1>{title}</h1>
        <ImagePool start={0} end={3} />
    </section>
)

export default GalleryContainer