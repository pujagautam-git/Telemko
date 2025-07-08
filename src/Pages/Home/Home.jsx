import React,{useState} from 'react'
import './Home.css';
import picture1 from "../../assets/partners/pic1.png";
import picture2 from "../../assets/partners/pic2.png";
import picture3 from "../../assets/partners/pic3.png";
import picture4 from "../../assets/partners/pic4.png";
import picture5 from "../../assets/partners/pic5.png";
import picture6 from "../../assets/partners/pic6.png";
import picture7 from "../../assets/partners/pic7.png";
import picture8 from "../../assets/partners/pic8.png";
import picture9 from "../../assets/partners/pic9.png";
import picture10 from "../../assets/partners/pic10.png";
import video from "../../assets/intro.mp4"
import { Link } from "react-router-dom";
import gps from "../../assets/gps.png";
import fleet from "../../assets/fleet.png";
import assetsImage from "../../assets/home/details.png";
 import fleetImage from "../../assets/home/fuel.png";
import driverimage from"../../assets/home/date.png";
import { FaChartLine, FaLaptop, FaPlug, FaPhone, FaShieldAlt, FaCode, FaChevronDown, 
         FaRegPlayCircle,FaLocationArrow, FaUserShield, FaDollarSign,FaBuilding, FaLock,
         FaShippingFast, FaTools, FaHardHat, FaGasPump, FaHeartbeat, FaCar } from 'react-icons/fa';
import Card from '../../Components/Card/Card';
import Testimonial from "../../Components/Testimonial/Testimonial";
import Modern from "../../Components/Modern/Modern";
 import Boxcard from '../../Components/Boxcard/Boxcard';
import Form from "../../Components/Form/Form";

