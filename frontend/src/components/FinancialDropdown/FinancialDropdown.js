import React from 'react'
import "./FinancialDropdown.css"
import DropDownBox from './DropDownBox'


function FinancialDropdown() {
    
  return (
    <div className='financial-dropdown-container standard-margin-space '>
        <div className='container'>
            <div className='row w-100 mx-auto gy-4'>
                <div className='col-md-6 '>
                    <div className='text-content mt-5'>
                        <h5 className='sub-heading'>LOREM IPSUM</h5>
                        <h3 className='body-heading'>SMART FINANCIAL SERVICES FOR FIRMS AND INDIVIDUALS</h3>
                        <div className='dropdown-container mt-4'>
                            <DropDownBox title="Taxtation" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                            <div className='line-seprator'></div>
                            <DropDownBox title="Business" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                            <div className='line-seprator'></div>
                            <DropDownBox title="Consulting" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                            <div className='line-seprator'></div>
                            <DropDownBox title="Giving" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img src='/images/creative/services-dropdown.png' className='img-fluid '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialDropdown