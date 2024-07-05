import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        home
      </Link>
      <Link to="/snack1">
        cheez-it
      </Link>
      <Link to="/snack2">
        doritos
      </Link>
      <Link to="/snack3">
        pretzels
      </Link>
    </nav>
  );
}

export default NavBar;
