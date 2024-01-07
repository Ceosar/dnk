import React from 'react';
import "./Contact.css"
import phone from "./../../../assets/images/phone_black.png"
import vk from "./../../../assets/images/vk_black.png"
import mail from "./../../../assets/images/mail_black.png"

import test_contact from "./../../../assets/images/test-contact.png"

const Contact = () => {
    const contactData = [
        {
            index: 1,
            name:"Василькова Марина Веньяминовна",
            status: "Руководитель",
            telephone: "41-05-81",
            vk_url: "https://vk.com/dnkabrukova",
            mail_url: "dnk_abrukov@mail.ru",
            image: "",
        },
        {
            index: 1,
            name:"Василькова Марина Веньяминовна",
            status: "Руководитель",
            telephone: "41-05-81",
            vk_url: "https://vk.com/dnkabrukova",
            mail_url: "dnk_abrukov@mail.ru",
            image: "",
        },
    ]

    return (
        <div className='contact-wrapper'>
            {contactData.map((contact, index) => (
                <div className='contact-container' key={index}>
                    <img src={test_contact} alt="" />
                    <section className='contact-info'>
                        <label className='contact-name'>{contact.name}</label>
                        <label className='contact-status'>{contact.status}</label>
                        <div className="contact-socialmedia">
                            <a href={`tel:${contact.telephone}`} target="_blank">
                                <div className="contact-telephone">
                                    <img src={phone} alt="" />
                                    <span>{contact.telephone}</span>
                                </div>
                            </a>
                            <a href={`${contact.vk_url}`} target="_blank">
                                <img src={vk} alt="" />
                            </a>
                            <a href={`mailto:${contact.mail_url}`} target="_blank">
                                <img src={mail} alt="" />
                            </a>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
}

export default Contact;
