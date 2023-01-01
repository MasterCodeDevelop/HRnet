import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link className="header-logo" to="/">
        LOGO
      </Link>
      <nav className="header-nav">
        <NavLink to="/employees">View Current Employees</NavLink>
      </nav>
    </header>
  );
}
