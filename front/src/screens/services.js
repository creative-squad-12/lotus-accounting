import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import ServicesTextContent from '../components/ServicesTextContent/ServicesTextContent'

function services() {
  return (
    <>
        <CommonBanner
         subHeading="LOTUS ACCOUNTING"
         Heading="OUR SERVICES"
         Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
         btnText=""
         bgImg="/images/creative/services-bg.jpg"
         btn={false}
        />

        <ServicesTextContent
            heading={"ACCOUNTING BOOK KEEPING"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-1.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Personal & Corporate Tax"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-2.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
        <ServicesTextContent
            heading={"Notice to Reader"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-3.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Payroll Services"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-4.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
        <ServicesTextContent
            heading={"Financial Statements & Analysis"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-5.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Budgeting & Forecasting"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-6.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
        <ServicesTextContent
            heading={"Business Plan & Cash Flow"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-7.png'}
            shiftRow={false}
            bgColor={"#ffffff"}
        />
        <ServicesTextContent
            heading={"Business Incorporation"}
            content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            img={'/images/creative/services-8.png'}
            shiftRow={true}
            bgColor={"#F8F8F8"}
        />
        
        <Blog/>
        <TestimonialForm/>
    </>
  )
}

export default services