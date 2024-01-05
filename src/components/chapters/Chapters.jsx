import "./Chapters.css"
import dnk_logo from "./../../assets/images/dnk_logo.png"
import external_link from "./../../assets/images/external_link.png"
import Doc from "./doc/Doc";
import News from "./news/News";
import { Link } from "react-router-dom";

const Chapters = () => {
    return (
        <div className="chapter-wrapper">
            <div className="chapter-overlay">
                <div className="chapter-container">
                    <div className="chapter-menu">
                        <img src={dnk_logo} alt="" />
                        <h1>Дом Научной <br/> Коллборации</h1>
                        <div className="chaper-links">
                            <Link>Главная</Link> /
                            <Link>Новости</Link> / <br/>
                            <Link>Навигатор<img src={external_link} alt="" /></Link> /
                            <Link>Контакты<img src={external_link} alt="" /></Link> / <br/>
                            <Link>Расписание</Link> /
                            <Link>Документы</Link> / <br/>
                            <Link>Оплата обучения<img src={external_link} alt="" /></Link>
                        </div>
                        <div className="chapter-text">Раздел Новостей</div>
                    </div>
                    <div className="chapter-content">
                        <News/>
                    </div>
                    <div className="chapter-lic">© 2019-2024 ДНК им.С.А.Абрукова</div>
                </div>
            </div>
        </div>
    );
}

export default Chapters;