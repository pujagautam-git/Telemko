import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css'
import Home from './Pages/Home/Home';
import Package from './Pages/Package/Package';
import Partners from './Components/Partners/Partners';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
 
  return (
     <BrowserRouter>
<div className="app-container">
        <Navbar />
      
        <main className="main-content">
         
          <Routes>
              <Route path="/" element={<Home />} /> 
          <Route path='/partners' element ={<Partners />} />
          <Route path='/package' element ={<Package/>} />
          </Routes>
          </main>
          <Footer />
          </div>
          </BrowserRouter>
  )
}

export default App
