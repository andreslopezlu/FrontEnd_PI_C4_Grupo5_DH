import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <div className='header'>
        <div className='logo_menu'> 
        <img className='logoPage' src="../public/imagenes/logo.png" alt="logo" />
        <img className='menuImg' src="../public/imagenes/menu.png" alt="logo" />
        </div>
        <div>
          <nav className=''>
            <div className='menuNav'>
              <ul className='ulNav'>
                <li>
                  <Link to='/home'>HOME</Link>
                </li>
                <li>
                  <Link to='/contacto'>PRODUCTOS</Link>
                </li>
                <li>
                  <Link to='/favs'>OFERTAS</Link>
                </li>
                <li>
                  <Link to='/contacto'>CONTACTO</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='headerBusqueda'>
          <input type="busqueda" placeholder='¿Qué estás buscando?' />
          <img className='headerLogoLupa' src="../public/imagenes/logo_lupa.png" alt="logo_lupa" />
        </div>
        <div className='header_iniciarSesion'>
          <img className='logoHeader' src="../public/imagenes/logo_iniciar_sesion.png" alt="logo_iniciar_sesion" />
          <p className='header_p'>Mi Cuenta</p>
        </div>
      </div>
    </div>
  )
}

export default Header