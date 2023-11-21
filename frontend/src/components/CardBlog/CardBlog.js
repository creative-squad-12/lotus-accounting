import "./CardBlog.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBox from "./CardBox";

function CardTestimonial() {

  const blogData = [{cardImg:"./images/creative/blog-card-img.jpg", title:"Tips Achieving Success In Business" ,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been..."},{cardImg:"./images/creative/blog-card-img.jpg", title:"Tips Achieving Success In Business" ,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been..."},{cardImg:"./images/creative/blog-card-img.jpg", title:"Tips Achieving Success In Business" ,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been..."},{cardImg:"./images/creative/blog-card-img.jpg", title:"Tips Achieving Success In Business" ,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been..."}]

  return (
    <div className='blog-container standard-padding-space my-4'>
      <div className="blog-upper-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-text-content">
                <p className="sub-heading">BLOGS</p>
                <h3 className="body-heading">Every single update and story</h3>   
                <p className="body-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-btn">
                <button>See All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Swiper
            spaceBetween={50}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 3,
                }
              }}
            className="card-list p-4"
            >
            {blogData.map((blogData,ind)=>{
              return (<>
                <SwiperSlide key={ind}>
                  <CardBox cardImg={blogData.cardImg} title={blogData.title} content={blogData.content}/>
                </SwiperSlide>
              </>)
            })}
            
        </Swiper>
    </div>
  )
}

export default CardTestimonial