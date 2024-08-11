import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurCenter from './components/OurCenter';
import Offerings from './components/Offerings';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';
import Nuser from './components/Nuser';
import LoginPage from './components/LoginPage';
import ContactUs from './components/ContactUs';
import Performance from './components/Performance';
const routes = [
  { path: '/OurCenter', element: <OurCenter /> },
  { path: '/Offerings', element: <Offerings /> },
  { path: '/Blogs', element: <Blogs /> },
  { path: '/AboutUs', element: <AboutUs /> },
  { path: '/nuser', element: <Nuser /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contactus', element: <ContactUs /> },
  { path: '/Home',element: <Home/>}
];

export default routes;
