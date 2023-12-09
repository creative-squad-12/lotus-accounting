import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const blogData = [
    {count:1,clientName:"Alice Benedict" ,clientImg:"/images/creative/user-img.png", clientReview:"My experience with Chandran in filing my family’s personal taxes has been extremely good. He is  thoroughly professional and well experienced. He helped us get the maximum tax benefits by paying great attention to details. I strongly recommend his consultation to anyone."},
    {count:2,clientName:"Gayathiri Gesland" ,clientImg:"/images/creative/user-img.png", clientReview:"Chandran was very respectful, patient, and friendly. No pretenses and was quick and thorough. Helped guide me on where to locate required docs and answered my questions with expertise. Also reimbursed the cost for parking when I went over the 1 hour limit. Front desk staff was also very friendly. Thank you for making my visit a pleasant one. Appreciated it a lot and look forward to working with you in the future."},
    {count:3,clientName:"Sharath S." ,clientImg:"/images/creative/user-img.png", clientReview:"I have been consulting Chandran for the past couple of years. He is highly professional and helpful. I have really impressed with his attention to each detail ; Moreover his specification , knowledge and experience will make a big difference. Would definitely recommend Chandran @ Lotus Accounting for your tax services ."}
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
              <a href="https://www.google.com/maps/place/Lotus+Accounting+Professional+Corporation/@43.7894193,-79.236172,17z/data=!3m1!5s0x89d4d15a7f1afcab:0x64bc3e7ec011cee1!4m8!3m7!1s0x89d4d7675a90e4b7:0x889bff97ffa2180e!8m2!3d43.7894193!4d-79.236172!9m1!1b1!16s%2Fg%2F11fcq_d8br?hl=en-CA&entry=ttu" target="blank">
                <button className="blue-btn read-more-btn my-md-1 my-3 mb-4">Read More</button>
              </a>
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
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