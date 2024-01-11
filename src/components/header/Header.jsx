import "./Header.css"
import { Link } from "react-router-dom";
import dnk_logo from './../../assets/images/dnk_logo_svg.svg'
import mobile_burger from './../../assets/images/mobile_burger.svg'
import cross from './../../assets/images/cross.svg'
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import external_link from "./../../assets/images/external_link.png"

const Header = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleMobileClick = () => {
        setIsOpenMenu(!isOpenMenu);
        props.setIsOpenMenu(!isOpenMenu);
    }
    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.from(".header__container", { opacity: 0, y: -100 })
        tl.from(".header__links-down", { opacity: 0, y: -100 })
        tl.from(".header__links-up", { opacity: 0, y: -100 })
    }, [])

    return (
        <div className="header__container" data-scroll-section>
            <div id="header_up" className="header__inner desk">
                <img className="header__logo" src={dnk_logo} alt="" />
                <div className="header__links">
                    <section className="header__links-up">
                        <Link to="/chapter/contact">Контакты</Link>
                        <Link to="https://dnk-chgu.ru/932-2/" target="_blank">Оплата обучения
                            <img src={external_link} alt="" />
                        </Link>
                        <Link to="https://р21.навигатор.дети/directivities?municipality=4&municipality_region_id=&organizer=572&sort=recommend&pageSize=19" target="_blank">Навигатор
                            <img src={external_link} alt="" />
                        </Link>
                    </section>
                    <section className="header__links-down">
                        <Link to="/">Главная</Link>
                        <Link to="/chapter/news">Новости</Link>
                        <Link to="/chapter/schedule">Расписание</Link>
                        <Link to="/chapter/doc">Документы</Link>
                    </section>
                </div>
            </div>
            <div className="header__inner mobile">
                <img className="header__logo" src={dnk_logo} alt="" />
                <button onClick={handleMobileClick} className="header__mobile-burger">
                    {isOpenMenu ? (
                        <img src={cross} alt="" />
                    ) : (
                        <img src={mobile_burger} alt="" />
                    )}
                </button>
            </div>
        </div>
    );
}

export default Header;