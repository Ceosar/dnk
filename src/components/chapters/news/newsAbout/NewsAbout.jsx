import React, { useEffect, useState } from 'react';
import { ApiNews, ApiUrl } from '../../../../Constains';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./NewsAbout.css"
import ModalImage from "react-modal-image";
import "./../../../error/Error.css"


const NewsAbout = () => {
    const { id_news } = useParams();

    const [aboutNews, setAboutNews] = useState({})

    useEffect(() => {
        axios.get(ApiUrl + ApiNews +
            "news_by_id/?id_News=" + id_news
        )
            .then(response => {
                if (response.data.status) {
                    setAboutNews(response.data.data);
                }
            })
            .catch(error => {
                setErrors(error);
            })
    }, [])


    const [errors, setErrors] = useState(null);
    if (errors) {
        return (
            <div className='error_container'>
                <div>
                    Проверьте соединение с интернетом...{errors.message}
                </div>
                <button
                    className='error_btn-reload'
                    onClick={() => window.location.reload()}
                >Обновить</button>
            </div>
        )
    }

    return (
        <div className='newsabout-wrapper'>
            <div className='newsabout-container'>
                <span className='newsabout_title'>
                    {aboutNews.title}
                </span>
                <ModalImage
                    className='newsabout_modal-image'
                    // key={key_item}
                    small={ApiUrl + aboutNews.preview_photo}
                    large={ApiUrl + aboutNews.preview_photo}
                    hideZoom={true}
                    showRotate={true}
                />
                <span className='newsabout_text'
                    dangerouslySetInnerHTML={{ __html: aboutNews.text }}
                ></span>
            </div>
        </div>
    );
}

export default NewsAbout;