import React from "react";
import "./Card.css";
import { MdOutlinePhoneAndroid,MdOutlineEdgesensorHigh,MdOutlineGpsFixed, MdEdgesensorHigh } from "react-icons/md";
import {FaCamera} from "react-icons/fa";

const Card =() =>{
    return(
<section className="cart-section">
    <div className="cart-box">
        {/*card 1*/}
        <div className="step-cart">
          <MdOutlineGpsFixed className="cart-icon"/>
          <h1 className="card-title">
            GPS Tracking Devices
          </h1>
          <p className="card-text">Telemko provides a versatile range of 4G CAT-M1 real-time GPS tracking devices — from simple to advanced models — designed for every application. All our devices come with a lifetime warranty.</p>
       <p className="card-link">
    <a href= "/products" >Learn More </a>
    </p>
        </div>

         {/*card 2*/}
         <div className="step-cart">
          <MdOutlineEdgesensorHigh className="cart-icon"/>
          <h1 className="card-title">
            IoT Sensors 
          </h1>
          <p className="card-text">All IoT sensors come with Bluetooth, which connects to a plethora of IoT sensors. These include temperature, humidity & light sensors, driver ID tags, tyre pressure sensors, and more.</p>
        <p className="card-link">
    <a href= "/products" >Learn More </a>
    </p>
        </div>

         {/*card 3*/}
         <div className="step-cart">
          <  FaCamera  className="cart-icon"/>
          <h1 className="card-title">
             Dash Cameras 
          </h1>
          <p className="card-text">Integrated video dash cams with high memory capacity and options for live streaming through the Linxio platform gives your business unparalleled insights into vehicle driving events.</p>
        <p className="card-link">
    <a href= "/products" >Learn More </a>
    </p>
        </div>
               
                 {/*card 4*/}
         <div className="step-cart">
          <MdOutlinePhoneAndroid className="cart-icon"/>
          <h1 className="card-title">
             Driver App
          </h1>
          <p className="card-text">Manage drivers and field workers in real-time by scheduling, dispatching and managing their tasks directly to their phone, keeping you updated on the progress of their daily schedule.</p>
        <p className="card-link">
    <a href= "/products" >Learn More </a>
    </p>
        </div>
       </div>
    </section>
    )}
    export default Card;