import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./AboutDirect.css"
import "./../../../error/Error.css"
import { ApiSection, ApiUrl } from '../../../../Constains';


const AboutDirect = () => {
    const { id_direct } = useParams();
    const [direct, setDirect] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection +
                "get_direction/?id_Direction=" + id_direct
            )
                .then((response) => {
                    if (response.data.status) {
                        setDirect(response.data.data)
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
                <div>
                    Проверьте соединение с интернетом...{errors.message}
                </div>
                <button className='error_btn-reload'
                    onClick={() => window.location.reload()}
                >Обновить</button>
            </div>
        )
    }

    return (
        <div className='aboutdirect-wrapper'>
            {direct ? (
                <div className='aboutdirect-container'>
                    <span
                        className='aboutdirect-name'
                    >{direct.name}</span>
                    <img src={ApiUrl + direct.photo} alt="" />
                    <p
                        className='aboutdirect-text'
                        dangerouslySetInnerHTML={{ __html: direct.text }}
                    ></p>
                    <button className='aboutdirect-btn'>Записаться</button>
                </div>
            ) : (
                <p>Данные с {id_direct} не найдены</p>
            )}
        </div>
    );
}

export default AboutDirect;