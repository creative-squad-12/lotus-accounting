import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <div className={`header_lotus`}>
      <div className="header-wrapper ">
        <nav className="navbar d-md-flex flex-md-row d-block">
          <nav className="navbar-container px-4 py-2">
            <div className="nav-elements d-flex justify-content-between align-items-center px-lg-2">
              <input className="d-none" type="checkbox" id="menu-toggle" />
              <img src="/images/icons/logo.png" className="nav-logo" />
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
                  <li>
                    <Link to={"/services"} className="nav-links">
                      CONSULTATION SERVICES
                    </Link>
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
                <button className="blue-btn">
                  Get Consultation
                </button>
              </div>
            </div>
          </nav>

          {/* Dropdown in responsive mode */}
          <nav className="responsive-popup-menu w-100">
            <ul
              className="resp-nav-list d-lg-none w-100 gap-4 hs-dropdown [--trigger:hover] pl-4 py-3"
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
                <Link to={"/services"} className="nav-links">
                  CONSULTATION SERVICES
                </Link>
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
              <li>
                <div className="nav-buttton mt-4 flex-wrap d-flex gap-4 extras-btns">
                  <button className="blue-btn">
                    Get Consultation
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Header; 