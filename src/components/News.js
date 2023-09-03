import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  // static propTypes = {};
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07a91a1f5f548619d21f2404845d0bd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07a91a1f5f548619d21f2404845d0bd&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    });
  };

  handleNextClick = async () => {
    if (
      Math.ceil(this.state.page + 1 > this.state.totalArticles /20)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07a91a1f5f548619d21f2404845d0bd&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News App Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  className="text-truncate"
                  key={element.url}
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Previous &larr;
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
