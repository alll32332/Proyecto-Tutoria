import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Importamos Link y useNavigate
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Creamos una instancia de useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si los campos están completos
    
    if (!email || !password) {
      setError('Por favor, ingresa todos los campos.');
      return;
    }

    // Lógica de autenticación (puedes agregar aquí una llamada a una API)
    setError('');

    // Mostrar un mensaje en la consola en lugar de un alert
    console.log('Inicio de sesión exitoso!');
    
    // Redirigir inmediatamente a la página de inicio (Home) sin esperar a que se cierre el alert
    navigate('/home');  // Redirige a la página "/home"
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Introduce tu correo"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Introduce tu contraseña"
            />
          </div>
          <button type="submit" className="submit-btn">Iniciar sesión</button>
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
