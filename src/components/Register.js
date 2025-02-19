// src/components/Register.js
import React, { useState } from 'react';
import './Register.css';  // Para los estilos del formulario de registro

const Register = () => {
  // Actualizamos el estado para incluir los nuevos campos
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    studentId: '',
    career: '',
    semester: '',
    password: '',
  });

  // Manejador de cambio de campos
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  // Actualizamos el campo correspondiente
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!formData.name || !formData.age || !formData.studentId || !formData.career || !formData.semester || !formData.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para registrar al usuario, por ejemplo, llamando a una API
    console.log('Datos de registro:', formData);
    alert('Registro exitoso!');
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Campo de nombre */}
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre"
          />
        </div>

        {/* Campo de edad */}
        <div className="input-group">
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Ingresa tu edad"
          />
        </div>

        {/* Campo de número de control */}
        <div className="input-group">
          <label htmlFor="studentId">Número de control</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
            placeholder="Ingresa tu número de control"
          />
        </div>

        {/* Campo de carrera */}
        <div className="input-group">
          <label htmlFor="career">Carrera</label>
          <input
            type="text"
            id="career"
            name="career"
            value={formData.career}
            onChange={handleChange}
            required
            placeholder="Ingresa tu carrera"
          />
        </div>

        {/* Campo de semestre */}
        <div className="input-group">
          <label htmlFor="semester">Semestre</label>
          <input
            type="number"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            placeholder="Ingresa tu semestre"
          />
        </div>

        {/* Campo de contraseña */}
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className="submit-btn">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
