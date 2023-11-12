import { Link } from "react-router-dom";
import "./../Main.css"

const About = () => {
    var news_part = {
        part1: "Запись",
        part2: "Расписание",
        part3: "Документы",
    }

    var news_text={
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
                        <Link to={'/news'} className="about__news news-first">
                            <label className="about__part">{news_part.part1}</label>
                            <span className="about__news-text">{news_text.last_news1}</span>

                        </Link>
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