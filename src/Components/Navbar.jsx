import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { hash } = useLocation();

  // This ensures scrolling works even if you are already on the page
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Education", to: "/#education" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <div className="fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-primary/90 shadow-lg transition-all duration-300">
      {/* Logo Section */}
      <div className="text-xl font-bold font-mono text-mint cursor-pointer">
        <Link to="/">IPK.</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-8 text-sm md:text-base font-mono text-bright">
        {navLinks.map((link, index) => (
          <li key={index} className="relative cursor-pointer group">
            <Link
              to={link.to}
              className="flex items-center gap-1 transition-all duration-300 group-hover:text-mint"
            >
              <span className="text-mint text-xs">0{index + 1}.</span>
              <span className="relative">
                {link.name}
                {/* Your sliding underline animation adapted to Mint color */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-mint transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
