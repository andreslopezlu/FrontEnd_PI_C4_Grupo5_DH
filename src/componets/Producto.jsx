import React from 'react'

function Producto(props) {
  return (
    <div className='CardProducto'>
            <div className='CardCProductoImg'>
                <img src={`../public/imagenes/${props.img}`} alt={props.name} />
            </div>
            <div className='CardProductoInfo'>
                <h5>{props.name}</h5>
                <p>{props.precio} <span>COP / Día</span></p>
                <button>
                    ALQUILAR
                </button>
            </div>
        </div>
  )
}

export default Producto