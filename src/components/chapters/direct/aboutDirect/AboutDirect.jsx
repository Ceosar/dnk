import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiSection, ApiUrl } from '../../../../Constains';
import axios from 'axios';
import { Modal } from 'antd';


import "./AboutDirect.css"
import "./../../../error/Error.css"
import FormForDirect from './FormForDirect';


const AboutDirect = () => {
    const { id_direct } = useParams();
    const [direct, setDirect] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {setIsModalOpen(true)};
    const handleOk = () => {setIsModalOpen(false)};
    const handleCancel = () => {setIsModalOpen(false)};

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
            <div className='aboutdirect-container'>
                {direct ? (
                    <>
                        <span
                            className='aboutdirect-name'
                        >{direct.name}</span>
                        <img src={ApiUrl + direct.photo} alt="" />
                        <p
                            className='aboutdirect-text'
                            dangerouslySetInnerHTML={{ __html: direct.text }}
                        ></p>
                        <button className='aboutdirect-btn' onClick={showModal}>Записаться</button>
                        <Modal
                            title={direct.name}
                            open={isModalOpen}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <FormForDirect handleOk={handleOk} handleCancel={handleCancel}/>
                        </Modal>
                    </>
                ) : (
                    <>Данные не найдены</>
                )}
            </div>
        </div>
    );
}

export default AboutDirect;