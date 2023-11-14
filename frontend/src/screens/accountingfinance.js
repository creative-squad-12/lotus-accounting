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
    content:"content for 2"
  },
  {
    id : 3,
    title: "Notice to Reader",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 3",
    content:"content for 3"
  },
  {
    id : 4,
    title: "Payroll Services",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 4",
    content:"content for 4"
  },
  {
    id : 5,
    title: "Financial Statements & Analysis",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 5",
    content:"content for 5"
  },
  {
    id : 7,
    title: "Business Plan & Cash Flow",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 7",
    content:"content for 7"
  },
  {
    id : 8,
    title: "Business Incorporation",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 8",
    content:"content for 8"
  },
  {
    id : 6,
    title: "Budgeting & Forecasting",
    img:"/images/creative/tab-img.jpg",
    heading: "Title heading for 6",
    content:"content for 6"
  },
];



function accountingfinance() {
  return (
    <>
      <CommonBanner
        subHeading=""
        Heading="ACCOUNTING & FINANCE"
        Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
        btnText=""
        bgImg="/images/creative/services-inner-bg.jpg"
        btn={false}
      />
      <AboutIcons />
      <AccountTab tabContent={tabContent}/>
      <Blog/>
      <TestimonialForm/>
    </>
  )
}

export default accountingfinance