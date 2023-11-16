import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Administrador() {
  const [mostrarProductos, setMostrarProductos] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const recomendados = [
    {
        id: 1,
        img: [
            'andamio_1.png',
            'andamio_2.png',
            'andamio_3.png',
            'andamio_4.png',
        ],
        name: 'Andamios',
        precio: 60000
    },
    {
        id: 2,
        img: [
            'carretilla_elevadora_1.png',
            'carretilla_elevadora_2.png',
            'carretilla_elevadora_3.png',
            'carretilla_elevadora_4.png',
        ],
        name: 'carretilla_elevadora',
        precio: 80000
    },
    {
        id: 3,
        img: [
            'cortadora_concreto_1.png',
            'cortadora_concreto_2.png',
            'cortadora_concreto_3.png',
            'cortadora_concreto_4.png',
        ],
        name: 'Cortadora de Concreto',
        precio: 100000
    },
    {
        id: 4,
        img: [
            'generador_electrico_1.png',
            'generador_electrico_2.png',
            'generador_electrico_3.png',
            'generador_electrico_4.png',
        ],
        name: 'Generador Electrico',
        precio: 120000
    },
    {
        id: 5,
        img: [
            'lijadora_plana_1.png',
            'lijadora_plana_2.png',
            'lijadora_plana_3.png',
            'lijadora_plana_4.png',
        ],
        name: 'Lijadora Plana',
        precio: 85000
    },
    {
        id: 6,
        img: [
            'martillo_demoledor_1.png',
            'martillo_demoledor_2.png',
            'martillo_demoledor_3.png',
            'martillo_demoledor_4.png',
        ],
        name: 'Martillo Demoledor',
        precio: 94000
    },
    {
        id: 7,
        img: [
            'sierra_circular_1.png',
            'sierra_circular_2.png',
            'sierra_circular_3.png',
            'sierra_circular_4.png',
        ],
        name: 'Sierra Circular',
        precio: 40000
    },
    {
        id: 8,
        img: [
            'taladro_atornillador_1.png',
            'taladro_atornillador_2.png',
            'taladro_atornillador_3.png',
            'taladro_atornillador_4.png',
        ],
        name: 'Taladro Atornillador',
        precio: 100000
    },
    {
        id: 9,
        img: [
            'taladro_percutor_1.png',
            'taladro_percutor_2.png',
            'taladro_percutor_3.png',
            'taladro_percutor_4.png',
        ],
        name: 'Taladro Percutor',
        precio: 120000
    },
    {
        id: 10,
        img: [
            'mezcladora_1.png',
            'mezcladora_2.png',
            'mezcladora_3.png',
            'mezcladora_4.png',
        ],
        name: 'Mezcladora',
        precio: 85000
    },
    {
        id: 11,
        img: [
            'aplanadora_1.png',
            'aplanadora_2.png',
            'aplanadora_3.png',
            'aplanadora_4.png',
        ],
        name: 'Aplanadora',
        precio: 60000
    },
    {
        id: 12,
        img: [
            'bobcat_1.png',
            'bobcat_2.png',
            'bobcat_3.png',
            'bobcat_4.png',
        ],
        name: 'BobCat',
        precio: 80000
    },
    {
        id: 13,
        img: [
            'bulldozer_1.png',
            'bulldozer_2.png',
            'bulldozer_3.png',
            'bulldozer_4.png',
        ],
        name: 'Bulldozer',
        precio: 100000
    },
    {
        id: 14,
        img: [
            'camion_1.png',
            'camion_2.png',
            'camion_3.png',
            'camion_4.png',
        ],
        name: 'Camion',
        precio: 120000
    },
    {
        id: 15,
        img: [
            'compresor_1.png',
            'compresor_2.png',
            'compresor_3.png',
            'compresor_4.png',
        ],
        name: 'Compresor',
        precio: 85000
    },
    {
        id: 16,
        img: [
            'equipo_soldadura_1.png',
            'equipo_soldadura_2.png',
            'equipo_soldadura_3.png',
            'equipo_soldadura_4.png',
        ],
        name: 'Equipo de Soldadura',
        precio: 60000
    },
    {
        id: 17,
        img: [
            'excavadora_1.png',
            'excavadora_2.png',
            'excavadora_3.png',
            'excavadora_4.png',
        ],
        name: 'Excavadora',
        precio: 40000
    },
    {
        id: 18,
        img: [
            'grua_1.png',
            'grua_2.png',
            'grua_3.png',
            'grua_4.png',
        ],
        name: 'Grua',
        precio: 100000
    },
    {
        id: 19,
        img: [
            'guantes_seguridad_1.png',
            'guantes_seguridad_2.png',
            'guantes_seguridad_3.png',
            'guantes_seguridad_4.png',
        ],
        name: 'Guantes Seguridad',
        precio: 80000
    },
    {
        id: 20,
        img: [
            'volqueta_1.png',
            'volqueta_2.png',
            'volqueta_3.png',
            'volqueta_4.png',
        ],
        name: 'Volqueta',
        precio: 120000
    },
    {
        id: 21,
        img: [
            'piloteadora_1.png',
            'piloteadora_2.png',
            'piloteadora_3.png',
            'piloteadora_4.png',
        ],
        name: 'Piloteadora',
        precio: 60000
    },
]
const toggleProductos = () => {
    setMostrarProductos(!mostrarProductos);
};

useEffect(() => {
    const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
    window.removeEventListener('resize', handleResize);
    };
}, []);

return (
    <div>

    {isMobile ? (
        <div className='alert-message'>
        <h2>El panel de administración no está disponible desde dispositivos móviles.</h2>
        </div>
    ) : (
        
        mostrarProductos && (
        
        <div>
            <div className='productos'>
        <h2>ADMINISTRACIÓN</h2>
            <Link to='/añadir_producto'>
            <button className='boton'>AGREGAR</button>
            </Link>
            <button className='boton' onClick={toggleProductos}>
            LISTAR
            </button>
            </div>
            <table className='productList'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {/* Contenido de la tabla */}
                {recomendados.map((producto) => (
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.name}</td>
                    <td>{producto.precio}</td>
                    <td className='tdBoton'>
                    <button className='boton botonEliminarProducto'>Eliminar</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )
    )}
    </div>
);
}

export default Administrador;