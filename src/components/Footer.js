import React from 'react';
import './Footer.css'; // Aquí irán los estilos del footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>WhatsApp</h3>
          <p>276 117 51 94</p>
        </div>

        <div className="footer-section">
          <h3>Encuentranos en...</h3>
          <p> Camino Real s/n Barrio de Tetela,Libres,Puebla</p>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/itslibres/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/channel/UCuRoOSNe6H-j7uAWsUC9YUg" target="_blank" rel="noopener noreferrer">Youtube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
