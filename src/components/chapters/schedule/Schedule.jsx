import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiSchedule, ApiUrl } from '../../../Constains';

import "./Schedule.css"
import "./../../error/Error.css"


const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        axios.get(ApiUrl + ApiSchedule + 'get_schedule/')
        .then(response => {
            if (response.data.status) {
                setScheduleData(response.data.data['Основное'])
            }
        })
        .catch(error => {
            setErrors(error);
        })
    }, []);

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
        <div className='schedule_wrapper'>
            <div className='schedule_labels'>
                {scheduleLabel.map((label, index) => (
                    <label className='schedule_label' key={index} htmlFor="">{label.labelName}</label>
                ))}
            </div>
            <div className='schedule_container'>
                <div className='schedule_tags'>
                    {scheduleData && scheduleData.map((days, index) => (
                        <div className='schedule_block' key={index}>
                            {Object.keys(days).map((day, index) => (
                                <div key={index}>
                                    <h3 className='schedule_day'>{day}</h3>
                                    <ul className='schdule_lessons'>
                                        {days[day].map((lesson, lessonIndex) =>
                                        (
                                            <li className='schdule_lesson' key={lessonIndex}>
                                                <span className='schedule_lesson-index'>0{lessonIndex + 1}</span>
                                                <span className='schedule_lesson-time'>{lesson.time_start}</span>
                                                <span className='schedule_lesson-defis'> - </span>
                                                <span className='schedule_lesson-time'>{lesson.time_end}</span>
                                                <span className='schedule_lesson-name'>{lesson.name}</span>
                                                <span className='schedule_lesson-teacher'>{lesson.name_teacher}</span>
                                                <span className='schedule_lesson-audience'>{lesson.name_audience}</span>
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
    );
}

export default Schedule;