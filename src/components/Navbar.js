// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarBg('bg-white bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarBg}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link className="text-blue-800 font-bold text-xl" to="/">CUET PLUS</Link>
          </div>
          <div className="flex items-center justify-center">
            <Link className="text-blue-800 font-bold mx-3" to="/">Home</Link>
            <Link className="text-blue-800 font-bold mx-3" to="/OurCenter">Our Center</Link>
            <Link className="text-blue-800 font-bold mx-3" to="/Offerings">Offerings</Link>
            <Link className="text-blue-800 font-bold mx-3" to="/Blogs">Blogs</Link>
            <Link className="text-blue-800 font-bold mx-3" to="/AboutUs">About Us</Link>
            <Link className="text-blue-800 font-bold mx-3" to="/nuser">Sign up</Link>
            <Link className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-3" to="/login">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
