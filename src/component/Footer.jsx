import React from "react";
import Image1 from "../assets/logo-cn/transparant-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#151D20] text-white py-12 absolute inset-x-0 bottom-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <img src={Image1} alt="Codenito Logo" className="w-32 mb-4" />
          {/* <p className="font-semibold text-center">
            Codenito <br />
            Providing reliable tech since 2023
          </p> */}
        </div>
        <div className="flex items-center justify-center mt-4">
            {/* <p className="text-lg mr-4">Follow us:</p> */}
            <a
              href="https://www.instagram.com/codenito.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        <nav>

          <div className="grid grid-flow-col gap-4 justify-center my-4">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Portfolio
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>
        </nav>

        <div className="text-center">
          <hr className="bg-[#151D20] my-4 py-3" />
          
          <p className="text-lg mt-4">Codenito © 2023. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
