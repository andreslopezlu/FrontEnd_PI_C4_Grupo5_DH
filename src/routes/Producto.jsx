import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CardCategorias from '../componets/CardCategorias';
import CardProducto from '../componets/CardProducto';
import ReactPaginate from 'react-paginate';
import { ProductContext } from '../componets/utils/ProductoContext';


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

    const productos = useContext(ProductContext);

    const [currentPage, setCurrentPage] = useState(0);
    const [productosPorPagina, setProductosPorPagina] = useState(10);

    const totalProductos = productos.length;
    const totalPages = Math.ceil(totalProductos / productosPorPagina);
    const offset = currentPage * productosPorPagina;
    const currentProducts = productos.slice(offset, offset + productosPorPagina);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <div className='categorias'>
                <h2 className='homeH2'>Productos Por Categoria</h2>
                <div className='homeCardCategorias'>
                    {categorias.map(props => (
                        <CardCategorias
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
                            img={props.img.length > 0 ? props.img[0].url : "../imagenes/no_encontrado.png"}
                            name={props.name}
                            precio={props.costPerDay.toLocaleString('es-CO')}
                            mostrarBotonAlquilar={true}
                            mostrarBotonEliminar={false}
                        />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="pagination">
                        {/* <button className='botonFirst' onClick={() => handlePageClick({ selected: 0 })}>&lt;&lt;</button> */}
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