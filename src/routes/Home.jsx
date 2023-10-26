import React from 'react'
import { useState, useEffect } from 'react';
import Categorias from '../componets/Categorias'
import Producto from '../componets/Producto'
import ReactPaginate from 'react-paginate';


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
    }
  ]

  const recomendados = [
    {
      id: 1,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 2,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 3,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 4,
      img: 'generador_energia.png',
      name: 'Generador Electrico',
      precio: 120000
    },
    {
      id: 5,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 6,
      img: 'martillo_demoledor.png',
      name: 'Martillo Demoledor',
      precio: 94000
    },
    {
      id: 7,
      img: 'sierra_circular.png',
      name: 'Sierra Circular',
      precio: 40000
    },
    {
      id: 8,
      img: 'taladro_atornillador.png',
      name: 'Taladro Atornillador',
      precio: 100000
    },
    {
      id: 9,
      img: 'taladro_percutor.png',
      name: 'Taladro Percutor',
      precio: 120000
    },
    {
      id: 10,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 11,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 12,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 13,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 14,
      img: 'generador_energia.png',
      name: 'Generador Electrico',
      precio: 120000
    },
    {
      id: 15,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 16,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 17,
      img: 'sierra_circular.png',
      name: 'Sierra Circular',
      precio: 40000
    },
    {
      id: 18,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 19,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 20,
      img: 'taladro_percutor.png',
      name: 'Taladro Percutor',
      precio: 120000
    },
    {
      id: 21,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 22,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 23,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 24,
      img: 'generador_energia.png',
      name: 'Generador Electrico',
      precio: 120000
    },
    {
      id: 25,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 26,
      img: 'martillo_demoledor.png',
      name: 'Martillo Demoledor',
      precio: 94000
    },
    {
      id: 27,
      img: 'sierra_circular.png',
      name: 'Sierra Circular',
      precio: 40000
    },
    {
      id: 28,
      img: 'taladro_atornillador.png',
      name: 'Taladro Atornillador',
      precio: 100000
    },
    {
      id: 29,
      img: 'taladro_percutor.png',
      name: 'Taladro Percutor',
      precio: 120000
    },
    {
      id: 30,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 31,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 32,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 33,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 34,
      img: 'generador_energia.png',
      name: 'Generador Electrico',
      precio: 120000
    },
    {
      id: 35,
      img: 'lijadora_plana.png',
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 36,
      img: 'andamios.png',
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 37,
      img: 'sierra_circular.png',
      name: 'Sierra Circular',
      precio: 40000
    },
    {
      id: 38,
      img: 'cortadora_concreto.png',
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 39,
      img: 'carretilla_elevadora.png',
      name: 'Carretilla Elevadora',
      precio: 80000
    },
    {
      id: 40,
      img: 'taladro_percutor.png',
      name: 'Taladro Percutor',
      precio: 120000
    },
  ]

  const [productosMezclados, setProductosMezclados] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productosPorPagina, setProductosPorPagina] = useState(10); // Cantidad inicial

  useEffect(() => {
    const handleResize = () => {
      // Obtener el ancho de la ventana
      const windowWidth = window.innerWidth;

      // Ajustar la cantidad de productos por página según la resolución
      if (windowWidth <= 700) {
        setProductosPorPagina(6); // Por ejemplo, 6 productos por página para resoluciones menores o iguales a 768px
      } else {
        setProductosPorPagina(10); // Valor predeterminado de 10 productos por página para otras resoluciones
      }
    };

    // Agregar un event listener para detectar cambios en la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize una vez para establecer la cantidad inicial de productos por página
    handleResize();

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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


  const totalProducts = productosMezclados.length;
  const totalPages = Math.ceil(totalProducts / productosPorPagina);
  const offset = currentPage * productosPorPagina;
  const currentProducts = productosMezclados.slice(offset, offset + productosPorPagina);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };



  return (
    <div>
      <div className='imgFondo'>
        <img src="../public/imagenes/fondoo.png" alt="img_fondo" />
        <h1>ALQUILER DE HERRAMIENTAS</h1>
        <p>Construyendo Futuro Juntos</p>
      </div>
      <div className='home'>
        <div className='categorias'>
          <h2 className='homeH2'>CATEGORIAS</h2>
          <p className='homeP'>Explora la conveniencia y la eficiencia de nuestro servicio de alquiler de herramientas de construcción. ¡Pon en marcha tus proyectos con las herramientas adecuadas, adaptadas a tus necesidades en la construcción!</p>
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
        <div className='categorias recomendados'>
          <h2 className='homeH2'>RECOMENDADOS</h2>
          <p className='homeP'>Descubre nuestra selección de herramientas altamente recomendadas</p>
          <div className='homeCardCategorias homeCardProductos'>
            {currentProducts.map(props => (
              <Producto
                key={props.id}
                img={props.img}
                name={props.name}
                precio={props.precio}
              />
            ))}
          </div>
          {totalPages > 1 && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Home