import React from 'react'
import "./NewsCard.css"

function NewsCard(props) {
  return (
    <div className="news_card pb-3">
      <img src={props.img} className="card_img img-fluid" />
      <div className="card_text">
        <h3 className="h3_main mt-3">
          <span className="sub_text">Latest News</span>
        </h3>
        <h4 className={`h4_main mt-1`}>
          <span className="card_title">{props.title}</span>
        </h4>
        <div className="blog_list_logo mt-3">
          <img alt="Empathy" src="/images/creative/card-logo.png" className="blog_list_logo_img"/>
          <div className="blog_list_logo_text">
            <h6 className="blog_list_logo_title m-0">Lotus Accounting</h6>
            <p className="blog_list_logo_date m-0">June, 19, 2027</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard