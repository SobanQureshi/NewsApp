import React, { Component } from "react";
import PropTypes from "prop-types";

const NewsItem = (props) => {



    let { title, description, imgUrl, newsUrl } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl?"https://i.dailymail.co.uk/1s/2023/08/25/22/74735479-0-image-a-10_1692998389367.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>

            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
