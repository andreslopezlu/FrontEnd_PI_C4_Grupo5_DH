import React from 'react';
import { useState, useEffect } from 'react';
import Categorias from '../componets/Categorias';
import CardProducto from '../componets/CardProducto';
import ReactPaginate from 'react-paginate';

function Producto() {

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
        }
    ]
    const recomendados = [
        {
            id: 1,
            img: [
                'andamio_inicio.png',
                'andamio_1.png',
                'andamio_2.png',
                'andamio_3.png',
                'andamio_4.png',
            ],
            name: 'Andamios',
            precio: 60000
        },
        {
            id: 2,
            img: [
                'carretilla_elevadora_inicio.png',
                'carretilla_elevadora_1.png',
                'carretilla_elevadora_2.png',
                'carretilla_elevadora_3.png',
                'carretilla_elevadora_4.png',
            ],
            name: 'carretilla_elevadora',
            precio: 80000
        },
        {
            id: 3,
            img: [
                'cortadora_concreto_inicio.png',
                'cortadora_concreto_1.png',
                'cortadora_concreto_2.png',
                'cortadora_concreto_3.png',
                'cortadora_concreto_4.png',
            ],
            name: 'Cortadora de Concreto',
            precio: 100000
        },
        {
            id: 4,
            img: [
                'generador_electrico_inicio.png',
                'generador_electrico_1.png',
                'generador_electrico_2.png',
                'generador_electrico_3.png',
                'generador_electrico_4.png',
            ],
            name: 'Generador Electrico',
            precio: 120000
        },
        {
            id: 5,
            img: [
                'lijadora_plana_inicio.png',
                'lijadora_plana_1.png',
                'lijadora_plana_2.png',
                'lijadora_plana_3.png',
                'lijadora_plana_4.png',
            ],
            name: 'Lijadora Plana',
            precio: 85000
        },
        {
            id: 6,
            img: [
                'martillo_demoledor_inicio.png',
                'martillo_demoledor_1.png',
                'martillo_demoledor_2.png',
                'martillo_demoledor_3.png',
                'martillo_demoledor_4.png',
            ],
            name: 'Martillo Demoledor',
            precio: 94000
        },
        {
            id: 7,
            img: [
                'sierra_circular_inicio.png',
                'sierra_circular_1.png',
                'sierra_circular_2.png',
                'sierra_circular_3.png',
                'sierra_circular_4.png',
            ],
            name: 'Sierra Circular',
            precio: 40000
        },
        {
            id: 8,
            img: [
                'taladro_atornillador_inicio.png',
                'taladro_atornillador_1.png',
                'taladro_atornillador_2.png',
                'taladro_atornillador_3.png',
                'taladro_atornillador_4.png',
            ],
            name: 'Taladro Atornillador',
            precio: 100000
        },
        {
            id: 9,
            img: [
                'taladro_percutor_inicio.png',
                'taladro_percutor_1.png',
                'taladro_percutor_2.png',
                'taladro_percutor_3.png',
                'taladro_percutor_4.png',
            ],
            name: 'Taladro Percutor',
            precio: 120000
        },
        {
            id: 10,
            img: [
                'mezcladora_inicio.png',
                'mezcladora_1.png',
                'mezcladora_2.png',
                'mezcladora_3.png',
                'mezcladora_4.png',
            ],
            name: 'Mezcladora',
            precio: 85000
        },
        {
            id: 11,
            img: [
                'aplanadora_inicio.png',
                'aplanadora_1.png',
                'aplanadora_2.png',
                'aplanadora_3.png',
                'aplanadora_4.png',
            ],
            name: 'Aplanadora',
            precio: 60000
        },
        {
            id: 12,
            img: [
                'bobcat_inicio.png',
                'bobcat_1.png',
                'bobcat_2.png',
                'bobcat_3.png',
                'bobcat_4.png',
            ],
            name: 'BobCat',
            precio: 80000
        },
        {
            id: 13,
            img: [
                'bulldozer_inicio.png',
                'bulldozer_1.png',
                'bulldozer_2.png',
                'bulldozer_3.png',
                'bulldozer_4.png',
            ],
            name: 'Bulldozer',
            precio: 100000
        },
        {
            id: 14,
            img: [
                'camion_inicio.png',
                'camion_1.png',
                'camion_2.png',
                'camion_3.png',
                'camion_4.png',
            ],
            name: 'Camion',
            precio: 120000
        },
        {
            id: 15,
            img: [
                'compresor_inicio.png',
                'compresor_1.png',
                'compresor_2.png',
                'compresor_3.png',
                'compresor_4.png',
            ],
            name: 'Compresor',
            precio: 85000
        },
        {
            id: 16,
            img: [
                'equipo_soldadura_inicio.png',
                'equipo_soldadura_1.png',
                'equipo_soldadura_2.png',
                'equipo_soldadura_3.png',
                'equipo_soldadura_4.png',
            ],
            name: 'Equipo de Soldadura',
            precio: 60000
        },
        {
            id: 17,
            img: [
                'excavadora_inicio.png',
                'excavadora_1.png',
                'excavadora_2.png',
                'excavadora_3.png',
                'excavadora_4.png',
            ],
            name: 'Excavadora',
            precio: 40000
        },
        {
            id: 18,
            img: [
                'grua_inicio.png',
                'grua_1.png',
                'grua_2.png',
                'grua_3.png',
                'grua_4.png',
            ],
            name: 'Grua',
            precio: 100000
        },
        {
            id: 19,
            img: [
                'guantes_seguridad_inicio.png',
                'guantes_seguridad_1.png',
                'guantes_seguridad_2.png',
                'guantes_seguridad_3.png',
                'guantes_seguridad_4.png',
            ],
            name: 'Guantes Seguridad',
            precio: 80000
        },
        {
            id: 20,
            img: [
                'volqueta_inicio.png',
                'volqueta_1.png',
                'volqueta_2.png',
                'volqueta_3.png',
                'volqueta_4.png',
            ],
            name: 'Volqueta',
            precio: 120000
        },
        {
            id: 21,
            img: [
                'piloteadora_inicio.png',
                'piloteadora_1.png',
                'piloteadora_2.png',
                'piloteadora_3.png',
                'piloteadora_4.png',
            ],
            name: 'Piloteadora',
            precio: 60000
        },
    ]

    const [productosMezclados, setProductosMezclados] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [productosPorPagina, setProductosPorPagina] = useState(10);

    useEffect(() => {
        const mezclarArray = (array) => {
            const arrayMezclado = [...array];
            for (let i = arrayMezclado.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
            }
            setProductosMezclados(arrayMezclado);
        };

        mezclarArray(recomendados);
    }, []);


    const totalProductos = productosMezclados.length;
    const totalPages = Math.ceil(totalProductos / productosPorPagina);
    const offset = currentPage * productosPorPagina;
    const currentProducts = productosMezclados.slice(offset, offset + productosPorPagina);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <div className='categorias'>
                <h2 className='homeH2'>Productos Por Categoria</h2>
                <div className='homeCardCategorias'>
                    {categorias.map(props => (
                        <Categorias
                            key={props.id}
                            img={props.img}
                            name={props.name}
                        />
                    ))}
                </div>
            </div>
            <h2 className='homeH2'>Productos</h2>
            <div className='categorias recomendados'>
                <div className='homeCardCategorias homeCardProductos'>
                    {currentProducts.map(props => (
                        <CardProducto
                            key={props.id}
                            id={props.id}
                            carpeta={props.carpeta}
                            img={props.img[1]}
                            name={props.name}
                            precio={props.precio}
                            mostrarBotonAlquilar={true}
                            mostrarBotonEliminar={false}
                        />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        <button className='botonFirst' onClick={() => handlePageClick({ selected: 0 })}>&lt;&lt;</button>
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Producto