import React, { useState, useEffect } from 'react';

const Mock = () => {
    // Simulate a logged-in user
    const [session, setSession] = useState({
        user_id: 1,
        username: "User123"
    });

    // Extract test ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const test_id = urlParams.get('testid') || null; // Simplified using || operator

    // Profile dropdown state
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    // Hide dropdown when clicking outside
    const handleClickOutside = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    if (!session.user_id) {
        return <div>User not logged in.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            {/* Header */}
            <header className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold">Hi {session.username},</div>
                </div>
                <div className="relative profile-dropdown mx-3">
                    <button className="focus:outline-none" onClick={toggleDropdown}>
                        <img
                            src="https://as1.ftcdn.net/v2/jpg/07/63/22/82/1000_F_763228246_UdhahPPaMlRH1S0PAbkuOPATQWxZa3zH.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-gray-300"
                        />
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                            <a href="/upprofile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Update Profile</a>
                            <a href="/logout.php" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Log Out</a>
                        </div>
                    )}
                </div>
            </header>
            
            {/* Dashboard Navbar */}
            <nav className="bg-black p-4 rounded-lg shadow mb-4">
                <ul className="flex space-x-4 justify-around">
                    <li><a href="/sdash" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Dashboard</a></li>
                    <li><a href="/result" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">My Results</a></li>
                    <li><a href="/performance" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Performance</a></li>
                    <li><a href="/mock" className="text-white font-bold navbar-item py-2 px-4 rounded-lg">Mocks</a></li>
                    <li><a href="#" className="text-gray-300 navbar-item py-2 px-4 rounded-lg">Mailbox</a></li>
                </ul>
            </nav>
            
            {/* Main Content */}
            <main className="space-y-4">
                {/* Mock Test Information */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-2">Mock Tests</div>
                    <div className="text-gray-600">Enhance your preparation with our comprehensive mock tests.</div>
                    <div className="mt-4 text-lg">Why Take Our Mock Tests?</div>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Simulates real exam conditions.</li>
                        <li>Provides detailed performance analysis.</li>
                        <li>Helps identify strengths and weaknesses.</li>
                        <li>Boosts confidence and time management skills.</li>
                    </ul>
                </div>

                {/* Full Mock Tests Section */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-2">Full Mock Tests</div>
                    <div className="text-gray-600">Take comprehensive full-length mock tests to simulate the actual exam environment.</div>
                    <div className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Full Mock Test 1 */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Full Mock Test 1</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Duration: 3 hours</li>
                                    <li>Sections: Physics, Chemistry, Maths</li>
                                    <li>Number of Questions: 180</li>
                                </ul>
                                <a href="/about?testid=1" id="full-test-1" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* Full Mock Test 2 */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Full Mock Test 2</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Duration: 3 hours</li>
                                    <li>Sections: Physics, Chemistry, Maths</li>
                                    <li>Number of Questions: 180</li>
                                </ul>
                                <a href="/about?testid=2" id="full-test-2" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* Full Mock Test 3 */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Full Mock Test 3</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Duration: 3 hours</li>
                                    <li>Sections: Physics, Chemistry, Maths</li>
                                    <li>Number of Questions: 180</li>
                                </ul>
                                <a href="/about?testid=3" id="full-test-3" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subject-wise Mock Tests */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-2">Subject-wise Mock Tests</div>
                    <div className="text-gray-600">Choose your subject to explore mock tests and their subtopics.</div>
                    <div className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Physics Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Physics</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Mechanics</li>
                                    <li>Thermodynamics</li>
                                    <li>Electromagnetism</li>
                                    <li>Optics</li>
                                    <li>Quantum Physics</li>
                                </ul>
                                <a href="/about?testid=10" id="physics-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* Chemistry Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Chemistry</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Physical Chemistry</li>
                                    <li>Organic Chemistry</li>
                                    <li>Inorganic Chemistry</li>
                                    <li>Analytical Chemistry</li>
                                    <li>Biochemistry</li>
                                </ul>
                                <a href="/about?testid=11" id="chemistry-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* Biology Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Biology</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Cell Biology</li>
                                    <li>Genetics</li>
                                    <li>Microbiology</li>
                                    <li>Ecology</li>
                                    <li>Human Anatomy</li>
                                </ul>
                                <a href="/about?testid=12" id="biology-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* Maths Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">Maths</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Algebra</li>
                                    <li>Calculus</li>
                                    <li>Geometry</li>
                                    <li>Trigonometry</li>
                                    <li>Statistics</li>
                                </ul>
                                <a href="/about?testid=13" id="maths-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* General Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">General</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>General Knowledge</li>
                                    <li>Current Affairs</li>
                                    <li>Logical Reasoning</li>
                                    <li>Data Interpretation</li>
                                    <li>Analytical Ability</li>
                                </ul>
                                <a href="/about?testid=15" id="general-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                            {/* English Section */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow">
                                <div className="font-bold text-xl mb-2">English</div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Grammar</li>
                                    <li>Vocabulary</li>
                                    <li>Comprehension</li>
                                    <li>Writing Skills</li>
                                    <li>Verbal Ability</li>
                                </ul>
                                <a href="/about?testid=14" id="english-test" className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block">Start Test</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                <div class="font-bold text-2xl mb-2">Mock Test Schedule</div>
                <div class="text-gray-600">Check out the upcoming mock test dates and register to secure your spot.</div>
                <table class="min-w-full bg-white mt-4">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 bg-gray-200">Test Name</th>
                            <th class="py-2 px-4 bg-gray-200">Date</th>
                            <th class="py-2 px-4 bg-gray-200">Time</th>
                            <th class="py-2 px-4 bg-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b">CUET Mock Test 1</td>
                            <td class="py-2 px-4 border-b">To be announce</td>
                            <td class="py-2 px-4 border-b">To be announce</td>
                            <td class="py-2 px-4 border-b">
                                <a href="register.php?testid=1" id="schedule-test-1" class="bg-blue-500 text-white py-1 px-3 rounded inline-block">Register</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-2 px-4 border-b">CUET Mock Test 2</td>
                            <td class="py-2 px-4 border-b">To be announce</td>
                            <td class="py-2 px-4 border-b">To be announce</td>
                            <td class="py-2 px-4 border-b">
                                <a href="register.php?testid=2" id="schedule-test-2" class="bg-blue-500 text-white py-1 px-3 rounded inline-block">Register</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            </main>
        </div>
    );
};

export default Mock;
