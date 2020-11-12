import React from 'react'

import classes from './GalleryContainer.module.css';
import ImagePool from '../ImagePool/ImagePool';

const GalleryContainer = (props) => (
    <section
        style={{ backgroundColor: props.isGray ? '#f2f2f2' : 'white' }}
        className={classes.galleryContainer}>
        <h1>{props.title}</h1>
        {/* <ImagePool start={start} end={end} title={title} isGray={isGray} /> */}
        <ImagePool {...props} />
    </section>
)

export default GalleryContainer