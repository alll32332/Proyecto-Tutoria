// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    controlNumber: '',
    career: '',
    semester: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén completos
    if (!formData.fullName || !formData.age || !formData.controlNumber || !formData.career || !formData.semester || !formData.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Llamar a la función para registrar al usuario
      const response = await registerUser(formData);

      // Mostrar mensaje de éxito
      alert('Registro exitoso!');
      console.log('Respuesta del servidor:', response);
      navigate('/login');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Campos del formulario */}
        <div className="input-group">
          <label htmlFor="fullName">Nombre</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Ingresa tu nombre"
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="controlNumber">Número de control</label>
          <input
            type="text"
            id="controlNumber"
            name="controlNumber"
            value={formData.controlNumber}
            onChange={handleChange}
            required
            placeholder="Ingresa tu número de control"
          />
        </div>
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
        <button type="submit" className="submit-btn">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;