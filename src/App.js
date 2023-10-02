import React from 'react'
import Navbar from "./component/Navbar";
import Footer from './component/Footer';
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
  
    <div>
    <Navbar />
    {/* <Routes>
      <Route path="/" element={</>} />
      <Route path="/service" element={</>} />
      <Route path="/contact" element={</>} />
     
    </Routes> */}
    
    <Footer/>
  </div>
  )
}

export default App