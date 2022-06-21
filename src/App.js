import React from 'react';
import './App.css';
import Login from './pages/SingIn/Login'
import SingUp from './pages/SingUp/SingUp'
import CreateNotes from './pages/Notes/createNote/CreateNotes'
import EditNotes from './pages/Notes/editNote/EditNotes'
import Notes from './pages/Notes/Notes'
import Nav from './assets/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/SingUp" element ={<SingUp/>}/>
       <Route path="/CreateNote" element ={<CreateNotes/>}/>
       <Route path="/EditNote" element ={<EditNotes/>}/>
       <Route path="/Notes" element ={<Notes/>}/>
       <Route path="Nav" element ={<Nav/>}/>
    </Routes>
  </Router>

  );
}

export default App;
