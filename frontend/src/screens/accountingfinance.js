import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import AboutIcons from '../components/AboutIcons/AboutIcons'

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
      <AboutIcons/>
      <Blog/>
      <TestimonialForm/>
    </>
  )
}

export default accountingfinance