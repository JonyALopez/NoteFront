import React from 'react';
import './App.css';
import Login from './pages/SingIn/Login'
import SingUp from './pages/SingUp/SingUp'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/SingUp" element ={<SingUp/>}/>
    </Routes>
  </Router>

  );
}

export default App;
