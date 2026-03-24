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
            articles: [],
            loading : false,
            page: 1

        }
        
    }
      async componentDidMount(){ // lifecycle method that runs once , immediately !!
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=048d21c7c8ef41689023ea3bf94e774e&page=1&pageSize=${this.props.pageSize}`;
       this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
      loading: false});
    }

    handleBackClick = async() => {
           let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=048d21c7c8ef41689023ea3bf94e774e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
           let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
      
    };
   handleNextClick = async() => {
    if(this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize)){  // no. of pages
       let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=048d21c7c8ef41689023ea3bf94e774e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
       let data = await fetch(url);
      let parsedData = await data.json();
    
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
    };


  

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '30px 0px'}}>Latest News  </h1>
        {this.state.loading && <Spinner/>}
    
      <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
        <NewsItem  title ={element.title}  description={element.description ? element.description.slice(0,80) : ""} ImageUrl = {element.urlToImage} newsUrl = {element.url}/>
        </div>
         } ) }
       
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleBackClick}>&larr; Back</button>
      <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>
      </div>
     
    )
  }
}


export default News

