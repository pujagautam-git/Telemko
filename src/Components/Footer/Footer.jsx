import React from 'react'
import './Footer.css';
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaHandHoldingHeart, FaStethoscope, FaBriefcase,FaNewspaper,FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaGlobe} from "react-icons/fa"; // For the user icon in the button
const Footer =()=> {
  return (
    <>

 <footer className="footer">
  <div className="footer-grid">
    {/* First Column */}
    <div className="footer-col">
      {/* <div className="footer-box">
        <div className="footer-icon">
          <FaStethoscope className="icon" />
          <span>Find a doctor</span>
          <RiArrowDropRightLine className="line-icon" />
        </div>
        <div className="footer-icon">
          <FaBriefcase className="icon" />
          <span>Explore careers</span>
          <RiArrowDropRightLine className="line-icon" />
        </div>
        <div className="footer-icon">
          <FaNewspaper className="icon" />
          <span>Sign up for free e-newsletters</span>
          <RiArrowDropRightLine className="line-icon" />
        </div>
      </div> */}

      <div className="footer-section">
        <h4  className="footer-title">Solutions <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>GPS Tracking</li>
          <li>Fleet Management</li>
          <li>Asset Management</li>
          <li>Job Scheduling & Dispatch</li>
          <li>Route Optimisation & Planning</li>
          <li>Refrigerated Transport Temperature Monitoring</li>
          <li>Driver Safety & Performance</li>
          <li>Digital Forms & Inspections</li>
        </ul>
      </div>
    </div>

    {/* Second Column */}
    <div className="footer-col">
      <div className="footer-section">
        <h4  className="footer-title">Industries <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>Construction & Plant Machinery</li>
          <li>Transport & Logistics</li>
          <li>Oil, Gas & Mining</li>
          <li>Rental</li>
           <li>Field Service</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4  className="footer-title">Resources <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>Benefits of Implementation</li>
          <li>Free Tools</li>
          <li>Case Studies</li>
          <li>Latest Articles</li>
           <li>Integrations</li>

        </ul>
      </div>

      {/* <div className="footer-section">
        <h4  className="footer-title">Students<RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>Admissions Requirements</li>
          <li>Degree Programs</li>
          <li>Student & Faculty Portal</li>
        </ul>
      </div> */}
    </div>

    {/* Third Column */}
    <div className="footer-col">
      {/* <div className="footer-section">
        <h4  className="footer-title">Researchers <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>Research Faculty</li>
          <li>Laboratories</li>
        </ul>
      </div> */}

      <div className="footer-section">
        <h4 className="footer-title">Our Company <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>About Us</li>
          <li>Partner Program</li>
          <li>Careers</li>
           <li>Referrals</li>
            <li>Contact Us</li>

        </ul>
      </div>

       <div className="footer-section">
         <h4  className="footer-title">Address <RiArrowDropRightLine className="header-arrow" /></h4>
  <p><FaMapMarkerAlt className="address-icon" /> Hetauda - 5, Milan Marg, Nepal 44107</p>
  <p><FaPhoneAlt className="address-icon" /> 057-590098, +977-9800955072</p>
  <p><FaGlobe className="address-icon" /> info@telemko.com</p>
</div>
        {/*<h4  className="footer-title">Charitable Care & Financial Assistance <RiArrowDropRightLine className="header-arrow" /></h4>
        <ul>
          <li>Community Health Needs Assessment</li>
          <li>Financial Assistance Documents – Arizona</li>
          <li>Financial Assistance Documents – Florida</li>
          <li>Financial Assistance Documents – Minnesota</li>
        </ul>
      </div> */}
    </div>
  </div>
  <div className="footer-bottom">
  <div className="footer-left">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-right">
        <h3 className="footer-heading">Get Our App</h3>
        <div className="store-icons">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </a>
        </div>
      </div>
      </div>
      </footer>
      <div className="footer-legal">
        <div className="legal-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Notice of Privacy Practices</a>
          <a href="#">Notice of Nondiscrimination</a>
          <a href="#">Accessibility Statement</a>
          <a href="#"> Advertising & Sponsorship Policy</a>
           <a href="#">Site Map</a>
           <a href="#">Manage Cookies</a>
        </div>
        <hr />
        <div className="legal-bottom">
          <p>© 1998–2025 Mayo Foundation for Medical Education and Research (MFMER). All rights reserved.</p>
        <div className="language-select">
          <label htmlFor="language"> Language:</label> 
          <select id="language" name="language">
            <option value="en">English</option>
             <option value="en">Nepali</option>
          </select>
        </div>
        </div>
      </div>


    </>
  )
}

export default Footer