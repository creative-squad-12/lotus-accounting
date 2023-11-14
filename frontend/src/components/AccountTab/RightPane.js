import React from 'react'

function RightPane(props) {
  return (
    <div className='right-pane-container'>
        <img src={props.img} className='img-fluid'/>
        <h3 className='my-2 mt-4 body-heading'>{props.heading}</h3>
        <p className='body-paragraph'>{props.content}</p>
    </div>
  )
}

export default RightPane