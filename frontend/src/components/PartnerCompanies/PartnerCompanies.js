import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import "./PartnerCompanies.css"

function PartnerCompanies() {
  return (
  <div className='partnerCompanies_container container standard-padding-space'>
      <div className="blog-text-content text-center mb-5">
          <p className="sub-heading">Lotus Accounting</p>
          <h3 className="body-heading">Client success stories</h3> 
        </div>
        <div className="companies-logo-box mx-1 py-3 px-0">
        <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                200:{
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                }
              }}
            className="p-3 px-0 mx-auto"
            >
                <SwiperSlide>
                  <img src="images/icons/partner-logo.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/icons/partner-logo.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/icons/partner-logo.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/icons/partner-logo.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="images/icons/partner-logo.png" alt="" />
                </SwiperSlide>
                  
            
        </Swiper>
        </div>
    </div>
  )
}

export default PartnerCompanies