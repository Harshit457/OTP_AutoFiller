import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt , FaHireAHelper } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="w-full h-16  py-3 bg-customnavblack text-white text-center flex items-center justify-around rounded-md">
      <div>LOGO</div>
      <div className='flex '>
      <Link to="/" className=" font-bold " >
      Home
      </Link>
      <a href="#About" className=' font-bold pl-10  '>About</a>
      
      <a href="#Preview" className=' font-bold pl-10  '>Preview</a> 
      <a href="#Comments" className=' font-bold pl-10  '>Comments</a>
      </div>
      <div className="flex space-x-4">
        <Link to="/support" className="flex items-center">
        <FaHireAHelper className="mr-1" />
          Support
        </Link>
        <Link to="/blogs" className="flex items-center">
          <FaBolt className="mr-1" />
          Blogs
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;