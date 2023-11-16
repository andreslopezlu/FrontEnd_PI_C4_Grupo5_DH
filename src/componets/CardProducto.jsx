import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardProducto(props) {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <div className='CardProducto'>
      <div className='CardFavoritoIcon' onClick={toggleFavorito}>
      <FontAwesomeIcon icon={faStar} color={favorito ? 'gold' : 'white'} size="1.5x" />
      </div>
      {/* Imagen del producto */}
      <div className='CardCProductoImg'>
        <img src={`../imagenes/herramientas/${props.img}`} alt={props.name} />
      </div>
      {/* Información del producto */}
      <div className='CardProductoInfo'>
        <h5>{props.name}</h5>
        <p>{props.precio} <span>COP / Día</span></p>
        {/* Botón de Alquilar */}
        {props.mostrarBotonAlquilar && <Link to={`/producto/${props.id}`}><button className='boton'>ALQUILAR</button></Link>}
        {/* Botón de Eliminar */}
        {props.mostrarBotonEliminar && <button className='boton'>Eliminar</button>}
      </div>
    </div>
  );
}

export default CardProducto;

