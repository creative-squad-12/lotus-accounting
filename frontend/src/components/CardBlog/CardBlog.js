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
                <h3 className="body-heading">Lotus accounting knowledge and insights</h3>   
                <p className="body-paragraph">At Lotus Accounting, we believe that knowledge is the key to financial empowerment. Join us on this blog to gain the insights you need for a prosperous financial future.</p>

                <p className="body-paragraph mb-0">1. How to find the right accounting firm in Toronto?</p>
                <p className="body-paragraph">Discover Key Factors for Choosing the Right Accounting Firm in Toronto. Gain Insights and Tips for Building a Vital Strategic Partnership for Your Business's Financial Success.</p>

                <p className="body-paragraph mb-0">2. The Importance of Accounting Services for Toronto Startups:</p>
                <p className="body-paragraph">A Crucial Consideration Uncover Unique Considerations and Benefits Linked to Choosing the Right Financial Partner for Your Entrepreneurial Journey.</p>

                <p className="body-paragraph mb-0">3. Assessing the Risks: Is DIY Bookkeeping a Worthwhile Venture?</p>
                <p className="body-paragraph">Acquire Insights into Potential Pitfalls and Drawbacks, Empowering You to Make Informed Decisions Regarding Your Business's Financial Management.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-btn">
                <button className="blue-btn">See All</button>
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
            className="card-list py-4"
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