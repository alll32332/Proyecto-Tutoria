import React, { useState } from 'react';
import './Expediente.css';
import { useNavigate } from 'react-router-dom';





const Expediente = () => {
  
  const [formData, setFormData] = useState({
    p1: '',
    p2: '',
    trabajaPadre: '',
    profesionMadre: '',
    observacionesHigiene: '',
  });
  const navigate = useNavigate(); // Inicializamos useNavigate

  // Función para manejar el cambio de valor de cada campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el clic en el botón "Siguiente"
  const handleNextClick = () => {
    navigate('/admin'); // Redirige a la página '/admin'
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
            id="p1"
            name="p1"
            value={formData.p1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2">En caso de ser económicamente independiente, ¿a cuánto asciende tu ingreso?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="trabajaPadre">¿Dónde realizaste tus estudios?</label>
          <select
            id="trabajaPadre"
            name="trabajaPadre"
            value={formData.trabajaPadre}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
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
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2">Existen dificultades ¿De que tipo?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes con tu familia?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Comó te relacionas con tu padre?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes hacia tu padre?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="p2"> ¿Comó te relacionas con tu madre?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="p2"> ¿Qué actitud tienes hacia tu madre?</label>
          <input
            type="number"
            id="p2"
            name="p2"
            value={formData.p2}
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
    type="number"
    id="ingresoIndependiente"
    name="ingresoIndependiente"
    value={formData.ingresoIndependiente}
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

{/* Sección para la tabla rosa */}
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
    id="hermanos"
    name="hermanos"
    value={formData.hermanos}
    onChange={handleChange}
  />
</div>
<div className="input-group">
  <label htmlFor="hermanos">¿Cómo es tu relación con tus maestros?</label>
  <input
    type="text"
    id="hermanos"
    name="hermanos"
    value={formData.hermanos}
    onChange={handleChange}
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Cómo es tu relación con las autoridades académicas? </label>
  <input
    type="text"
    id="hermanos"
    name="hermanos"
    value={formData.hermanos}
    onChange={handleChange}
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Qué haces en tu tiempo libre?</label>
  <input
    type="text"
    id="hermanos"
    name="hermanos"
    value={formData.hermanos}
    onChange={handleChange}
  />
</div>

<div className="input-group">
  <label htmlFor="hermanos">¿Cuál es tu actividad recreativa?</label>
  <input
    type="text"
    id="hermanos"
    name="hermanos"
    value={formData.hermanos}
    onChange={handleChange}
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
