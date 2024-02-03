import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./Chapters.css"

import Doc from "./doc/Doc";
import News from "./news/News";
import Schedule from "./schedule/Schedule";
import Direct from "./direct/Direct";
import AboutDirect from "./direct/aboutDirect/AboutDirect";
import Contact from "./contact/Contact";

import dnk_logo from "./../../assets/images/dnk_logo_svg.svg"
import external_link from "./../../assets/images/external_link.svg"
import mobile_burger from './../../assets/images/mobile_burger.svg'
import cross from './../../assets/images/cross.svg'
import NewsAbout from "./news/newsAbout/NewsAbout";
import gsap from "gsap";


const Chapters = () => {
    const location = useLocation();

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const contentRef = useRef(null);
    const burgerButtonRef = useRef(null);
    const chapterWrapperRef = useRef(null);

    const handleMobileClick = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    let chapterText = "Раздел Новостей";

    switch (location.pathname) {
        case "/chapter/news":
            chapterText = "Раздел Новостей";
            document.title = 'Новости';
            break;
        case "/chapter/doc":
            chapterText = "Раздел Документов";
            document.title = 'Документы';
            break;
        case "/chapter/schedule":
            chapterText = "Раздел Расписания";
            document.title = 'Расписания';
            break;
        case "/direction":
            chapterText = "Раздел Направлений";
            document.title = 'Направления';
            break;
        case "/chapter/contact":
            chapterText = "Раздел Контактов";
            document.title = 'Контакты';
            break;
        default:
            chapterText = "Дом Научной Коллборации";
            document.title = 'ДНК им. С.А. Абрукова';
            break;
    }

    useEffect(() => {
        const menu = menuRef.current;
        const content = contentRef.current;
        const burgerButton = burgerButtonRef.current;
        const isMobile = window.innerWidth <= 500;


        if (menu && content && isMobile) {
            if (isOpenMenu) {
                gsap.to(menu, { opacity: 1, x: 0, duration: 0.4 });
                gsap.to(content, { opacity: 0, duration: 0.4 });
                gsap.to(burgerButton, { rotate: 0, duration: 0.4 });
            } else {
                gsap.to(menu, { opacity: 0, x: 100, duration: 0.4 });
                gsap.to(content, { opacity: 1, duration: 0.4 });
                gsap.to(burgerButton, { rotate: 180, duration: 0.4 });
            }
        }
    }, [isOpenMenu])

    useEffect(() => {
        const chapter = chapterWrapperRef.current;

        gsap.from(chapter, { opacity: 0, duration: 0.3 })
    }, [location.pathname == "/chapter"])

    useEffect(() => {
        if (window.innerWidth > 500) {
            const content = contentRef.current;

            gsap.from(content, { opacity: 0, duration: 0.5 })
        }
    }, [location.pathname])

    return (
        <div className="chapter-wrapper" ref={chapterWrapperRef}>
            <div className="chapter-overlay">
                <div className="chapter-container">
                    <div className="chapter_header-mobile">
                        <img src={dnk_logo} alt="" />
                        <button className="chapter__mobile-burger" onClick={handleMobileClick}>
                            <img ref={burgerButtonRef} src={isOpenMenu ? cross : mobile_burger} alt="" />
                        </button>
                    </div>
                    <div className={`chapter-menu ${isOpenMenu ? 'open' : ''}`} ref={menuRef}>
                        <Link to={"/"}>
                            <img src={dnk_logo} alt="" />
                        </Link>
                        <h1>Дом Научной <br /> Коллборации</h1>
                        <div className="chapter-links">
                            <Link to="/">Главная</Link> /
                            <Link to="/chapter/news" onClick={handleMobileClick}>Новости</Link>
                            /
                            <Link to="https://р21.навигатор.дети/directivities?municipality=4&municipality_region_id=&organizer=572&sort=recommend&pageSize=19"
                                onClick={handleMobileClick}
                                target="_blank"
                            >Навигатор<img src={external_link} alt="" />
                            </Link>
                            /
                            <Link to="/chapter/contact" onClick={handleMobileClick}>Контакты</Link>
                            /
                            <Link to="/chapter/schedule" onClick={handleMobileClick}>Расписание</Link>
                            /
                            <Link to="/chapter/doc" onClick={handleMobileClick}>Документы</Link>
                            /
                            <Link to={"https://pay-online.chuvsu.ru/index/select"} onClick={handleMobileClick} target="_blank">Оплата обучения<img src={external_link} alt="" target="_blank" /></Link>
                        </div>
                        <div className="chapter-text">{chapterText}</div>
                    </div>
                    <div className={`chapter-content ${isOpenMenu ? "hide-content" : null}`} ref={contentRef}>
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