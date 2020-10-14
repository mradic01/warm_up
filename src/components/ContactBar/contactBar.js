import React, { Component } from 'react';

import classes from './contactBar.module.css';

import { AiFillPhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import Aux from '../../hoc/auxiliary/auxiliary';
import Modal from '../UI/Modal/modal';

class contactBar extends Component {
    state = {
        showContactDetails: false,
        modalContent: ""
    }

    showContactDetails = (message) => {
        this.setState({ showContactDetails: true, modalContent: message})
    }

    hideContactDetails = () => {
        this.setState({ showContactDetails: false })
    }

    render() {
        const email = "panicioJoni@gmail.com";
        const phoneNumber = "+385 95 874 8698";
        return (
            <Aux>
                <main className={classes.contactBar}>
                    <div className={classes.contact}>
                        <SiMinutemailer style={{ marginRight: "5px" }} onClick={() => this.showContactDetails(email)} />
                        <span className={classes.hide}>{email}</span>
                    </div>
                    <div className={classes.contact}>
                        <AiFillPhone style={{ marginRight: "5px" }} onClick={() => this.showContactDetails(phoneNumber)} />
                        <span className={classes.hide}>{phoneNumber}</span>
                    </div>
                </main>
                <Modal show={this.state.showContactDetails} clicked={this.hideContactDetails}>
                    {this.state.modalContent}
                </Modal>
            </Aux>
        )
    }
};

export default contactBar;
