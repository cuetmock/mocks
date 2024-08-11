import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const test_id = queryParams.get('testid') || null; // Extract the test_id from the query parameters

    return (
        <div className="container mx-auto p-4">
            {/* Header */}
            <header className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold">CUETMOCK</div>
                </div>
                <div>
                    <Link to="/mock" className="text-gray-300 navbar-item py-2 px-4 rounded-lg hover:bg-gray-700">
                        Back to Mocks
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-4">About Our Mock Tests</div>
                    <p className="text-gray-600 mb-4">
                        Our mock tests are designed to simulate the real exam environment and help you prepare effectively for your upcoming exams. These tests provide a comprehensive assessment of your knowledge and skills in various subjects, helping you identify your strengths and areas for improvement.
                    </p>

                    <div className="font-bold text-xl mb-2">Number of Questions and Total Marks</div>
                    <p className="text-gray-600 mb-4">
                        Each mock test consists of 180 questions, divided equally among the subjects. The total marks for the mock test are 720, with each question carrying 4 marks. There is a penalty of 1 mark for each incorrect answer, ensuring that you are well-prepared for the negative marking scheme in the actual exam.
                    </p>

                    <div className="font-bold text-xl mb-2">Benefits of Our Mock Tests</div>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Realistic exam simulation to help you get accustomed to the exam format and time constraints.</li>
                        <li>Detailed performance analysis to identify your strengths and weaknesses.</li>
                        <li>Customizable tests based on different subjects and topics.</li>
                        <li>Boosts confidence and improves time management skills.</li>
                        <li>Regular practice to ensure you are well-prepared for the actual exam.</li>
                    </ul>

                    <div className="text-center mt-6">
                        {/* Include the testid in the URL */}
                        <Link to={`/test?testid=${test_id}`} className="bg-blue-500 text-white py-2 px-4 rounded">
                            Start Your Mock Test Now
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
