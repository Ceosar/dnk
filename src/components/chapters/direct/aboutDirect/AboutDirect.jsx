import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./AboutDirect.css"
import axios from 'axios';
import { ApiSection, ApiUrl } from '../../../../Constains';

const AboutDirect = () => {
    const {id_direct} = useParams();
    const [direct, setDirect] = useState(null);
    console.log(id_direct)

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection + "get_direction/?id_Direction=" + id_direct).then((response) => {
                if (response.data.status) {
                    console.log(response.data)
                    setDirect(response.data.data)
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
                    <img src={ApiUrl+direct.photo} alt="" />
                    <p className='aboutdirect-text' dangerouslySetInnerHTML={{ __html: direct.text }}></p>
                    <button className='aboutdirect-btn'>Записаться</button>
                </div>
            ): (
                <p>Данные с {id_direct} не найдены</p>
            )}
        </div>
    );
}

export default AboutDirect;