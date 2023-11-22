import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ErrorInisioSesion from './ErrorInisioSesion';

function Header() {

  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("")
  const [ciudades, setCiudades] = useState([])
  const [rol, setRole] = useState('')
  const [isAdmin, setIsAdmin] = useState(false);
  const [jwt, setJwt] = useState('');

  //------------------Logica Ver Pagina Admin------------

  const tipoUsuario = () => {
    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));
    setJwt(infoLocalStorage.jwt);
    const role = infoLocalStorage.role;
    setRole(role);
    if (role === 'ADMIN') {
      setIsAdmin(true);
    }
  }
  //--------------------------------------------------------

  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
    setError("");
    setLoginUsername('');
    setLoginPassword('');
  };

  const openSignupPopup = () => {
    setSignupPopupOpen(true);
    axios.get("http://localhost:8080/cities")
      .then(res => {
        setCiudades(res.data);
      })
      .catch(error => {
        setError("Usuario no registrado o contraseña incorrecta")
        console.error("Error al obtener datos de la API: ", error);
      });
  };

  const closeSignupPopup = () => {
    setSignupPopupOpen(false);
  };

  //------------------ Cerrar Sesion -----------------------------

  const cerrarSesion = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setJwt('');
    localStorage.clear();
  }

  //-------------------- Iniciar sesion ----------------------------

  const handleLogin = (e) => {
    e.preventDefault();
    const iniciarSesion = {
      username: loginUsername,
      password: loginPassword,
    }
    axios.post("http://localhost:8080/api/auth/login", iniciarSesion)
      .then(res => {
        setError("")
        localStorage.setItem('jwtToken', JSON.stringify(res.data));
        tipoUsuario();
        closeLoginPopup();
        setIsLoggedIn(true);
      })
      .catch(error => {
        setError("Usuario no registrado o contraseña incorrecta")
        console.error("Error al obtener datos de la API: ", error);
      });
  };

  //------------------- Registrar Usuario -----------------------

  const [signupUser, setSignupUser] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupPhoneNumber, setSignupPhoneNumber] = useState('');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState({
    id: 0,
    name: 'Selecciona tu ciudad',
  });
  const [rolSeleccionado, setRolSelecionado] = useState({
    id: 0,
    name: 'Selecciona tu rol',
  });

  const handleCiudadChange = (event) => {
    const selectedCityId = parseInt(event.target.value, 10); // Convertir a entero usando parseInt
    const selectedCity = ciudades.find((ciudad) => ciudad.id === selectedCityId);
    setCiudadSeleccionada({
      id: selectedCityId,
      name: selectedCity ? selectedCity.name : 'Selecciona tu ciudad',
    });
  };

  const handleRolChange = (event) => {
    const selectedRolId = parseInt(event.target.value, 10); // Convertir a entero usando parseInt
    // Actualizar el estado con el id y nombre del rol seleccionado
    setRolSelecionado({
      id: selectedRolId,
      name: selectedRolId === 1 ? 'ADMIN' : 'USER', // Comparar con número en lugar de cadena
    });
  };


  const handleSignup = (e) => {
    e.preventDefault();
    const registrarUsuario = {
      name: signupName,
      lastName: signupLastName,
      email: signupEmail,
      phoneNumber: signupPhoneNumber,
      password: signupPassword,
      enabled: 1,
      city: ciudadSeleccionada,
      role: rolSeleccionado,
    }

    axios.post("http://localhost:8080/user/create", registrarUsuario)
      .then(response => {
        alert("Usuario creado");
        console.log(response.data);
        setSignupPopupOpen(false);
      })
      .catch(error => {
        console.error(error);
        alert("Usuario no fue creado");
      });

  };





  //--------------------------------------------------------------

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
                {/* <li>
                  <Link to='/favs'>OFERTAS</Link>
                </li> */}
                <li>
                  <Link to='/producto'>PRODUCTOS</Link>
                </li>
                <li>
                  <Link to='/contacto'>CONTACTO</Link>
                </li>
                {isAdmin && (<li>
                  <Link to='/administrador'>ADMINISTRACIÓN</Link>
                </li>)}
              </ul>
            </div>
          </nav>
        </div>
        <div className='headerBusqueda'>
          <input type="busqueda" placeholder='¿Qué estás buscando?' />
          <img className='headerLogoLupa' src="../imagenes/logo_lupa.png" alt="logo_lupa" />
        </div>
        {!isLoggedIn && (
          <div className='header_iniciarSesion'>
            <button className='boton' onClick={openLoginPopup}>
              Iniciar Sesión
            </button>
            <button className='boton' onClick={openSignupPopup}>
              Crear Cuenta
            </button>
          </div>
        )}
        {isLoggedIn && (
          <div className='header_iniciarSesion'>
            <img src="../imagenes/logo_iniciar_sesion.png" alt="logo_iniciar_sesion" />
            <button className='boton' onClick={cerrarSesion}>
              Cerrar Sesión
            </button>
          </div>
        )}
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
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="Tu usuario"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/iconocontrasena.svg" className="custom-icon" />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Contraseña"
                />
              </div>
              <ErrorInisioSesion
                info={error}
              />
              <button className="boton botoningreso" type="submit">Iniciar Sesión</button>
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
                  value={signupUser}
                  onChange={(e) => setSignupUser(e.target.value)}
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

              {/* ------------------------------------------------------------ */}

              <div className="input-container">
                <img src="../imagenes/iconousuario.svg" className="custom-icon" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="Nombre"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/iconousuario.svg" className="custom-icon" />
                <input
                  type="text"
                  value={signupLastName}
                  onChange={(e) => setSignupLastName(e.target.value)}
                  placeholder="Apellido"
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/telefono_ico.png" className="custom-icon" />
                <input
                  type="number"
                  value={signupPhoneNumber}
                  onChange={(e) => setSignupPhoneNumber(e.target.value)}
                  placeholder="Telefono "
                />
              </div>

              <div className="input-container">
                <img src="../imagenes/ubicacion_ico.png" className="custom-icon" />
                <select
                  className='estilosForm'
                  name='ciudad'
                  id='ciudad'
                  value={ciudadSeleccionada.id}
                  onChange={handleCiudadChange}
                >
                  <option value={''}>Selecciona tu cuidad</option>
                  {ciudades.map(ciudad => (
                    <option key={ciudad.id} value={ciudad.id}>
                      {ciudad.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-container">
                <img src="../imagenes/ubicacion_ico.png" className="custom-icon" />
                <select
                  className='estilosForm'
                  name='role'
                  id='role'
                  value={rolSeleccionado.id}
                  onChange={handleRolChange}
                >
                  <option value={''}>Escoja un Rol</option>
                  <option value='1'>ADMIN</option>
                  <option value='2'>USER</option>

                </select>
              </div>


              <button className="boton botoningreso" type="submit">Crear Cuenta</button>
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
