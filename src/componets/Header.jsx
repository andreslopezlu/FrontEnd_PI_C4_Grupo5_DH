import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function Header() {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const openSignupPopup = () => {
    setSignupPopupOpen(true);
  };

  const closeSignupPopup = () => {
    setSignupPopupOpen(false);
  };

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para procesar el inicio de sesión con loginUsername y loginPassword
  };

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Lógica para procesar el registro con signupName, signupEmail, signupPassword y signupConfirmPassword
  };

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
          <button className='boton' onClick={openLoginPopup}>Iniciar Sesión</button>
          <button className='boton' onClick={openSignupPopup}>Crear Cuenta</button>
        </div>
      </div>

      {isLoginPopupOpen && (
        <div className="popup-bg">
          <div className="popup">
            <button className="close-button" onClick={closeLoginPopup}>
              <img className="close-button-img" src="../imagenes/salir.png" alt="Cerrar" />
            </button>
            <h2 className="popup-title">Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <img src="../imagenes/iconousuario.svg" className="custom-icon" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Tu usuario"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/iconocontrasena.svg" className="custom-icon" />
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Contraseña"
                />
              </div>
              <button className="botoningreso" type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      )}

      {isSignupPopupOpen && (
        <div className="popup-bg">
          <div className="popup">
            <button className="close-button" onClick={closeSignupPopup}>
              <img className="close-button-img" src="../imagenes/salir.png" alt="Cerrar" />
            </button>
            <h2 className="popup-title">Crear Cuenta</h2>
            <form onSubmit={handleSignup}>

              <div className="input-container">
                <img src="../imagenes/iconousuario.svg" className="custom-icon" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Tu usuario"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/iconocorreo.svg" className="custom-icon" />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="correo@example.com"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/iconocontrasena.svg" className="custom-icon" />
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Contraseña"
                />
              </div>
              <div className="input-container">
                <img src="../imagenes/iconocontrasena.svg" className="custom-icon" />
                <input
                  type="password"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  placeholder="Confirmar contraseña"
                />
              </div>
              <button className="botoningreso" type="submit">Crear Cuenta</button>
            </form>
          </div>
        </div>
      )}
      <div className='imgFondo'>
        <img src="../imagenes/fondo.png" alt="img_fondo" />
        <h1>ALQUILER DE HERRAMIENTAS</h1>
        <p>Construyendo Futuro Juntos</p>
      </div>
    </div>
  );
}

export default Header;
