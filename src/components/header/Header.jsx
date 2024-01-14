import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "./Header.css"

import dnk_logo from './../../assets/images/dnk_logo_svg.svg'
import mobile_burger from './../../assets/images/mobile_burger.svg'
import cross from './../../assets/images/cross.svg'
import external_link from "./../../assets/images/external_link.svg"

const Header = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const burferButtonRef = useRef(null);

    const handleMobileClick = () => {
        props.setIsOpenMenu(!props.isOpenMenu);
    }
    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.from(".header__container", { opacity: 0, y: -100 })
        tl.from(".header__links-down", { opacity: 0, y: -100 })
        tl.from(".header__links-up", { opacity: 0, y: -100 })

        const handleScroll = () => {
            const scrolled = window.scrollY > window.innerHeight;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        const burgerButton = burferButtonRef.current;

        if (props.isOpenMenu) {
            gsap.to(burgerButton, { rotate: 0, duration: 0.4 });
        }
        else {
            gsap.to(burgerButton, { rotate: 180, duration: 0.4 });
        }
    }, [props.isOpenMenu]);

    return (
        <div className={"header__container " + (isScrolled ? "scroll" : "")} data-scroll-section>
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
                    <img src={props.isOpenMenu ? cross : mobile_burger} alt="" ref={burferButtonRef} />
                </button>
            </div>
        </div>
    );
}

export default Header;