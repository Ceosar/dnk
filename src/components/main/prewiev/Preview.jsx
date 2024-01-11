import { useLayoutEffect } from "react";
import gsap from "gsap";

import "./../Main.css"

import preview_image from "./../../../assets/images/main_preview.png"

const Preview = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({defaults:{duration:1}});
        tl.from("#preview__text", {opacity:0, y: -100, delay: 1})
    },[])

    return (
        <div className="preview__container" data-scroll-section>
            <img className="preview__image" src={preview_image} alt="" />
            <div className="inner">
                <span
                className="preview__text"
                id="preview__text"
                >Дом Научной<br /> Коллаборации</span>
            </div>
        </div>
    );
}

export default Preview;