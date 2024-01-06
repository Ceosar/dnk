import "./News.css"
import test_img from "./../../../assets/images/test-news.png"
import { ApiNews, ApiUrl } from "../../../Constains";
import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(ApiUrl + ApiNews + "active_news/").then(response => {
            if (response.data.status) {
                setNews(response.data.data)
            }
        })
    }, []);


    const newsData = [
        {
            number: "No 01",
            title: "Детский университет",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 0100",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
    ];


    return (
        <div className="news-wrapper">
            <div className="news-content">
                {news.map((news, index) => (
                    <div className="news-container" key={news.id}>
                        <div className="news-title">
                            <span className="news__id">№ {index + 1}</span>
                            {news.tags.map((tag, index) => (
                                <span key={index} className="news__tag">{tag}</span>
                            ))}
                        </div>
                        <img style={{ borderRadius: 15 }} src={ApiUrl + news.preview_photo} alt="" />
                        {/* <img style={{ borderRadius: 15 }} src={test_img} alt="" /> */}
                        <div className="news-text">{news.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;