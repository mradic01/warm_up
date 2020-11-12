import React from 'react'
 
import classes from './ContactSeparator.module.css'
 
const ContactSeparator = () => (
    <section className={classes.separator}>
        <div className={classes.horizontalLine} />
        <h2>CONTACT</h2>
        <div className={classes.horizontalLine} />
    </section>
)
 
export default ContactSeparator