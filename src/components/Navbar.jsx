import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href:"#Education"},
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="font-sarif bg-stone-800 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-white">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="text-3xl font-bold tracking-wide text-emerald-500 hover:text-emerald-300 duration-300 hover:scale-110 transition-transform"
        >
          Vyshnavi
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-xl">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative font-semibold text-white hover:text-emerald-500 transition-transform duration-300
                         after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-500 
                         after:transition-all after:duration-300 hover:after:w-full"
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
        <div className="md:hidden text-white flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-semibold text-lg hover:text-emerald-500 transition duration-300
                         after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-500 
                         after:transition-all after:duration-300 hover:after:w-full"
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
