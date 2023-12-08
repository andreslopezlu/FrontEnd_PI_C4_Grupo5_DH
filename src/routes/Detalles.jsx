import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../componets/utils/ProductoContext';
import axios from 'axios';
import ShareModal from '../componets/ShareModal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Calendar.css'

function Detalles() {
    const params = useParams();
    const idProducto = parseInt(params.id);

    const [producto, setProducto] = useState({
        img: [],
        category: [],
    });

    const [fechasReservadas, setFechasReservadas] = useState([]);
    const [error, setError] = useState(null);
    const [fechaActual] = useState(new Date());
    const [fechaInicioSeleccionada, setFechaInicioSeleccionada] = useState(null);
    const [fechaFinSeleccionada, setFechaFinSeleccionada] = useState(null);

    const obtenerFechasReservadas = () => {
        axios.get(`http://localhost:8080/reservations/by-product/${idProducto}`)
        .then((res) => {
            const reservas = res.data;
            const fechasOcupadas = reservas.map((reserva) => ({
                start: new Date(reserva.check_in_date),
                end: new Date(reserva.checkout_date),
            })).filter((reserva) => reserva.end >= fechaActual);
            setFechasReservadas(fechasOcupadas);

        })
        .catch((error) => {
            console.error("Error al obtener fechas reservadas: ", error);
            setError("Error al obtener fechas reservadas. Intente nuevamente más tarde.");
        });
    };

    const obtenerImagenes = (productId) => {
        return axios.get(`http://localhost:8080/images/product/${productId}`)
            .then((imgres) => imgres.data)
            .catch((error) => {
                console.error("Error al obtener datos de imágenes de la API: ", error);
                return [];
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${idProducto}`)
            .then((res) => {
                const product = res.data;

                obtenerFechasReservadas();

                obtenerImagenes(product.id)
                    .then((imagenes) => {
                        setProducto({
                            ...product,
                            img: imagenes,
                        });
                    })
                    .catch((error) => {
                        console.error("Error al obtener datos de la API: ", error);
                    });
            })
            .catch((error) => {
                console.error("Error al obtener datos de la API: ", error);
            });
    }, [idProducto]);

    const deshabilitarFechas = ({ activeStartDate, date, view }) => {
        // Deshabilitar fechas pasadas
        if (date < fechaActual) {
            return true;
        }
    
        // Deshabilitar fechas ocupadas
        const adjustedDate = new Date(date);
        adjustedDate.setHours(0, 0, 0, 0);
        const isFechaOcupada = fechasReservadas.some(
            (fecha) =>
                adjustedDate.getTime() >= new Date(fecha.start).getTime() &&
                adjustedDate.getTime() <= new Date(fecha.end).getTime()
            );
    
        return isFechaOcupada;
    };

    const handleFechaSeleccionada = (date) => {
        if (!fechaInicioSeleccionada || (fechaInicioSeleccionada && fechaFinSeleccionada)) {
            setFechaInicioSeleccionada(date);
            setFechaFinSeleccionada(null);
        } else {
            if (!fechaFinSeleccionada && date > fechaInicioSeleccionada) {
                const rangoPropuesto = getDiasEntreFechas(fechaInicioSeleccionada, date);
                const todasFechasDisponibles = rangoPropuesto.every(fecha =>
                !fechasReservadas.some(
                    ocupada =>
                    fecha.getTime() >= new Date(ocupada.start).getTime() &&
                    fecha.getTime() <= new Date(ocupada.end).getTime()
                )
                );
        
                if (todasFechasDisponibles) {
                setFechaFinSeleccionada(date);
                } else {
                    alert("Las fechas seleccionadas incluyen fechas ocupadas. Por favor, inténtelo de nuevo con otro rango.");
                    setFechaInicioSeleccionada(null);
                    setFechaFinSeleccionada(null);
                }
            } else {
                // Reiniciar la selección si se hace clic en una fecha antes de la fecha de inicio o en la fecha de inicio nuevamente
                setFechaInicioSeleccionada(date);
                setFechaFinSeleccionada(null);
            }
        }
    };
    
    const getDiasEntreFechas = (fechaInicio, fechaFin) => {
        const dias = [];
        const diaActual = new Date(fechaInicio);
    
        while (diaActual <= fechaFin) {
            dias.push(new Date(diaActual));
            diaActual.setDate(diaActual.getDate() + 1);
        }
    
        return dias;
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // console.table(producto);
    // console.log(producto);

    const [currentImage, setCurrentImage] = useState(0);
    const thumbnailContainerRef = useRef(null);


    const nextImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === producto.img.length - 1 ? 0 : prevImage + 1
        );
    };

    const prevImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? producto.img.length - 1 : prevImage - 1
        );
    };

    const handleReservaClick = () => {
        
        const usuarioLoggeado = () => {
            const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));
            if (!infoLocalStorage) {
                return true;
            }
        }
    
        if (usuarioLoggeado) {
            history.push(`/producto/${idProducto}/reserva`);
        } else {
            history.push('/login');
        }
    };

    return (
        <div className="cardContainer">
            <div className="detailsContainer">
                <div className="detallesNombre">
                    <h2>{producto && producto.name}</h2>
                    <Link to="/producto">
                        <img
                            className="imgVolverProductos"
                            src="../../public/imagenes/salir.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className='sliderContainer'>
                    <div className="imgContainer">
                        <div
                            className="slider"
                            style={{
                                transform: `translateX(-${currentImage * 100}%)`,
                            }}
                        >
                            {producto.img.map((imagen, index) => (
                                <img
                                    className="imgenesDetalleProducto"
                                    key={index + 100}
                                    src={imagen.url}
                                    alt={`Imagen ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                    <div
                        ref={thumbnailContainerRef}
                        className="thumbnailContainer"
                    >
                        {producto.img.map((imagen, index) => (
                            <img
                                className={`thumbnail ${index === currentImage ? 'activeImg' : ''}`}
                                key={index}
                                src={imagen.url}
                                alt={`Thumbnail ${(index + 1) * 99}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                    <div className='botonesSlider'>
                    <button className='boton botonDesplazarImg' onClick={prevImage}>Anterior</button>
                    <button className='boton botonDesplazarImg' onClick={nextImage}>Siguiente</button>
                    </div>
                </div>
                <div className="priceDetailContainer">
                    <p>{producto && producto.description}</p>
                    <p>{producto && producto.specifications}</p>
                    <p><b>Categoria:</b> {producto && producto.category.name}</p>
                    <p><b>Precio:</b> ${producto && producto.costPerDay}/día</p>
                    <div className='calendarContainer'>
                        <p><b>Disponibilidad del producto:</b></p>
                        <Calendar
                            tileContent={({ date }) => {
                                const adjustedDate = new Date(date);
                                adjustedDate.setHours(0, 0, 0, 0);

                                const isFechaOcupada = fechasReservadas.some(
                                (fecha) =>
                                    adjustedDate.getTime()  >= new Date(fecha.start).getTime() &&
                                    adjustedDate.getTime()  <= new Date(fecha.end).getTime()
                                );
                                
                                return (
                                <div className={`customTile ${isFechaOcupada ? 'fechaOcupada' : ''}`}>
                                </div>
                                );
                            }}
                            minDate={fechaActual}
                            selectRange
                            tileDisabled={deshabilitarFechas}
                            value={[fechaInicioSeleccionada, fechaFinSeleccionada]}
                            onChange={() => {}}
                            onClickDay={(value) => handleFechaSeleccionada(value)}
                        />
                    </div>
                    {error && <div className="errorMessage">{error}</div>}
                    <div className='botonesSlider'>
                    <button className='boton botonAlquilarProducto' onClick={openModal}>COMPARTIR</button>
                        {showModal && <ShareModal producto={producto} onClose={closeModal} />}
                    <button className='boton botonAlquilarProducto' onClick={handleReservaClick}>ALQUILAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalles;
