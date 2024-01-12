import React, { useEffect, useState } from 'react';
import { ApiContacts, ApiUrl } from '../../../Constains';
import axios from 'axios';

import "./Contact.css"
import "./../../error/Error.css"

import phone from "./../../../assets/images/phone_black.svg"
import vk from "./../../../assets/images/vk_black.svg"
import mail from "./../../../assets/images/mail_black.svg"
import tg from "./../../../assets/images/telegram-svgrepo-com.svg"


const Contact = () => {
    const [contact, setContact] = useState([])

    useEffect(() => {
        axios.get(ApiUrl + ApiContacts + "active_contact/")
        .then(response => {
            if (response.data.status) {
                setContact(response.data.data)
            }
            })
            .catch(error => {
                setErrors(error);
            })
        }, []);

    const [errors, setErrors] = useState(null);
    if (errors) {
        return (
            <div className='error_container'>
                <div>Проверьте соединение с интернетом...{errors.message}</div>
                <button className='error_btn-reload' onClick={() => window.location.reload()}>Обновить</button>
            </div>
        )
    }

    return (
        <div className='contact-wrapper'>
            {contact.map((contact, index) => (
                <div className='contact-container' key={index}>
                    <img src={ApiUrl + contact.photo} alt="" />
                    <div className='contact-info'>
                        <span className='contact-name'>{contact.soname} {contact.name} <br />{contact.surname}</span>
                        <span className='contact-status'>{contact.role}</span>
                        <div className="contact-socialmedia">
                            <a href={`tel:${contact.phone}`} target="_blank">
                                <div className="contact-telephone">
                                    <img className='contact-icon' src={phone} alt="" />
                                    <span>{contact.phone}</span>
                                </div>
                            </a>
                            <a className='contact-icon' href={`${contact.vk}`} target="_blank">
                                <img src={vk} alt="" />
                            </a>
                            <a className='contact-icon' href={`mailto:${contact.mail}`} target="_blank">
                                <img src={mail} alt="" />
                            </a>
                            <a  href={`https://t.me/${contact.tg}`} target="_blank">
                                <img className='tgs' src={tg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contact;
