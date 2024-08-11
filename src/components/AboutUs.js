import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avgScore, setAvgScore] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/dashboard-data.php');
        const { username, email, avgScore } = response.data;
        setUsername(username);
        setEmail(email);
        setAvgScore(avgScore);
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between py-4">
        <div className="text-3xl font-bold">Hi {username},</div>
        <div className="relative profile-dropdown mx-3">
          <button className="focus:outline-none">
            <img
              src="https://as1.ftcdn.net/v2/jpg/07/63/22/82/1000_F_763228246_UdhahPPaMlRH1S0PAbkuOPATQWxZa3zH.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />
          </button>
          <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden">
            <a href="../uprofile.php" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Update Profile</a>
            <a href="../logout.php" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</a>
          </div>
        </div>
      </header>

      {/* Dashboard Navbar */}
      <nav className="bg-black p-4 rounded-lg shadow mb-4">
        <ul className="flex space-x-4 justify-around">
          <li><a href="/AboutUs" className="text-white font-bold navbar-item py-2 px-4 rounded-lg">Dashboard</a></li>
          <li><a href="/Offerings" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">My Results</a></li>
          <li><a href="/performance" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Performance</a></li>
          <li><a href="/mock" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mocks</a></li>
          <li><a href="#" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mailbox</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-2 space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center relative">
            <div className="text-2xl font-bold">CUETPLUS</div>
            <div className="text-xl">Practicing Success</div>
            <div className="mt-4">Score High and Win!</div>
            <div>Based upon your score in CUETMOCK free test papers, get a scholarship up to 30% on ANY PLAN!</div> <br />
            <a href="mock.php" className="mt-4 bg-blue-500 text-white p-2 rounded">Start Scoring</a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-xl mb-2">All India Test for CUET: 2024</div>
            <div className="text-gray-600">Can Combine Max. 3 Subjects.</div>
            <div className="text-gray-600 mt-2">₹99/- for 1 | ₹159/- for 2 | ₹199/- for 3 subjects</div>
            <div className="mt-4">No data found. All India Tests to be listed soon...</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-xl mb-2">Weekly Mocks</div>
            <div className="text-gray-600">Session: 2024-25 | Starts from April 2024</div>
            <div className="mt-4">No data found. Next Weekly Mocks to be listed soon...</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-xl mb-2">Overall Performance</div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-green-500 h-4 rounded-full" style={{ width: `${avgScore}%` }}></div>
            </div>
            <div className="text-center text-gray-600">Your overall performance is {avgScore}%</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow relative">
            <div className="font-bold text-xl mb-2">Verify Your Email</div>
            <input type="text" value={email} className="p-2 border rounded w-full mb-2" readOnly />
            <input type="text" placeholder="Email Ver. Code" className="p-2 border rounded w-full mb-2" />
            <button className="bg-blue-500 text-white p-2 rounded w-full">Verify Now</button>
            <div className="text-sm text-gray-600 mt-2">Check your email INBOX/SPAM Folder for EVC. Put the code and click "Verify Now".</div>
            <button className="mt-2 text-blue-500">Resend EVC</button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-xl mb-2">Get Free Mocks Worth ₹199/- On Sharing</div>
            <div className="text-gray-600">4 Chapter-wise Mocks | 2 Weekly Tests</div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-xl mb-2">Regular Mocks</div>
            <a href="mock.php" className="text-blue-600 font-semibold mb-2">CUET Mock Papers</a>
            <div className="text-gray-600 ml-4">Chapter-wise Mocks</div>
            <div className="text-gray-600 ml-4">Full Subject Mocks</div>
            <div className="text-gray-600 ml-4">Previous Year Papers</div>
            <a href=".php" className="text-blue-600 font-semibold mb-2 mt-2">English Mock Papers</a> <br />
            <a href="gdash.php" className="text-blue-600 font-semibold mb-2">General Test Mock Papers</a>

            <div className="mt-4"><a href="../uprofile.php" className="text-blue-500">Update Subjects</a></div>
            <div className="mt-4 bg-green-100 p-2 rounded text-green-700 text-center">Need More Mocks? Buy a Plan</div>
            <div className="mt-2 text-center">Call Support at +91 74 2898 9898</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
