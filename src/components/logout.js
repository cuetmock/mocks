import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost/my-app/src/api/logout.php')
            .then(response => {
                // Handle successful logout
                navigate('/login'); // Redirect to login page
            })
            .catch(error => {
                // Handle error
                console.error("There was an error logging out!", error);
            });
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold text-blue-800">Logging out...</h1>
        </div>
    );
};

export default Logout;
