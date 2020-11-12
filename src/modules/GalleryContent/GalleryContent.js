import React from 'react'

import classes from './GalleryContent.module.css';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer';

const titles = ["Amazing exterior", "Relaxing sauna", "Modern interior"]

const GalleryContinent = () => (
    <main className={classes.galleryContent}>
        {titles.map((title, index) =>
            <GalleryContainer title={title} isGray={index % 2 === 0}
                start={index * 4}
                end={(index + 1) === 3
                    ? (index + 4) * 4
                    : (index + 1) * 4}
            />
        )}
    </main>
)

export default GalleryContinent