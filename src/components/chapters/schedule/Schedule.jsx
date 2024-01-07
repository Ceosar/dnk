import React from 'react';
import "./Schedule.css"

const Schedule = () => {
    const scheduleLabel = [
        {
            index:1,
            labelName: "Детский университет",
        },
        {
            index:2,
            labelName: "Малая академия",
        },
        {
            index:3,
            labelName: "Педагог К-21",
        },
        {
            index:4,
            labelName: "ДОП",
        },
        {
            index:5,
            labelName: "Физика",
        },
        {
            index:6,
            labelName: "Технология",
        },
        {
            index:7,
            labelName: "Информатика",
        },
    ]

    return (
        <div className='schedule_wrapper'>
            <div className='schedule_labels'>
                {scheduleLabel.map((label,index) => (
                    <label className='schedule_label' key={index} htmlFor="">{label.labelName}</label>
                ))}
            </div>
            <div className='schedule_container'>
                
            </div>
        </div>
    );
}

export default Schedule;