import React from 'react'

import classes from './SeparatorBar.module.css'

const ContactSeparator = ({ text }) => (
    <section className={classes.separator}>
        <div className={classes.horizontalLine} />
        <h2>{text}</h2>
        <div className={classes.horizontalLine} />
    </section>
)

export default ContactSeparator