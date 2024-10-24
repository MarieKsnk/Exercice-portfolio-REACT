import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1 className="site-title">MARIE KLISNICK</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/a-propos">A PROPOS</Link>
          </li>
          <li>
            <Link to="/projets">PROJETS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

