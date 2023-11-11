import React from 'react'
import "./ServicesTextContent.css"

function ServicesTextContent(props) {
  return (
    <div className='servicesText-container py-4' style={{backgroundColor: props.bgColor}}>
        <div className='container'>
            <div className={`row d-flex ${props.shiftRow ? "flex-row-reverse" : ""} align-items-center justify-content-center`}>
                <div className='col-md-6'>
                    <div className='text-content d-flex flex-column align-items-start justify-content-center gap-lg-4 h-100'>
                        <h3>{props.heading}</h3>
                        <p>{props.content}</p>
                        <button className="blue-btn">Get Consultation</button>
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