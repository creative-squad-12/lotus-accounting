import React from 'react'
import "./WhatWeDo.css"

function WhatWeDo() {
  return (
    <div className='what-we-do-container d-flex flex-column justify-content-center align-items-center w-75 mx-auto standard-margin-space py-5'>
        <h5 className='sub-heading'>WHAT WE DO</h5>
        <h2 className='body-heading text-center'>LOTUS ACCOUNTING</h2>
        <p className='text-center body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <button className='about-btn'>About Us</button>
    </div>
  )
}

export default WhatWeDo