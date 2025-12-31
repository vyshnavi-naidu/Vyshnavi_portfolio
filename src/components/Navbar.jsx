import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vasamsetti-vyshnavi" },
  ];

  return (
    <header className="font-sarif bg-slate-800 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-wide hover:text-blue-400 duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-white">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-semibold hover:text-blue-400 transition"
              target={link.name === "LinkedIn" ? "_blank" : "_self"}
              rel={link.name === "LinkedIn" ? "noreferrer" : ""}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 text-white flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold hover:text-blue-400 transition text-lg"
              target={link.name === "LinkedIn" ? "_blank" : "_self"}
              rel={link.name === "LinkedIn" ? "noreferrer" : ""}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
