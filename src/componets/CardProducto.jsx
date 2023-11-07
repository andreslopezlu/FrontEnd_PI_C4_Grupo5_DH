import React from 'react'
import { Link } from 'react-router-dom'

function CardProducto(props) {


    return (
        <div className='CardProducto'>
            <div className='CardCProductoImg'>
                <img src={`../imagenes/herramientas/${props.img}`} alt={props.name} />
            </div>
            <div className='CardProductoInfo'>
                <h5>{props.name}</h5>
                <p>{props.precio} <span>COP / Día</span></p>
                {props.mostrarBotonAlquilar && <Link to={`/producto/${props.id}`}><button className='boton'>ALQUILAR</button></Link>}
                {props.mostrarBotonEliminar && <button className='boton'>Eliminar</button>}
            </div>
        </div>
    )
}

export default CardProducto