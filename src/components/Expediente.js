import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate
import './Expediente.css'; // Importa el archivo CSS
import axios from 'axios'; // Importamos axios

const Expediente = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    estatura: '',
    carrera: '',
    peso: '',
    fechaNacimiento: '',
    sexo: '',
    edad: '',
    estadoCivil: '',
    lugarNacimiento: '',
    domicilioActual: '',
    telefono: '',
    cp: '',
    email: '',
    tipoVivienda: '',
    viviendaEstado: '',
    numeroPersonas: '',
    parentesco: '',
    nombrePadre: '',
    edadPadre: '',
    trabajaPadre: '',
    profesionMadre: '', // Nuevo campo
    tipoTrabajoMadre: '', // Nuevo campo
    domicilioMadre: '', // Nuevo campo
    telefonoMadre: '', // Nuevo campo
    foto: null, // Nuevo campo para la imagen
  });

  //const navigate = useNavigate(); // Redirección después de enviar el formulario

  // Función para manejar el cambio de valor de cada campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el cambio de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        foto: URL.createObjectURL(file), // Crear una URL temporal para mostrar la imagen
      });
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Obtiene el token JWT del almacenamiento local
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:3000/api/student/profile', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Respuesta del servidor:', response.data);
      alert('Expediente enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el expediente:', error);
      alert('Error al enviar el expediente');
    }
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

        <div className="input-group">
          <label htmlFor="estatura">Estatura</label>
          <input
            type="text"
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
            type="text"
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
          <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        {/* Aquí irían los otros campos también */}

        <div className="input-group">
          <label htmlFor="foto">Sube una foto</label>
          <input type="file" id="foto" name="foto" onChange={handleImageChange} />
        </div>

        {/* Mostrar imagen seleccionada */}
        {formData.foto && (
          <div className="image-preview">
            <img src={formData.foto} alt="Vista previa" />
            <p>Vista previa de la imagen</p>
          </div>
        )}

        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Expediente;
