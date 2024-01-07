import React from 'react';
import "./Direct.css"
import test_robot from "./../../../assets/images/test-robot.png"
import { Link } from 'react-router-dom';

const Direct = () => {
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
    return (
        <div className='direct-wrapper'>
            <h1>Наши направления</h1>
            <div className='direct-container'>
                {directData.map((direct, index) => (
                    <div className='direct-content' key={index}>
                        <Link className='direct-btn' key={direct.index} to={`${direct.index}`}>
                            <img src={test_robot} alt="" />
                            <label className='direct-name'>{direct.name}</label>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Direct;