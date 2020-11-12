import React from "react"
import HeaderFooterLayout from "../Layouts/headerFooterLayout";
import SeparatorBar from '../modules/SeparatorBar/SeparatorBar';
import GalleryContent from '../modules/GalleryContent/GalleryContent';

const PhotoGallery = () => (
    <HeaderFooterLayout activeTab="Photo Gallery">
        <SeparatorBar text="Photo Gallery" />
        <GalleryContent />
    </HeaderFooterLayout>
)

export default PhotoGallery;