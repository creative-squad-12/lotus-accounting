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
          Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
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