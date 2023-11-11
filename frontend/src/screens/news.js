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
          Heading="LATEST NEWS"
          Paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
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