import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-screen flex flex-col justify-start items-center bg-[#0A192F] text-[#E0E0E0] ">
      
      <div id="about" className="min-h-screen pt-[70px]">
        <Link to="/test">
          <button className="border p-2 border-[#BDD3FF] text-[#CCD6F6] rounded-lg">
            test
          </button>
        </Link>
        About
        <div className="">
          <h1 className='text-8xl text-text'> Hello World!</h1>
        </div>
      </div>
      
      <div id="projects" className="min-h-screen pt-[70px] text-[#00D1B2]">
        Projects
      </div>
      
      <div id="contact" className="min-h-screen pt-[70px]">
        Contact
      </div>
    </div>
  );
}

export default Home
