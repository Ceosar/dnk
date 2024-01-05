import "./News.css"
import test_img from "./../../../assets/images/test-news.png"

const News = () => {
    const newsData = [
        {
            number: "No 01",
            title: "Детский университет",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        // Добавьте другие новости по аналогии
    ];


    return (
        <div className="news-wrapper">
            <div className="news-content">
                <div className="news-container">
                    <div className="news-title">
                        <span>No 01</span>
                        <span>Детский университет</span>
                    </div>
                    <img src={test_img} alt="" />
                    <div className="news-text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="news-container">
                    <div className="news-title">
                        <span>No 01</span>
                        <span>Детский университет</span>
                    </div>
                    <img src={test_img} alt="" />
                    <div className="news-text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="news-container">
                    <div className="news-title">
                        <span>No 01</span>
                        <span>Детский университет</span>
                    </div>
                    <img src={test_img} alt="" />
                    <div className="news-text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="news-container">
                    <div className="news-title">
                        <span>No 01</span>
                        <span>Детский университет</span>
                    </div>
                    <img src={test_img} alt="" />
                    <div className="news-text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="news-container">
                    <div className="news-title">
                        <span>No 01</span>
                        <span>Детский университет</span>
                    </div>
                    <img src={test_img} alt="" />
                    <div className="news-text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
            </div>
        </div>
    );
}

export default News;