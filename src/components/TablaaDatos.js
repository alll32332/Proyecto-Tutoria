import React, { useState } from "react"; 
import './TablaaDatos.css'; // Importamos el archivo CSS

function TablaDeDatos() {
  // Definir los datos de la tabla (con valores iniciales en los campos editables)
  const [datos, setDatos] = useState([
    { id: 1, nombre: "", fechaNacimiento: "", sexo: "", estudios: "", edad: 30, direccion: "Calle 123", telefono: "555-1234" },
    { id: 2, nombre: "", fechaNacimiento: "", sexo: "", estudios: "", edad: 25, direccion: "Avenida 456", telefono: "555-5678" },
    { id: 3, nombre: "", fechaNacimiento: "", sexo: "", estudios: "", edad: 40, direccion: "Calle 789", telefono: "555-9101" }
  ]);

  // Función para manejar el cambio de los datos en las celdas
  const handleChange = (e, id, field) => {
    const updatedData = datos.map((dato) => 
      dato.id === id ? { ...dato, [field]: e.target.value } : dato
    );
    setDatos(updatedData);
  };

  return (
    <div className="tabla-container">
     
      <table className="tabla">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Fecha de Nacimiento</th>
            <th>Sexo</th>
            <th>Estudios</th>
    
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>

              {/* Campos editables */}
              <td><input type="text" value={dato.nombre} onChange={(e) => handleChange(e, dato.id, "nombre")} /></td>
              <td><input type="date" value={dato.fechaNacimiento} onChange={(e) => handleChange(e, dato.id, "fechaNacimiento")} /></td>
              <td>
                <select value={dato.sexo} onChange={(e) => handleChange(e, dato.id, "sexo")}>
                  <option value="">Seleccionar...</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </td>
              <td><input type="text" value={dato.estudios} onChange={(e) => handleChange(e, dato.id, "estudios")} /></td>

            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDeDatos;
