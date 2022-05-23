import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import React from "react";
import Tour from "./pages/Tour";

function App() {
  return (
      <div>
          <SearchAppBar />
          <Router>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/:id' element={<Tour />} />
              </Routes>
          </Router>
      </div>

  );
}

export default App;
