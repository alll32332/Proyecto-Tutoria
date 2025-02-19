import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate de react-router-dom
import './Home.css'; // Asegúrate de tener este archivo de estilos
import libreImage from './Imagenes/libres.jpg'; // Importa la imagen correctamente

const Home = () => {
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función que maneja la navegación al hacer clic en el botón "Expediente"
  const handleExpedienteClick = () => {
    navigate('/expediente'); // Redirige a la ruta "/expediente"
  };

  return (
    <div className="home-container">
      {/* Contenedor para la imagen a la izquierda */}
      <div className="image-container">
        <img src={libreImage} alt="Imagen Libre" className="imagen" />
      </div>

      {/* Contenedor para el contenido a la derecha */}
      <div className="content-container">
        <h1>Bienvenido</h1>
        <p>Este es el contenido que va al lado derecho de la imagen. Aquí puedes agregar más información sobre la página.</p>
        
        {/* Botones emergentes */}
        <div className="button-container">
          <button className="popup-btn">Realizar evaluación</button>
          {/* El botón Expediente redirige al componente Expediente */}
          <button className="popup-btn" onClick={handleExpedienteClick}>Expediente</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

