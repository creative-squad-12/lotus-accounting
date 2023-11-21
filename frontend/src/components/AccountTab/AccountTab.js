import React, { useState } from 'react';
import './AccountTab.css'; 
import RightPane from './RightPane';


const AccountTab = (props)=>{
    const [selected, setSelected] = useState(1);

    const findObjectById = (id) => {
        if(props.tabContent)
        {
            return props.tabContent.find(item => item.id === id);
        }
    };
    const panel = findObjectById(selected)

    return(
        <div className='account-tab-container standard-margin-space'>
            <div className='container'>
                <div className='row gy-5'>
                    <div className='col-md-6'>
                        {props.tabContent.map((ele)=>{
                            return(<>
                                <div className={`left-tab-content py-3`} onClick={()=>{setSelected(ele.id)}}>
                                    <h5 style={ele.id == selected ? {color : "#283285"} :{color:"#959595"}}>{ele.title}</h5>
                                <div className='line-seprator'></div>
                                </div>
                            </>)
                        })}
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        {
                            <RightPane heading={panel.heading} img={panel.img} content={panel.content} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AccountTab