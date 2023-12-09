import "./DiscoverServices.css";
import { useState } from "react";

const servicesData = [
  {
    icon:"/images/icons/Group-1330.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1331.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1332.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1333.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1334.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1335.png",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1336.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
  {
    icon:"/images/icons/Group-1337.svg",
    title:"Personal & Corporate Tax",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
  },
]


function WhyChooseUs() {
  const [hoverEffect,setHoverEffect] = useState(-1)
  return (
    <div className="discover-container standard-padding-space">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 text-center my-5 text-content">
            <h3 className="body-heading">DISCOVER OUR SERVICES</h3>
            <p className="body-paragraph mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="col-sm-12">
            <div className="container mt-4">
              <div className="row gy-4">
                
                  {
                    servicesData.map((ele , ind)=>{
                        return(
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="discover-card-box mx-auto" onMouseOver={()=>{setHoverEffect(ind)}} onMouseLeave={()=>{setHoverEffect(-1)}}>
                              <div className="card-icon">
                                  <img src={ele.icon} />
                              </div>
                              <h5 className="card-title" style={hoverEffect == ind?{color:"white"}:{color:"grey"}}>{ele.title}</h5>
                              <p className="card-content">
                                {ele.content}
                              </p>
                              <a style={{textTransform : "uppercase"}}>learn more</a>
                            </div>
                          </div>
                        )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
