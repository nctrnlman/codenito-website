import React from "react";
import logo from "../assets/codenito-logo/logo-light.png";

function Banner() {
  return (
    <div className="hero min-h-screen bg-gradient-to-tr from-[#4C0000] via-black to-[#131F36] text-white flex items-center justify-center">
      <div className="text-center">
        <img src={logo} alt="" className="w-64 sm:w-96 md:w-128 mx-auto mb-4" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
          Your IT Solutions.
        </h1>
      </div>
    </div>
  );
}

export default Banner;
