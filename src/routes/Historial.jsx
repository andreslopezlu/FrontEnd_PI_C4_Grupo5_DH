// Historial.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Historial() {
const [reservas, setReservas] = useState([]);
const userIdString = localStorage.getItem('userId');
const userId = userIdString ? parseInt(userIdString, 10) : null;


useEffect(() => {
    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));

    // Obtener las reservas anteriores del usuario
    axios.get(`http://localhost:8080/reservations/by-user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${infoLocalStorage.jwt}`,
      },
    })
      .then(response => {
        setReservas(response.data);
      })
      .catch(error => {
        console.error("Error al obtener las reservas del usuario: ", error);
      });
  }, []);

return (
    <div className="historial-container">
    <h2>Historial de Reservas</h2>
    {reservas.length === 0 ? (
        <p>No hay reservas anteriores.</p>
    ) : (
        <ul className="reservas-list">
        {reservas.map(reserva => (
            <li key={reserva.id} className="reserva-item">
            <p><strong>Fecha de reserva:</strong> {reserva.check_in_date}</p>
            <p><strong>Fecha de uso:</strong> {reserva.checkout_date}</p>
            <p><strong>Producto reservado:</strong> {reserva.product.name}</p>
            </li>
        ))}
        </ul>
    )}
    </div>
  );
}

export default Historial;
