import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiNews, ApiUrl } from '../../../../Constains';
import axios from 'axios';
import ModalImage from "react-modal-image";
import { DNA } from 'react-loader-spinner'

import "./NewsAbout.css"
import "./../../../error/Error.css"

const NewsAbout = () => {
    const { id_news } = useParams();

    const [aboutNews, setAboutNews] = useState({})
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        axios.get(ApiUrl + ApiNews +
            "news_by_id/?id_News=" + id_news
        )
            .then(response => {
                if (response.data.status) {
                    setAboutNews(response.data.data);
                    document.title = response.data.data.title;
                }
            })
            .catch(error => {
                setErrors(error);
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloader(false);
                }, 1000);
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
            {preloader ? (
                <div className='newsabout-preloader'>
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="newsabout-preloader_dna"
                    />
                </div>
            ) : (
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
                    <div className='newsabout_text'
                        dangerouslySetInnerHTML={{ __html: aboutNews.text }}
                    ></div>
                </div>
            )}
        </div>
    );
}

export default NewsAbout;