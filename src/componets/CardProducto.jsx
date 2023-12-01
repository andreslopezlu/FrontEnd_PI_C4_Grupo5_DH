import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Modal from './Modal';

function CardProducto(props) {
  const [favorito, setFavorito] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));
  const userId = infoLocalStorage ? infoLocalStorage.userId : null;

  const toggleFavorito = async () => {
    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));
  
    if (infoLocalStorage && (infoLocalStorage.role === 'ADMIN' || infoLocalStorage.role === 'USER')) {
      setFavorito(!favorito);
  
      /* const userId = infoLocalStorage.id;  // Asegúrate de que userId esté definido */
      /* alert(userId); */
      if (userId) {
        const registrarFavorito = {
          product: {
            id: props.id,
          },
          user: {
            id: userId,
          },
        };
        
        axios.post("http://localhost:8080/favorites/create", registrarFavorito)
          .then(response => {
            alert("Favorito creado");
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
            alert("Favorito no fue creado");
          });
      } else {
        // Manejo apropiado cuando userId no está definido
        console.error("Error: No se pudo obtener el ID del usuario desde localStorage.");
      }
    } else {
      // Mostrar el modal de autenticación en lugar de cambiar el estado de favorito
      setMostrarModal(true);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };


  return (
    
    <div className='CardProducto'>
      <div className='CardFavoritoIcon' onClick={toggleFavorito}>
        <FontAwesomeIcon
          icon={faStar}
          color={favorito ? 'gold' : 'white'}
          size="lg" />
      </div>
      {/* Imagen del producto */}
      <div className='CardCProductoImg'>
        <img src={`${props.img}`} alt={props.name} />
      </div>
      {/* Información del producto */}
      <div className='CardProductoInfo'>
        <h5>{props.name}</h5>
        <p>{props.precio} <span>COP / Día</span></p>
        {/* Botón de Alquilar */}
        {props.mostrarBotonAlquilar && <Link to={`/producto/${props.id}`}><button className='boton'>ALQUILAR</button></Link>}
        {/* Botón de Eliminar */}
        {props.mostrarBotonEliminar && <button className='boton'>Eliminar</button>}

        {mostrarModal && (
        <Modal onClose={cerrarModal}>
          <p>Debes iniciar sesión para marcar como favorito.</p>
        </Modal>
      )}
      </div>
    </div>
  );
}

export default CardProducto;

