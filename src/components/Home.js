import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
       <Navbar />
      <header
        className="relative bg-cover bg-center pt-20 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="container mx-auto text-center lg:text-left py-16">
          <div className="lg:w-2/3 mx-auto">
            <p className="text-xl text-white">Take Free Mocks</p>
            <h1 className="text-5xl font-bold mt-2 text-white">CUET-UG 2024</h1>
            <p className="mt-4 text-white">Join India's Best Mock Test Platform</p>
            <Link
              to="/login"
              className="bg-white text-blue-500 mt-4 px-6 py-2 hover:bg-green-700 rounded-md inline-block"
            >
              Start Free Mocks
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-blue-700 font-bold mb-8">OUR SERVICES</h2>
            <div className="card-container">
              <div className="card">
                <h3 className="card-title">MOCKS</h3>
                <ul className="card-list list-disc pl-5 mb-4">
                  <li>Comprehensive mock tests</li>
                  <li>Detailed performance analysis</li>
                  <li>All-India ranking</li>
                  <li>Subject-wise feedback</li>
                </ul>
                <button className="card-button">Explore</button>
              </div>
              <div className="card">
                <h3 className="card-title">Classroom Programs</h3>
                <ul className="card-list list-disc pl-5 mb-4">
                  <li>Expert faculty</li>
                  <li>Interactive sessions</li>
                  <li>Personalized attention</li>
                  <li>Regular doubt-clearing sessions</li>
                </ul>
                <button className="card-button">Explore</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8">
              A little more before you start preparing for your CUET exam.
            </h1>
            <div className="card-container">
              <div className="card">
                <p className="text-blue-500 text-lg">What is NTA?</p>
                <h2 className="card-title">About NTA</h2>
                <p className="mt-4 text-gray-700">
                  National Testing Agency (NTA) is a government agency in India that was
                  officially sanctioned by the Union Council of Ministers and founded in November 2017...
                </p>
              </div>
              <div className="card">
                <p className="text-blue-500 text-lg">What is CUET?</p>
                <h2 className="card-title">About CUET</h2>
                <p className="mt-4 text-gray-700">
                  Common University Entrance Test (CUET) has been introduced for admission into Central, State,
                  Private and Deemed Universities...
                </p>
                <button className="card-button py-2">More About CUET 2024</button>
              </div>
              <div className="card">
                <p className="text-blue-500 text-lg">What is CUET Mock?</p>
                <h2 className="card-title">About CUETMOCK</h2>
                <p className="mt-4 text-gray-700">
                  CUETMOCK is an edutech platform started by a group of educationists, qualified teachers, and
                  domain subject experts...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">CUET PLUS</p>
            <p className="text-sm">Providing quality education since 2023</p>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-blue-200 hover:text-white">Courses</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-blue-200 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contactus" className="text-blue-200 hover:text-white">Contact</Link>
              </li>
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
    </>
  );
};

export default Home;
