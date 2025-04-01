import React, { useState } from 'react';
import './Expediente.css';
import { useNavigate } from 'react-router-dom';
const Expediente = () => {
  const [formData, setFormData] = useState({
    ingresosFamilia: '', // Inicializa el campo con valor vacío
    ingresosIndependiente: '', 
    estudios: '', // Estado para el campo de estudios
    relacionFamilia: '', // Relación con la familia
    dificultadTipo: '', // Dificultades
    actitudFamilia: '', // Actitud hacia la familia
    dificultadTipo2: '',
    dificultadTipo3: '',
    dificultadTipo4: '',
    dificultadTipo5: '',
    dificultadTipo6: '',
    dificultadTipo7: '',
    dificultadTipo8: '',
    dificultadTipo9: '',
    dificultadTipo10: '',
    dificultadTipo11: '',
    dificultadTipo12: '',
  });

  // Función para manejar el cambio de valor de cada campo
  const handleChange = (e) => {
    const { name, value } = e.target;

  

  // Si es el campo de ingresos, solo agrega el signo de pesos cuando se renderiza, no se aplica al escribir
  if (name === "ingresosFamilia" || name === "ingresosIndependiente") {
    // Solo se guarda el valor numérico en el estado, sin el signo de pesos
    setFormData({
      ...formData,
      [name]: value.replace(/[^0-9,]/g, ''), // Permitir solo números y comas
    });
  } else {
    // Para los campos de texto (como estudios), se permite texto libre
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};
  
  
  const navigate = useNavigate(); // Inicializamos useNavigate

  

  // Función para manejar el clic en el botón "Siguiente"
  const handleNextClick = () => {
    navigate('/Caracteristicas'); // Redirige a la página cadmin'
  };


  return (
    <div className="expediente-container">
      <div className="table-section">
        <h2>Formulario de Expediente</h2>
        
      </div>
      

      {/* Formulario con campos */}
      <div className="expediente-form">
        <div className="input-group">
          <label htmlFor="p1">¿A cuánto ascienden los ingresos mensuales de tu familia?</label>
          <input
            type="text"
            id="ingresosFamilia"
            name="ingresosFamilia"
            value={`$${formData.ingresosFamilia}`}
            onChange={handleChange}
            required
            placeholder="Ej: 5000" // Esto da una pista al usuario
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2">En caso de ser económicamente independiente, ¿a cuánto asciende tu ingreso?</label>
          <input
            type="text"
            id="ingresosIndependiente"
            name="ingresosIndependiente"
            value={`$${formData.ingresosIndependiente}`}
            onChange={handleChange}
            required
            placeholder="Ej: 5000"
          />
        </div>

        <div className="input-group">
          <label htmlFor="trabajaPadre">¿Dónde realizaste tus estudios?</label>
          <input
            type="text"
            id="estudios"
            name="estudios"
            value={formData.estudios} // Aquí asignamos el valor desde el estado
            onChange={handleChange} // Llamamos a la función que actualiza el estado
            required
            placeholder="Ej: Escuela secundaria X"
            />
        </div>

        {/* Nuevos campos */}
        <div className="input-group">
          <label htmlFor="profesionMadre">¿Tienes o has tenido alguna deficiencia sensorial o funcional que te obligue a llevar aparatos o controlar tu actividad física, forma de vida? (Vista, oído, movimientos, lenguaje, etc.) ¿Cuál?</label>
          <input
            type="text"
            id="profesionMadre"
            name="profesionMadre"
            value={formData.profesionMadre}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="observacionesHigiene">Observaciones de higiene:</label>
          <input
            type="text"
            id="observacionesHigiene"
            name="observacionesHigiene"
            value={formData.observacionesHigiene}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Sección para la tabla rosa */}
      <div className="table-section">
        <h2>Areas de integración</h2>
      </div>





      <div className="input-group">
          <label htmlFor="p2">¿Como es la relación con tu familia?</label>
          <input
            type="text"
            id="relacionFamilia"
            name="relacionFamilia"
            value={formData.relacionFamilia}
            onChange={handleChange}
            required
            placeholder="Ej: Muy buena"
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2">Existen dificultades ¿De que tipo?</label>
          <input
            type="text"
            id="dificultadTipo"
            name="dificultadTipo"
            value={formData.dificultadTipo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes con tu familia?</label>
          <input
            type="text"
            id="dificultadTipo2"
            name="dificultadTipo2"
            value={formData.dificultadTipo2}
            onChange={handleChange}
            required
            placeholder="Ej: Muy buena"
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Comó te relacionas con tu padre?</label>
          <input
            type="text"
            id="dificultadTipo3"
            name="dificultadTipo3"
            value={formData.dificultadTipo3}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes hacia tu padre?</label>
          <input
            type="text"
            id="dificultadTipo4"
            name="dificultadTipo4"
            value={formData.dificultadTipo4}
            onChange={handleChange}
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="p2"> ¿Comó te relacionas con tu madre?</label>
          <input
            type="text"
            id="dificultadTipo5"
            name="dificultadTipo5"
            value={formData.dificultadTipo5}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes hacia tu madre?</label>
          <input
            type="text"
            id="dificultadTipo6"
            name="dificultadTipo6"
            value={formData.dificultadTipo6}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> Hermanos </label>
          
        </div>


 {/* Sección para la tabla rosa */}
 
{/* Aquí va la tabla */}
<div className="input-group">
 <table className="integration-table">
   <thead>
     <tr >
       <th>Número</th>
       <th>Relación</th>
       <th>Actitud</th>
     </tr>
   </thead>
   <tbody>
     {/* Las filas de la tabla con datos */}
     {[...Array(7)].map((_, index) => (
       <tr key={index}>
         <td>{index + 1}</td>
         <td>
           <input
             type="text"
             name={`relacion-${index}`}
             value={formData[`relacion-${index}`] || ''}
             onChange={handleChange}
           />
         </td>
         <td>
           <input
             type="text"
             name={`actitud-${index}`}
             value={formData[`actitud-${index}`] || ''}
             onChange={handleChange}
           />
         </td>
       </tr>
     ))}
   </tbody>
 </table>
</div>


{/* Nuevos campos debajo de la tabla */}
<div className="expediente-form">
<div className="input-group">
  <label htmlFor="ingresoMensual">¿Con quien te sientes mas ligada afectivamente?</label>
  <input
    type="text"
    id="ingresoMensual"
    name="ingresoMensual"
    value={formData.ingresoMensual}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="ingresoIndependiente">Especifica ¿Por que?</label>
  <input
    type="text"
    id="dificultadTipo7"
    name="dificultadTipo7"
    value={formData.dificultadTipo7}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="dificultadTipo">¿Quién se ocupa mas directamente de tu educación?</label>
  <input
    type="text"
    id="dificultadTipo"
    name="dificultadTipo"
    value={formData.dificultadTipo}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="relacionFamilia">¿Quién ha influido más en tu desición de estudiar esta carrera?</label>
  <input
    type="text"
    id="relacionFamilia"
    name="relacionFamilia"
    value={formData.relacionFamilia}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="actitudFamilia">¿Consideras importante facilitar algún otro dato sobre tu ambiente laboral?</label>
  <input
    type="text"
    id="actitudFamilia"
    name="actitudFamilia"
    value={formData.actitudFamilia}
    onChange={handleChange}
    required
  />
</div>

{/* Sección para Recuadro Verde */}
<div className="table-section">
        <h2>Area social</h2>
      </div>


<div className="input-group">
  <label htmlFor="relacionPadre">¿Cómo es tu relación con tus compañeros?</label>
  <input
    type="text"
    id="relacionPadre"
    name="relacionPadre"
    value={formData.relacionPadre}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="actitudPadre">¿Por qué?</label>
  <input
    type="text"
    id="actitudPadre"
    name="actitudPadre"
    value={formData.actitudPadre}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="relacionMadre">¿Cómo es tu relación con tus amigos?</label>
  <input
    type="text"
    id="relacionMadre"
    name="relacionMadre"
    value={formData.relacionMadre}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="actitudMadre">¿Tienes pareja?</label>
  <input
    type="text"
    id="actitudMadre"
    name="actitudMadre"
    value={formData.actitudMadre}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Cómo es tu relación con tu pareja?</label>
  <input
  type="text"
  id="dificultadTipo8"
  name="dificultadTipo8"
  value={formData.dificultadTipo8}
  onChange={handleChange}
  required
    
  />
</div>
<div className="input-group">
  <label htmlFor="hermanos">¿Cómo es tu relación con tus maestros?</label>
  <input
    type="text"
    id="dificultadTipo9"
    name="dificultadTipo9"
    value={formData.dificultadTipo9}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Cómo es tu relación con las autoridades académicas? </label>
  <input
    type="text"
    id="dificultadTipo10"
    name="dificultadTipo10"
    value={formData.dificultadTipo10}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Qué haces en tu tiempo libre?</label>
  <input
    type="text"
    id="dificultadTipo11"
    name="dificultadTipo11"
    value={formData.dificultadTipo11}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Cuál es tu actividad recreativa?</label>
  <input
    type="text"
    id="dificultadTipo12"
    name="dificultadTipo12"
    value={formData.dificultadTipo12}
    onChange={handleChange}
    required
  />
</div>




 {/* Aquí va el botón "Siguiente" al final del formulario */}
 <div className="input-group">
          <button
            type="button"
            className="btn-siguiente"
            onClick={handleNextClick} // Llama a la función para navegar
          >
            Siguiente
          </button>
</div>
</div>
</div>
);
};
     



export default Expediente;
