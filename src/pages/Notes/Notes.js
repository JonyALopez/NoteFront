import React, { useState } from "react";
import Nav from "../Notes/components/Nav/Nav";
import '../../assets/css/bootstrap.min.css'

const Notes = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Nav/>
    </nav>
  );
};

export default Notes;
