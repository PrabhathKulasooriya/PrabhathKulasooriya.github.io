import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <div className="flex flex-row justify-center items-center w-screen h-[60px] shadow-md fixed top-0 left-0 bg-white z-50 px-4 md:px-8 lg:px-12 ">
        <ul className="flex w-auto flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-14 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl text-[#3b3b3b]">
          <li className="relative cursor-pointer group">
            <Link to={"/#about"} className="transition-all duration-300 group-hover:text-[#ff6347]">
              
                <span className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-[#ff6347] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                  About
                </span>
              
            </Link>
          </li>

          <li className="relative cursor-pointer group">
            <Link to={"/#projects"} className="transition-all duration-300 group-hover:text-[#ff6347]">
              <span className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-[#ff6347] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                Projects
              </span>
            </Link>
          </li>

          <li className="relative cursor-pointer group">
            <Link to={"/#contact"} className="transition-all duration-300 group-hover:text-[#ff6347]">
              <span className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-[#ff6347] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;