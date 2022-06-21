import React from "react";
import { Link } from "react-router-dom";
import "../../../../assets/css/bootstrap.min.css";
import './Nav.css'

const options = [
  {
    name: "All notes",
  },
  {
    name: "Create Note",
  },
  {
    name: "Logout",
  },
];

const Nav = () => {
  return (
    <div calssName="container">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link
        className="nav-link activele"
        to={"/Notes"}
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        All Notes
      </Link>
      </li>
      <li>
      <Link
        className="nav-link active"
        to={"/CreateNote"}
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        Create Note
      </Link>
      </li>
      <li className="cur">

      <Link
        className="nav-link active"
        to={"/"}
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        Logout
      </Link>
    </li>
    </ul>
    </div>
    
    
    
  );
};
export default Nav;
