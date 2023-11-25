import React,{useState} from 'react'
import"./FinancialDropdown.css"

function DropDownBox(props) {
    const [dropOpen , setDropOpen] = useState(false)
  return (
    <div
      className={`dropdown-box py-4`}
      onClick={() => {
        setDropOpen((prev) => {
          return !prev;
        });
      }}
      style={dropOpen ? {animation:"borderColor .3s ease-in-out",borderLeftColor:"#283285"}:{borderLeftColor:"#E8E8E8"}}
    >
      <div className="box-head d-flex align-items-center justify-content-between">
        <h5 className="title mb-0" style={dropOpen ? {color:"#283285"}:{}}>{props.title}</h5>
        <img src='/images/icons/dropdown-arrow.png' className={dropOpen ? "rotate-icon":"rotate-back" }/>
      </div>
      <div className="box-content mt-2" style={dropOpen?{animation:"bottomBoxOpen .6s ease-in-out",display:"block"}:{animation:"bottomBoxClose .3s ease-in-out",display:"none"}}>
          <p>{props.content}</p>
      </div>
    </div>
  );
}

export default DropDownBox