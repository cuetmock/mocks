import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        city: '',
        gender: '',
        school: '',
        stream: '',
        phn_no: '',
        target_year: '',
        password: ''
    });

    useEffect(() => {
        // Fetch the user's current data from the backend
        axios.get('/api/user/profile')  // Adjust the endpoint as per your backend setup
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/user/update', formData)  // Adjust the endpoint as per your backend setup
            .then(response => {
                // Handle successful update
                alert('Profile updated successfully!');
            })
            .catch(error => {
                // Handle error
                console.error("There was an error updating the profile!", error);
            });
    };

    return (
        <div className="max-w-lg mx-auto p-8 py-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-6 text-center text-blue-800">Update Profile</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            name="gender"
                            id="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Please select one…</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="school" className="block text-sm font-medium text-gray-700">School Name</label>
                        <input
                            type="text"
                            name="school"
                            id="school"
                            value={formData.school}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phn_no" className="block text-sm font-medium text-gray-700">Phone No</label>
                        <input
                            type="text"
                            name="phn_no"
                            id="phn_no"
                            value={formData.phn_no}
                            onChange={handleChange}
                            minLength="10"
                            maxLength="10"
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="target_year" className="block text-sm font-medium text-gray-700">Target Year</label>
                        <input
                            type="text"
                            name="target_year"
                            id="target_year"
                            value={formData.target_year}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="stream" className="block text-sm font-medium text-gray-700">Stream</label>
                        <select
                            name="stream"
                            id="stream"
                            value={formData.stream}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Please select one…</option>
                            <option value="science">Science</option>
                            <option value="commerce">Commerce</option>
                            <option value="arts">Arts</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
