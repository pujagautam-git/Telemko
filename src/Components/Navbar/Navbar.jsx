 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa"; // 👈 Import icons
import "./Navbar.css";
const menuData=[
{
    label: "Solutions",
    customDropdown: {
      left: [
       { label: "GPS Tracking", path: "/patient" },
        { label: "Fleet Management", path: "/about" },
        { label: "Asset Management", path: "/appointment" },
        { label: "Fleet Maintenance Software", path: "/doctors" },
        { label: "Job Scheduling & Dispatch", path: "/location" },
        
      ],
      center: [
        { label: "Route Optimisation & Planning", path: "/support-groups" },
        { label: "Refrigerated Transport Temperature Monitoring", path: "/guide" },
        { label: "Driver Safety & Performance", path: "/billing" },
        { label: "Digital Forms & Inspections", path: "/departments" },
        { label: "3G GPS Hardware Upgrade", path: "/international" },
      ],
      rightImage:""
    },
  },
  {
    label:"Industries",
    customDropdown: {
      left: [
       { label: "Construction & Plant Machinery", path: "/diseases" },
        { label: "Transport & Logistics", path: "/symptoms" },
        { label: "Oil, Gas & Mining", path: "/tests" },],

       center: [
       { label: "Rental", path: "/drugs" },
        { label: "Field Service", path: "/lifestyle" },
       ],
       rightImage:""
    },
  },
  {
    label: "Products",
    customDropdown: {
      left: [
       { label: "GPS Trackers", path: "/medical" },
       { label: "IoT Sensors", path: "/refers" },
       
         ],
       center: [
         { label: "Dash Cameras", path: "/lab" },
       { label: "Applications", path: "/center" },
        ],
      rightImage:""
    },
  },
  {
    label: "Resources",
     customDropdown: {
      left: [
        {label:"Benefits",path:"/benefits"},
        {label:"Free Tools",path:"/tools"},
        {label:"Case Studies", path:"/case"},],

      center: [
        {label:"Latest Articles",path:"/article"},
        {label:"Integrations",path:"/integration"},
        {label:"FAQs", path:"/faq"},],
      rightImage:""
    },
  },
  {
    label: "Company",
    customDropdown: {
      left: [
       { label: "About Us", path: "/givenow" },
       { label: "Partner Program", path: "/mayoclinic" },],
        

      center: [
       { label: "Careers", path: "/faq" },
       { label: "Referrals", path: "/contactus" },
        { label: "Contact", path: "/faq" },
      ],
      rightImage: ""
       
    },
  },
];
const rightMenu = [
  { label: "Log In", type: "icon-text", icon: <FaSignInAlt /> },
  { label: "Search", type: "icon", icon: <FaSearch /> },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate =useNavigate();
  const handleCenterClick = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx); // toggle dropdown
  };

  const handleRightClick = (label) => {
    console.log(`${label} clicked`);
    if(label === "Request Appointment") {
      navigate("/appointment");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mayo_Clinic_logo.svg/2560px-Mayo_Clinic_logo.svg.png"
          alt="telemko Logo"
          className="navbar-logo"
        />
        </Link>
      </div>

      {/* Center - Menu Items */}
      <ul className="navbar-center">
        {menuData.map((item, idx) => (
          <li
            key={idx}
            className={`navbar-menu-item ${openDropdown === idx ? "active" : ""}`}
            onClick={() => handleCenterClick(idx)}
          >
            <span className="menu-label">
        {item.label}
        {openDropdown === idx ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </li>
  ))}
</ul> 





            {openDropdown !== null &&  menuData[openDropdown].customDropdown &&(
              <div className="navbar-dropdown-full">
                 <div className="care-grid">
                  <div className="care-column">
        <ul>
          {menuData[openDropdown].customDropdown.left.map((item, idx) => (
           <li
  key={idx}
  onClick={() => {
    navigate(item.path);
    setOpenDropdown(null); // <-- Add this line here to close dropdown
  }}
>
  {item.label}
</li>
          ))}
        </ul>
      </div>
      <div className="care-column">
        <ul>
          {menuData[openDropdown].customDropdown.center.map((item, idx) => (
           <li
  key={idx}
  onClick={() => {
    navigate(item.path);
    setOpenDropdown(null); // <-- Add this line here to close dropdown
  }}
>
  {item.label}
</li>
          ))}
        </ul>
      </div>
      <div className="care-image">
        <img
          src={menuData[openDropdown].customDropdown.rightImage}
          alt="Visual"
        />
      </div>
    </div>
  </div>
)}

 
     
     {/* Right Menu */}
      <ul className="navbar-right">
        {rightMenu.map((item, idx) => (
          <li
            key={idx}
            className="navbar-menu-item"
            onClick={() => handleRightClick(item.label)}
          >
            {item.type === "icon" && item.icon}
            {item.type === "text" && item.label}
            {item.type === "icon-text" && (
              <>
                {item.icon} <span style={{ marginLeft: "8px" }}>{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;