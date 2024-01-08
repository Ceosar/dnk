import { useEffect, useState } from "react";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import axios from "axios";
import { ApiNews, ApiUrl } from "../../../Constains";
import "./News.css"
import { Link } from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [nextPage, setNextPage] = useState(true)

    const getNews = () => {
        axios.get(ApiUrl + ApiNews + "active_news/?page=" + page).then(response => {
            console.log(response.data)
            if (response.data.status) {
                if(response.data.data.length != 0){
                    setNews((oldState) => [...oldState, ...response.data.data]);
                    setPage(page + 1)
                }
                else{
                    setNextPage(false);
                }
            }
        })
    }

    const [infiniteRef] = useInfiniteScroll({
        // loading: loadingData,
        hasNextPage: nextPage,
        onLoadMore: getNews,
    });


    useEffect(() => {
        getNews()
    }, []);

    if(Object.keys(news).length == 0){
        return <div>Проверьте соединение с интернетом...</div>
    }

    return (
        <div className="news-wrapper">
            <div className="news-content">
                {news.map((news, index) => (
                    <Link to={`news_about/${news.id}`} className="news-container" key={news.id}>
                        <div className="news-title">
                            <span className="news__id">No {index + 1}</span>
                            {news.tags.map((tag, index) => (
                                <span key={index} className="news__tag">{tag}</span>
                            ))}
                        </div>
                        <img src={ApiUrl + news.preview_photo} alt="" />
                        <div className="news-text">{news.title}</div>
                    </Link>
                ))}
                {news.length > 0 &&(<div ref={infiniteRef} style={{ height: '1px' }} />)}
            </div>
        </div>
    );
}

export default News;