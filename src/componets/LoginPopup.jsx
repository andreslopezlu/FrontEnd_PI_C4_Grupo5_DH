import React, { useState } from 'react';
import CardError from './CardError';
import axios from 'axios';

function LoginPopup(props) {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState("")

    const closeLoginPopup = () => {
        setError("");
        setLoginUsername('');
        setLoginPassword('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const iniciarSesion = {
            username: loginUsername,
            password: loginPassword,
        }

        axios.post("http://localhost:8080/api/auth/login", iniciarSesion)
            .then((res) => {
                setError("");
                localStorage.setItem("jwtToken", JSON.stringify(res.data));
                console.log("sesion iniciada")
                closeLoginPopup();
                props.redireccionPaginaReserva();
            })
            .catch((error) => {
                setError("Usuario no registrado o contraseña incorrecta");
                console.error("Error al obtener datos de la API: ", error);
            });
    };

    return (
        <div className="popup-bg">
            <div className="popup">
                <button className="close-button" onClick={props.cerrarPopup}>
                    <img className="close-button-img" src="../../public/imagenes/salir.png" alt="Cerrar" />
                </button>
                <h2 className="popup-title">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <img src="../../public/imagenes/iconousuario.svg" className="custom-icon" />
                        <input
                            type="text"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            placeholder="Tu usuario"
                        />
                    </div>

                    <div className="input-container">
                        <img src="../../public/imagenes/iconocontrasena.svg" className="custom-icon" />
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                    </div>
                    <CardError
                        info={error}
                    />
                    <button className="boton botoningreso" type="submit">Iniciar Sesión</button>
                </form>
                <p className="registerLink">¿No tienes una cuenta? <span
                className='registerLinkHere'
                onClick={props.abrirSinupPopup}
                >Regístrate aquí</span>
                </p>
            </div>
        </div>
    );
}

export default LoginPopup;
