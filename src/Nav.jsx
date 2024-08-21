import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to="/GroupedTeamsMembers">Teams</Link>
        </li>
        </ul>
    </nav>
  );
}

export default Nav;
