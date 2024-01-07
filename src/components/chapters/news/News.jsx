import { useEffect, useState } from "react";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import axios from "axios";
import { ApiNews, ApiUrl } from "../../../Constains";
import "./News.css"

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

    return (
        <div className="news-wrapper">
            <div className="news-content">
                {news.map((news, index) => (
                    <div className="news-container" key={news.id}>
                        <div className="news-title">
                            <span className="news__id">No {index + 1}</span>
                            {news.tags.map((tag, index) => (
                                <span key={index} className="news__tag">{tag}</span>
                            ))}
                        </div>
                        <img src={ApiUrl + news.preview_photo} alt="" />
                        {/* <img style={{ borderRadius: 15 }} src={test_img} alt="" /> */}
                        <div className="news-text">{news.title}</div>
                    </div>
                ))}
                {news.length > 0 &&(<div ref={infiniteRef} style={{ height: '1px' }} />)}
            </div>
        </div>
    );
}

export default News;