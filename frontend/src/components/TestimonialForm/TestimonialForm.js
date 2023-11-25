import React from 'react'
import "./TestimonialForm.css"
import Testimonials from './Testimonials/Testimonials'
import PartnerCompanies from './PartnerCompanies/PartnerCompanies'

function TestimonialForm() {
  return (
    <div className='testimonial-form-container'>
        <PartnerCompanies/>
        <Testimonials/>
    </div>
  )
}

export default TestimonialForm