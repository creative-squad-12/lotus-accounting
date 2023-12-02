import React from 'react'
import "./AboutIdeas.css"

function AboutIdeas() {
  return (
    <div className='aboutIdeas-container standard-margin-space py-5'>
        <div className='container'>
            <div className='row gy-3 gap-5'>
                <div className='col-md-5'>
                    <h2 className='text-main-heading'>Providing insightful financial advice that empowers businesses to make informed decisions for short-term profits and long-term sustainability.</h2>
                    <p className='body-paragraph'>We aim to streamline your business processes through efficient payroll and bookkeeping services, allowing you to focus on your core operations while we handle the financial intricacies.</p>
                </div>
                <div className='col-md-6'> 
                    <div className='d-sm-flex gap-4 gy-1'>
                        <div className='text-container'>
                            <h4 className='text-sub-heading'>OUR AIMS</h4>
                            <p className='body-paragraph'>At Lotus Accounting, our primary aim is to be the trusted partner that businesses in Toronto, Canada, turn to for comprehensive and superior accounting, bookkeeping, and tax services. We strive to offer tailored solutions that address the unique challenges of complex financial landscapes.</p>
                        </div>
                        <div className='text-container'>
                            <h4 className='text-sub-heading'>OUR GOALS</h4>
                            <p className='body-paragraph'>To offer customized accounting and tax services that cater to the specific needs of entrepreneurs, start-ups, corporations, and individuals, ensuring maximum value for each client.</p>
                        </div>
                    </div> 
                    <h4 className='text-sub-heading mt-2'>VALUES</h4>
                    <p className='body-paragraph'>We believe in conducting our business with the highest levels of integrity and transparency. Trust is the foundation of our relationships, and we ensure openness in all our dealings.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutIdeas