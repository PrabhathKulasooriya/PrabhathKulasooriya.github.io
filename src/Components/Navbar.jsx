import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Education", to: "/#education" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-primary/90 shadow-lg transition-all duration-300">
      <div className="text-xl font-bold font-mono text-mint cursor-pointer z-50">
        <Link to="/#about" onClick={() => setIsOpen(false)}>
          IPK.
        </Link>
      </div>

      <ul className="hidden md:flex flex-row gap-8 text-sm md:text-base font-mono text-bright">
        {navLinks.map((link, index) => (
          <li key={index} className="relative cursor-pointer group">
            <Link
              to={link.to}
              className="flex items-center gap-1 transition-all duration-300 group-hover:text-mint"
            >
              <span className="text-mint text-xs">0{index + 1}.</span>
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-mint transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="md:hidden text-mint cursor-pointer z-50 hover:text-bright transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[75vw] h-screen bg-[#112240] shadow-2xl flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-lg font-mono text-bright text-center">
          {navLinks.map((link, index) => (
            <li key={index} className="relative cursor-pointer group">
              <Link
                to={link.to}
                onClick={handleLinkClick}
                className="flex flex-col items-center gap-2 transition-all duration-300 hover:text-mint"
              >
                <span className="text-mint text-sm">0{index + 1}.</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
