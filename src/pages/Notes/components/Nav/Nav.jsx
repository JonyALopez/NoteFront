import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "../../../../assets/css/bootstrap.min.css";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  function handleSubmit(){
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date')
    navigate ("/");

  }
  return (
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
      <li>
      <button type="button" className="btn btn-dark" onClick={handleSubmit}>Logout</button>

      </li>
    </ul>
  );
};
export default Nav;
