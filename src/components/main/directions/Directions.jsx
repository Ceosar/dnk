import React, { useEffect, useState } from "react"
import axios from "axios";
import "./Directions.css"
import test_png from "./../../../assets/images/direction_test.png"

export default function Directions() {
    const [directionsData, setDirectionsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('/api/directions');
                const backendData = [
                    ["информатика", "краткое описание информатики"],
                    ["география", "краткое описание географии"],
                    ["математика", "краткое описание математика"],
                    ["робототехника", "краткое описание робототехника"],
                    ["мемология", "краткое описание мемология"],
                ];
                // setDirectionsData(response.data);
                setDirectionsData(backendData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="directions-wrapper">
            <div className="directions-container" data-scroll-section>
                <span className="directions-text__h1">
                    Направления учебы
                    <label className="directions-text_h2">
                        Для школьников, студентов и преподавателей
                    </label>
                </span>
                {directionsData.map((direction, index) => (
                    <div className="direction-container" key={index}>
                        <img
                            height={285}
                            width={285}
                            src={test_png}
                            alt="Фото направления"
                        />
                        <div className="direction-discribe">
                            <label>Для кого</label>
                            <span className="direction-discribe__name">{direction[0]}</span>
                            <div className="direction-discribe__text">{direction[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}