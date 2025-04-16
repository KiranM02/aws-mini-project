// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // we'll create this next

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Employee Manager</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        {/* <li><Link to="/employees">Employees</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
