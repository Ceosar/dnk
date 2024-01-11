import React, { useMemo } from "react";
import "./MotivationSlider.css"


function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

export default function MotivationSlider() {
    const titleMotivations = [
        "Познавай",
        "Создавай",
        "Учись",
        "Достигай",
        "Преодолевай",
        "Изучай",
        "Инновируй",
        "Трансформируй",
        "Эволюционируй",
        "Осваивай",
        "Стремись к лучшему",
        "Совершенствуйся",
        "Развивайся каждый день"
    ];

    const repeatedWords = useMemo(() => {
        const filledArray = Array.from({ length: 50 }, () => getRandomWord(titleMotivations));
        const withBoldTags = filledArray.map((word, index) => {
            if (Math.random() < 0.5) {
                return <b key={index} style={{ whiteSpace: "nowrap" }}>{word}</b>;
            }
            return <p key={index} style={{ whiteSpace: "nowrap" }}>{word}</p>;
        });
        return withBoldTags;
    }, [titleMotivations]);

    return (
        <div className='motivation-slider__container'data-scroll-section>
            <div className="motivation-slider__data right">
                {repeatedWords}
            </div>
            <div className="motivation-slider__data left">
                {repeatedWords}
            </div>
        </div>
    );
}
