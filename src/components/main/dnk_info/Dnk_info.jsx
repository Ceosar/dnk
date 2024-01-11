import "./Dnk_info.css"
import video from "./../../../assets/images/dnk_video.mp4"

export default function Dnk_info() {
    return (
        <div className="dnk_info">
            <div className='dnk_info__contaner' data-scroll-section>
                <div className="dnk_info__title">
                    Дом научной коллаборации имени С.А. Абрукова
                </div>
                <div className="dnk_info__content">
                    <div className="dnk_info__content__logo">
                        <video controls >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="dnk_info__content__text">Центру, созданному при ЧГУ им И.Н. Ульянова, дано имя первого проректора по научной работе университета, основателя первой в Чувашии проблемной научно-исследовательской лаборатории «Физика неустойчивого горения» — Сергея Андреевича Абрукова; ученого, получившего мировое признание за работы по разработке методов управления процессами горения, развитию теневых, интерференционных и голографических методов исследования.</div>
                </div>
            </div>
        </div>
    )
}
