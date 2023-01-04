import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function Header() {
  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img src={logo} alt="Wealth Health Logo" />
      </Link>
      <nav className="header-nav">
        <NavLink className="btn btn-secondary" to="/">
          Create Employee
        </NavLink>
        <NavLink className="btn btn-secondary" to="/employees">
          View Current Employees
        </NavLink>
      </nav>
    </header>
  );
}
