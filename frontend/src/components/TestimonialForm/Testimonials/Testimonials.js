import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const blogData = [
    {count:1,clientName:"VJ Cleaning Inc. Toronto" ,clientImg:"/images/creative/user-img.png", clientReview:"We've been using Lotus Accounting from last year since my last accountant let me down, and we’ve been very impressed with the service we've received. Lotus Accounting accountants are very professional and very knowledgeable regarding my business. They are very prompt and organized which keeps us very happy. We would very much recommend their services to everyone."},
    {count:2,clientName:"Shankarganesh Balasundaram Cambridge" ,clientImg:"/images/creative/user-img.png", clientReview:"This year, my tax return was very complex due to various factors. I talked to couple of tax consultants before reaching out to Chandran and right off the bat, I found him to be very knowledgeable and knows his domain very well. He was very professional during the filing process and thanks to him I was able to maximize my returns. Highly recommendable!"},
    {count:3,clientName:"Kethees-Gas Station Business Lindsay" ,clientImg:"/images/creative/user-img.png", clientReview:"Lotus Accounting is handling our accounting and tax issues. We are very pleased with their service. We frequently seek their advice on many business issues and receive excellent advice. They are an important part of our business team. We feel like they are a part of our team."}
  ]

  const handlePrevButtonClick = () => {
    const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
    swiperInstance.slidePrev();
  };
  
  const handleNextButtonClick = () => {
    const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
    swiperInstance.slideNext();
  };

  return (
    <div className="Testimonials-container standard-padding-space">
      <div className="container">
    <div className="row d-flex align-items-center">

      <div className="col-lg-6 col-md-12 mb-3 text-center text-lg-start">
          <div className="text-content mx-auto mx-lg-0">
              <p className="sub-heading">Testimonials</p>
              <h3 className="body-heading">Hear it from our clients</h3>
          </div>
      </div>
      <div className="col-lg-6 col-md-12">

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            observer ={true}
            observeParents={true}
            parallax={true}
            className="testimonials-list"
            id="articles-cards-slider"
            >
              {
                blogData.map((clientData,ind)=>{
                  return(<>
                    <SwiperSlide key={ind}>
                      <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview} count={clientData.count} total={blogData.length} handleNextButtonClick={handleNextButtonClick} handlePrevButtonClick={handlePrevButtonClick}/>
                    </SwiperSlide>
                     </>)
                })
              }
        </Swiper>
        
      </div>
      </div>
  </div>
</div>
  )
}

export default Testimonials