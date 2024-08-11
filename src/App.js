import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Importing components

import Home from './components/Home';
import OurCenter from './components/OurCenter';
import Offerings from './components/Offerings';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import Nuser from './components/Nuser';
import LoginPage from './components/LoginPage';
import ContactUs from './components/ContactUs';
import Performance from './components/science/performance';
import Mock from './components/science/mock';
import SResult from './components/science/result';
import Test from './components/science/test';
import About from './components/science/about';
import Sdash from './components/science/sdash';
import Logout from './components/logout';
import UpdateProfile from './components/upprofile';
import Cdash from './components/comm/cdash';
import Dash from './components/arts/dash';

function App() {
  return (
    <Router>
      <div className="font-urbanist">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurCenter" element={<OurCenter />} />
          <Route path="/Offerings" element={<Offerings />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Nuser" element={<Nuser />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/mock" element={<Mock/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/result" element={<SResult/>} />
          <Route path="/sdash" element={<Sdash/>} />
          <Route path="/cdash" element={<Cdash/>} />
          <Route path="/dash" element={<Dash/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/upprofile" element={<UpdateProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
