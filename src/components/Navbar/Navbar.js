import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar auto navbar-light bg-light">

      <Link class="navbar-brand h3" to="/">Seth Martineau
      </Link>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;