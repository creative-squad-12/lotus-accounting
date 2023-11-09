import React from 'react'
import "./LatestNews.css"

function LatestNews() {
  return (
    <div className="news_container">
        <div className="news_img_container">
            <img className="latest_news_img img-fluid" src='/images/creative/news-banner.jpg' />
        </div>
        <div className="text_content">
            <h3 className='h3_main mb-2'><span >Latest News</span></h3>
            <h2 className='h1_main mb-2'>Lorem Ipsum is simply dummy text lorem Ipsum is simply</h2>
            <p className='para_main mb-3'>We strive to preserve dignity and enhance the quality of life for our patients and their loved ones who are facing a decrease in independence. Our goal is to be ever present</p>
            <div className="blog_news_logo">
                <img alt="Empathy" src="/images/creative/card-logo.png" />
                <div className="blog_news_logo_text">
                    <h6 className='.h5_main m-0'><span>Lotus Accounting</span></h6>
                    <p className='m-0 para_main'>June, 19, 2027</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews