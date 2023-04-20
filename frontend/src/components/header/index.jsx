import { Link } from 'react-router-dom';
import React from 'react';

import Logo from '../../assets/imgs/logo.jpg';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className="navbar_container">
        <nav className="navbar">
          <img className="logo" alt="Logo" src={Logo} />
          <ul className="list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/diretorias">Diretorias</Link>
            </li>
            <li className="item">
              <Link to="/mapaGeral">Mapa do IF</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
