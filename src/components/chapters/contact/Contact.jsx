import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiContacts, ApiUrl } from '../../../Constains';
import "./Contact.css"

import phone from "./../../../assets/images/phone_black.png"
import vk from "./../../../assets/images/vk_black.png"
import mail from "./../../../assets/images/mail_black.png"
import tg from "./../../../assets/images/telegram-svgrepo-com.svg"


const Contact = () => {
    const [contact, setContact] = useState([])

    useEffect(() => {
        axios.get(ApiUrl + ApiContacts + "active_contact/").then(response => {
            if (response.data.status) {
                setContact(response.data.data)
            }
        })
    }, []);

    return (
        <div className='contact-wrapper'>
            {contact.map((contact, index) => (
                <div className='contact-container' key={index}>
                    <img src={ApiUrl + contact.photo} alt="" />
                    <section className='contact-info'>
                        <span className='contact-name'>{contact.soname} {contact.name} <br/>{contact.surname}</span>
                        <span className='contact-status'>{contact.role}</span>
                        <div className="contact-socialmedia">
                            <a href={`tel:${contact.phone}`} target="_blank">
                                <div className="contact-telephone">
                                    <img src={phone} alt="" />
                                    <span>{contact.phone}</span>
                                </div>
                            </a>
                            <a href={`${contact.vk}`} target="_blank">
                                <img src={vk} alt="" />
                            </a>
                            <a href={`mailto:${contact.mail}`} target="_blank">
                                <img src={mail} alt="" />
                            </a>
                            <a href={`https://t.me/${contact.tg}`} target="_blank">
                                <img src={tg} alt="" />
                            </a>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
}

export default Contact;
