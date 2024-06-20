import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NavbarComp from "./components/NavbarComp";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
