import React from 'react'
import "./CompanySupport.css"

function CompanySupport() {
  return (
    <div className='companySupport-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='text-content d-flex flex-column align-items-start justify-content-center gap-4'>
                        <h3>CompanySupport</h3>
                        <h6>"No matter how small your business, Lotus Accounting can help you grow"</h6>
                        <p>Lotus Accounting is a chartered professional accounting firm (CPA). The ‘Chartered’ title is recognized around the world as a professional designation indicating the highest levels of technical expertise</p>
                        <ul>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Professionally qualified</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Undertake mandatory professional development</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Bound by a code of ethics and professional standards</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Required to have professional indemnity insurance</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Required to have a complaints procedure in place</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Subject to quality reviews of their professional practice</p></li>
                            <li className='d-flex gap-4 my-2 align-items-center'><img src='/images/icons/tick.svg' /><p className='m-0'>Regulated by their professional body</p></li> 
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