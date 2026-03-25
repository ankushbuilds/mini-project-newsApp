import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize: 9
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){  
    super();
    this.state = {
      articles: [],      // 👈 always start with empty array
      loading : false,
      page: 1,
      totalResults: 0
    }
  }
  // 73881df8dd3703f2f3cbdce587f0ca9e


  async componentDidMount(){ 
    this.fetchNews(this.state.page);
  }
  fetchNews = async(pageNumber) => {
    this.setState({loading: true});
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&apikey=73881df8dd3703f2f3cbdce587f0ca9e&page=${pageNumber}&pageSize=${this.props.pageSize}`;
 
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      // 👇 fallback if API fails
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false,
        page: pageNumber
      });
    } catch (error) {
      console.error("Failed to fetch news:", error);
      this.setState({
        articles: [],
        loading: false
      });
    }
  }

  handleBackClick = () => {
    this.fetchNews(this.state.page - 1);
  }

  handleNextClick = () => {
    if(this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)){
      this.fetchNews(this.state.page + 1);
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '30px 0px'}}>Latest News</h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            !this.state.loading && <p className="text-center">No news available</p>
          )}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleBackClick}>&larr; Back</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News