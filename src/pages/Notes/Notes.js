import React, { useState } from "react";
import Nav from "../Notes/components/Nav/Nav";
import '../../assets/css/bootstrap.min.css'
import AllNotes from "../Cart/AllNotes";

const Notes = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Nav/>
    </nav>
    <div>
      <AllNotes/>
    </div>
    </div>
    

  );
};

export default Notes;
