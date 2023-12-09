import React from 'react'
import "./AboutIdeas.css"

function AboutIdeas() {
  return (
    <div className='aboutIdeas-container standard-padding-space'>
        <div className='container'>
            <div className='row gy-4'>
                <div className='col-md-12 text-center'>
                    <h2 className='text-main-heading w-75 mx-auto' style={{textTransform:"capitalize"}}>Providing insightful financial advice that empowers businesses to make Informed Decisions.</h2>
                    <p className='body-paragraph'>We aim to streamline your business processes through efficient payroll and bookkeeping services, allowing you to focus on your core operations while we handle the financial intricacies.</p>
                </div>
                <div className='col-md-12'> 
                    
                    <div className='row'>
                        <div className='col-lg-4 h-auto mx-auto py-4 px-2 col-md-6 text-center d-flex flex-column align-items-center gap-4'>
                            <div className='text-card d-flex flex-column align-items-center justify-content-start'>
                                <h3 className='text-sub-heading my-2'>OUR AIMS</h3>
                                <p className='body-paragraph m-0'>At Lotus Accounting, our primary aim is to be the trusted partner that businesses in Toronto, Canada, turn to for comprehensive and superior accounting, bookkeeping, and tax services. We strive to offer tailored solutions that address the unique challenges of complex financial landscapes.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 h-auto mx-auto py-4 px-2 col-md-6 text-center d-flex flex-column align-items-center gap-4'>
                            <div className='text-card d-flex flex-column align-items-center justify-content-start'>
                                <h3 className='text-sub-heading my-2'>OUR GOALS</h3>
                                <p className='body-paragraph m-0'>To offer customized accounting and tax services that cater to the specific needs of entrepreneurs, start-ups, corporations, and individuals, ensuring maximum value for each client.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 h-auto mx-auto py-4 px-2 col-md-6 text-center d-flex flex-column align-items-center gap-4'>
                            <div className='text-card d-flex flex-column align-items-center justify-content-start'>
                                <h3 className='text-sub-heading my-2'>OUR VALUES</h3>
                                <p className='body-paragraph m-0'>We believe in conducting our business with the highest levels of integrity and transparency. Trust is the foundation of our relationships, and we ensure openness in all our dealings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutIdeas