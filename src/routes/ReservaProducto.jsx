import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const ReservaProducto = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [userEmail, setUserEmail] = useState(null);
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);
    const [productInfo, setProductInfo] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [cantidadDias, setCantidadDias] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    const [comentarios, setComentarios] = useState('');

    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));

    useEffect(() => {
        // Obtener los parámetros de la URL
        const searchParams = new URLSearchParams(window.location.search);
        const fechaInicioParam = searchParams.get('fechaInicio');
        const fechaFinParam = searchParams.get('fechaFin');

        // Establecer los estados
        setFechaInicio(fechaInicioParam || null);
        setFechaFin(fechaFinParam || null);

        if (infoLocalStorage) {
            setUserEmail(infoLocalStorage.email);
        }
    }, []);

    // Obtener información del producto
    const fetchProductInfo = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/products/${productId}`);
            setProductInfo(response.data);
        } catch (error) {
            console.error('Error al obtener información del producto:', error);
            setError('Error al obtener información del producto. Intente nuevamente más tarde.');
        }
    }, [productId]);

    // Obtener imágenes del producto
    const fetchProductImages = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/images/product/${productId}`);
            setProductImages(response.data);
        } catch (error) {
            console.error('Error al obtener imágenes del producto:', error);
            setError('Error al obtener imágenes del producto. Intente nuevamente más tarde.');
        }
    }, [productId]);

    // Obtener información del usuario
    const fetchUserInfo = useCallback(async () => {
        if (userEmail) {
            const headers = {
                'Authorization': `Bearer ${infoLocalStorage.jwt}`
            };

            try {
                const response = await axios.get(`http://localhost:8080/user/by-email/${userEmail}`, { headers });
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error al obtener información del usuario:', error);
                setError('Error al obtener información del usuario. Intente nuevamente más tarde.');
            }
        }
    }, [userEmail]);

    

    useEffect(() => {
        if (productId) {
            // Llamadas de una sola vez para obtener información del producto e imágenes
            Promise.all([fetchProductInfo(), fetchProductImages()])
                .then(() => {
                    const inicio = moment(fechaInicio);
                    const fin = moment(fechaFin);
                    const dias = fin.diff(inicio, 'days') + 1;
                    setCantidadDias(dias);

                    const costoPorDia = productInfo?.costPerDay || 0;
                    const total = dias * costoPorDia;
                    setCostoTotal(total);
                });
        }
    }, [productId, fetchProductInfo, fetchProductImages, fechaInicio, fechaFin, productInfo]);

    useEffect(() => {
        // Llamada para obtener información del usuario
        fetchUserInfo();
    }, [fetchUserInfo]);

    const handleConfirmarReserva = async () => {
        if (userInfo) {
            const reservaData = {
                product: productInfo,
                user: userInfo,
                check_in_date: fechaInicio.toString(),
                checkout_date: fechaFin.toString(),
                comments: comentarios,
            };
    
            const headers = {
                'Authorization': `Bearer ${infoLocalStorage.jwt}`
            };
    
            try {
                const response = await axios.post('http://localhost:8080/reservations/create', reservaData, { headers });
                console.log('Reserva creada exitosamente:', response.data);
            } catch (error) {
                console.error('Error al crear la reserva:', error);
                //setError('Error al crear la reserva. Intente nuevamente más tarde.');
            }
        }
    };

    const handleCancelarReserva = () => {
        navigate(`/producto/${productId}`)
    }

    if (!productInfo || !userInfo) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="reservaProducto">
            <h2>Confirma tu reserva</h2>
            
            <h3>Detalles del Producto</h3>
            <div>
                {productImages.length > 0 && (
                    <img src={productImages[0].url} alt="Imagen 1" />
                )}
            </div>
            <p>Nombre: {productInfo.name}</p>
            <p>Descripción: {productInfo.description}</p>
            
            
            <h3>Detalles de la reserva</h3>
            <p>Fecha de inicio: {fechaInicio}</p>
            <p>Fecha de fin: {fechaFin}</p>
            <p>Costo por día: {productInfo.costPerDay.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
            <p>Cantidad de días reservados: {cantidadDias}</p>
            <p>Costo total: {costoTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>

            <h3>Detalles del Usuario</h3>
            <p>Nombre: {userInfo.name}</p>
            <p>Correo: {userEmail}</p>
            <p>Telefono: {userInfo.phoneNumber}</p>

            {error && <div className="errorMessage">{error}</div>}
            <button className="confirmButton" onClick={handleConfirmarReserva}>Confirmar Reserva</button>
            <button className="cancelButton" onClick={handleCancelarReserva}>Cancelar</button>
        </div>
    );
};

export default ReservaProducto;


