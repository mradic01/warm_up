import React from "react"
//import { Link } from "gatsby"


import HeaderFooterLayout from '../Layouts/headerFooterLayout';
import TitlePage from '../modules/TitlePage/titlePage';
import PageContent from '../modules/PageContent/pageContent';

const IndexPage = () => (
    <HeaderFooterLayout activeTab={"Home"}>
        <TitlePage />
        <PageContent />
    </HeaderFooterLayout>
)

export default IndexPage;
