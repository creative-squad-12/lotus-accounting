import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import ServicesTextContent from '../components/ServicesTextContent/ServicesTextContent'
import AboutHistory from '../components/AboutHistory/AboutHistory'

function services() {
  return (
    <>
        <CommonBanner
         subHeading="LOTUS ACCOUNTING"
         Heading="OUR SERVICES"
         Paragraph="Our expert team is dedicated to providing comprehensive consultation services tailored to meet the unique needs of your business. Explore the range of services we offer:"
         btnText=""
         bgImg="/images/creative/services-bg.jpg"
         btn={false}
        />

        <ServicesTextContent
            heading={"Financial Statement Analysis"}
            content={"Explore the fundamental layers of your business's financial well-being through Lotus Accounting's Financial Statement Analysis service. Our seasoned professionals conduct a meticulous examination, unveiling key insights from your statements. Identifying strengths and pinpointing areas for improvement, we equip you with a clear understanding, empowering you to make informed decisions for the sustained success of your enterprise."}
            img={'/images/creative/services-1.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Budgeting & Forecasting"}
            content={"Propel your business towards success with precision through Lotus Accounting's Budgeting & Forecasting consultation services. We empower you to craft realistic budgets and forecasts, granting you control over your financial future. By setting achievable goals and proactively managing resources, our guidance ensures strategic financial planning that aligns with your business objectives, fostering sustained growth and stability."}
            img={'/images/creative/services-2.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
        <AboutHistory/>
        <ServicesTextContent
            heading={"Business Plan & Cash Flow Projections"}
            content={"Create a strategic roadmap with Lotus Accounting's Business Plan & Cash Flow Projections service. Our experts collaborate with you to craft comprehensive business plans and accurate cash flow projections. Whether you're launching a new venture or expanding an existing one, we facilitate the articulation of your goals, ensuring a financially sound and prosperous future for your business."}
            img={'/images/creative/services-3.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Business Incorporation & Registration"}
            content={"Navigate the complex stages of business incorporation with assurance, benefiting from the expert guidance provided by Lotus Accounting. Our experts provide comprehensive assistance, addressing both legal and financial aspects of establishing your business entity. From selecting the optimal structure to fulfilling registration requirements, we ensure a seamless process. Trust us to lay the foundation for your business success through meticulous incorporation and registration services."}
            img={'/images/creative/services-4.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
       
        <Blog/>
        <TestimonialForm/>
    </>
  )
}

export default services