import React from 'react'
import DropDown from './DropDown/DropDown'

function RightPane(props) {

  const paragraphs = props.content.split('\n').map((paragraph, index) => <p key={index} className='body-paragraph'>{paragraph}</p>);

  return (
    <div className='right-pane-container'>
        <img src={props.img} className='img-fluid tab-img'/>
        <h3 className='my-2 mt-4 body-heading'>{props.heading}</h3>
        {paragraphs}
    </div>
  )
}

export default RightPane