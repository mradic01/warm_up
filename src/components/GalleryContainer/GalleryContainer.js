import React from 'react'

import classes from './GalleryContainer.module.css'

const GalleryContainer = ({ title }) => (
    <section className={classes.galleryContainer}>
        <h1>{title}</h1>
        <div>IMAGES</div>
    </section>
)

export default GalleryContainer