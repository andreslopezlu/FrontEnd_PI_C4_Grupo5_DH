import React from 'react'
import { useState } from 'react'
import CardProducto from '../componets/CardProducto'
import { NavLink, Link } from 'react-router-dom'


function Administrador() {

    const [mostrarProductos, setMostrarProductos] = useState(false);


    const recomendados = [
        {
            id: 1,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 2,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 3,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 4,
            img: 'generador_energia.png',
            name: 'Generador Electrico',
            precio: 120000
        },
        {
            id: 5,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 6,
            img: 'martillo_demoledor.png',
            name: 'Martillo Demoledor',
            precio: 94000
        },
        {
            id: 7,
            img: 'sierra_circular.png',
            name: 'Sierra Circular',
            precio: 40000
        },
        {
            id: 8,
            img: 'taladro_atornillador.png',
            name: 'Taladro Atornillador',
            precio: 100000
        },
        {
            id: 9,
            img: 'taladro_percutor.png',
            name: 'Taladro Percutor',
            precio: 120000
        },
        {
            id: 10,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 11,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 12,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 13,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 14,
            img: 'generador_energia.png',
            name: 'Generador Electrico',
            precio: 120000
        },
        {
            id: 15,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 16,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 17,
            img: 'sierra_circular.png',
            name: 'Sierra Circular',
            precio: 40000
        },
        {
            id: 18,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 19,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 20,
            img: 'taladro_percutor.png',
            name: 'Taladro Percutor',
            precio: 120000
        },
        {
            id: 21,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 22,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 23,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 24,
            img: 'generador_energia.png',
            name: 'Generador Electrico',
            precio: 120000
        },
        {
            id: 25,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 26,
            img: 'martillo_demoledor.png',
            name: 'Martillo Demoledor',
            precio: 94000
        },
        {
            id: 27,
            img: 'sierra_circular.png',
            name: 'Sierra Circular',
            precio: 40000
        },
        {
            id: 28,
            img: 'taladro_atornillador.png',
            name: 'Taladro Atornillador',
            precio: 100000
        },
        {
            id: 29,
            img: 'taladro_percutor.png',
            name: 'Taladro Percutor',
            precio: 120000
        },
        {
            id: 30,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 31,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 32,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 33,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 34,
            img: 'generador_energia.png',
            name: 'Generador Electrico',
            precio: 120000
        },
        {
            id: 35,
            img: 'lijadora_plana.png',
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 36,
            img: 'andamios.png',
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 37,
            img: 'sierra_circular.png',
            name: 'Sierra Circular',
            precio: 40000
        },
        {
            id: 38,
            img: 'cortadora_concreto.png',
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 39,
            img: 'carretilla_elevadora.png',
            name: 'Carretilla Elevadora',
            precio: 80000
        },
        {
            id: 40,
            img: 'taladro_percutor.png',
            name: 'Taladro Percutor',
            precio: 120000
        },
    ]

    const toggleProductos  = () => {
        setMostrarProductos(!mostrarProductos);
    }

    

    return (
        <div>
            <div className='productos'>
                <h2>ADMINISTRACIÓN</h2>
                <Link to='/añadir_producto'><button className='boton'>AGREGAR</button></Link>
                <button
                className='boton'
                onClick={toggleProductos}>
                LISTAR
                </button>
            </div>

            <div className='homeCardCategorias homeCardProductos'>
                {mostrarProductos && recomendados.map(props => (
                    <CardProducto
                        key={props.id}
                        img={props.img}
                        name={props.name}
                        precio={props.precio}
                        mostrarBotonAlquilar={false}
                        mostrarBotonEliminar={true}
                    />
                ))}
            </div>

        </div>
    )
}

export default Administrador