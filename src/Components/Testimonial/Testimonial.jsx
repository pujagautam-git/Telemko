  
  import React, {useState} from 'react'
  import "./Testimonial.css";
  import avatar1  from "../../assets/fleet.png";
import avatar2  from "../../assets/fleet.png";
import avatar3  from "../../assets/fleet.png";

  
  
  
  const testimonials = [
    {
      quote: "It was great working with your team to achieve what we required",
      name: "Geoff",
      position: "Mining Operations Manager",
      text: "Checked every box for us, competitive price, with reliable trackers and modern software for accurate vehicle location through best telematics technology that never skips a beat.",
      image: avatar1
    },
    {
      quote: "Telemko helped us cut operating costs and improve vehicle tracking",
      name: "Sophia",
      position: "Fleet Manager",
      text: "I cannot believe we ran our business so long before getting asset trackers. We would be lost without it now. We would've been able to reduce costs and determine exact location easily.",
      image: avatar2
    },
    {
      quote: "Highly recommend their customer support and flexible solutions",
      name: "James",
      position: "Logistics Head",
      text: "From onboarding to daily use, the experience with Telemko has been seamless...",
      image: avatar3
    }
  ];
  const steps = [
  {
    question: "What type of assets do you have?",
    options: ["Cars, Utes & Vans", "Trucks & Buses", "Plant Machinery", "Trailers & Containers", "Other"]
  },
  {
    question: "How many vehicles or assets are in your fleet?",
    options: ["1-10", "11-50", "51-100", "100+"]
  },
  {
    question: "What features are you interested in?",
    options: ["Real-time Tracking", "Dash Cameras", "Driver Behavior", "Maintenance Alerts"]
  },
  {
    question: "How soon do you plan to start?",
    options: ["Immediately", "1-2 Weeks", "1 Month", "Just Browsing"]
  }
];
  
  const Testimonial=() => {

    const [activeIndex, setActiveIndex] = useState(0);
        const [currentStep, setCurrentStep] = useState(0);
      const [answers, setAnswers] = useState({});
    
     const handleSelect = (index) => setActiveIndex(index);
  
    const handleOptionChange = (option) => {
    setAnswers({ ...answers, [currentStep]: option });
  };

   const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Form submitted!\n" + JSON.stringify(answers, null, 2));
      setCurrentStep(0);
      setAnswers({});
    }
  }; 
    return (
    
  
  <section className="testimonial-form-section">
      {/* Left: Testimonial */}
 <div className="testimonial-box">
        <h2 className="quote">"{testimonials[activeIndex].quote}"</h2>
        <div className="testimonial-author">
          <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="avatar" />
          <p>
            <strong>{testimonials[activeIndex].name}</strong> – {testimonials[activeIndex].position}
          </p>
        </div>
        <p className="testimonial-text">{testimonials[activeIndex].text}</p>

        <div className="testimonial-pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* Right: Form Section */}
      <div className="form-box">
        <h1>Check Prices</h1>
        <p>
          We've GPS trackers and solutions for all industries and can tailor a
          package that meets your requirements and budget.
        </p>
        <p>
          We offer competitive pricing according to your fleet size. Complete
          the form below to receive an emailed proposal.
        </p>

        <div className="form-card">
          <div className="progress">{Math.round(((currentStep + 1) / steps.length) * 100)}%</div>
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
            <button type="submit">{currentStep < steps.length - 1 ? "Next" : "Submit"}</button>
          </form>
        </div>
      </div>
    </section>
     )
  }
  
    export default Testimonial;