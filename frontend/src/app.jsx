import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch, useLocation, useHistory } from "react-router-dom"; // For handling smooth transitions
import { AnimatePresence } from "framer-motion";
import Landing from './routes/landing/landing.jsx';
import Aboutus from './routes/aboutus/aboutus.jsx';
import Login from './routes/login/login.jsx';
import Signup from './routes/signup/signup.jsx';

function App() {

    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Landing />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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