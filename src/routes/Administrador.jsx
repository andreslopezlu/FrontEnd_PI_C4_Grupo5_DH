import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios';

function Administrador() {

    const [isMobile, setIsMobile] = useState(false);
    const [productos, setProductos] = useState([]);
    const [verTablaProductos, setVerTablaProductos] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const listarProductos = () => {
        setProductos([]);
        setVerTablaProductos(true)
        setLoading(true)
        axios.get("http://localhost:8080/products")
            .then((res) => {
                setProductos(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al obtener datos de la API: ", error);
            });
    }

    const eliminarProductos = (id) => {
        const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));
        console.log(infoLocalStorage.jwt);
        axios.delete(`http://localhost:8080/products/delete/${id}`, {
            headers: {
                'Authorization': `Bearer ${infoLocalStorage.jwt}`
            }
        }
        ).then((res) => {
            listarProductos();
        })
            .catch((error) => {
                if (error.response) {
                    console.error("Error en la respuesta del servidor: ", error.response.data);
                } else {
                    console.error("Error al realizar la solicitud: ", error.message);
                }
            });

    }


    return (
        <div>
            <h2 className='h2Administracion'>ADMINISTRACIÓN</h2>
            {isMobile ? (
                <div className='alert-message'>
                    <Link to='/home'><img className='formImgSalir' src="../imagenes/salir.png" alt="" /></Link>
                    <img className='imgNoDisponibleAdmin' src="../imagenes/admin_no_disponible.png" alt="" />
                    <h3>El panel de administración no está disponible desde dispositivos móviles.</h3>
                </div>
            ) : (
                <div>
                    <div className='productos'>
                        <Link to='/añadir_producto'>
                            <button className='boton'>AGREGAR</button>
                        </Link>
                        <button className='boton' onClick={listarProductos}>
                            LISTAR
                        </button>
                    </div>
                    {verTablaProductos && (
                        <div>
                            <table className='productList'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th className='columnaAccion'>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.id}</td>
                                            <td>{producto.name}</td>
                                            <td>${producto.costPerDay.toLocaleString('es-CO')} cop/dia</td>
                                            <td className='tdBoton'>
                                                <button className='boton botonEditarProducto'>Editar</button>
                                                <button
                                                    className='boton botonEliminarProducto'
                                                    onClick={() => eliminarProductos(producto.id)}
                                                >Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {loading &&
                                <div className='cargandoProducto'>
                                    <img className='gifCargandoProducto' src="../imagenes/cargando1.gif" alt="" />
                                </div>}
                        </div>
                    )}
                </div>
            )};
        </div>
    );
}

export default Administrador;