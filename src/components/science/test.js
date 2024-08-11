import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Test = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const testId = queryParams.get('testid');

    const [questions, setQuestions] = useState([]); // Ensure it's initialized as an empty array
    const [user, setUser] = useState(null); // Simulating user session
    const [attemptedQuestions, setAttemptedQuestions] = useState(new Set());

    useEffect(() => {
        if (!testId) {
            alert('Test ID not set.');
            return;
        }

        // Simulate session check
        const userSession = {
            userId: 1,
            username: 'testuser',
            email: 'testuser@example.com'
        };
        setUser(userSession);

        if (!userSession) {
            alert('User not logged in.');
            navigate('/login'); // Redirect to login page if user not logged in
            return;
        }

        // Fetch questions from backend
        axios.get(`http://localhost/my-app/src/api/test.php?testid=${testId}`, { withCredentials: true })
            .then(response => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    setQuestions(response.data);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the questions!', error);
            });
    }, [testId, navigate]);

    const handleOptionChange = (questionId, optionIndex) => {
        setAttemptedQuestions(prevState => {
            const updatedState = new Set(prevState);
            updatedState.add(questionId);
            return updatedState;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Test submitted!');
        // Implement form submission logic here
    };

    if (!testId) {
        return <p>Test ID not set.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            {/* Fixed Dashboard */}
            <div className="fixed-dashboard">
                <div className="font-bold text-xl">Dashboard</div>
                <div id="question-dashboard" className="flex flex-wrap">
                    {questions.length > 0 ? questions.map((_, index) => (
                        <div
                            key={index}
                            className={`question-circle ${attemptedQuestions.has(index + 1) ? 'attempted' : 'not-attempted'}`}
                        >
                            {index + 1}
                        </div>
                    )) : <p>No questions available.</p>}
                </div>
                <div className="text-gray-600 mt-2">Total Questions: {questions.length}</div>
                <div className="text-gray-600">Attempted: {attemptedQuestions.size}</div>
            </div>

            {/* Main Content */}
            <main className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="font-bold text-2xl mb-4">Answer the Questions Carefully</div>
                    <form onSubmit={handleSubmit} id="mock-test-form">
                        {questions.length > 0 ? questions.map((q, index) => (
                            <div key={q.id} className="question p-4 mb-4 bg-gray-50 rounded-lg shadow">
                                <p className="text-xl"><strong>Q{index + 1}:</strong> {q.question}</p>
                                <div className="options pl-8 mt-2">
                                    {q.options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="flex items-center mb-2">
                                            <input
                                                className="mr-2"
                                                type="radio"
                                                id={`option${q.id}_${optionIndex}`}
                                                name={q.id}
                                                value={option}
                                                onChange={() => handleOptionChange(q.id, optionIndex)}
                                            />
                                            <label htmlFor={`option${q.id}_${optionIndex}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )) : <p>Loading questions...</p>}
                        <br />
                        <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Test;
