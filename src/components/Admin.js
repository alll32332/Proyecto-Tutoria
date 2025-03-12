import React, { useRef } from 'react';
import './Admin.css';

const Admin = () => {
  // Usamos useRef para crear una referencia al campo de búsqueda
  const searchInput = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Accedemos al valor del campo de búsqueda a través de la referencia
    const query = searchInput.current.value;
    console.log("Buscando:", query);

    // Aquí puedes agregar la lógica para realizar una búsqueda real.
  };

  return (
    <div className="admin-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><a href="#contenedor1">Expediente</a></li>
          <li><a href="#contenedor2">Créditos complementarios</a></li>
          <li><a href="#contenedor3">Bajas</a></li>
          <li><a href="#contenedor4">Tutores</a></li>
        </ul>
      </nav>

      {/* Buscador */}
      <div className="search-container">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Ingresa Numero de control"
            ref={searchInput} // Asociamos el input con la referencia
            className="search-input"
          />
          
        </form>
      </div>

     
        
    </div>
  );
};

export default Admin;
