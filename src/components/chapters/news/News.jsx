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
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 0100",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
        {
            number: "No 02",
            title: "Новости о науке",
            text: "Voluptatum laudantium quo harum corrupti?"
        },
    ];


    return (
        <div className="news-wrapper">
            <div className="news-content">
                {newsData.map((news, index) => (
                    <div className="news-container" key={index}>
                        <div className="news-title">
                            <span>{news.number}</span>
                            <span>{news.title}</span>
                        </div>
                        <img src={test_img} alt="" />
                        <div className="news-text">{news.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;