import './App.css';
import { BrowserRouter } from "react-router-dom";

import AppRoutes from './components/AppRoutes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
