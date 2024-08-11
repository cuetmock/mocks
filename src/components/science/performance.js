import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

const Performance = () => {
  const [username, setUsername] = useState('User');
  const [performanceData, setPerformanceData] = useState({
    labels: ['Biology', 'Physics', 'Chemistry', 'Maths', 'English', 'General Knowledge'],
    scores: []
  });

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get('http://localhost/my-app/src/api/performance.php', { withCredentials: true });
        const data = response.data;
        setPerformanceData({
          labels: data.labels,
          scores: data.scores
        });
        setUsername(data.username);

        const ctx = document.getElementById('performanceChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Scores',
              data: data.scores,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold">Hi {username},</div>
        </div>
        <div className="relative profile-dropdown mx-3">
          <button className="focus:outline-none">
            <img src="https://as1.ftcdn.net/v2/jpg/07/63/22/82/1000_F_763228246_UdhahPPaMlRH1S0PAbkuOPATQWxZa3zH.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
          </button>
          <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden">
            <Link to="/uprofile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Update Profile</Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</Link>
          </div>
        </div>
      </header>

      {/* Dashboard Navbar */}
      <nav className="bg-black p-4 rounded-lg shadow mb-4">
        <ul className="flex space-x-4 justify-around">
        <li><a href="/sdash" className="text-gray-300  navbar-item py-2 px-4 rounded-lg">Dashboard</a></li>
          <li><a href="/result" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">My Results</a></li>
          <li><a href="/performance" className="text-white font-bold navbar-item py-2 px-4 rounded-lg">Performance</a></li>
          <li><a href="/mock" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mocks</a></li>
          <li><a href="#" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mailbox</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="font-bold text-2xl mb-2">Performance Overview</div>
          <div className="text-gray-600">Track your performance over various mock tests.</div>
          <div className="mt-4">
            <canvas id="performanceChart"></canvas>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Performance;
