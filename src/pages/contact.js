import React from "react"

import HeaderFooterLayout from "../Layouts/headerFooterLayout";
import SeparatorBar from '../modules/SeparatorBar/SeparatorBar';
import ContactForm from '../modules/ContactForm/ContactForm';

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <SeparatorBar text={"Contact"} />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage