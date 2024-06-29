import './App.css';
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Suspense>
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
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
