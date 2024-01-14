import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiNews, ApiUrl } from "../../../Constains";
import axios from "axios";

import "./../Main.css"

const About = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(ApiUrl + ApiNews + "active_news/?page=1")
            .then(response => {
                if (response.data.status) {
                    setNews(response.data.data)
                }
            })
    }, [])

    var news_part = {
        part1: "Запись",
        part2: "Расписание",
        part3: "Документы",
    }

    var news_text = {
        last_news1: "Последние большие новости дома научной коллаборации 1",
        last_news2: "Последние большие новости дома научной коллаборации 2",
        last_news3: "Последние большие новости дома научной коллаборации 3",
    }

    return (
        <div className="about__container" data-scroll-section>
            <div className="inner">
                <section className="about__last-news">
                    <span>Последние новости</span>
                    <div className="about__news-container">
                        {news.length > 0 && (
                            <>
                                <Link to={`chapter/news/news_about/${news[0].id}`} className="about__news news-first">
                                    <label className="about__part">
                                        {Array.isArray(news[0].tags) && news[0].tags.length > 0 ? news[0].tags[0] : ""}
                                    </label>
                                    <span className="about__news-text">{news[0].title}</span>
                                </Link>

                                {news.length > 1 && (

                                    <Link to={`chapter/news/news_about/${news[1].id}`} className="about__news">
                                        <label className="about__part">
                                            {Array.isArray(news[1].tags) && news[1].tags.length > 0 ? news[1].tags[0] : ""}
                                        </label>
                                        <span className="about__news-text">{news[1].title}</span>
                                    </Link>
                                )}

                                {news.length > 2 && (
                                    <Link to={`chapter/news/news_about/${news[2].id}`} className="about__news">
                                        <label className="about__part">
                                            {Array.isArray(news[2].tags) && news[2].tags.length > 0 ? news[2].tags[0] : ""}
                                        </label>
                                        <span className="about__news-text">{news[2].title}</span>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;