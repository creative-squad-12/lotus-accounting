import React from 'react'
import DropDown from './DropDown/DropDown'

function RightPane(props) {
  return (
    <div className='right-pane-container'>
        <img src={props.img} className='img-fluid tab-img'/>
        <h3 className='my-2 mt-4 body-heading'>{props.heading}</h3>
        <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages۔</p>

        <div className='boxed-text my-4'>
          <p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        <h4 className='tab-title'>WHAT WE DO</h4>
        <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

        <p className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></p>
        <p className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></p>
        <p className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></p>
        <p className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></p>
           
        <h4 className='tab-title'>RESEARCH BEYOND THE BUSINESS PLAN</h4>
        <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.Lorem Ipsum is simply dummy text of the printing.</p>

        <DropDown/>
    </div>
  )
}

export default RightPane