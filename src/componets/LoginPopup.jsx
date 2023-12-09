import React, { useState } from 'react';

function LoginPopup({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div className="popup">
      <button className="close-button" onClick={onClose}>
        <img src="../imagenes/close.png" alt="Cerrar" />
      </button>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <label>Usuario</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">INICIAR SESIÓN</button>
      </form>
    </div>
  );
}

export default LoginPopup;
