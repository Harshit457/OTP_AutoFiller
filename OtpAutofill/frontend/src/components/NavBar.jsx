import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt , FaHireAHelper } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="w-full py-3 bg-gray-900 text-white text-center flex items-center justify-between px-4">
      <Link to="/" className="text-xl font-bold">
      Home
      </Link>
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