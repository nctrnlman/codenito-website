import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import 'tailwindcss/tailwind.css'; 

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
