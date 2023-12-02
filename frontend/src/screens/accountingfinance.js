import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import AboutIcons from '../components/AboutIcons/AboutIcons'
import AccountTab from '../components/AccountTab/AccountTab'


const tabContent = [
  {
    id : 1,
    title: "ACCOUNTING BOOK KEEPING",
    img:"/images/creative/tab-img.jpg",
    heading: "SMART FINANCIAL SERVICES FOR FIRMS",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U"
  },
  {
    id : 2,
    title: "Personal & Corporate Tax",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 2",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 3,
    title: "Notice to Reader",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 3",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 4,
    title: "Payroll Services",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 4",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 5,
    title: "Financial Statements & Analysis",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 5",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 7,
    title: "Business Plan & Cash Flow",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 7",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 8,
    title: "Business Incorporation",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 8",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    id : 6,
    title: "Budgeting & Forecasting",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 6",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
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