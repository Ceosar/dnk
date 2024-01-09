import React, { useEffect, useState } from 'react';
import "./Direct.css"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiSection, ApiUrl } from '../../../Constains';
import "./../../error/Error.css"

const Direct = () => {
    const {id_section} = useParams();
    const [directionsData, setDirectionsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection + "active_direction/?id_Sections=" + id_section)
            .then((response) => {
                if (response.data.status) {
                    setDirectionsData(response.data.data)
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
        <div className='direct-wrapper'>
            <h1>Наши направления</h1>
            <div className='direct-container'>
                {directionsData.map((direct, index) => (
                    <div className='direct-content' key={index}>
                        <Link className='direct-btn' to={`direct_about/${direct.id}`}>
                            <img src={ApiUrl+direct.photo} alt="" />
                            <label className='direct-name'>{direct.name}</label>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Direct;