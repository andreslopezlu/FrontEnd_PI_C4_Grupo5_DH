import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MenuMobile() {
    const [desplegado, setDesplegado] = useState(false);
    const menuRef = useRef(null);

    const opciones = [{
        name: 'Home',
        link: 'home'
    },
    {
        name: 'Productos',
        link: 'producto'
    },
    {
        name: 'Contacto',
        link: 'contacto'
    },
    {
        name: 'Favoritos',
        link: 'favs'
    },
        // {
        //     name: 'Administración',
        //     link: 'administrador'
        // },
    ]

    const handleToggle = () => {
        setDesplegado(!desplegado);
    };

    const cerrarMenu = () => {
        setDesplegado(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            cerrarMenu();
        }
    };

    useEffect(() => {
        // Agregar un event listener al montar el componente
        document.addEventListener('click', handleClickOutside);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="menuDesplegable" ref={menuRef}>
            <img onClick={handleToggle} className='menuImg' src="../../public/imagenes/menu.png" alt="logo" />
            {desplegado && (
                <ul className='menuDesplegableUl'>
                    {opciones.map((opcion, index) => (
                        <Link to={`/${opcion.link}`} key={index + 1}>
                            <li onClick={cerrarMenu} className='menuDesplegableLi' >{opcion.name}</li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MenuMobile;