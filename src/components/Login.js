import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Login.css';
import { loginUser } from '../utils/api';

const Login = () => {
  const [credentials, setCredentials] = useState({
    controlNumber: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.controlNumber || !credentials.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await loginUser(credentials);
      alert('Inicio de sesión exitoso!');
      console.log('Respuesta del servidor:', response);
      localStorage.setItem('token', response.token); // Guardar token JWT

      navigate('/home');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="controlNumber">Número de control</label>
          <input
            type="text"
            id="controlNumber"
            name="controlNumber"
            value={credentials.controlNumber}
            onChange={handleChange}
            required
            placeholder="Ingresa tu número de control"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="submit-btn">Iniciar Sesión</button>
      </form>
        {/* Aquí agregamos el enlace para el registro */}
        <div className="register-link">
          <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
