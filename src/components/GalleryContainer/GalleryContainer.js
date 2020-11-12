import React from 'react'

import classes from './GalleryContainer.module.css';
import ImagePool from '../ImagePool/ImagePool';

const GalleryContainer = ({ title }) => (
    <section className={classes.galleryContainer}>
        <h1>{title}</h1>
        <ImagePool />
    </section>
)

export default GalleryContainer