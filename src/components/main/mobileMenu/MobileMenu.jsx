import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from "gsap";

import "./MobileMenu.css"

const MobileMenu = ({isOpenMenu}) => {

    // useLayoutEffect(() => {
    //     var ctx = gsap.context(() => {
    //         const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    //         tl.from(".mobile-menu", { x: 500 })
    //     })
    //     return () => {
    //         ctx.revert()
    //     }
    // }, [])

    return (
        <div className={`mobile-menu ${isOpenMenu ? "open" : ''}`}>
            <div className='mobile-menu_container'>
                <Link>Главная</Link>
                <Link to="/chapter/contact">Контакты</Link>
                <Link to="/chapter/news">Новости</Link>
                <Link to="/chapter/schedule">Расписание</Link>
                <Link to="/chapter/doc">Документы</Link>
                <Link to={"https://dnk-chgu.ru/932-2/"}>Оплата обучения</Link>
                <Link to="https://р21.навигатор.дети/directivities?municipality=4&municipality_region_id=&organizer=572&sort=recommend&pageSize=19">Навигатор</Link>
            </div>
        </div>
    );
}

export default MobileMenu;
