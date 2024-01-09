import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./Chapters.css"

import Doc from "./doc/Doc";
import News from "./news/News";
import Schedule from "./schedule/Schedule";
import Direct from "./direct/Direct";
import AboutDirect from "./direct/aboutDirect/AboutDirect";
import Contact from "./contact/Contact";

import dnk_logo from "./../../assets/images/dnk_logo.png"
import external_link from "./../../assets/images/external_link.png"
import mobile_burger from './../../assets/images/mobile_burger.png'
import NewsAbout from "./news/newsAbout/NewsAbout";
import { useState } from "react";


const Chapters = () => {
    const location = useLocation();

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleMobileClick = () => {
        console.log(isOpenMenu)
        setIsOpenMenu(!isOpenMenu);
    }

    let chapterText = "Раздел Новостей";

    switch (location.pathname) {
        case "/chapter/news":
            chapterText = "Раздел Новостей";
            break;
        case "/chapter/doc":
            chapterText = "Раздел Документов";
            break;
        case "/chapter/schedule":
            chapterText = "Раздел Расписания";
            break;
        case "/direction":
            chapterText = "Раздел Направлений";
            break;
        case "/chapter/contact":
            chapterText = "Раздел Контактов";
            break;
        default:
            chapterText = "Дом Научной Коллборации";
            break;
    }

    return (
        <div className="chapter-wrapper">
            <div className="chapter-overlay">
                <div className="chapter-container">
                    <div className="chapter_header-mobile">
                        <img src={dnk_logo} alt="" />
                        <button className="chapter__mobile-burger" onClick={handleMobileClick}>
                            <img src={mobile_burger} alt="" />
                        </button>
                    </div>
                    <div className={`chapter-menu ${isOpenMenu ? 'open' : ''}`}>
                        <img src={dnk_logo} alt="" />
                        <h1>Дом Научной <br /> Коллборации</h1>
                        <div className="chapter-links">
                            <Link to="/">Главная</Link> /
                            <Link to="/chapter/news" onClick={handleMobileClick}>Новости</Link> /
                            <Link to="/direction" onClick={handleMobileClick}>Навигатор<img src={external_link} alt="" /></Link> /
                            <Link to="/chapter/contact" onClick={handleMobileClick}>Контакты<img src={external_link} alt="" /></Link> /
                            <Link to="/chapter/schedule" onClick={handleMobileClick}>Расписание</Link> /
                            <Link to="/chapter/doc" onClick={handleMobileClick}>Документы</Link> /
                            <Link onClick={handleMobileClick}>Оплата обучения<img src={external_link} alt="" /></Link>
                        </div>
                        <div className="chapter-text">{chapterText}</div>
                    </div>
                    <div className={`chapter-content ${isOpenMenu ? "hide-content" : ''}`}>
                        <Routes>
                            <Route path="news" element={<News />} />
                            <Route path="doc" element={<Doc />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="schedule" element={<Schedule />} />
                            <Route path="/:id_section" element={<Direct />} />
                            <Route path="/:id_section/direct_about/:id_direct" element={<AboutDirect />} />
                            <Route path="news/news_about/:id_news" element={<NewsAbout />} />
                        </Routes>
                    </div>
                    <div className="chapter-lic">© 2019-2024 ДНК им.С.А.Абрукова</div>
                </div>
            </div>
        </div>
    );
}

export default Chapters;