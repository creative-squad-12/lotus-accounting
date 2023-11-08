import React from 'react'
import "./TestimonialForm.css"
import Testimonials from './Testimonials/Testimonials'
import ContactForm from "./Contact Form/Contactform"

function TestimonialForm() {
  return (
    <div className='testimonial-form-container'>
        <Testimonials/>
        <div className='testimonial-contact-form'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default TestimonialForm