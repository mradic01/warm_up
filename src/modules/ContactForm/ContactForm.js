import React from 'react'
 
import classes from './ContactForm.module.css';
 
const ContactForm = () => (
    <main className={classes.contactForm}>
        <section className={classes.contactInfo}>
            <h2 className={classes.title}>villa oliva verde</h2>
            <h3>address</h3>
            <address>
            2145 Inadia str, Wyndia
            </address>
 
            <h3>telephone number</h3>
            <p>+385 99 3245 570</p>
 
            <h3>email</h3>
            <p>example@email.com</p>
 
            <p>IBAN: HR08497593759385739574</p>
        </section>
        <section className={classes.form}>
            <h2 className={classes.title}>contact us</h2>
            <form>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="country" placeholder="Country">Country</label>
                    <input name="country" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input name="phone" type="tel" />
                </div>
                <div className={classes.message}>
                    <label htmlFor="message">Message</label>
                    <input name="message" type="text" />
                </div>
                <button>Send a message</button>
            </form>
        </section>
    </main>
)
 
export default ContactForm