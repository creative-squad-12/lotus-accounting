import React, { useState,useRef,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const navigate = useNavigate()
  const clickCountRef = useRef(0);

const onClickService = (e) => {
    e.preventDefault();
    
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setIsDropdownOpen(true);
      } 
      else if (clickCountRef.current === 2) {
        setMenuState(false)
        setIsDropdownOpen(false)
        navigate("/services");
        clickCountRef.current = 0;
      }
  };

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <div className={`header`}>
      <div className="header-wrapper container">
        <nav className="navbar d-md-flex flex-md-row d-block">
          <nav className="navbar-container py-2">
            <div className="nav-elements d-flex justify-content-between align-items-center px-lg-2">
              <input className="d-none" type="checkbox" id="menu-toggle" />
              <img src="/images/icons/logo.png" className="nav-logo" onClick={()=>{navigate("/home")}}/>
              <nav>
                <ul
                  className="nav-list d-lg-flex gap-xl-4 align-items-center d-none main-nav"
                  id="js-menu"
                >
                  <li>
                    <Link to={"/home"} className="nav-links">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"} className="nav-links">
                      ABOUT US
                    </Link>
                  </li>

                  <div className="navigation-dropdown" >
                  <li onMouseEnter={()=>{setIsDropdownOpenDesk(true)}} >

                      <div className="dropdown-trigger d-flex align-items-center">
                          <Link to={"/services"} className="nav-links" onClick={()=>{setIsDropdownOpenDesk(false)}}>CONSULTATION SERVICES</Link>
                          <img src='/images/icons/dropDown.png' className={isDropdownOpenDesk ? "rotate-icon arrow-icon":"rotate-back arrow-icon" }/>
                      </div>
                      <div className={`dropdown-content ${isDropdownOpenDesk ? 'open' : 'none-delay'}`} onMouseEnter={()=>{setIsDropdownOpenDesk(true)}} onMouseLeave={()=>{setIsDropdownOpenDesk(false)}}>
              
                        <Link to={"/home"} className="nav-links" onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0">HOME</p>
                        </Link>
                        <Link to={"/about"} className="nav-links" onClick={()=>{setIsDropdownOpenDesk(false)}}>
                          <p className="mb-0">ABOUT</p>
                        </Link>
                      </div>
                    </li>
                    </div>



                  <li>
                    <Link to={"/accountingfinance"} className="nav-links">
                      ACCOUNTING & TAX SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link to={"/news"} className="nav-links">
                      NEWS
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"} className="nav-links">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </nav>

              <label
                value="menu-toggle"
                onClick={menuClick}
                className="responsive-menu-btn d-lg-none d-inline"
              >
                <img
                  src="/images/icons/icons8-hamburger-menu-50.png"
                  className="img-fluid menu-btn"
                  alt="menu"
                />
              </label>

              <div className="nav-buttton ml-5 d-lg-flex d-none gap-4 extras-btns">
                <button className="blue-btn" onClick={()=>{navigate("/contact")}}>
                  Get Consultation
                </button>
              </div>
            </div>
          </nav>

          {/* Dropdown in responsive mode */}
          <nav className="responsive-popup-menu w-100">
            <div className="py-3 d-lg-none" style={{ display: menuState ? "block" : "none" }}>
            <ul
              className="resp-nav-list d-lg-none w-100 gap-4 hs-dropdown [--trigger:hover] pl-4"
              style={{ display: menuState ? "block" : "none" }}
            >
              <li>
                <Link to={"/home"} className="nav-links">
                  HOME
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-links">
                  ABOUT US
                </Link>
              </li>
               <li>
                <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center" style={{color:"black"}} onClick={onClickService} >
                      <a className="nav-links" >CONSULTATION SERVICES</a>
                      <img src='/images/icons/dropDown.png' className={isDropdownOpen ? "rotate-icon arrow-icon":"rotate-back arrow-icon" } />
                  </div>
                  <div className={`dropdown-content ${isDropdownOpen ? 'open' : 'd-none'}`} style={{top:"85%",left:"0%"}}>
                    
                    <Link to={"/home"} className="nav-links" onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                      <p className="mb-0">HOME</p>
                    </Link>
                    <Link to={"/about"} className="nav-links" onClick={()=>{setIsDropdownOpen(false); setMenuState(false)}}>
                      <p className="mb-0">ABOUT</p>
                    </Link>
                  </div>
                </div>
                </li>
              <li>
                <Link to={"/accountingfinance"} className="nav-links">
                  ACCOUNTING & TAX SERVICES
                </Link>
              </li>
              <li>
                <Link to={"/news"} className="nav-links">
                  NEWS
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-links">
                  CONTACT US
                </Link>
              </li>
            </ul>
            <div className="nav-buttton flex-wrap d-flex gap-4 extras-btns">
              <button className="blue-btn" onClick={()=>{navigate("/contact")}}>
                Get Consultation
              </button>
            </div>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Header; 