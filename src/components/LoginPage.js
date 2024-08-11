import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
        try {
            const response = await axios.post(
                'http://localhost/my-app/src/api/login.php',
                new URLSearchParams({ username, password }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const result = response.data;
            console.log('Server response:', result); // Log the server response for debugging
            if (result.success) {
                window.location.href = result.redirectUrl;
            } else {
                setError(result.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error); // Log any caught error for debugging
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex w-full h-full">
                <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center items-start slide-in-left">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800">Hello, welcome!</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit} className="w-full">
                        <input
                            type="text"
                            name="username"
                            placeholder="Email address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>Remember me</span>
                            </label>
                            <a href="admin/index.php" className="text-blue-500">Admin Login</a>
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className="w-full px-4 py-2 mb-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 cursor-pointer"
                        />
                        <input
                            type="button"
                            value="Sign up"
                            onClick={() => (window.location.href = '/nuser')}
                            className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                        />
                    </form>
                    <div className="flex justify-center mt-4 space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 background-image bg-blue-700 p-12 text-white flex flex-col justify-center items-start slide-in-right">
                    <h2 className="text-4xl font-bold mb-4">About NTA CUET</h2>
                    <p className="mb-4">
                        The National Testing Agency (NTA) conducts the Common University Entrance Test (CUET) for admission to various undergraduate courses in central and other participating universities. It provides a single window opportunity for students to seek admission in these institutions across the country.
                    </p>
                    <h3 className="text-3xl font-bold mb-2">Benefits of CUET</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Uniform Assessment: Provides a common platform and equal opportunities to candidates across the country, especially those from rural and other remote areas.</li>
                        <li className="mb-2">Fair and Transparent: Ensures a more uniform and fair assessment system.</li>
                        <li className="mb-2">Reduced Pressure: Helps in reducing the pressure on students of appearing in multiple entrance exams.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
