// AppRoutes.js
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
