import React from "react"
//import { Link } from "gatsby"


import HeaderFooterLayout from '../Layouts/headerFooterLayout';
import TitlePage from '../modules/TitlePage/titlePage';

const IndexPage = () => (
    <HeaderFooterLayout activeTab={"HOME"}>
        <TitlePage />
    </HeaderFooterLayout>
)

export default IndexPage;
