import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch, useLocation, useHistory } from "react-router-dom"; // For handling smooth transitions
import { AnimatePresence } from "framer-motion";
import Home from './home/home';
import Aboutus from './aboutus/aboutus.jsx';

function App() {

    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
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