import React from 'react'
import "./AboutIdeas.css"

function AboutIdeas() {
  return (
    <div className='aboutIdeas-container standard-margin-space py-5'>
        <div className='container'>
            <div className='row gy-3 gap-5'>
                <div className='col-md-5'>
                    <h2 className='text-main-heading'>Sculpting ideas into a lasting effect & edifying users to influence the world for the past 15 years.</h2>
                    <p className='body-paragraph'>Lotus Accounting is a chartered professional accounting firm (CPA). The ‘Chartered’ title is recognized around the world as a professional designation indicating the highest levels of technical expertise</p>
                </div>
                <div className='col-md-6'> 
                    <div className='d-sm-flex gap-4 gy-1'>
                        <div className='text-container'>
                            <h4 className='text-sub-heading'>OUR AIMS</h4>
                            <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='text-container'>
                            <h4 className='text-sub-heading'>OUR GOALS</h4>
                            <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div> 
                    <h4 className='text-sub-heading mt-2'>VALUES</h4>
                    <p className='body-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutIdeas