import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Usamos Routes en lugar de Switch
import './App.css';
import Login from './components/Login';
import Register from './components/Register';  // Importamos el componente de registro
import Home from './components/Home';  // Importamos la nueva página Home
import Header from './components/Header';
import Footer from './components/Footer';
import Expediente from './components/Expediente';  // Asegúrate de que Expediente esté importado correctamente
import TablaaDatos from './components/TablaaDatos';  // Importamos el nuevo componente para la tabla



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rutas para Login y Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Ruta para Home */}
          <Route path="/home" element={<Home />} />
          
          {/* Ruta para Expediente (Formulario) */}
          <Route path="/expediente" element={<Expediente />} />
          
          {/* Ruta para la nueva pantalla con la tabla */}
          <Route path="/TablaaDatos" element={<TablaaDatos />} /> {/* Nueva ruta para la tabla */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
