import React from 'react'
import "./ServicesTextContent.css"
import { useNavigate } from 'react-router-dom'

function ServicesTextContent(props) {
    const navigate = useNavigate()
  return (
    <div className='servicesText-container standard-padding-space my-4' style={{backgroundColor: props.bgColor}}>
        <div className='container'>
            <div className={`row gap-4 gap-md-0 d-flex ${props.shiftRow ? "flex-row-reverse" : ""} align-items-center justify-content-center `}>
                <div className='col-md-6 '>
                    <div className='text-content d-flex flex-column align-items-start justify-content-center gap-lg-4 h-100'>
                        <h3 className='body-heading'>{props.heading}</h3>
                        <p className='body-paragraph'>{props.content}</p>
                        <button className="blue-btn" onClick={()=>{navigate("/contact")}}>Get Consultation</button>
                    </div>
                </div>
                <div className='col-md-6 h-100 my-auto'>
                    <img src={props.img} className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesTextContent