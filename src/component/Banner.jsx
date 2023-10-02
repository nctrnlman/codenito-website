import React from "react";
import logo from "../assets/codenito-logo/logo-light.png";
import grain from "../assets/grain.png"; // Import gambar grain

function Banner() {
  return (
    <div className="hero min-h-screen bg-gradient-to-tr from-[#4C0000] via-black to-[#131F36] text-white flex items-center justify-center">
      <div className="text-center">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-light mb-4">Your IT Solutions.</h1>
      </div>
    </div>
  );
}

export default Banner;
