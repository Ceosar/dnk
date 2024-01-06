import React from 'react';
import "./Doc.css"
import doc_img from "./../../../assets/images/doc.png"
import { Link } from 'react-router-dom';

const Doc = () => {
    const docData=[
        {
            index: 1,
            name: "Название документа",
        },
        {
            index: 2,
            name: "Название документа",
        },
        {
            index: 3,
            name: "Название документа",
        },
        {
            index: 4,
            name: "Название документа",
        },
        {
            index: 5,
            name: "Название документа",
        },
        {
            index: 6,
            name: "Название документа",
        },
        {
            index: 7,
            name: "Название документа",
        },
        {
            index: 8,
            name: "Название документа",
        },
        {
            index: 9,
            name: "Название документа",
        },
        {
            index: 10,
            name: "Название документа",
        },
    ]
    return (
        <div className='doc-wrapper'>
            {docData.map((doc, index) => (
                <Link className='doc-container' key={index}>
                    <img src={doc_img} alt="" />
                    <label className='doc-number'>{doc.index.toString().padStart(2, '0')}</label>
                    <div className='doc-name'>{doc.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default Doc;