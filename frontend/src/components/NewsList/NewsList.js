import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";

function NewsList() {

  const newsData = [{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"}]

  return (
    <div className={`news-container pb-3`}>
      <div className="container">
        <div className="row ">
          {newsData.map((ele ,ind)=>{
            return (<div key={ind} className="col-lg-4 col-sm-5 mx-sm-auto gy-4">
              <NewsCard
                  img={ele.img}
                  title={ele.title}
              />
            </div>)
          })}
        </div>
        <div className="page-btn-container my-5 d-flex align-items-center justify-content-center gap-3">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button><img src="/images/icons/arrow-right.svg" className="next-icon"/></button>
        </div>
      </div>
        
    </div>
  );
}

export default NewsList;
