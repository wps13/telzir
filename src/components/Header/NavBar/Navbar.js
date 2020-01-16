import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__list">
      <Link to="/">
        <li>Inicio</li>
      </Link>
      <Link to="/planos">
        <li>Planos</li>
      </Link>
      <Link to="/contato">
        <li>Contato</li>
      </Link>
    </ul>
  </nav>
);

export default Navbar;
