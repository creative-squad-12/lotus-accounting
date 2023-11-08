import React from "react";
import "./HeroBanner.css";
import Header from "../Header/Header";

const HeroBanner = ({
  Heading,
  HighlightedSpan,
  Paragraph,
  btnText,
  bgImg,
  btn=false
}) => {
  return (
    <div className="common_hero_section" style={{backgroundImage: `url(${bgImg})`}}>
      <Header/>
      <div className="hero_content_wrapper ">
        <span>{HighlightedSpan}</span>
        <h1 className="hero-section-heading">
          {Heading}
        </h1>
        <p className="body-paragraph">{Paragraph}</p>
        {btn && <button className="hero-btn">{btnText}</button>}
      </div>
    </div>
  );
};

export default HeroBanner; 