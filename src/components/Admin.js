import React from "react";
import "./Admin.css"; // Importamos los estilos

const Admin = () => {
  return (
    <div className="admin-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Departamento de Desarrollo Academico</div>
        <nav className="nav">
          <a href="#" className="nav-link">Expediente</a>
          <a href="#" className="nav-link">Creditos Complementarios</a>
          <a href="#" className="nav-link">Bajas </a>
          <a href="#" className="nav-link">Tutores</a>
      
          <a href="#" className="nav-link">Accede</a>
          <a href="#" className="register">Regístrate</a>
        </nav>
      </header>

      {/* Banner Principal */}
      <section className="banner">
        <h1>Bienvenido Administrador</h1>
        <p>¡Tienes más de 14.000 proveedores para elegir!</p>

        <div className="search-box">
          <input type="text" placeholder="¿Qué buscas?" />
          <input type="text" placeholder="¿Dónde?" />
          <button>Buscar</button>
        </div>
      </section>

     
      
    </div>
  );
};

export default Admin;
