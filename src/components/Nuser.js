import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Nuser = () => {
  <Navbar />
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    city: '',
    school: '',
    phn_no: '',
    target_year: '',
    stream: '',
    password: ''
  });
  const [sessionMsg, setSessionMsg] = useState('');

  useEffect(() => {
    const sessionMessage = sessionStorage.getItem('add');
    if (sessionMessage) {
      setSessionMsg(sessionMessage);
      sessionStorage.removeItem('add');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/my-app/src/api/reg.php', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.success) {
        setSessionMsg('An Sucessy again.');
        <dash />
      } else {
        setSessionMsg(response.data.message);
      }
    } catch (error) {
      setSessionMsg('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className="bg-blue-700 py-4 shadow-teal-700">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-semibold mb-6 text-center underline-offset-auto text-blue-700">Register Here</h1>

        {sessionMsg && (
          <p className="text-red-500 text-center mb-4 shadow-md">{sessionMsg}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 shadow-lg gap-6">
            {[
              { label: 'First Name', name: 'first_name', type: 'text', placeholder: 'Enter your first name' },
              { label: 'Last Name', name: 'last_name', type: 'text', placeholder: 'Enter your last name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
              { label: 'City', name: 'city', type: 'text', placeholder: 'Your city' },
              { label: 'School Name', name: 'school', type: 'text', placeholder: 'Your school name' },
              { label: 'Phone No', name: 'phn_no', type: 'tel', placeholder: 'Phone number', minLength: 10, maxLength: 10 },
              { label: 'Target Year', name: 'target_year', type: 'text', placeholder: 'Target year' },
              { label: 'Password', name: 'password', type: 'password', placeholder: 'Your password' }
            ].map(({ label, name, type, placeholder, minLength, maxLength }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-semibold text-gray-700">{label}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 shadow-md py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-700"
                  required
                  minLength={minLength}
                  maxLength={maxLength}
                />
              </div>
            ))}
            <div>
              <label htmlFor="gender" className="block text-sm font-semibold text-gray-700">Gender</label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 shadow-md py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-700"
                required
              >
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div>
              <label htmlFor="stream" className="block text-sm font-semibold text-gray-700">Stream</label>
              <select
                name="stream"
                id="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-4 shadow-md py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-700"
                required
              >
                <option value="">Please select one…</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button type="submit" name="submit" className="w-full px-4 shadow-md py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Nuser;
