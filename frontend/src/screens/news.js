import React from 'react'
import CommonBanner from "../components/Common Banner Component/HeroBanner"
import TestimonialForm from '../components/TestimonialForm/TestimonialForm'
import NewsList from '../components/NewsList/NewsList'
import LatestNews from "../components/LatestNews/LatestNews"

function news() {
  return (
    <>
      <CommonBanner
          subHeading=""
          Heading="Lotus accounting knowledge and insights"
          Paragraph="At Lotus Accounting, we believe that knowledge is the key to financial empowerment. Join us on this blog to gain the insights you need for a prosperous financial future."
          btnText=""
          bgImg="/images/creative/news-bg.jpg"
          btn={false}
      />
      <LatestNews/>
      <NewsList/>
      <TestimonialForm/>
    </>
  )
}

export default news