const faqs = [
  {
    question: 'How scalable is the Telemko platform?',
    answer: 'Telemko is built with scalability at its core. Whether you have 5 vehicles or 5,000, our platform grows with you without compromising performance or features.',
  },
  {
    question: 'Can I integrate Telemko with existing tools?',
    answer: 'Yes, we offer open developer APIs that allow seamless integration with your CRM, ERP, and other business tools.',
  },
  {
    question: 'Is customer support available in my region?',
    answer: 'We provide global customer support, including local phone and email assistance in key regions across the world.',
  },
  {
    question: 'What industries does Telemko support?',
    answer: 'Telemko supports a wide range of industries including transportation, logistics, construction, healthcare, and more.',
  }
];
const caseStudies = [
  {
    image: '/images/secondbite.jpg',
    title: '“From the get-go, Telemko has been nothing short of exceptional”',
    description: 'About SecondBite, SecondBite is a charity focused on addressing food waste and hunger in Australia by rescuing and redistributing surplus...',
    link: '#'
  },
  {
    image: '/images/bsg.jpg',
    title: '“Telemko turned out to be the right choice as a fleet partner”',
    description: 'About Blended Services Group, Blended Services Group (BSG) focuses on delivering trade services with precision and value, emphasizing long-term client...',
    link: '#'
  },
  {
    image: '/images/south32.jpg',
    title: '“We are working at almost twice the capacity”',
    description: 'About South32, The South32 GEMCO site is an open-cut mining operation, producing high-grade manganese ore that is shipped to their...',
    link: '#'
  },
  
];
const Home=() =>{

    const topPartners=[
        picture1, picture2, picture3, picture4, picture5,
         picture6, picture7, picture8, picture9, picture10,
    ]

    const [showVideo, setShowVideo]=useState(false);

    const openVideo =() => setShowVideo(true);
    const closeVideo =() => setShowVideo(false);

  
  {/*faq */}
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return(
    <>
   <section className="home-container">
    <div className="hero-container">
        <div className="hero-left">
            <h1 className="hero-header">From chaos to control, manage your fleet smartly.</h1>
                <h3 className="hero-subheader">WITH TELEMKO, IT'S POSSIBLE.</h3>
                    <p className="hero-description">With over 7 years of industry experience, Telemko Autolink has been at the forefront of GPS
vehicle tracking and advanced fuel monitoring solutions.We provide transport management system based on GPS tracking and real-time vehicle monitoring and control. We provide world class hardware and software technology with exceptional customer service. </p>
          <div className="hero-buttons">
            <Link to ="/package">
            <button className="btn primary">Check Package</button>
            </Link>
          <button className="btn secondary" onClick={openVideo}>Watch 
            <FaRegPlayCircle />
          </button>
          </div>
            </div>
            <div className="hero-right">
                <img src={gps} alt="Fleet GPS Tracking" className="hero-image"/>
            </div>
        </div>
         {/* Video Modal */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <span className="video-close" onClick={closeVideo}>&times;</span>
            <iframe
              src={video}
              title="Telemko Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
       
      )}
   </section>
   <section className="partners-container">
    <h1 className="partners-header">
       Trusted by over <Link to="/partners" className="highlight-link">3000+ </Link> clients and companies.
    </h1>
    <div className="partners-logos">
        {topPartners.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </div>
   </section>

    <div className="fleet-container">
        <div className="fleet-left">
          <img src={fleet} alt="Fleet GPS Tracking" className="fleet-image"/>
          </div>

            <div className="fleet-right">
                <h1 className="fleet-header">Fleet Oversight & GPS-Based Supervision</h1>
                    <p className="fleet-description">Monitor vehicles on the move, optimize fleet performance, boost efficiency, and promote 
                      safer driving habits with advanced GPS tracking systems. Choose from a diverse range of hardware and software 
                      solutions offering intuitive dashboards, insightful reports, and customizable alerts and notifications. </p>
           <div className="highlight-container">
      <div className="highlight-item">
        <span className="highlight-icon"><FaLocationArrow /></span>
        <p className="highlight-text">Track your vehicles with real time GPS tracking</p>
      </div>
      <div className="highlight-item">
        <span className="highlight-icon"><FaUserShield /></span>
        <p className="highlight-text">Monitor driver behaviour, keeping your fleet safe</p>
      </div>
      <div className="highlight-item">
        <span className="highlight-icon"><FaDollarSign /></span>
        <p className="highlight-text">Reduce maintenance costs & fuel consumption</p>
      </div>
    </div>
    <p className="Link">
    <a href= "/gps-tracking" >Read more <span className="arrow"> ›  </span> </a>
    </p>
    </div>
    </div>
    


   <Card/>
<Testimonial/>
 <Modern/>         
   <Boxcard/>
     
     
 
       <section className="track-section">
      {/* Left Content */}
      <div className="track-container">
      <div className="track-left">
        <h1 className="track-title">Driver Safety &<br />Performance</h1>
        <p className="track-subtitle">
          A driver behaviour management system gives fleet managers the ability to monitor driver
           performance in regard to speeding, 
          acceleration, braking, cornering and speed.
        </p>

        <h3 className="track-highlight">
          <span>Safety in numbers</span>
        </h3>

        <div className="track-stats">
          <div>
            <h2>50%</h2>
            <p>Lower accidents</p>
          </div>
          <div>
            <h2>15%</h2>
            <p>Insurance discount</p>
          </div>
          <div>
            <h2>15%</h2>
            <p>Reduction in wear & tear</p>
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
       <Link to="/package">  <button className="btn-primary">Check Package</button> </Link>
         <Link to="/solution"> <button className="btn-secondary">Learn more</button> </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="track-right">
        <img src={driverimage} alt="Fleet Tracking UI" className="track-image" />
      </div>
      </div>
    </section>
    <section className="assets-section">
      {/* Left Content */}
      <div className="assets-container">
      <div className="assets-left">
        <img src={assetsImage} alt="Fleet Tracking UI" className="assets-image" />
      </div>

      {/* Right Image */}
      <div className="assets-right">
        <h1 className="assets-title">Delivery Management<br /> & Dispatch</h1>
        <p className="assets-subtitle">
         Eliminate downtime and increase productivity with seamless job/delivery management & dispatch 
         solutions for all trades, Services & transport companies.
        </p>
        <div className="asset-tags">
        <span>✓ ETA Alerts</span>
        <span>✓ e-Signature</span>
        <span>✓ Route Optimisation</span>
        <span>✓ Navigation</span>
        <span>✓ Driver Chat</span>
        <span>✓ API Integrations</span>
      </div>
        <div className="assets-buttons">
        <Link to="/package">  <button className="btn-primary">Check Package</button> </Link>
        <Link to="/solution"> <button className="btn-secondary">Learn more</button> </Link>
        </div>
      </div>
      </div>
    </section>
      <section className="case-studies-section">
      <h1 className="case-title">Case Studies</h1>
      <p className="case-subtitle">
        See why some of our 3000+ customers around the world use Telemko to track, analyse and improve their fleet operations.
      </p>
      <div className="case-grid">
        {caseStudies.map((item, index) => (
          <div className="case-card" key={index}>
            <img src={item.image} alt="Case" className="case-image" />
            <div className="case-content">
              <h3 className="case-heading">{item.title}</h3>
              <p className="case-desc">{item.description}</p>
              <a href={item.link} className="case-link">Read Story</a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">&#8594;</button>
      </div>

      <div className="read-more">
        <a href="#">Read more case studies &gt;</a>
      </div>
    </section>


     <section className="industries-section">
      <div className="industries-container">
        {/* Left Image */}
        <div className="industries-image">
          <img src="/images/construction.jpg" alt="Construction" />
        </div>

        {/* Right Content */}
        <div className="industries-content">
          <div className="industries-label">
            <FaBuilding className="label-icon" />
            <span>We help businesses in any industry that runs a mobile workforce</span>
          </div>

          <h1 className="industries-heading">
            Fleet Telematics <br /> Tools Trusted Across Industries
          </h1>

          <p className="industries-description">
            With a complete GPS tracker hardware portfolio and GPS tracking solutions set, Linxio is a telematics technology system that provides ROI for fleet customers across many verticals.
          </p>

          <div className="industries-grid">
            <div className="industry"><FaLock className="icon" /> Food & beverage</div>
            <div className="industry"><FaShippingFast className="icon" /> Transportation & logistics</div>
            <div className="industry"><FaTools className="icon" /> Field services</div>
            <div className="industry"><FaHardHat className="icon" /> Construction & plant hire</div>
            <div className="industry"><FaGasPump className="icon" /> Oil, gas & mining</div>
            <div className="industry"><FaHeartbeat className="icon" /> Emergency & healthcare</div>
            <div className="industry"><FaCar className="icon" /> Car & truck rental</div>
          </div>

          <a href="/package" className="industries-link">Learn More &gt;</a>
        </div>
      </div>
    </section>
     <section className="scalable-section">
      <div className="scalable-container">
        {/* Left Content */}
        <div className="scalable-left">
          {/* Top Badge */}
          <div className="scalable-badge">
            <FaChartLine className="badge-icon" />
            <span>Linxio grows when you do, so you only pay for what you need</span>
          </div>

          {/* Heading */}
          <h1 className="scalable-heading">
            Scales from small fleets <br /> to large enterprises
          </h1>

          {/* Subheading */}
          <p className="scalable-subheading">
            Linxio combines ease of use with enterprise-grade security, scalability, and flexibility, delivering results to customers of all sizes.
          </p>

          {/* Feature Columns */}
          <div className="scalable-features">
            {/* Easy to Use */}
            <div className="feature-column">
              <h3>Easy to Use</h3>
              <ul>
                <li><FaLaptop className="icon" /> Intuitive, modern design</li>
                <li><FaPlug className="icon" /> Plug & Play GPS trackers</li>
                <li><FaPhone className="icon" /> Local phone support</li>
              </ul>
            </div>

            {/* Scalable */}
            <div className="feature-column">
              <h3>Scalable</h3>
              <ul>
                <li><FaShieldAlt className="icon" /> Enterprise level security</li>
                <li><FaCode className="icon" /> Open developer APIs</li>
              </ul>
            </div>
          </div>

          {/* Learn More */}
          <a href="/package" className="scalable-link">Learn More &gt;</a>
        </div>

        {/* Right Image */}
        <div className="scalable-right">
          <img src="/images/fleet-truck.jpg" alt="Fleet Truck" />
        </div>
      </div>
    </section>

{/*excel section */}
    <section className="excel-section">
      <h1 className="excel-header">
      At Telemko, we excel at all aspects of tracking.
      </h1>
      <h4 className="excel-subheader">
      With our world-class fleet management software, and in-house development team, the limits are endless.
      </h4>
    <div className="info-faq-section">
      <div className="info-faq-container">
        {/* Left Side */}
        <div className="info-left">
          <h3 className="info-subheader">Whether you have a large or small private or commercial company, you can benefit from GPS tracker and GPS tracking software.</h3>
          <p className="info-paragraph">
            Keeping your fleet on schedule and on time is critical to your business, and being able to see exactly where they are on their journey, through exact
             location vehicle tracking notifications can go a long way in being able to let your customers know when their shipments are going to arrive.
          </p>
          <p className="info-paragraph">
            Along with being able to see where your shipments are, our clients get a host of exclusive features with our fleet tracking solutions suite. You can get feedback on your driver’s behaviour to ensure that they’re driving safely in all weather conditions, and we also offer a comprehensive system that ranks your drivers based on their performances. 
            Telemko’s fleet software and devices help improve fleet productivity, reduce costs and increase revenue in your business.
          </p>
          <p className="info-paragraph">
            It’s also important that you keep on top of routine maintenance and your fuel costs to reduce your company overhead, and our fleet maintenance tracking solutions can help you plan routes and set reminders for routine maintenance.
             This can cut your overall costs and reduce your company overhead, especially if you have a large fleet of vehicles.
          </p>

          <h3 className="info-subheader">In short, when it comes to real time vehicle tracking, Linxio has you covered.</h3>
        </div>

        {/* Right Side: FAQ */}
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <FaChevronDown className={`arrow-icon ${openIndex === index ? 'open' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
    <Form/>
  </>
)
}

export default Home