import React from "react";
import "./HeroBanner.css";
import Header from "../Header/Header";

const HeroBanner = ({
  Heading,
  subHeading,
  spanHeading="",
  Paragraph,
  btnText,
  bgImg,
  btn=false,
  socialLinks=false,
  serviceForm=false
}) => {
  return (
    <div
      className="common_hero_section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Header />

      <div className="container h-100 d-flex align-items-center py-5">
        <div className="row gy-2">
          <div
            className={
              serviceForm
                ? "col-md-6 "
                : "col-12 hero_content_wrapper"
            }
          >
            <div className="hero-text-content">
            <span>{subHeading}</span>
            <h1 className="hero-section-heading">
              {Heading}
              <span className="heading-color-change">{spanHeading}</span>
            </h1>
            <p className="body-paragraph">{Paragraph}</p>
            {btn && <button className="hero-btn">{btnText}</button>}
            {socialLinks && (
              <div className="social-links">
                <div className="first-row d-flex gap-3">
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-1.png" />
                    <p>647-948-8750</p>
                  </div>
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-2.png" />
                    <p>416-904-2013</p>
                  </div>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-3.png" />
                  <p>info@lotusaccounting.ca</p>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-4.png" />
                  <p>Suite 304-305 Milner Ave. Toronto, ON M1B 3V4</p>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-5.png" />
                  <p>Mon-Sat 10:00AM to 5:00PM Eastern Time</p>
                </div>
              </div>
            )}
          </div>
          </div>
          {serviceForm && (
            <div className="col-md-6">
              <div className="service-form d-flex flex-column p-4 py-5">
                <h3 className="body-heading" style={{ color: "black" }}>
                  Let’s get in touch!
                </h3>
                <p
                  className="body-paragraph text-start"
                  style={{ color: "black" }}
                >
                  Let’s discuss your project and find out what we
                </p>
                <input type="text" placeholder="Your Full Name" />
                <input type="text" placeholder="Your Email Address" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Your Message" />
                <button className="service-from-btn">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 