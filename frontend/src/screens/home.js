import React from 'react'
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"
import DiscoverServices from "../components/DiscoverServices/DiscoverServices"
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import Blog from "../components/CardBlog/CardBlog"
import FinancialDropdown from '../components/FinancialDropdown/FinancialDropdown'
import PartnerCompanies from '../components/PartnerCompanies/PartnerCompanies'

function home() {
  return (
    <>
      <CommonBanner
        subHeading="Accounting & bookkeeping"
        Heading="Lotus Accounting"
        Paragraph="Gain financial confidence with our expert tax and accounting services. Whether you are managing a small business or starting a new company, we guarantee that your finances will be optimized to work in your favor."
        btnText="Get Consultation"
        bgImg=""
        bgVideo={true}
        btn={true}
      />
      <WhatWeDo/>
      <FinancialDropdown/>
      <DiscoverServices/>
      <PartnerCompanies/>
      <Blog/>
      <TestimonialForm PartnerCompaniesSection={false}/>
    </>
  )
}

export default home