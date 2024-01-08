import React, { useEffect, useState } from 'react';
import { ApiNews, ApiUrl } from '../../../../Constains';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./NewsAbout.css"
import ModalImage from "react-modal-image";

const NewsAbout = () => {
    const { id_news } = useParams();

    const [aboutNews, setAboutNews] = useState({})

    useEffect(() => {
        axios.get(ApiUrl + ApiNews + "news_by_id/?id_News=" + id_news).then(response => {
            if (response.data.status) {
                setAboutNews(response.data.data);
            }
        })
    }, [])

    console.log(aboutNews);

    return (
        <div className='newsabout-wrapper'>
            <span className='newsabout_title'>{aboutNews.title}</span>
            <ModalImage
                className='modal-image'
                // key={key_item}
                small={ApiUrl + aboutNews.preview_photo}
                large={ApiUrl + aboutNews.preview_photo}
                hideZoom={true}
                showRotate={true}
            />
            {/* <img src={ApiUrl + aboutNews.preview_photo} alt="" /> */}
            <span className='newsabout_text' dangerouslySetInnerHTML={{ __html: aboutNews.text }}></span>
        </div>
    );
}

export default NewsAbout;