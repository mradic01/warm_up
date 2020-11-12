import React from 'react'

import classes from './GalleryContent.module.css';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';

const GalleryContinent = () => (
    <main className={classes.galleryContent}>
        <GalleryContainer title="Amazing exterior" start={0} end={4} isGray />
        <GalleryContainer title="Relaxing sauna" start={5} end={9} />
        <GalleryContainer title="Modern interior" start={10} end={14} isGray />
    </main>
)

export default GalleryContinent