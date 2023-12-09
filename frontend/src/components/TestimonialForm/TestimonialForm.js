import React from 'react'
import "./TestimonialForm.css"
import Testimonials from './Testimonials/Testimonials'
import PartnerCompanies from '../PartnerCompanies/PartnerCompanies'

function TestimonialForm({
  PartnerCompaniesSection=true
}) {
  return (
    <div className='testimonial-form-container'>
        {PartnerCompaniesSection && <PartnerCompanies/>}
        <Testimonials/>
    </div>
  )
}

export default TestimonialForm