import Home from './pages/Home';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {

  return (
    <>
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
    </>
  )
}

export default App
