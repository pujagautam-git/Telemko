 import React,{useState} from 'react'
 import {FaBuilding} from "react-icons/fa"
import "./Package.css";


 const steps = [
  {
    question: "What type of assets do you have?",
    options: ["Cars, Utes & Vans", "Trucks & Buses", "Plant Machinery", "Trailers & Containers", "Other"]
  },
  {
    question: "What feature(s) are you most interested in?",
    options: ["Live Tracking, Alerts & Reporting", "Maintenance & Driver Behaviour", "Compliance,CoR, FTC,FBT,etc", "Route Optimisation & job Dispatch","Fuel Cards & Management","Dashcams & Video Streaming"]
  },
  {
    question: "What is your fleet size?",
    options: ["30+ Business Vehicles", "7-29 Business Vehicles", "1-6 Business Vehicles", "Personal Vehicle/s"]
  },
  {
    question: "How soon do you plan to start?",
    options: ["Immediately", "1-2 Weeks", "1 Month", "Just Browsing"]
  }
];
 const Package=() => {
      const [currentStep, setCurrentStep] = useState(0);
          const [answers, setAnswers] = useState({});
          const [contact, setContact] =useState({
           name:"",
           company:"",
           email:"",
           phone:""
          });
     
           const [submitted, setSubmitted] = useState(false);
     
         const handleOptionChange = (option) => {
         setAnswers({ ...answers, [currentStep]: option });
       };
     
     
         const handleNext = (e) => {
         e.preventDefault();
         if (currentStep < steps.length - 1) {
           setCurrentStep(currentStep + 1);
         } else {
          setCurrentStep(currentStep + 1);
         }
       }; 
     
       const handleContactChange = (e) => {
         setContact({ ...contact,[e.target.name]: e.target.value});
       };
       const handleFinalSubmit =(e) => {
         e.preventDefault();
     
         const { name, company, email, phone}= contact;
         if(!name || !company || !email || !phone){
           alert("please fill in all contact details.");
           return;
         }
     
         console.log("Answers:", answers);
         console.log("Contact Details:",contact);
     
         setSubmitted(true);
         
         setAnswers({});
         setContact({
           name:"",
           company:"",
           email:"",
           phone:"",
         });
         setCurrentStep(0);
       };
     
    
   return (

      <div className="package-container">
      <div className="package-left">
        <p className="promo-banner">
          <strong>Featured Promo:</strong> Something exciting is brewing for you this EOFY 2024 at Linxio. To learn more, speak with our sales team. Terms & Conditions apply.*
        </p>
        <p className="subtitle">FUTURE PROOFED TELEMATICS</p>
        <h1 className="main-title">Linxio Pricing Calculator</h1>
        <p className="description">
          Because the Linxio platform is so vast, we don't believe in a one-size-fits-all approach to pricing. 
          Instead, you pay only for what you need, and add to the features when your business requirements grow.
        </p>
        <p className="description">
          To get a tailored proposal sent to your email with your exact requirements, simply complete the pricing form.
        </p>

        <div className="features">
          <div className="feature-item">💲 Competitive Pricing</div>
          <div className="feature-item">📁 2500+ Clients</div>
          <div className="feature-item">🔁 Flexible Options</div>
          <div className="feature-item">✅ 99% Satisfaction Rate</div>
        </div>
      </div>

      <div className="form-right">
              {!submitted ? (
                <>
          
              <div className="invest-card">
                <div className="progress-card">{Math.round(((currentStep + 1) / (steps.length +1)) * 100)}%</div>
                 {currentStep < steps.length ? (
                      <>
                        <h3>{steps[currentStep].question}</h3>
                        <form onSubmit={handleNext}>
                          {steps[currentStep].options.map((option, idx) => (
                            <label key={idx}>
                              <input
                                type="radio"
                                name={`step-${currentStep}`}
                                value={option}
                                checked={answers[currentStep] === option}
                                onChange={() => handleOptionChange(option)}
                              />{" "}
                              {option}
                            </label>
                          ))}
                          <button type="submit">
                            {currentStep < steps.length - 1 ? "Next" : "Continue"}
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <h3>Almost done! Enter your contact details</h3>
                        <form onSubmit={handleFinalSubmit} className="contact-form">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={contact.name}
                            onChange={handleContactChange}
                            required
                          />
                          <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={contact.company}
                            onChange={handleContactChange}
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={contact.email}
                            onChange={handleContactChange}
                            required
                          />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={contact.phone}
                            onChange={handleContactChange}
                            required
                          />
                          <button type="submit">Submit Form</button>
                        </form>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="thank-you">
                  <h2>Thank you!</h2>
                  <p>Your form has been submitted. Our team will get in touch with you soon!</p>
                </div>
              )}
            </div>
        </div>
   )
}

 export default Package;