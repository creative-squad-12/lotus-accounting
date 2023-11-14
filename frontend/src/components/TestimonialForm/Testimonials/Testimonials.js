import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const blogData = [{count:1,clientName:"CHRISTINE" ,clientImg:"/images/creative/user-img.png", clientReview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{count:2,clientName:"CRISTINE" ,clientImg:"/images/creative/user-img.png", clientReview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{count:3,clientName:"CRISTINE" ,clientImg:"/images/creative/user-img.png", clientReview:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]

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
              <h3 className="body-heading">What our client say about Our Firm</h3>
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