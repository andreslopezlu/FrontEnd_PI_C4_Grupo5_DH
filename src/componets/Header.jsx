import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <div className='header'>
        <div className='logo_menu'> 
        <Link to='/home'><img className='logoPage' src="../imagenes/logo.png" alt="logo" /></Link>
        <img className='menuImg' src="../imagenes/menu.png" alt="logo" />
        </div>
        <div>
          <nav className=''>
            <div className='menuNav'>
              <ul className='ulNav'>
                <li>
                  <Link to='/home'>HOME</Link>
                </li>
                <li>
                  <Link to='/favs'>OFERTAS</Link>
                </li>
                <li> 
                  <Link to='/producto'>PRODUCTOS</Link>
                </li>
                <li>
                  <Link to='/contacto'>CONTACTO</Link>
                </li>
                <li> 
                  <Link to='/administrador'>ADMINISTRACIÓN</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='headerBusqueda'>
          <input type="busqueda" placeholder='¿Qué estás buscando?' />
          <img className='headerLogoLupa' src="../imagenes/logo_lupa.png" alt="logo_lupa" />
        </div>
        <div className='header_iniciarSesion'>
          {/* <img className='logoHeader' src="../imagenes/logo_iniciar_sesion.png" alt="logo_iniciar_sesion" />
          <p className='header_p'>Mi Cuenta</p> */}
          <button className='boton'>Iniciar Sesión</button>
          <button className='boton'>Crear Cuenta</button>
        </div>
      </div>
      <div className='imgFondo'>
        <img src="../imagenes/fondo.png" alt="img_fondo" />
        <h1>ALQUILER DE HERRAMIENTAS</h1>
        <p>Construyendo Futuro Juntos</p>
      </div>
    </div>
  )
}

export default Header