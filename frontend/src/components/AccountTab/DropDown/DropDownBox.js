import React,{useState} from 'react'

function DropDownBox(props) {
    const [dropOpen , setDropOpen] = useState(false)
  return (
    <div
      className={`dropdown-box py-3 my-3`}
      onClick={() => {
        setDropOpen((prev) => {
          return !prev;
        });
      }}
      style={dropOpen?{backgroundColor:"white"}:{background:"transparent"}}
    >
      <div className="box-head d-flex align-items-center justify-content-between">
        <h5 className="title mb-0" style={dropOpen ? {color:"#283285"}:{}}>{props.title}</h5>
        <img src={dropOpen ? '/images/icons/sub-icon.png' :'/images/icons/add-icon.png'} style={{width:"35px",height:"35px"}}/>
      </div>
      <div className="box-content mt-3" style={dropOpen?{animation:"bottomBoxOpen .6s ease-in-out",display:"block"}:{animation:"bottomBoxClose .3s ease-in-out",display:"none"}}>
          <p>{props.content}</p>
      </div>
    </div>
  );
}

export default DropDownBox