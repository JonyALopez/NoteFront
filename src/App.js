import React, { useState } from "react";
import "./App.css";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CreateNotes from "./pages/Notes/createNote/CreateNotes";
import EditNotes from "./pages/Notes/editNote/EditNotes";
import Notes from "./pages/Notes/Notes";
import SetPassword from "./pages/SetPassword/SetPassword";
import Login from "./pages/SingIn/Login";
import SingUp from "./pages/SingUp/SingUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SessionContext } from "./provider/sessionContext";


function App() {
  const [session, setSession] = useState({});
  return (
    <SessionContext.Provider value={{ session, setSession }}>
       <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/CreateNote" element={<CreateNotes />} />
          {/* <Route path="/EditNote" element={<EditNotes />} /> */}
          <Route path="/Notes" element={<Notes />} />
          <Route path="/NewPassword" element={<SetPassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </SessionContext.Provider>
  );
}

export default App;
