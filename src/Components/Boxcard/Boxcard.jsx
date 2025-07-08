  import React from 'react'
  import "./Boxcard.css";
import { MdOutlineGpsFixed, MdEdgesensorHigh } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { IoCalendarOutline} from "react-icons/io5";
import { FcDocument } from "react-icons/fc";
import {FaLocationArrow, FaCamera,FaTrailer } from "react-icons/fa";
 
 
  const Boxcard=() => {


    return (
     <section className="box-section"> 
   <div className="box-header">
     <h1 className="box-title">
       A complete fleet tracking software solution
     </h1>
   </div>
 
   <div className="box-grid">
     {/* Repeat this card as needed */}
     <div className="box-card">
       <FaLocationArrow className="box-icon" />
       <h2 className="box-card-title">GPS Tracking Devices</h2>
       <ul className="box-card-list">
         <li>5G/4G LTE network</li>
         <li>Trip & stop history</li>
         <li> Geofence alerts</li>
       </ul>
       <p className="box-card-link"><a href="/products">Learn More</a></p>
     </div>
 
     <div className="box-card">
       <FaDroplet className="box-icon" />
       <h2 className="box-card-title"> Fuel & Maintenance</h2>
       <ul className="box-card-list">
         <li>Fault code monitoring</li>
         <li>Paperless Inspections</li>
         <li>Usage-based maintenance</li>
        
       </ul>
       <p className="box-card-link"><a href="/products">Learn More</a></p>
     </div>
 
     <div className="box-card">
       <FaTrailer className="box-icon" />
       <h2 className="box-card-title">Trailer Management</h2>
       <ul className="box-card-list">
         <li>Theft detection</li>
         <li>Utilization reporting</li>
         <li>Live streaming options</li>
         <li>Cargo and temperature</li>
       </ul>
       <p className="box-card-link"><a href="/package">Learn More</a></p>
     </div>
 
     <div className="box-card">
       < MdEdgesensorHigh className="box-icon" />
       <h2 className="box-card-title">Sensor Monitoring</h2>
       <ul className="box-card-list">
         <li>Wireless IoT Sensors</li>
         <li>Live temperature alerts</li>
         <li>Lifetime historical logs</li>
        
       </ul>
       <p className="box-card-link"><a href="/products">Learn More</a></p>
     </div>
 <div className="box-card">
       <FaCamera className="box-icon" />
       <h2 className="box-card-title">Safety & Dash Cameras</h2>
       <ul className="box-card-list">
         <li>Distracted driving detection</li>
         <li>In-cab coaching alerts</li>
         <li>Automatic incident upload</li>
        
       </ul>
       <p className="box-card-link"><a href="/products">Learn More</a></p>
     </div>
 <div className="box-card">
       <IoCalendarOutline className="box-icon" />
       <h1 className="box-card-title">Routing & Job Management</h1>
       <ul className="box-card-list">
         <li>Route optimisation</li>
         <li>Proof of delivery(POD's)</li>
         <li>Dispatch to Driver App</li>
         
       </ul>
       <p className="box-card-link"><a href="/solutions">Learn More</a></p>
     </div>
 <div className="box-card">
 <FcDocument className="box-icon" />
       <h2 className="box-card-title">Documents & Licences</h2>
       <ul className="box-card-list">
         <li>Driver & vehicle documents</li>
         <li>Centralized record-keeping</li>
         <li>Expiration alerts and report</li>
        
       </ul>
       <p className="box-card-link"><a href="/package">Learn More</a></p>
     </div>
    <div className="box-card">
       <MdOutlineGpsFixed className="box-icon" />
       <h2 className="box-card-title">Compliance Management</h2>
       <ul className="box-card-list">
         <li>FTC,FBT,ATO certified </li>
         <li>Works with iOS or Android</li>
         <li>Centralized visibility</li>
       </ul>
       <p className="box-card-link"><a href="/package">Learn More</a></p>
     </div>
     {/* Add more cards here if needed */}
   </div>
 </section>
 
    )
  }
  
  export default Boxcard
  
  