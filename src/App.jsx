import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import Home from './pages/Home'
import About from './pages/About';


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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
