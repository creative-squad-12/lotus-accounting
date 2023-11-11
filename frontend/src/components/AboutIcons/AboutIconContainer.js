import React from 'react'

function AboutIconContainer(props) {
  return (
    <div className='icon-container'>
        <img src={props.img} className='icon-container-img'/>
        <h4>{props.rating}</h4>
        <p>{props.title}</p>
    </div>
  )
}

export default AboutIconContainer