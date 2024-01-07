import React, { useEffect, useState } from "react"
import "./Directions.css"
import axios from "axios";
import { ApiUrl, ApiSection } from "../../../Constains";
import { Link } from "react-router-dom";

export default function Directions() {
    const [directionsData, setDirectionsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUrl + ApiSection + "active_sections/").then((response) => {
                if (response.data.status) {
                    setDirectionsData(response.data.data)
                }
            })
        };

        fetchData();
    }, []);

    return (
        <div className="directions-wrapper">
            <div className="directions-container" data-scroll-section>
                <span className="directions-text__h1">
                    Направления учебы
                    <span className="directions-text_h2">
                        Для школьников, студентов и преподавателей
                    </span>
                </span>
                {directionsData.map((section, index) => (
                    <Link to={"/direction/" + section.id} className="direction-container" key={index}>
                        <img
                            height={285}
                            width={285}
                            src={ApiUrl + section.photo_url}
                            alt="Фото направления"
                        />
                        <div className="direction-discribe" >
                            <label>Для кого</label>
                            <span className="direction-discribe__name">{section.name}</span>
                            <div className="direction-discribe__text" dangerouslySetInnerHTML={{ __html: section.text }} ></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}