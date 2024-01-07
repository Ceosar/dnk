import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./AboutDirect.css"
import axios from 'axios';
import { ApiSection, ApiUrl } from '../../../../Constains';

const AboutDirect = () => {
    const {id} = useParams();
    const [direct, setDirect] = useState(null);
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection + "active_sections/?id_Sections=" + id).then((response) => {
                if (response.data.status) {
                    setDirect(response.data.data[0])
                }
            })
        };
        fetchData();
    }, []);

    return (
        <div className='aboutdirect-wrapper'>
            {direct ? (
                <div className='aboutdirect-container'>
                    <span className='aboutdirect-name'>{direct.name}</span>
                    <img src={ApiUrl+direct.photo_url} alt="" />
                    <p className='aboutdirect-text' dangerouslySetInnerHTML={{ __html: direct.text }}></p>
                    <button className='aboutdirect-btn'>Записаться</button>
                </div>
            ): (
                <p>Данные с {id} не найдены</p>
            )}
        </div>
    );
}

export default AboutDirect;