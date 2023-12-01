import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../componets/utils/ProductoContext';
import axios from 'axios';
import ShareModal from '../componets/ShareModal';

function Detalles() {
    const params = useParams();
    const idProducto = parseInt(params.id);

    const [producto, setProducto] = useState({
        img: [],
        category: [],
      });

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

    return (
        <div className="cardContainer">
            <div className="detailsContainer">
                <div className="detallesNombre">
                    <h2>{producto && producto.name}</h2>
                    <Link to="/producto">
                        <img
                            className="imgVolverProductos"
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
                    <div className='botonesSlider'>
                    <button className='boton botonAlquilarProducto' onClick={openModal}>COMPARTIR</button>
                        {showModal && <ShareModal producto={producto} onClose={closeModal} />}
                    <button className='boton botonAlquilarProducto'>ALQUILAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalles;
