import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom"; // For handling smooth transitions
import { AnimatePresence } from "framer-motion";
import Landing from './routes/landing/landing.jsx';
import Aboutus from './routes/aboutus/aboutus.jsx';
import Login from './routes/login/login.jsx';
import Signup from './routes/signup/signup.jsx';
import ForgotPassword from './routes/forgotPassword/forgotPassword.jsx';
import Home from './routes/home/home.jsx';
import Tasks from './routes/tasks/tasks.jsx';
import Profile from './routes/profile/profile.jsx';
import Settings from './routes/settings/settings.jsx';
function App() {

    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Landing />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
          </Routes>
      </AnimatePresence>
    );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}