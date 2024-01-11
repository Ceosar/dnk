import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiNews, ApiUrl } from "../../../Constains";
import axios from "axios";
import useInfiniteScroll from 'react-infinite-scroll-hook';

import "./News.css"
import "./../../error/Error.css"


const News = () => {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [nextPage, setNextPage] = useState(true)

    const getNews = () => {
        axios.get(ApiUrl + ApiNews + "active_news/?page=" + page)
        .then(response => {
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
        .catch(error => {
            setErrors(error);
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

    const [errors, setErrors] = useState(null);
    if (errors) {
        return (
            <div className='error_container'>
                <div>Проверьте соединение с интернетом...{errors.message}</div>
                <button className='error_btn-reload' onClick={() => window.location.reload()}>Обновить</button>
            </div>
        )
    }

    return (
        <div className="news-wrapper">
            <div className="news-content">
                {news.map((news, index) => (
                    <Link to={`news_about/${news.id}`} className="news-container" key={news.id} target="_blank">
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