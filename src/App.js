import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './example/Dashboard/Dashboard';
import RegistrationForm from './RegistrationForm';
import Loginsigup from './example/Loginsignupcomponent/Loginsigup';
import ReactParticles from './ReactParticles';


function App() {
  return (
    <div className="App">
      {/* <ReactParticles /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Loginsigup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<RegistrationForm />} />

      
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
