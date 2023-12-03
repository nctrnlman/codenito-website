import React, { useState } from "react";
import Image1 from "../assets/logo-cn/logo-light.png";
import { Squash as Hamburger } from "hamburger-react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full bg-[#151D20] z-50 ${
          isMobileMenuOpen ? "mobile-open" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* Instagram icon (on the very left) */}
            <a
              href="https://instagram.com/codenito.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

          {/* Center the logo */}
          <div className="logo flex items-center justify-center lg:flex lg:items-center lg:justify-center lg:ml-[250px]">
            <img src={Image1} alt="Codenito Logo" className="h-10" />
          </div>

          <div className="menu hidden md:flex items-center space-x-4">
            <ul className="text-white flex space-x-4">
              <li href="#contact">About</li>
              <li>Portfolio</li>
              <li>Team</li>
              <li>Review</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="md:hidden">
            <button className="text-white" onClick={toggleMobileMenu}>
              <Hamburger
                size={24}
                color="white"
                toggled={isMobileMenuOpen}
                toggle={setMobileMenuOpen}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="bg-[#151D20] text-white text-center py-2">
          <li className="py-2">About</li>
          <li className="py-2">Portfolio</li>
          <li className="py-2">Team</li>
          <li className="py-2">Review</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
