import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detalles() {
    const params = useParams();

    const detalle = {
        id: 1,
        img: [
            'andamio_1.png',
            'andamio_2.png',
            'andamio_3.png',
            'andamio_4.png',
            'carretilla_elevadora_1.png',
            'carretilla_elevadora_2.png',
        ],
        name: 'Andamios',
        precio: 60000,
        detalle:
            'Un andamio es una estructura temporal, puede ser fija o móvil, que nos sirve de apoyo en la ejecución de diferentes trabajos, un andamio puede darnos acceso a partes de un estructura que en situaciones habituales no es accesible.',
    };

    const [currentImage, setCurrentImage] = useState(0);
    const thumbnailContainerRef = useRef(null);

    const nextImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === detalle.img.length - 1 ? 0 : prevImage + 1
        );
    };

    const prevImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? detalle.img.length - 1 : prevImage - 1
        );
    };

    return (
        <div className="cardContainer">
            <div className="detailsContainer">
                <div className="detallesNombre">
                    <h2>{detalle.name}</h2>
                    <Link to="/home">
                        <img
                            className="imgVolver"
                            src="../imagenes/salir.png"
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
                            {detalle.img.map((imagen, index) => (
                                <img
                                    className="imgenesDetalleProducto"
                                    key={imagen}
                                    src={`../imagenes/herramientas/${imagen}`}
                                    alt={`Imagen ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                    <div
                        ref={thumbnailContainerRef}
                        className="thumbnailContainer"
                    >
                        {detalle.img.map((imagen, index) => (
                            <img
                                className={`thumbnail ${index === currentImage ? 'activeImg' : ''}`}
                                key={imagen}
                                src={`../imagenes/herramientas/${imagen}`}
                                alt={`Thumbnail ${(index + 1)*99}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                    <button onClick={prevImage}>Anterior</button>
                    <button onClick={nextImage}>Siguiente</button>
                </div>
                <div className="priceDetailContainer">
                    <p>Detalle: {detalle.detalle}</p>
                    <p>Precio: ${detalle.precio}/día</p>
                    <button className='boton botonAlqularProducto'>ALQUILAR</button>
                </div>
            </div>
        </div>
    );
}

export default Detalles;
