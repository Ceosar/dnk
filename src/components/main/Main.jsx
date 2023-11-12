import "./Main.css"
import About from "./about/About";
import Preview from "./prewiev/Preview";
import {useLayoutEffect, useRef, useState } from "react";
import useLocoScroll from "../../hooks/useLocoScroll";
import Header from "../header/Header";
import dnk_logo_white from './../../assets/images/dnk_logo_white.png'
import Detailed from "./detailed/Detailed";
import SmoothInfo from "./smoothInfo/SmoothInfo";

const Main = () => {
    const [preloader, setPreloader] = useState(true);
    const [timer, setTimer] = useState(3);
    const id = useRef(null);

    useLocoScroll(!preloader);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    }

    useLayoutEffect(()=> {
        id.current = window.setInterval(() =>{
            setTimer((timer) => timer-1)
        },1000)
    },[])

    useLayoutEffect(()=> {
        if(timer===0){
            clear();
        }
    },[timer])
    return (
        <>
            {preloader ? (
                <div className="preloader">
                    <img src={dnk_logo_white} alt="" />
                </div>
            ) : (
                <div className="main__content"
                    id="main-container"
                    data-scroll-container
                >
                    <Header/>
                    <Preview/>
                    <About/>
                    <Detailed/>
                    <SmoothInfo/>
                </div>
            )}
        </>
    );
}

export default Main;