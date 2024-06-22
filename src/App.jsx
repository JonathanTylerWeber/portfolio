import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import N2 from "./components/N2";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <N2 />
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
