import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-emerald-500 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">Hyderabad, Telangana</h2>
          <p className="text-base sm:text-lg">Contact: 8106425234</p>
          <p className="text-base sm:text-lg">Email: vyshunaidu234@gmail.com</p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Follow Me</h2>
          <div className="flex justify-center md:justify-end space-x-6 sm:space-x-8">
            <a
              href="https://vyshnavi-ecommerce.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-120 transition-transform duration-300"
            >
              <SiNetlify size={30} className="hover:text-cyan-400" />
            </a>
            <a
              href="https://github.com/vyshnavi-naidu/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-120 transition-transform duration-300"
            >
              <FaGithub size={30} className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/vasamsetti-vyshnavi"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-120 transition-transform duration-300"
            >
              <CiLinkedin size={30} className="hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center  text-sm sm:text-lg mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Vyshnavi Portfolio | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
