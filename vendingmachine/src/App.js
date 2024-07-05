import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import CheezIt from './Snack1';
import Doritos from './Snack2';
import Pretzels from './Snack3';

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack1" element={<CheezIt />} />
          <Route path="/snack2" element={<Doritos />} />
          <Route path="/snack3" element={<Pretzels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
