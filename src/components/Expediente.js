import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate
import './Expe.css';  // Importa el archivo CSS

const Expediente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    estatura: '',
    carrera: '',
    
  });

  const navigate = useNavigate();  // Redirección después de enviar el formulario

  // Función para manejar el cambio de valor de cada campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el cambio de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        foto: URL.createObjectURL(file) // Crear una URL temporal para mostrar la imagen
      });
    }
  };

  

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados: ", formData);
    // Después de enviar el formulario, redirige al usuario a la nueva página
    navigate('/TablaaDatos');  // Esto redirige a la ruta '/tabla' (puedes cambiarla por la que desees)
  };




  return (
<div className="expediente-container">
      <div className="table-section">
        <h2>Expediente</h2>
        
      </div>
      <form className="expediente-form" onSubmit={handleSubmit}>
        {/* Campos existentes */}
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo para subir la foto */}
        <div className="input-group">
          <label htmlFor="foto">Sube una foto</label>
          <input
            type="file"
            id="foto"
            name="foto"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

        {/* Mostrar imagen seleccionada */}
        {formData.foto && (
          <div className="image-preview">
            <h3>Vista previa de la imagen</h3>
            <img src={formData.foto} alt="Vista previa" className="image-thumbnail" />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="estatura">Estatura</label>
          <input
            type="number"
            id="estatura"
            name="estatura"
            value={formData.estatura}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="carrera">Carrera</label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="peso">Peso</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="sexo">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="estadoCivil">Estado Civil</label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="otros">Otros</option>
            <option value="especifique">Especifique</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="lugarNacimiento">Lugar de Nacimiento</label>
          <input
            type="text"
            id="lugarNacimiento"
            name="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="domicilioActual">Domicilio Actual</label>
          <input
            type="text"
            id="domicilioActual"
            name="domicilioActual"
            value={formData.domicilioActual}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="cp">Código Postal</label>
          <input
            type="text"
            id="cp"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="tipoVivienda">Tipo de Vivienda</label>
          <select
            id="tipoVivienda"
            name="tipoVivienda"
            value={formData.tipoVivienda}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="viviendaEstado">Estado de la Vivienda</label>
          <select
            id="viviendaEstado"
            name="viviendaEstado"
            value={formData.viviendaEstado}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="propia">Propia</option>
            <option value="rentada">Rentada</option>
            <option value="prestada">Prestada</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="numeroPersonas">Número de Personas con las que Vives</label>
          <input
            type="number"
            id="numeroPersonas"
            name="numeroPersonas"
            value={formData.numeroPersonas}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="parentesco">Parentesco</label>
          <input
            type="text"
            id="parentesco"
            name="parentesco"
            value={formData.parentesco}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="nombrePadre">Nombre del Padre</label>
          <input
            type="text"
            id="nombrePadre"
            name="nombrePadre"
            value={formData.nombrePadre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="edadPadre">Edad del Padre</label>
          <input
            type="number"
            id="edadPadre"
            name="edadPadre"
            value={formData.edadPadre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="trabajaPadre">¿Trabaja el Padre?</label>
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

        {/* Nuevos campos para la madre */}
        <div className="input-group">
          <label htmlFor="profesionMadre">Profesión de la Madre</label>
          <input
            type="text"
            id="profesionMadre"
            name="profesionMadre"
            value={formData.profesionMadre}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="tipoTrabajoMadre">Tipo de Trabajo de la Madre</label>
          <input
            type="text"
            id="tipoTrabajoMadre"
            name="tipoTrabajoMadre"
            value={formData.tipoTrabajoMadre}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="domicilioMadre">Domicilio de la Madre</label>
          <input
            type="text"
            id="domicilioMadre"
            name="domicilioMadre"
            value={formData.domicilioMadre}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="telefonoMadre">Teléfono de la Madre</label>
          <input
            type="text"
            id="telefonoMadre"
            name="telefonoMadre"
            value={formData.telefonoMadre}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>

      </div>









    );
};



export default Expediente;
