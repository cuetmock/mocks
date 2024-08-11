import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';


const ContactUs = () => {
  return (
    <div className="py-16 bg-gray-100">
       <Navbar />
      <header className="relative bg-cover bg-center pt-20 flex items-center justify-center text-center" style={{ backgroundImage: "url('/cn.jpg')" }}>
        <div className="container mx-auto text-center lg:text-left py-16">
          <div className="lg:w-2/3 mx-auto">
            <p className="text-xl text-white">Feel Free To</p>
            <h1 className="text-5xl font-bold mt-2 text-white">CONTACT US</h1>
            <p className="mt-4 text-white">Your Feedback Matters</p>
          </div>
        </div>
      </header>
      <div className="container mx-auto">
        <h2 className="text-3xl text-blue-700 font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Hours</h3>
              <p>Mon-Fri: 9 AM - 7 PM</p>
              <p>Sat: 9 AM - 2 PM</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <p>Email: mifa@info.com</p>
              <p>Phone: (303) 985-0105, (303) 355-0105</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Address</h3>
              <p className="mt-2">Paras Complex Circular Road, Ranchi</p>
              <p>Email: info@example.com</p>
              <p>Phone: +91 742 898 9898</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="First Name" />
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="Surname" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="Contact Number" />
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="Alternate Number" />
              </div>
              <div className="mb-4">
                <input className="border border-blue-400 shadow p-2 w-full rounded" type="email" placeholder="Email ID" />
              </div>
              <div className="mb-4">
                <input className="border border-blue-400 shadow p-2 w-full rounded" type="text" placeholder="Locality / Building / Street / Society" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="City / Town" />
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="District" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="State" />
                <input className="border border-blue-400 shadow p-2 rounded" type="text" placeholder="Pincode" />
              </div>
              <div className="mb-4">
                <textarea className="border border-blue-400 shadow p-2 w-full rounded" rows="4" placeholder="Send us your queries and suggestions..."></textarea>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-blue-700 text-white py-8 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">CUET PLUS</p>
            <p className="text-sm">Providing quality education since 2023</p>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="mt-2">
              <li><Link to="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li><Link to="/courses" className="text-blue-200 hover:text-white">Courses</Link></li>
              <li><Link to="/about-us" className="text-blue-200 hover:text-white">About Us</Link></li>
              <li><Link to="/contact-us" className="text-blue-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="mt-2">Paras Complex Circular Road, Ranchi</p>
            <p>Email: info@example.com</p>
            <p>Phone: +91 742 898 9898</p>
            <div className="mt-4">
              <a href="https://facebook.com" className="text-blue-200 hover:text-white mx-2"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-blue-200 hover:text-white mx-2"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-blue-200 hover:text-white mx-2"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-blue-200 hover:text-white mx-2"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
