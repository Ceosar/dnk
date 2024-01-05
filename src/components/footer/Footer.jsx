import "./Footer.css"
import dnk_logo from "./../../assets/images/dnk_logo_white.png"
import phone from "./../../assets/images/phone.png"
import vk from "./../../assets/images/vk.png"
import mail from "./../../assets/images/mail.png"
import arrow_up from "./../../assets/images/arrow_up.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-leftside">
                    <a href="#">
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
                        <Link to={"/"} className="footer-link">Главная</Link>
                        <Link to={"/"} className="footer-link">Новости</Link>
                        <Link to={"/"} className="footer-link">Расписание</Link>
                        <Link to={"/"} className="footer-link">Документы</Link>
                    </div>
                    <div className="footer-links">
                        <Link to={"/"} className="footer-link">Контакты</Link>
                        <Link to={"/"} className="footer-link">Оплата обучения</Link>
                        <Link to={"/"} className="footer-link">Навигатор</Link>
                    </div>
                    <Link to={"/"} className="footer-upbtn">
                        <img src={arrow_up} alt="" />
                        Вверх
                    </Link>
                </div>
            </div>
            <div className="footer-lic">© 2019-2024 ДНК им.С.А.Абрукова</div>
        </div>
    )
}