import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Preloader from './Preloader'

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Preloader>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Preloader>
  );
};

export default AppRoutes;
