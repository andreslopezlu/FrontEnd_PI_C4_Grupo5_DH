import React, { useState } from 'react';


function SignupPopup({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Falta enviar una solicitud al servidor para crear una cuenta
  }

  return (
    <div className="popup">
      <button className="close-button" onClick={onClose}>
        <img src="../imagenes/close.png" alt="Cerrar" />
      </button>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSignup}>
        <label>Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Correo Electrónico</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">CREAR CUENTA</button>
      </form>
    </div>
  );
}

export default SignupPopup;
