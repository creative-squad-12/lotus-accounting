import React,{useState} from "react";
import "./AboutHistory.css";

const historyData = [
  {
    year:"2001",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2006",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2010",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2017",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2018",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2019",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2020",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    year:"2021",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]

function AboutHistory() {

  const [curYearInd,setCurYearInd] = useState(0)

  return (
    <div className="about-history-container standard-padding-space">
      <div className="text-content text-center mb-5">
        <p className="sub-heading">OUR HISTORY</p>
        <h3 className="body-heading">
          Combined 80+ Years of planning, results, and trust
        </h3>
      </div>
      <div className="history-list container desk-history">
        <div className="line-seprator"></div>

        {
          historyData.map((ele,ind)=>{
            return(
              <div className="year-details d-flex align-items-center">
                  <div className={`text-box ${curYearInd == ind ? "d-block" : "d-none"}`}>
                    <p className="m-0">{ele.content}</p>
                  </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src="/images/icons/box-triangle.png" className= {`year-box-triangle-img ${curYearInd == ind ? "visible" : "hide"}`} />
                  <div className= {`year-box ${curYearInd == ind ? "active" : ""}`}  onClick={()=>{setCurYearInd(ind)}}>
                    <h4 className="m-0" style={curYearInd == ind ? {color : "white"}:{color : "#283285"}}>{ele.year}</h4>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="history-list container mobile-history align-items-center py-5">

        {
          historyData.map((ele,ind)=>{
            return(
              <div className="year-details d-flex align-items-center">
                <div className={`text-box ${curYearInd == ind ? "visible" : "hide"}`}>
                  <p className="m-0">{ele.content}</p>
                </div>
                <div className="d-flex flex-row-reverse justify-content-center align-items-center">
                  <img src="/images/icons/box-triangle-left.png" className= {`year-box-triangle-img ${curYearInd == ind ? "visible" : "hide"}`} />
                  <div className= {`year-box ${curYearInd == ind ? "active" : ""}`}  onClick={()=>{setCurYearInd(ind)}}>
                    <h4 className="m-0" style={curYearInd == ind ? {color : "white"}:{color : "#283285"}}>{ele.year}</h4>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default AboutHistory;
