import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Us</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Welcome to <strong>The Wire</strong>, your go-to app for the latest and most reliable news across the globe. Our mission is to keep you informed and updated with breaking stories, in-depth analyses, and comprehensive coverage on topics that matter most — from sports and technology to health, business, and entertainment.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>What We Offer</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         Real-time news updates curated from trusted sources
      Easy navigation through various categories to find news that interests you
      Clean, user-friendly interface optimized for a seamless reading experience
      Regularly updated content to keep you ahead of the curve 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Our Commitment</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        At <strong>The Wire</strong>, we believe that timely and accurate information empowers you to make informed decisions. We strive to deliver news with integrity, transparency, and a dedication to quality journalism.
        Thank you for choosing <strong>The Wire </strong>— stay informed, stay ahead.
          </div>
    </div>
  </div>
</div>
        </>
      </div>
    )
  }
}
