   import React from 'react';
   import fleetImage from "../../assets/home/fuel.png";
import assetsImage from "../../assets/home/details.png";
import "./Modern.css";
import {Link} from "react-router-dom";

const Modern=() =>{

return(
    <>
   <div className="modern-container">
           <h1 className="modern-header">
             Modern GPS Fleet Management
           </h1>
           <p className="modern-description">At Telemko, we provide tracking solutions tailored for everyone. Our wide range of products is designed to fit any budget and industry — whether for large or small businesses, 
             private or commercial.</p>
         </div>
         
          <section className="track-section">
         {/* Left Content */}
         <div className="track-container">
         <div className="track-left">
           <h1 className="track-title">Fleet Tracking &<br />Management</h1>
           <p className="track-subtitle">
             Connect your fleet and gain total control and visibility with the
             latest real-time 5G/4G LTE network-based hardware paired with our
             world-class fleet software.
           </p>
   
           <h3 className="track-highlight">
             <span>Instant return on investment</span>
           </h3>
   
           <div className="track-stats">
             <div>
               <h2>30%</h2>
               <p>Fuel reduction</p>
             </div>
             <div>
               <h2>20%</h2>
               <p>More productive</p>
             </div>
             <div>
               <h2>15%</h2>
               <p>Lower maintenance</p>
             </div>
           </div>
   
           {/* <div className="fleet-testimonial">
             <img src={""} alt="Keegan" className="fleet-user" />
             <p>
               Checked every box for us, competitive price, with reliable trackers
               and modern software for accurate vehicle location through best
               telematics technology that never skips a beat.<br />
               <strong>Keegan - Car Rental</strong>
             </p>
           </div> */}
   
           <div className="track-buttons">
            <Link to ="/package">
             <button className="btn-primary">Check Package</button>
             </Link>
             <Link to ="/solution">
             <button className="btn-secondary">Learn more</button>
             </Link>
           </div>
         </div>
   
         {/* Right Image */}
         <div className="track-right">
           <img src={fleetImage} alt="Fleet Tracking UI" className="track-image" />
         </div>
         </div>
       </section>
   
    <section className="assets-section">
         {/* Left image */}
         <div className="assets-container">
         <div className="assets-left">
           <img src={assetsImage} alt="Fleet Tracking UI" className="assets-image" />
         </div>
   
         {/* Right Content */}
         <div className="assets-right">
           <h1 className="assets-title">Assets Tracking &<br />Management</h1>
           <p className="assets-subtitle">
             Complete control over your assets using our trackers & asset management software with live tracking, plus valuable data like fuel levels, sos 
             function and unauthorised usage for complete fleet efficiency.
           </p>
           <div className="asset-tags">
           <span>✓ Driver ID</span>
           <span>✓ Engine Hours</span>
           <span>✓ Geofences</span>
           <span>✓ Maintenance</span>
           <span>✓ Fuel Levels</span>
           <span>✓ IoT Sensors</span>
         </div>
           <div className="assets-buttons">
            <Link to="/package">
             <button className="btn-primary">Check Package</button>
             </Link>
          <Link to="/solutions" > <button className="btn-secondary">Learn more</button> </Link> 
           </div>
         </div>
         </div>
       </section>
    </>
           )
        }
        export default Modern;