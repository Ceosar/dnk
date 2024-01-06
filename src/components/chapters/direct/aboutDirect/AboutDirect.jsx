import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import test_robot from "./../../../../assets/images/test-robot.png"
import "./AboutDirect.css"

const AboutDirect = () => {
    const {id} = useParams();
    const [direct, setDirect] = useState(null);

    const directData=[
        {
            index: 1,
            name: "Робототехника",
            image: test_robot,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloremque quibusdam provident reiciendis, ullam enim, sapiente perspiciatis sit, labore obcaecati delectus fuga. Vitae quis, eum libero sed at dolorum obcaecati.",
        },
        {
            index: 2,
            name: "Робототехника",
            image: test_robot,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloremque quibusdam provident reiciendis, ullam enim, sapiente perspiciatis sit, labore obcaecati delectus fuga. Vitae quis, eum libero sed at dolorum obcaecati.",
        },
        {
            index: 3,
            name: "Робототехника",
            image: test_robot,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloremque quibusdam provident reiciendis, ullam enim, sapiente perspiciatis sit, labore obcaecati delectus fuga. Vitae quis, eum libero sed at dolorum obcaecati.",
        },
        {
            index: 4,
            name: "Робототехника",
            image: test_robot,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloremque quibusdam provident reiciendis, ullam enim, sapiente perspiciatis sit, labore obcaecati delectus fuga. Vitae quis, eum libero sed at dolorum obcaecati.",
        },
        {
            index: 5,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 6,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 7,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 8,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 9,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 10,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 11,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 12,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 13,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 14,
            name: "Робототехника",
            image: test_robot,
        },
        {
            index: 15,
            name: "Робототехника",
            image: test_robot,
        },
    ]

    useEffect(() => {
        const selectedDirect = directData.find(item => item.index === parseInt(id))
        if(selectedDirect){
            setDirect(selectedDirect);
        }
        else{
            setDirect(null);
        }
    },[id])

    return (
        <div className='aboutdirect-wrapper'>
            {direct ? (
                <div className='aboutdirect-container'>
                    <label className='aboutdirect-name'>{direct.name}</label>
                    <p className='aboutdirect-text'>{direct.text}</p>
                    <button className='aboutdirect-btn'>Записаться</button>
                </div>
            ): (
                <p>Данные с {id} не найдены</p>
            )}
        </div>
    );
}

export default AboutDirect;