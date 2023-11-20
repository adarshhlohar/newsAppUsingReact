import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {


    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "sport",
    };

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    };

    // articles = [
    //     {
    //         source: {
    //             id: "talksport",
    //             name: "TalkSport",
    //         },
    //         author: "161385360554578",
    //         title:
    //             "Spurs contact Barca for Johnson alternative, Cucurella to Man United, Nunes exit ruled out",
    //         description:
    //             "talkSPORT.com brings you all the latest football news, transfer gossip and reaction to the biggest stories. Tune into talkSPORT here and follow our live blog below for regular updates throughout th…",
    //         url: "https://talksport.com/football/1486182/football-news-live-transfers-gossip-premier-league-smith-rowe-chelsea-man-utd/",
    //         urlToImage:
    //             "https://talksport.com/wp-content/uploads/sites/5/2023/08/OQ-TALKSPORT-BLOG-30TH-AUG.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
    //         publishedAt: "2023-08-30T07:20:28Z",
    //         content:
    //             "Wolves have allowed Portugal international Goncalo Guedes to return to Benfica on loan in a move which could allow Gary O’Neil to strengthen his squad in the final days of the transfer window.\r\nThe 2… [+1283 chars]",
    //     },
    //     {
    //         source: {
    //             id: "bbc-sport",
    //             name: "BBC Sport",
    //         },
    //         author: null,
    //         title: "EFL Cup reaction, football news & transfers latest",
    //         description:
    //             "Reaction to Tuesday night's EFL Cup second-round action, including wins for Fulham over Tottenham and Salford City against Leeds, plus transfers latest.",
    //         url: "http://www.bbc.co.uk/sport/live/football/66655086",
    //         urlToImage:
    //             "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
    //         publishedAt: "2023-08-30T06:22:19.8627583Z",
    //         content:
    //             "How are you feeling today?\r\nFulham and Salford City fans will be forgiven for waking up with a sore head following penalty shootout wins over Tottenham and Leeds, respectively, in the EFL Cup.\r\nWe wi… [+495 chars]",
    //     },
    //     {
    //         source: {
    //             id: "fox-sports",
    //             name: "Fox Sports",
    //         },
    //         author: null,
    //         title:
    //             "Colorado-TCU, Texas-Rice, more: College football Week 1 by the numbers",
    //         description:
    //             "The college football season is here! Here are all the key stats to know about the biggest games in Week 1.",
    //         url: "http://www.foxsports.com/stories/college-football/colorado-tcu-texas-rice-more-college-football-week-1-by-the-numbers",
    //         urlToImage:
    //             "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.29.23_By-The-Numbers_16x9.jpg?ve=1&tl=1",
    //         publishedAt: "2023-08-29T19:43:08Z",
    //         content:
    //             "The 2023 college football season kicks off with a load of great Week 1 matchups, including a series of high-level matchups on FOX.\r\nOn Thursday, Matt Rhule makes his Nebraska debut as his Cornhuskers… [+6276 chars]",
    //     },
    //     {
    //         source: {
    //             id: "espn-cric-info",
    //             name: "ESPN Cric Info",
    //         },
    //         author: null,
    //         title:
    //             "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //         description:
    //             "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //         url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //         urlToImage:
    //             "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //         publishedAt: "2020-04-27T07:20:43Z",
    //         content:
    //             "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    //     },
    // ];

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    constructor(props) {
        super(props);
        console.log("This is news constructor from  news component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        };
        document.title = `NewsMonkey-${this.capitalizeFirstLetter(
            this.props.category
        )}`;
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json();
        this.props.setProgress(50);
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async()=>{
        this.setState({page : this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,
        });
    }

    render() {
        console.log("rendor");
        return (
            <>
                <h1 className="text-center" style={{ margin: "35px 0px" }}>
                    NewsMonkey Top {this.capitalizeFirstLetter(this.props.category)} Headlines
                </h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                
                    loader={<Spinner/>}
                >
                    <div className="container">
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                            return (
                                <div className="col-xl-3 col-sm-6 my-2" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        sourceName={element.source.name}
                                    />
                                </div>
                            );
                        })}
                </div>
                </div>
                </InfiniteScroll>


                {/* <div className="container my-3 d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Prev
                    </button>
                    <button
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(this.state.totalResults / this.props.pageSize)
                        }
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div> */}
            </>
        );
    }
}

export default News;
