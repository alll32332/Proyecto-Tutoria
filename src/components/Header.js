// src/components/Header.js
import React from 'react';
import './Header.css';  // Importamos los estilos

const Header = () => {
  return (
    <header className="header">
      <div className="title-container">
        <h1 className="header-title">Programa Institucional de Tutorias</h1>
      </div>
      <div className="logo-container">
        <img 
          src="/Instituto.png"  // Ruta del logo, ajusta según tu configuración
          alt="Logo" 
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
