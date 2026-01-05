import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-screen flex flex-col justify-start items-center bg-[#f9f9f9]">
      <div id="about" className="min-h-screen pt-[70px]">
        <Link to="/test">
          <button className='border p-2'>test</button>
        </Link>
        About
      </div>
      <div id="projects" className="min-h-screen pt-[70px]">
        Projects
      </div>
      <div id="contact" className="min-h-screen pt-[70px]">
        Contact
      </div>
    </div>
  );
}

export default Home
