import { Link } from "react-router-dom"

import "./Footer.css"

import dnk_logo from "./../../assets/images/dnk_logo_white_svg.svg"
import phone from "./../../assets/images/phone.svg"
import vk from "./../../assets/images/vk.svg"
import mail from "./../../assets/images/mail.svg"
import arrow_up from "./../../assets/images/arrow_up.svg"

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-leftside">
                    <a onClick={ ()=> window.scrollTo({ top: 0, behavior:"smooth"})}>
                        <img src={dnk_logo} alt="" />
                    </a>
                    <div className="footer-socialmedia">
                        <a href="tel:41-05-81" target="_blank">
                            <div className="footer-telephone">
                                <img src={phone} alt="" />
                                <span>41-05-81</span>
                            </div>
                        </a>
                        <a href="https://vk.com/dnkabrukova" target="_blank">
                            <img src={vk} alt="" />
                        </a>
                        <a href="mailto:dnk_abrukov@mail.ru" target="_blank">
                            <img src={mail} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-rightside">
                    <div className="footer-links">
                        <Link onClick={ ()=> window.scrollTo({ top: 0, behavior:"smooth"})} className="footer-link">Главная</Link>
                        <Link to="/chapter/news" className="footer-link">Новости</Link>
                        <Link to="/chapter/schedule" className="footer-link">Расписание</Link>
                        <Link to="/chapter/doc" className="footer-link">Документы</Link>
                    </div>
                    <div className="footer-links">
                        <Link to="/chapter/contact" className="footer-link">Контакты</Link>
                        <Link to={"https://dnk-chgu.ru/932-2/"} className="footer-link" target="_blank">Оплата обучения</Link>
                        <Link to={"https://р21.навигатор.дети/directivities?municipality=4&municipality_region_id=&organizer=572&sort=recommend&pageSize=19"} className="footer-link" target="_blank">Навигатор</Link>
                    </div>
                    <Link onClick={ ()=> window.scrollTo({ top: 0, behavior:"smooth"})} to={"/"} className="footer-upbtn">
                        <img src={arrow_up} alt="" />
                        Вверх
                    </Link>
                </div>
            </div>
            <div className="footer-lic">© 2019-2024 ДНК им.С.А.Абрукова</div>
        </div>
    )
}