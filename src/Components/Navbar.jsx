import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo-definitivo.png';

const Navbar = () => {
  return (
    <nav className="navbar-hover-area">
      <div className="new-navbar">
        <ul className="nav-left">
          <li><a href="/citas">Citas</a></li>
          <li><a href="/nails">Uñas</a></li>
          <li><a href="/eyes">Pestañas</a></li>
        </ul>

        <div className="nav-logo">
          <img src={logo} alt="Nails & Lashes" />
        </div>

        <ul className="nav-right">
          <li><a href="/sobre-mi">Sobre mí</a></li>
          <li><a href="/galeria">Galería</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


