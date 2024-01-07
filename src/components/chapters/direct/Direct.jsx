import React, { useEffect, useState } from 'react';
import "./Direct.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ApiSection, ApiUrl } from '../../../Constains';

const Direct = () => {
    const [directionsData, setDirectionsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection + "active_direction/?id_Sections=2").then((response) => {
                if (response.data.status) {
                    setDirectionsData(response.data.data)
                }
            })
        };
        fetchData();
    }, []);

    return (
        <div className='direct-wrapper'>
            <h1>Наши направления</h1>
            <div className='direct-container'>
                {directionsData.map((direct, index) => (
                    <div className='direct-content' key={index}>
                        <Link className='direct-btn' to={`${direct.url}`}>
                            <img src={ApiUrl+direct.photo_url} alt="" />
                            <label className='direct-name'>{direct.name}</label>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Direct;