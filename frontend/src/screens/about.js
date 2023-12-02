import React from 'react'
import CompanySupport from '../components/ComapnySupport/CompanySupport'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import AboutIcons from '../components/AboutIcons/AboutIcons'
import AboutIdeas from '../components/AboutIdeas/AboutIdeas'
import AboutHistory from '../components/AboutHistory/AboutHistory'

function about() {
  return (
    <>
        <CommonBanner
          subHeading="ABOUT US"
          Heading= "WHY LOTUS ACCOUNTING"
          Paragraph="Our dedicated staff at Lotus Accounting comprises Chartered Professional Accountants with accounting degrees, QuickBooks trained and certified to ensure the highest standards of service."
          btnText=""
          bgImg="/images/creative/about-bg.jpg"
          btn={false}
        />
        <CompanySupport/>
        <AboutHistory/>
        <AboutIdeas/>
        <AboutIcons/>
        <Blog/>
        <TestimonialForm/>
    </>
  )
}

export default about