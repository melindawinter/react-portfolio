import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm mb-5">
        <Link className="navbar-brand hover" to="/">
          <h3>Melinda Winter</h3>
        </Link>
        <ul className="navbar-nav ml-auto">
          <Link className="nav-link active hover" to="/">
            <li>About</li>
          </Link>
          <Link className="nav-link active hover" to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link className="nav-link active hover" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
