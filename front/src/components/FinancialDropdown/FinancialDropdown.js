import React from 'react'
import "./FinancialDropdown.css"
import DropDownBox from './DropDownBox'


function FinancialDropdown() {
    
  return (
    <div className='financial-dropdown-container'>
        <div className='conatiner'>
            <div className='row w-100 mx-auto'>
                <div className='col-md-6'>
                    <div className='text-content mt-5'>
                        <h5>LOREM IPSUM</h5>
                        <h3>SMART FINANCIAL SERVICES FOR FIRMS AND INDIVIDUALS</h3>
                        <div className='dropdown-container'>
                            <DropDownBox title="Taxtation" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                            <DropDownBox title="Business" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
                            <DropDownBox title="Consulting" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" />
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