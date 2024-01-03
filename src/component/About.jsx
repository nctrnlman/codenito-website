import React from "react";
import logo from "../assets/codenito-logo/icon-dark.png";

function About() {
  return (
    <div
      className="lg:flex justify-between items-center min-h-screen max-w-8xl bg-white p-4"
      id="about"
    >
      <div className="lg:w-1/2 flex justify-center items-center">
        <img src={logo} alt="" />
      </div>

      <div className="lg:w-1/2 pr-6 pl-6 lg:pr-10 lg:pl-10 flex flex-col gap-6 g p-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-black mb-3 lg:mb-6 ">
          Welcome to Codenito
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-7 text-justify">
          Codenito is your trusted partner for IT consultancy and digital
          solutions. We leverage cutting-edge technology to empower businesses
          with superior user experiences through website development,
          application creation, and UI/UX design. Our experienced team ensures
          industry leadership and data security, creating a new digital
          landscape where code meets incognito.
        </p>
        {/* <a
          href="#contact"
          className="btn btn-black w-[150px] text-white items-center"
        >
          Contact Us
        </a> */}
      </div>
    </div>
  );
}

export default About;
