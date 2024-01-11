import { Link } from "react-router-dom";
import "./../Main.css"
import { useEffect, useState } from "react";
import { ApiNews, ApiUrl } from "../../../Constains";
import axios from "axios";

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
                            <Link to={`chapter/news/news_about/${news[0].id}`} className="about__news news-first">
                                <label className="about__part">{news[0].tags}</label>
                                <span className="about__news-text">{news[0].title}</span>

                            </Link>
                        )}
                        <Link to={'/news'} className="about__news news-second">
                            <label className="about__part">{news_part.part2}</label>
                            <span className="about__news-text">{news_text.last_news2}</span>

                        </Link>
                        <Link to={'/news'} className="about__news news-third">
                            <label className="about__part">{news_part.part3}</label>
                            <span className="about__news-text">{news_text.last_news3}</span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;