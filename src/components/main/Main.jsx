import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useLocoScroll from "../../hooks/useLocoScroll";

import "./Main.css"

import About from "./about/About";
import Preview from "./prewiev/Preview";
import Header from "../header/Header";
import Detailed from "./detailed/Detailed";
import SmoothInfo from "./smoothInfo/SmoothInfo";
import Dnk_info from "./dnk_info/Dnk_info.jsx";
import MotivationSlider from "./motivation_slider/MotivationSlider";
import Directions from "./directions/Directions";
import Footer from "../footer/Footer";
import MobileMenu from "./mobileMenu/MobileMenu.jsx";

import dnk_logo_white from './../../assets/images/dnk_logo_white_svg.svg'

const Main = ({ preloader, setPreloader }) => {

    const [timer, setTimer] = useState(1);
    const id = useRef(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    }

    useLayoutEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 1000)
    }, [])

    useLayoutEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer])

    useEffect(() => {
        const handleScroll = (event) => {
            if (isOpenMenu) {
                event.preventDefault();
            }
        };

        if (isOpenMenu) {
            document.addEventListener('scroll', handleScroll, { passive: false });
        }

        console.log(isOpenMenu)
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isOpenMenu]);

    return (
        <>
            {preloader ? (
                <div className="preloader">
                    <img src={dnk_logo_white} alt="" />
                </div>
            ) : (
                <div className={`main__content ` + (isOpenMenu ? "noscroll" : '')}
                    id="main-container"
                    data-scroll-container
                >
                    <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                    <MobileMenu isOpenMenu={isOpenMenu} />
                    <Preview />
                    <About />
                    <Detailed />
                    <SmoothInfo />
                    <Dnk_info />
                    <MotivationSlider />
                    <Directions />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Main;