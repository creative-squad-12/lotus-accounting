import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">

        {/* newsletter Upper section */}
        <div className="upper-newsletter-container">
            <div className="text-container">
                <div className="newsletter-logo">
                    <img  src="/images/icons/newslater.png" alt="" />
                </div>
                <div className="text-content">
                    <h3>Subscribe to Lotus Accounting</h3>
                    <p>Enter your email to stay informed with the updates regarding tax and accounting services</p>
                </div>
            </div>
            <div className="newsletter-form">
                <input type="text" placeholder="Enter your email" />
                <button><span className="subscribe-btn-text">Subscribe</span> <img src="/images/icons/Icon-feather-bell.svg" alt="" /></button>
            </div>
        </div>

        {/* div for border lining */}
        <div className="line-seprator"></div>

        {/* middle section */}

        <div className="middle-links-container">
            <div className="left">
                <img src="images/icons/logo.png" alt="" />
                <p className="body-paragraph mt-4" style={{color : "#FFFFFF",fontSize:".7rem"}}>A full-service bookkeeping, accounting, and tax firm dedicated to delivering tailored and superior financial solutions.</p>
            </div>
            <div className="right">
                <ul className="right-upper">
                    <li>Terms and Conditions</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Blogs & News</li>
                    <li>Faqs</li>
                </ul>
                <ul className="right-bottom">
                    <li>
                        <img src="images/icons/Group-1216.svg" alt="" />
                        <a href="#">416-662-8067</a>
                    </li>
                    <li>
                        <img src="images/icons/Group-1217.svg" alt="" />
                        <a href="#">+text@gmail.com</a>
                    </li>
                    <li>
                        <img src="images/icons/Group-1218.svg" alt="" />
                        <a href="#">location</a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Lower sections */}

        <div className="lower-container">
            <small>© Copyright 2021 Lotus accounting Services Inc - All Rights Reserved</small>
            <ul className="lower-link-list">
                <li><img src="images/icons/Rectangle-1401.png" alt="" /></li>
                <li><img src="images/icons/Rectangle-1402.png" alt="" /></li>
                <li><img src="images/icons/Rectangle-1403.png" alt="" /></li>
                <li><img src="images/icons/Rectangle-1404.png" alt="" /></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer