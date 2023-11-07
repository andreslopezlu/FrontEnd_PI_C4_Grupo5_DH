import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'


function Detalles() {

    const params = useParams();

    const detalle = {
        id: 1,
        img: [
            'andamio_1.png',
            'andamio_2.png',
            'andamio_3.png',
            'andamio_4.png',
        ],
        name: 'Andamios',
        precio: 60000
    };


    return (
        <div>
            <div className='detallesNombre'>
                <h2>{detalle.name}</h2>
                <Link to='/home'><img className='imgVolver' src="../imagenes/salir.png" alt="" /></Link>
            </div>
            <div>
                <div className='imgContainer'>
                    {detalle.img.map((imagen, index) => (
                        <img className='imgenesDetalleProducto' key={imagen} src={`../imagenes/herramientas/${imagen}`} alt={`Imagen ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detalles