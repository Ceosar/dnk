import React, { useEffect, useState } from 'react';
import "./Schedule.css"
import { ApiSchedule, ApiUrl } from '../../../Constains';
import axios from 'axios';

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get(ApiUrl + ApiSchedule + 'get_schedule/').then(response => {
            if (response.data.status) {
                setScheduleData(response.data.data['Основное'])
            }
        })
    }, []);

    console.log(scheduleData)

    const scheduleLabel = [
        {
            index: 1,
            labelName: "Детский университет",
        },
        {
            index: 2,
            labelName: "Малая академия",
        },
        {
            index: 3,
            labelName: "Педагог К-21",
        },
        {
            index: 4,
            labelName: "ДОП",
        },
        {
            index: 5,
            labelName: "Физика",
        },
        {
            index: 6,
            labelName: "Технология",
        },
        {
            index: 7,
            labelName: "Информатика",
        },
    ]

    return (
        <div className='schedule_wrapper'>
            <div className='schedule_labels'>
                {scheduleLabel.map((label, index) => (
                    <label className='schedule_label' key={index} htmlFor="">{label.labelName}</label>
                ))}
            </div>
            <div className='schedule_container'>
                <div className='schedule_block'>
                    <div className='schedule_tags'>
                        {scheduleData && scheduleData.map((days, index) =>


                        (
                            <div key={index}>
                                {Object.keys(days).map((day, index) => (
                                    <div key={index}>
                                        <h3>{day}</h3>
                                        <ul>
                                            {days[day].map((lesson, lessonIndex) =>
                                                (
                                                    <li className='schdule_lesson' key={lessonIndex}>
                                                        <span>0{lessonIndex+1}</span>
                                                        <span>{lesson.time_start}</span>
                                                        <span>{lesson.time_end}</span>
                                                        <span> - </span>
                                                        <span>{lesson.name_audience}</span>
                                                        <span>{lesson.name}</span>
                                                        <span>{lesson.name_teacher}</span>
                                                        {/* <span>{scheduleData[day][index][2].name}</span> */}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;