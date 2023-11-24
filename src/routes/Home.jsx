import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CardCategorias from '../componets/CardCategorias';
import CardProducto from '../componets/CardProducto';
import { ProductContext } from '../componets/utils/ProductoContext';
import axios from 'axios';
import Search from '../componets/Search';
import { faL } from '@fortawesome/free-solid-svg-icons';


function Home() {

    const categorias = [
        {
            id: 1,
            img: 'herramientas_electricas.png',
            name: 'Eléctricas'
        },
        {
            id: 2,
            img: 'herramientas_manuales.png',
            name: 'Manuales'
        },
        {
            id: 3,
            img: 'herramientas_pesadas.png',
            name: 'Pesadas'
        },
        {
            id: 4,
            img: 'herramientas_seguridad.png',
            name: 'Seguridad'
        },
        {
            id: 5,
            img: 'herramientas_especializadas.png',
            name: 'Especializadas'
        },
    ]

    const { productos } = useContext(ProductContext);
    const [loading, setLoading] = useState(false);

    const [productosMezclados, setProductosMezclados] = useState([]);
    const productosPorPagina = 10;

    useEffect(() => {
        setLoading(true);
        const mezclarArray = (array) => {
            const arrayMezclado = [...array];
            for (let i = arrayMezclado.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
            }
            setProductosMezclados(arrayMezclado);
        };

        if (productos.length > 0) {
            mezclarArray(productos);
            setLoading(false);
        }
    }, [productos]);

    return (
        <div>
            <div className='home'>
                <div className='buscador'>
                    <Search />
                </div>
                <div className='categorias'>
                    <h2 className='homeH2'>CATEGORIAS</h2>
                    <p className='homeP'>Explora la conveniencia y la eficiencia de nuestro servicio de alquiler de herramientas de construcción. ¡Pon en marcha tus proyectos con las herramientas adecuadas, adaptadas a tus necesidades en la construcción!</p>
                    <div className='homeCardCategorias'>
                        {categorias.map(props => (
                            <CardCategorias
                                key={props.id}
                                CardCategorias={props.id}
                                img={props.img}
                                name={props.name}
                            />
                        ))}
                    </div>
                </div>
                <div className='categorias recomendados'>
                    <h2 className='homeH2'>RECOMENDADOS</h2>
                    <p className='homeP'>Descubre nuestra selección de herramientas altamente recomendadas</p>
                    {loading &&
                                <div className='cargandoProducto'>
                                    <img className='gifCargandoProducto' src="../imagenes/cargando1.gif" alt="" />
                                </div>}
                    <div className='homeCardCategorias homeCardProductos'>
                        {productosMezclados.slice(0, productosPorPagina).map(props => (
                            <CardProducto
                                key={props.id}
                                id={props.id}
                                carpeta={props.carpeta}
                                img={props.img.length > 0 ? props.img[0].url : "../imagenes/no_encontrado.png"}
                                name={props.name}
                                precio={props.costPerDay.toLocaleString('es-CO')}
                                mostrarBotonAlquilar={true}
                                mostrarBotonEliminar={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
