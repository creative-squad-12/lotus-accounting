import React from 'react'
import "./CompanySupport.css"

function CompanySupport() {
  return (
    <div className='companySupport-container standard-margin-space my-5'>
        <div className='container mt-5'>
            <div className='row gy-4'>
                <div className='col-md-6'>
                    <div className='text-content d-flex flex-column align-items-start justify-content-center gap-4'>
                        <h3 className='body-heading mb-0' style={{color:"#283285"}}>Profitable Partnerships Start with Prudent Accounting</h3>
                        <h6>"Trust Your Numbers to Us for Expert Tax and Accounting Services"</h6>
                        <p className='body-paragraph'>Lotus Accounting stands as a Chartered Professional Accounting firm (CPA), a globally recognized designation symbolizing top-tier technical expertise and ethical conduct. CPAs proudly showcase the 'CPA' designation after their name. Consider these compelling reasons for selecting a CPA as your trusted professional advisor:</p>
                        <ul className='px-0'>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Professionally qualified</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Undertake mandatory professional development</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Bound by a code of ethics and professional standards</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Required to have professional indemnity insurance</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Required to have a complaints procedure in place</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Subject to quality reviews of their professional practice</p></li>
                            <li className='d-flex gap-5 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Regulated by their professional body</p></li> 
                        </ul>
                        <button className="blue-btn">Get Consultation</button>

                    </div>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img src='/images/creative/companySupport-img.png' className='img-fluid'/>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default CompanySupport