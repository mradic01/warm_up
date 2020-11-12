import React from "react"

import HeaderFooterLayout from "../Layouts/headerFooterLayout";
import ContactSeparator from '../modules/ContactSeparator/ContactSeparator';
import ContactForm from '../modules/ContactForm/ContactForm';

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage