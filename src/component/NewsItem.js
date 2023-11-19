import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } = this.props;
    return (
      <div>
        <div className="card mx-2 my-2">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ right: "85%" }}>
            {sourceName}</span>
          <img src={imageUrl ? imageUrl : "https://timesofindia.indiatimes.com/photo/msid-104669395,imgsize-1288394.cms"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} Updated {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
