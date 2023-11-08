import React from 'react'
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"
import Footer from "../components/Footer/Footer"
import DiscoverServices from "../components/DiscoverServices/DiscoverServices"
import Header from "../components/Header/Header"
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'

function home() {
  return (
    <>
      {/* <Header/> */}
      <CommonBanner
        Heading="LOTUS ACCOUNTING"
        HighlightedSpan="WELCOME TO"
        Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
        btnText="Get Consultation"
        bgImg="/images/creative/Hero.jpg"
        btn="true"
      />
      <WhatWeDo/>
      <DiscoverServices/>
      <TestimonialForm/>
      <Footer/>
    </>
  )
}

export default home