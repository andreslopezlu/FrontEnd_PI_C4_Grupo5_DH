import React from 'react'

function CardProducto(props) {


    return (
        <div className='CardProducto'>
            <div className='CardCProductoImg'>
                <img src={`../imagenes/${props.img}`} alt={props.name} />
            </div>
            <div className='CardProductoInfo'>
                <h5>{props.name}</h5>
                <p>{props.precio} <span>COP / Día</span></p>
                {props.mostrarBotonAlquilar && <button>ALQUILAR</button>}
                {props.mostrarBotonEliminar && <button>Eliminar</button>}
            </div>
        </div>
    )
}

export default CardProducto