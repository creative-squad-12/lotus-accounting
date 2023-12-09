import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'

function contact() {
  return (
    <>
        <CommonBanner
          subHeading=""
          Heading="Contact Lotus Accounting:"
          spanHeading=" Your Partner in Financial Success"
          Paragraph="Our team of talented and experienced Chartered Professional Accountants is here to assist you with complex accounting and tax matters."
          btnText=""
          bgImg="/images/creative/contact-bg.jpg"
          btn={false}
          socialLinks={true}
          serviceForm={true}
        />
        <TestimonialForm PartnerCompaniesSection={false}/>
    </>
  )
}

export default contact