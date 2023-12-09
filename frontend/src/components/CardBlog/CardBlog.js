import "./CardBlog.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";
import { useNavigate } from "react-router-dom";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength - 4);
    return text.substring(0, lastSpaceIndex) + '...';
  }
  return text;
}

function CardTestimonial() {

  const navigate = useNavigate()

  const blogData = [
    {cardImg:"./images/creative/blog-card-img.jpg", title:"How to find the right accounting firm in Toronto?" ,content:"Discover Key Factors for Choosing the Right Accounting Firm in Toronto. Gain Insights and Tips for Building a Vital Strategic Partnership for Your Business's Financial Success."},
    {cardImg:"./images/creative/blog-card-img.jpg", title:"The Importance of Accounting Services for Toronto Startups" ,content:"A Crucial Consideration Uncover Unique Considerations and Benefits Linked to Choosing the Right Financial Partner for Your Entrepreneurial Journey."},
    {cardImg:"./images/creative/blog-card-img.jpg", title:"Assessing the Risks: Is DIY Bookkeeping a Worthwhile Venture?" ,content:"Acquire Insights into Potential Pitfalls and Drawbacks, Empowering You to Make Informed Decisions Regarding Your Business's Financial Management."},
    {cardImg:"./images/creative/blog-card-img.jpg", title:"How to find the right accounting firm in Toronto?" ,content:"Discover Key Factors for Choosing the Right Accounting Firm in Toronto. Gain Insights and Tips for Building a Vital Strategic Partnership for Your Business's Financial Success."},
   
  ]

  return (
    <div className='blog-container container standard-padding-space my-4'>
      <div className="blog-upper-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="blog-text-content">
                <p className="sub-heading">BLOGS</p>
                <h3 className="body-heading">Lotus accounting knowledge and insights</h3>   
                <p className="body-paragraph">At Lotus Accounting, we believe that knowledge is the key to financial empowerment. Join us on this blog to gain the insights you need for a prosperous financial future.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-start align-items-center ">
              <div className="blog-btn my-2">
                <button className="blue-btn mt-0" onClick={()=>{navigate("/news")}}>See All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Swiper
            loop={true}
            spaceBetween={50}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 3,
                }
              }}
            className="card-list py-4 mx-0 w-100 px-2"
            >
            {blogData.map((blogData,ind)=>{
              return (<>
                <SwiperSlide key={ind} className="h-100">
                  <CardBox className="h-100" cardImg={blogData.cardImg} title={blogData.title} content={truncateText(blogData.content , 90)}/>
                </SwiperSlide>
              </>)
            })}
            
        </Swiper>
    </div>
  )
}

export default CardTestimonial