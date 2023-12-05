import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';


function CardProducto(props) {
  const [favorito, setFavorito] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleFavorito = () => {
    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));

    // Verificar si el usuario tiene el rol de USER
    if (!infoLocalStorage || infoLocalStorage.role !== 'ADMIN') {
      // Mostrar el modal en lugar de cambiar el estado de favorito
      setMostrarModal(true);
    } else {
      // Cambiar el estado de favorito normalmente
      setFavorito(!favorito);
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
        {props.mostrarBotonAlquilar && <Link to={`/producto/${props.id}`}><button className='boton'>ALQUILAR</button></Link>}
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

