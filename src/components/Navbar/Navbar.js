import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <divnav className="navbar navbar-expand-lg navbar-light dusty">
      <Link className="navbar-brand text-white p-3" to="/about">
        Seth Martineau
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/react-portfolio/about"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link"} class="text-white p-3"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/react-portfolio/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} class="text-white p-3"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/react-portfolio/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} class="text-white p-3"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </divnav>
  )
}

export default Navbar;