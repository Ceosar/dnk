import { useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import "./Detailed.css"
import detailed_background from "./../../../assets/images/detailed_background.png"
import arrow_down_right from "./../../../assets/images/arrow_down_right.svg"
gsap.registerPlugin(ScrollTrigger)

const Detailed = () => {
    const blockRef = useRef(null)

    useLayoutEffect(() => {
        const el = blockRef.current;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: '0% 90%',
                end: 'top 60%',
                scrub: 3,
                toggleActions: 'restart pause reverse pause',
                markers: false,
            },
            x: "100%",
        })
    }, [])

    return (
        <div className="detailed__container" data-scroll-section>
            <img className="detailed__image" src={detailed_background} alt="" />
            <div className="detailed__popup" ref={blockRef}>
                <div className="detailed__popup-container">
                    <label>Что такое <br /> ДНК</label>
                    <span><b>Цель проекта</b> – создание новой образовательной инновационной среды, которая будет формировать у обучающихся, будущих специалистов, нужные навыки и компетенции, отвечающие вызовам цифровой экономики.</span>
                    <Link to={"/information"}>
                        Подробнее
                        <img src={arrow_down_right} alt="" />
                    </Link>
                </div>
            </div>
            <div className="detailed__popup-mobile">
                <label>Что такое <br /> ДНК</label>
                <span><b>Цель проекта</b> – создание новой образовательной инновационной среды, которая будет формировать у обучающихся, будущих специалистов, нужные навыки и компетенции, отвечающие вызовам цифровой экономики.</span>
                <Link to={"/information"}>
                    Подробнее
                    <img src={arrow_down_right} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Detailed;