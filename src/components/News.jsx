import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    max: 9
  }

  static propTypes = {
    max: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){  
    super(props);
    this.state = {
      articles: [],     
      loading : false,
      page: 1,
      totalArticles: 0
    }
    document.title =`${this.capitalizeFirstLetter(this.props.category)} - The Wire`;
  }
 

  async componentDidMount(){ 
    this.fetchNews(this.state.page);
  }
 fetchNews = async (page) => {
  this.setState({ loading: true });

  const apiUrl = import.meta.env.VITE_API_URL || '/api/news';
  let url = `${apiUrl}?category=${this.props.category}&max=${this.props.max}&page=${page}`;

  try {
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles || [],
      totalArticles: parsedData.totalArticles || 0,
      loading: false,
      page: page
    });
  } catch (error) {
    console.error("Failed to fetch news:", error);
    this.setState({
      articles: [],
      loading: false
    });
  }
};

  handleBackClick = () => {
    this.fetchNews(this.state.page - 1);
  }

  handleNextClick = () => {
    if(this.state.page + 1 <= Math.ceil(this.state.totalArticles / this.props.max)){
      this.fetchNews(this.state.page + 1);
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '30px 0px'}}>TheWire - {this.capitalizeFirstLetter(this.props.category)} </h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.length > 0 ? (
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  ImageUrl={element.image}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))
          ) : (
            !this.state.loading && <p className="text-center">Breaking news: The news is missing! Stay tuned… </p>
          )}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleBackClick}>&larr; Back</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.max)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News