import React from 'react'

import classes from './GalleryContent.module.css';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';

const GalleryContinent = () => (
    <main className={classes.galleryContent}>
        <GalleryContainer title="Amazing exterior" />
        <GalleryContainer title="Relaxing sauna" />
        <GalleryContainer title="Modern interior" />
    </main>
)

export default GalleryContinent