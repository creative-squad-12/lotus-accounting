import React from 'react'
import "./TestimonialForm.css"
import Testimonials from './Testimonials/Testimonials'
import ContactForm from "./Contact Form/Contactform"

function TestimonialForm() {
  return (
    <div className='testimonial-form-container' style={{ backgroundImage: `url(/images/creative/contact-form-bg.jpg)` }}>
        <Testimonials/>
        <ContactForm />
    </div>
  )
}

export default TestimonialForm