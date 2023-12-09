import React from 'react'
import "./FinancialDropdown.css"
import DropDownBox from './DropDownBox'


const dropDownData = [
    {title:"Tax",content:"Understanding the complexities of tax regulations can be challen. However, our team of tax experts is thoroughly familiar with the latest laws, assisting you in maximizing deductions, reducing liabilities, and ensuring confident compliance."},
    {title:"Accounting",content:"Efficient and accurate financial management is the backbone of any successful business. Our dedicated team ensures that your books are in order, providing you with the financial clarity you need to make informed decisions."},          
    {title:"Business",content:"Every business is unique, and so are its financial needs. Our custom payroll and bookkeeping services are tailored to fit your company perfectly, allowing you to focus on what you do best."},          
    {title:"Consulting",content:"Gain a competitive edge with our consultation services. From financial statement analysis to business plan and cash flow projections, our experts provide valuable insights to guide your business towards sustained growth."},
    {title:"Accounting & Bookkeeping",content:"Efficiently manage your finances with our dedicated accounting and bookkeeping services. We ensure accuracy and organization, allowing you to focus on growing your business."},
    {title:"Personal & Corporate Tax",content:"Navigate tax complexities effortlessly. Our experts stay updated on the latest laws, optimizing deductions, minimizing liabilities, and ensuring confident compliance for individuals and corporations."},
    {title:"Notice to Reader",content:"Trust us for reliable Notice to Reader services. Our meticulous approach ensures accurate financial statements, providing a solid foundation for informed decision-making and regulatory compliance."},
    {title:"Payroll Services",content:"Streamline your payroll processes with our comprehensive services. From timely payments to compliance, we handle it all, allowing you to prioritize your core business activities."},
    {title:"Financial Statements & Analysis",content:"Gain valuable insights into your business's financial health. Our experts prepare meticulous financial statements and provide in-depth analysis to guide strategic decision-making for sustainable growth."},
    {title:"Budgeting & Forecasting",content:"Plan for success with our budgeting and forecasting services. We help you anticipate financial trends, set realistic goals, and navigate your business towards long-term prosperity."},
    {title:"Business Plan & Cash Flow",content:"Craft a robust business plan and manage cash flow effectively. Our expertise ensures strategic planning for sustained growth and financial stability, securing your business's future success."},
    {title:"Business Incorporation",content:"Navigate the incorporation process seamlessly. From legal requirements to strategic planning, we guide you step-by-step, ensuring a smooth and compliant business incorporation tailored to your needs."},
]

function FinancialDropdown() {
    
  return (
    <div className='financial-dropdown-container standard-margin-space '>
        <div className='container'>
            <div className='row w-100 d-flex align-items-center mx-auto gy-4 mt-4'>
                <div className='col-md-6 '>
                    <div className='text-content'>
                        <h5 className='sub-heading'>Lotus Accounting</h5>
                        <h3 className='body-heading'>Proactive Tax and Accounting Solutions</h3>
                        <div className='dropdown-container mt-4'>
                            {
                                dropDownData.map((ele,ind)=>{
                                    return (
                                        <>
                                            <DropDownBox title={ele.title} content={ele.content} />
                                            {ind !== (dropDownData.length - 1) && <div className='line-seprator'></div>}   
                                        </>
                                    )

                                })
                            }
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