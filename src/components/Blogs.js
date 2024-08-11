import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Blogs = () => {
    const [connectionStatus, setConnectionStatus] = useState('');

    const checkAPIConnection = async () => {
        try {
            const response = await axios.get('http://localhost/my-app/src/api/conn.php');
            const data = response.data;
            if (data.connected) {
                setConnectionStatus('API is working and connected to the database.');
            } else {
                setConnectionStatus(`API is working but not connected to the database. Error: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            setConnectionStatus('Failed to connect to the API.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <button onClick={checkAPIConnection} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer">
                    Check API Connection
                </button>
                <p className={`mt-4 ${connectionStatus.includes('not') ? 'text-red-500' : 'text-green-500'}`}>
                    {connectionStatus}
                </p>
            </div>
        </div>
    );
};

export default Blogs;
