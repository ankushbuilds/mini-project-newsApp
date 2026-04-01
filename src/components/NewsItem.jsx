import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, ImageUrl, newsUrl, publishedAt, source} = this.props
    return (
        <>
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>
    {source}
  </span>
  <img src={ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Read More</a>
    <p className="card-text"><small className="text-body-secondary">{new Date(publishedAt).toGMTString()}</small></p>
  </div>
</div>
      </div>
      </>
    )
  }
}

export default NewsItem
