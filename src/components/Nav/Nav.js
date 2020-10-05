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
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </nav>
    </div>
  );
}

export default Nav;
