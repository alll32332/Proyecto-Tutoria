import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Desajustes.css'; // Asegúrate de tener este archivo CSS para los estilos

function Desajustes() {
  const navigate = useNavigate();
  const [respuestas, setRespuestas] = useState({
    "Manos y/o pies hinchados": "",
    "Dolores en el vientre": "",
    "Dolores de Cabeza y/o vómitos": "",
    "Pérdida de equilibrio": "",
    "Fatiga y agotamiento": "",
    "Pérdida de vista u oído": "",
    "Dificultades para dormir": "",
    "Pesadillas o terrores nocturnos": "",
    "Incontinencia (orina, heces)": "",
    "Tartamudeos al explicarse": "",
    "Miedos internos ante cosas": ""
  });

  const handleChange = (indicador, tipo) => {
    setRespuestas(prev => ({
      ...prev,
      [indicador]: tipo === prev[indicador] ? "" : tipo
    }));
  };

  return (
    <div className="desajustes-container">
      <div className="header-container">
        <h1>Desajustes Psicofisiológicos</h1>
        {/* Botón de colores pastel degradados con navegación */}
        <button className="pastel-button" onClick={() => navigate('/Sexpediente')}>
          Siguiente
        </button>
      </div>

      <table className="tabla-desajustes">
        <thead>
          <tr>
            <th>Indicadores</th>
            <th>Frecuente/M</th>
            <th>Muy Frecuente/M</th>
            <th>Nunca</th>
            <th>Antes</th>
            <th>A veces</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(respuestas).map((indicador) => (
            <tr key={indicador}>
              <td>{indicador}</td>
              <td>
                <button
                  className={respuestas[indicador] === "Frecuente/M" ? "selected" : ""}
                  onClick={() => handleChange(indicador, "Frecuente/M")}
                >
                  {respuestas[indicador] === "Frecuente/M" ? "✔️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  className={respuestas[indicador] === "Muy Frecuente/M" ? "selected" : ""}
                  onClick={() => handleChange(indicador, "Muy Frecuente/M")}
                >
                  {respuestas[indicador] === "Muy Frecuente/M" ? "✔️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  className={respuestas[indicador] === "Nunca" ? "selected" : ""}
                  onClick={() => handleChange(indicador, "Nunca")}
                >
                  {respuestas[indicador] === "Nunca" ? "✔️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  className={respuestas[indicador] === "Antes" ? "selected" : ""}
                  onClick={() => handleChange(indicador, "Antes")}
                >
                  {respuestas[indicador] === "Antes" ? "✔️" : "❌"}
                </button>
              </td>
              <td>
                <button
                  className={respuestas[indicador] === "A veces" ? "selected" : ""}
                  onClick={() => handleChange(indicador, "A veces")}
                >
                  {respuestas[indicador] === "A veces" ? "✔️" : "❌"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Desajustes;
