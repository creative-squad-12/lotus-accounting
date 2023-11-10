import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'

function contact() {
  return (
    <>
        <CommonBanner
          subHeading=""
          Heading="Need help with OUR SERVICES?"
          spanHeading=" Let’s talk!"
          Paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
          btnText=""
          bgImg="/images/creative/contact-bg.jpg"
          btn={false}
          socialLinks={true}
          serviceForm={true}
        />
        <TestimonialForm/>
    </>
  )
}

export default contact