import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import AboutIcons from '../components/AboutIcons/AboutIcons'
import AccountTab from '../components/AccountTab/AccountTab'


const tabContent = [
  {
    id : 1,
    title: "Accounting & Tax Services Consultation",
    img:"/images/creative/tab-img.jpg",
    heading: "Accounting & Tax Services Consultation",
    content:"Navigating the intricate landscape of accounting and tax services is essential for any business. Our experts offer in-depth consultations to understand your unique financial needs, providing tailored solutions that align with your business goals. Whether you're seeking assistance with financial statement analysis or strategic tax planning, we have you covered."
  },
  {
    id : 2,
    title: "Accounting & Bookkeeping Consultation",
    img:"/images/creative/tab-img.jpg",
    heading: "Accounting & Bookkeeping Consultation",
    content:"Efficient and accurate bookkeeping is the backbone of financial success. Our consultation services in accounting and bookkeeping are designed to streamline your processes, enhance accuracy, and ensure compliance. Discover how our experts can customize solutions to meet the specific needs of your business."
  },
  {
    id : 3,
    title: "Personal & Corporate Tax Consultation",
    img:"/images/creative/tab-img.jpg",
    heading: "Personal & Corporate Tax Consultation",
    content:"Tax implications can significantly impact your financial strategy. Our consultation services in personal and corporate tax aim to optimize your tax position, minimize liabilities, and ensure compliance with the latest regulations. Gain insights into strategic tax planning for both individuals and corporations."
  },
  {
    id : 4,
    title: "Notice to Reader Consultation",
    img:"/images/creative/tab-img.jpg",
    heading: "Notice to Reader Consultation",
    content:"Understanding the nuances of Notice to Reader (NTR) statements is crucial for informed decision-making. Our consultation services guide you through the intricacies of NTR, providing clarity and ensuring your financial statements accurately reflect your business's financial position."
  },
  {
    id : 5,
    title: "Payroll Consultation",
    img:"/images/creative/tab-img.jpg",
    heading: "Payroll Consultation",
    content:"Efficient payroll management is vital for the smooth operation of your business. Our payroll consultation services are tailored to your specific needs, ensuring compliance with regulations and delivering streamlined processes. Learn how our expertise can enhance accuracy and save you valuable time."
  },
  
];



function accountingfinance() {
  return (
    <>
      <CommonBanner
        subHeading=""
        Heading="Accounting & Tax"
        Paragraph="Our team of Chartered Professional Accountants is committed to providing you with strategic insights and personalized advice across a spectrum of financial services."
        btnText=""
        bgImg="/images/creative/services-inner-bg.jpg"
        btn={false}
      />
      <AccountTab tabContent={tabContent}/>
      <AboutIcons />
      <Blog/>
      <TestimonialForm/>
    </>
  )
}

export default accountingfinance