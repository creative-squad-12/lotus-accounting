import "./Footer.css"
import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate = useNavigate()

  return (
    <div className="footer-container">

        {/* newsletter Upper section */}
        <div className="upper-newsletter-container container">
            <div className="text-container">
                <div className="newsletter-logo">
                    <img  src="/images/icons/newslater.png" alt="" />
                </div>
                <div className="text-content">
                    <h3>Subscribe to Lotus Accounting</h3>
                    <p>Enter your email to stay informed with the updates regarding tax and accounting services</p>
                </div>
            </div>
            <div className="newsletter-main-form">
                <div className="newsletter-form">
                    <input type="text" placeholder="Enter your email" />
                    <button><span className="subscribe-btn-text">Subscribe</span> <img src="/images/icons/Icon-feather-bell.svg" alt="" /></button>
                </div>
            </div>
        </div>

        {/* div for border lining */}
        <div className="line-seprator container"></div>

        {/* middle section */}

        <div className="middle-links-container container">
            <div className="left">
                <img src="images/icons/logo.png" alt="" onClick={()=>{navigate("/home")}} style={{cursor:"pointer"}}/>
                <p className="body-paragraph mt-4" style={{color : "#FFFFFF",fontSize:".7rem"}}>A full-service bookkeeping, accounting, and tax firm dedicated to delivering tailored and superior financial solutions.</p>
            </div>
            <div className="right">
                <ul className="right-upper flex-column flex-sm-row text-center gap-md-4 gap-3 justify-content-md-between justify-content-center">
                <li onClick={()=>{navigate("/home")}}>Home</li>
                    <li onClick={()=>{navigate("/about")}}>About</li>
                    <li onClick={()=>{navigate("/services")}}>CONSULTATION SERVICES</li>
                    <li onClick={()=>{navigate("/news")}}>Blogs & News</li>
                    <li onClick={()=>{navigate("/contact")}}>Contact</li>
                </ul>
                <ul className="right-bottom d-flex flex-column flex-lg-row align-items-center  align-items-md-start align-items-lg-center justify-content-lg-start justify-content-center px-md-0 px-2 py-lg-0 py-3">
                    <li>
                        <img src="images/icons/footer-phone.svg" alt="" />
                        <a href="tel:+14169042013">+14169042013</a>
                    </li>
                    <li>
                        <img src="images/icons/footer-mail.svg" alt="" />
                        <a href="#">info@lotusaccounting.ca</a>
                    </li>
                    <li>
                        <img src="images/icons/footer-location.svg" alt="" />
                        <a href="#">Suite 304-305 Milner Ave. Toronto, ON M1B 3V4</a>
                    </li>
                </ul>
                <ul className="lower-link-list justify-content-md-start justify-content-center pl-0">
                    <li><img src="images/icons/Rectangle-1401.png" alt="" /></li>
                    <li><img src="images/icons/Rectangle-1402.png" alt="" /></li>
                    <li><img src="images/icons/Rectangle-1403.png" alt="" /></li>
                    <li><img src="images/icons/Rectangle-1404.png" alt="" /></li>
                </ul>
            </div>
        </div>

        {/* Lower sections */}

        <div className="lower-container ">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
                <small>Made With ❤️ By <a href="https://www.creativesquad.ca/" target="blank">Creative Squad</a></small>
                <small>© Copyright 2023 Lotus accounting Services Inc - All Rights Reserved</small>   
            </div>
        </div>
        
    </div>
  )
}

export default Footer