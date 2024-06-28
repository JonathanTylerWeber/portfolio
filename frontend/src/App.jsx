import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              exact
              path="/about"
              element={<About />}
            />
            <Route
              exact
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
