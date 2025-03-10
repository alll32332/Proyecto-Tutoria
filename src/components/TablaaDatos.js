import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; // Importa useNavigate de react-router-dom
import './TablaaDatos.css';

function TablaaDatos() {
  const navigate = useNavigate(); // Usa el hook useNavigate

  // Definir los datos de la tabla
  const [datos, setDatos] = useState([
    { id: 1, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
    { id: 2, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
    { id: 3, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
    { id: 4, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
    { id: 5, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
    { id: 6, nombre: "", fechaNacimiento: "", sexo: "", estudios: "" },
  ]);

  // Función para manejar el cambio de los campos de la tabla
  const handleInputChange = (e, index, field) => {
    const newDatos = [...datos];
    newDatos[index][field] = e.target.value;
    setDatos(newDatos);
  };

  const handleGuardar = () => {
    // Aquí puedes manejar el guardar (por ejemplo, enviar los datos a la base de datos)
    console.log("Datos guardados", datos);
  };

  const handleSiguiente = () => {
    // Redirige a una nueva página cuando se hace clic en "Siguiente"
    console.log("Ir a la siguiente página...");
    navigate('/Desajustes'); // Reemplaza '/nueva-pagina' con la URL a la que quieras redirigir
  };

  return (
    <div className="tabla-container">
      
      <table className="tabla">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Estudios</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>
                <input
                  type="text"
                  value={dato.nombre}
                  onChange={(e) => handleInputChange(e, index, "nombre")}
                  placeholder="Nombre"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={dato.fechaNacimiento}
                  onChange={(e) => handleInputChange(e, index, "fechaNacimiento")}
                />
              </td>
              <td>
                <select
                  value={dato.sexo}
                  onChange={(e) => handleInputChange(e, index, "sexo")}
                >
                  <option value="">Seleccione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={dato.estudios}
                  onChange={(e) => handleInputChange(e, index, "estudios")}
                  placeholder="Estudios"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botones al final de la tabla */}
      <div className="tabla-buttons">
        <button onClick={handleGuardar} className="guardar-btn">Guardar</button>
        <button onClick={handleSiguiente} className="siguiente-btn">Siguiente</button>
      </div>
    </div>
  );
}

export default TablaaDatos;
