import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getColorClass = (score) => {
    if (!is_numeric(score)) {
        return 'score-red';
    } else if (score >= 85) {
        return 'score-green';
    } else if (score >= 70) {
        return 'score-yellow';
    } else {
        return 'score-red';
    }
};

const is_numeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);

const Offerings = () => {
    const [results, setResults] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/result.php');
                setResults(response.data);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <header className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold">Hi {results.username || 'User'},</div>
                </div>
                <div className="relative profile-dropdown mx-3">
                    <button className="focus:outline-none">
                        <img src="https://as1.ftcdn.net/v2/jpg/07/63/22/82/1000_F_763228246_UdhahPPaMlRH1S0PAbkuOPATQWxZa3zH.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
                    </button>
                    <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden">
                        <a href="../uprofile.php" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Update Profile</a>
                        <a href="../logout.php" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</a>
                    </div>
                </div>
            </header>

            <nav className="bg-black p-4 rounded-lg shadow mb-4">
        <ul className="flex space-x-4 justify-around">
          <li><a href="/AboutUs" className="text-white font-bold navbar-item py-2 px-4 rounded-lg">Dashboard</a></li>
          <li><a href="/Offerings" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">My Results</a></li>
          <li><a href="/performance" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Performance</a></li>
          <li><a href="/mock" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mocks</a></li>
          <li><a href="#" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mailbox</a></li>
        </ul>
      </nav>

            <main className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-2">Overall Performance</div>
                    <div className="text-gray-600">Your overall performance score in the mocks.</div>
                    <div className="mt-4 text-lg">
                        <span className="font-bold">Overall Score:</span>
                        <span className={`px-4 py-2 rounded ${getColorClass(results.overall)}`}>
                            {results.overall !== undefined ? results.overall : 'No Data'}
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-2">Subject-wise Performance</div>
                    <div className="text-gray-600">Your performance score in each subject.</div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.subjects ? Object.entries(results.subjects).map(([subject, score]) => (
                            <div key={subject} className={`p-4 rounded-lg shadow ${getColorClass(score)}`}>
                                <div className="font-bold text-xl mb-2">{subject}</div>
                                <div className="text-lg">
                                    {is_numeric(score) ? score : "Not Attempted"}
                                </div>
                            </div>
                        )) : 'No Data Available'}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Offerings;
