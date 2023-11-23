import "./SmoothInfo.css"
import marquee from './../../../assets/images/marquee.png'

const SmoothInfo = () => {
    return (
        <div className="smooth-info__container" data-scroll-section>
            <div className="smooth-info__image-container">
                <div className="smooth-info__images">
                    <img src={marquee} alt="" />
                </div>
                <div className="smooth-info__images">
                    <img src={marquee} alt="" />
                </div>
                <div className="smooth-info__images">
                    <img src={marquee} alt="" />
                </div>
            </div>
                {/* <marquee direction="left" scrollamount="10">Бегущая строка</marquee> */}
        </div>
    );
}

export default SmoothInfo;