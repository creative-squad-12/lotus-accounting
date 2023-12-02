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
  bgVideo=false,
  btn=false,
  socialLinks=false,
  serviceForm=false
}) => {
  return (
    <div
      className={`common_hero_section ${bgVideo && "bg-video"}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
       { bgVideo && <video autoPlay loop muted>
        <source src="./images/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
      <Header />

      <div className="container d-flex align-items-center py-5">
        <div className="row gy-2 mt-5">
          <div
            className={
              serviceForm
                ? "col-md-6 "
                : "col-12 hero_content_wrapper px-3"
            }
          >
            <div className="hero-text-content mt-3 ">
            <h5 className="sub-heading w-100">{subHeading}</h5>
            <h1 className="hero-section-heading " style={serviceForm ? {fontSize:"2.6rem"}:{}}>
              {Heading}
              <span className="heading-color-change">{spanHeading}</span>
            </h1>
            <p className="body-paragraph">{Paragraph}</p>
            {btn && <button className="hero-btn blue-btn">{btnText}</button>}
            {socialLinks && (
              <div className="social-links py-2">
                <div className="first-row d-flex gap-3">
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-1.png" />
                    <p className="m-0">647-948-8750</p>
                  </div>
                  <div className="link-container d-flex align-items-center gap-1">
                    <img src="/images/icons/social-2.png" />
                    <p className="m-0">416-904-2013</p>
                  </div>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-3.png" />
                  <p className="m-0">info@lotusaccounting.ca</p>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-4.png" />
                  <p className="m-0">Suite 304-305 Milner Ave. Toronto, ON M1B 3V4</p>
                </div>
                <div className="link-container d-flex align-items-center gap-1">
                  <img src="/images/icons/social-5.png" />
                  <p className="m-0">Mon-Sat 10:00AM to 5:00PM Eastern Time</p>
                </div>
              </div>
            )}
          </div>
          </div>
          {serviceForm && (
            <div className="col-md-6 pb-5">
              <div className="service-form d-flex flex-column px-5 py-5">
                <h3 className="body-heading" style={{ color: "black" }}>
                  Let’s get in touch!
                </h3>
                <p
                  className="body-paragraph text-start"
                  style={{ color: "black" }}
                >
                  For general inquiries or to schedule a consultation, please complete the form below.
                </p>
                <input type="text" placeholder="Your Full Name" />
                <input type="text" placeholder="Your Email Address" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Your Message" />
                <button className="service-from-btn  blue-btn">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 