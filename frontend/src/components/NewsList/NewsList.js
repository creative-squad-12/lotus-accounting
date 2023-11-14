import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";

function NewsList() {

  const newsData = [{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"},{img:"/images/creative/news-card.jpg",title:"Lorem Ipsum is simply dummy text lorem Ipsum is simply"}]

  return (
    <div className={`main py-4`}>
      <div className="conatinaer">
        <div className="row w-100">
          {newsData.map((ele ,ind)=>{
            return (<div key={ind} className="col-lg-4 col-sm-5 mx-sm-auto gy-4">
              <NewsCard
                  img={ele.img}
                  title={ele.title}
              />
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
