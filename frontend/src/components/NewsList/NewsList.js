import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";

function NewsList() {

  const newsData = [
    {img:"/images/creative/news-card.jpg",title:"The Importance of Accounting Services for Toronto Startups: A Crucial Consideration"},
    {img:"/images/creative/news-card.jpg",title:"Assessing the Risks: Is DIY Bookkeeping a Worthwhile Venture?"},
    {img:"/images/creative/news-card.jpg",title:"Tax Planning for Toronto Corporations: Strategies for Optimal Financial Health"},
    {img:"/images/creative/news-card.jpg",title:"Payroll Precision: Best Practices for Toronto Businesses"},
    {img:"/images/creative/news-card.jpg",title:"Beyond Compliance: The Role of Accounting in Toronto Regulation"},
    {img:"/images/creative/news-card.jpg",title:"Future-Proofing Your Finances: Toronto Business Planning Essentials"}
  ]

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
