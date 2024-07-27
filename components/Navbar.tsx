/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
        </div>
        <ul className={`navbar__list ${isOpen ? "navbar__list--open" : ""}`}>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Inicio
            </a>
          </li>
          <li className="navbar__item">
            <a href="/informacion" className="navbar__link">
              Información
            </a>
          </li>
          <li className="navbar__item">
            <a href="/contacto" className="navbar__link">
              Contacto
            </a>
          </li>
        </ul>
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <a href="/" className="sidebar__link" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li className="sidebar__item">
              <a
                href="/informacion"
                className="sidebar__link"
                onClick={toggleMenu}
              >
                Información
              </a>
            </li>
            <li className="sidebar__item">
              <a
                href="/contacto"
                className="sidebar__link"
                onClick={toggleMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
