import React from "react";
import "./Contactform.css";

const Contactform = () => {
  return (
    <div
      className="contact_section"
    >
      <div className="container">
        <div className="row gy-4 gx-lg-5">
          <div className="col-sm-12 " >
            <div className="contact-details" >
              <h2 className="h2_main mb-4 body-heading">
                Lorem Ipsum is simply dummy text of the printing
              </h2>
              <p className="para_main">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="row gy-4">

              <div className="col-12">
                <form className="contact_form_form_container"> 
                  <div className="row gy-4">
                    <div className="col-md-3 col-12">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="col-md-3 col-12">
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="col-md-3 col-12">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="col-md-3 col-12">
                      <input
                        type="text"
                        placeholder="Services"
                      />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 button_col">
                      <button type="submit">Get Consultation</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
