 import React,{useState} from 'react'
 import "./Form.css";
import { FaBuilding } from 'react-icons/fa';

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
 const Form =() =>{

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
     <section className="Investment-section">
        <div className="left-invest">
            <h1 className="invest-header">
                Is GPS Tracking Worth Your Time & Investment?
            </h1>
            <p className="invest-description">
                This is really what it all comes down to for every business decision.
            </p>
            <p className="invest-description">
                Our GPS tracker and fleet management solutions have proven time and time again that our clients can save thousands of dollars per month by lowering labour costs,
                 reducing fuel usage, and improving productivity, all while having a complete overview of your fleet and staff.
            </p>
            <p className="invest-description">
             In dollar terms, savings of upwards of $3000 per month, per employee.
            </p>
            <p className="invest-description">
                Let us show you how your business can get an instant ROI on implementing a tracking system in your fleet today, <span>simply complete this inquiry form to get our latest brochure and pricing plans.</span>
            </p>
        </div>
       

       <div className="form-right">
        {!submitted ? (
          <>
      <div className="invest-box">
                    <FaBuilding className="invest-icon" />
                    <span>Complete this form for an emailed proposal according to your fleet size.</span>
                  </div>
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
    </section>
   )
 }
 
 export default Form;