import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiDoc, ApiUrl } from '../../../Constains';
import axios from 'axios';

import "./Doc.css"
import "./../../error/Error.css"

import doc_img from "./../../../assets/images/doc.png"


const Doc = () => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiDoc + "active_docs/")
            .then((response) => {
                if (response.data.status) {
                    setDocs(response.data.data)
                }
            })
            .catch(error => {
                setErrors(error);
            })
        };
        fetchData();
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
        <div className='doc-wrapper'>
            {docs.map((doc, index) => (
                <Link to={ApiUrl + doc.file_url}
                    target='_blank'
                    className='doc-container'
                    key={index}
                    download
                >
                    <img src={doc_img} alt="" />
                    <label className='doc-number'>
                        {(index + 1).toString().padStart(2, '0')}
                    </label>
                    <div className='doc-name'>{doc.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default Doc;