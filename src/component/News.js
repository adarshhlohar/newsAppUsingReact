import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    
    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedata = await data.json();
        props.setProgress(50);
        
        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    
    useEffect(() => {
        updateNews();
        document.title = `NewsMonkey-${capitalizeFirstLetter(props.category)}`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles));
        setTotalResults(parsedata.totalResults)
    }

    return (
        <>
            <h1 className="text-center " style={{ margin: "30px 0px",marginTop: "80px"}}>
                NewsMonkey Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}

            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length < totalResults} loader={<Spinner />}>
                <div className="container">
                    <div className="row my-3">
                        {articles.map((element) => {
                            return <div className="col-xl-3 col-sm-6 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} sourceName={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sport",
};

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
};


export default News;
