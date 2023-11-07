import React from 'react';
import { useState, useEffect } from 'react';
import Categorias from '../componets/Categorias';
import CardProducto from '../componets/CardProducto';

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
      img: [
        'andamio_inicio.png',
        'andamio_1',
        'andamio_2',
        'andamio_3',
        'andamio_4',
      ],
      name: 'Andamios',
      precio: 60000
    },
    {
      id: 2,
      img: [
        'carretilla_elevadora_inicio.png',
        'carretilla_elevadora_1',
        'carretilla_elevadora_2',
        'carretilla_elevadora_3',
        'carretilla_elevadora_4',
      ],
      name: 'carretilla_elevadora',
      precio: 80000
    },
    {
      id: 3,
      img: [
        'cortadora_concreto_inicio.png',
        'cortadora_concreto_1',
        'cortadora_concreto_2',
        'cortadora_concreto_3',
        'cortadora_concreto_4',
      ],
      name: 'Cortadora de Concreto',
      precio: 100000
    },
    {
      id: 4,
      img: [
        'generador_electrico_inicio.png',
        'generador_electrico_1',
        'generador_electrico_2',
        'generador_electrico_3',
        'generador_electrico_4',
      ],
      name: 'Generador Electrico',
      precio: 120000
    },
    {
      id: 5,
      img: [
        'lijadora_plana_inicio.png',
        'lijadora_plana_1',
        'lijadora_plana_2',
        'lijadora_plana_3',
        'lijadora_plana_4',
      ],
      name: 'Lijadora Plana',
      precio: 85000
    },
    {
      id: 6,
      img: [
        'martillo_demoledor_inicio.png',
        'martillo_demoledor_1',
        'martillo_demoledor_2',
        'martillo_demoledor_3',
        'martillo_demoledor_4',
      ],
      name: 'Martillo Demoledor',
      precio: 94000
    },
    {
      id: 7,
      img: [
        'sierra_circular_inicio.png',
        'sierra_circular_1',
        'sierra_circular_2',
        'sierra_circular_3',
        'sierra_circular_4',
      ],
      name: 'Sierra Circular',
      precio: 40000
    },
    {
      id: 8,
      img: [
        'taladro_atornillador_inicio.png',
        'taladro_atornillador_1',
        'taladro_atornillador_2',
        'taladro_atornillador_3',
        'taladro_atornillador_4',
      ],
      name: 'Taladro Atornillador',
      precio: 100000
    },
    {
      id: 9,
      img: [
        'taladro_percutor_inicio.png',
        'taladro_percutor_1',
        'taladro_percutor_2',
        'taladro_percutor_3',
        'taladro_percutor_4',
      ],
      name: 'Taladro Percutor',
      precio: 120000
    },
    {
      id: 10,
      img: [
        'mezcladora_inicio.png',
        'mezcladora_1',
        'mezcladora_2',
        'mezcladora_3',
        'mezcladora_4',
      ],
      name: 'Mezcladora',
      precio: 85000
    },
    {
      id: 11,
      img: [
        'aplanadora_inicio.png',
        'aplanadora_1',
        'aplanadora_2',
        'aplanadora_3',
        'aplanadora_4',
      ],
      name: 'Aplanadora',
      precio: 60000
    },
    {
      id: 12,
      img: [
        'bobcat_inicio.png',
        'bobcat_1',
        'bobcat_2',
        'bobcat_3',
        'bobcat_4',
      ],
      name: 'BobCat',
      precio: 80000
    },
    {
      id: 13,
      img: [
        'bulldozer_inicio.png',
        'bulldozer_1',
        'bulldozer_2',
        'bulldozer_3',
        'bulldozer_4',
      ],
      name: 'Bulldozer',
      precio: 100000
    },
    {
      id: 14,
      img: [
        'camion_inicio.png',
        'camion_1',
        'camion_2',
        'camion_3',
        'camion_4',
      ],
      name: 'Camion',
      precio: 120000
    },
    {
      id: 15,
      img: [
        'compresor_inicio.png',
        'compresor_1',
        'compresor_2',
        'compresor_3',
        'compresor_4',
      ],
      name: 'Compresor',
      precio: 85000
    },
    {
      id: 16,
      img: [
        'equipo_soldadura_inicio.png',
        'equipo_soldadura_1',
        'equipo_soldadura_2',
        'equipo_soldadura_3',
        'equipo_soldadura_4',
      ],
      name: 'Equipo de Soldadura',
      precio: 60000
    },
    {
      id: 17,
      img: [
        'excavadora_inicio.png',
        'excavadora_1',
        'excavadora_2',
        'excavadora_3',
        'excavadora_4',
      ],
      name: 'Excavadora',
      precio: 40000
    },
    {
      id: 18,
      img: [
        'grua_inicio.png',
        'grua_1',
        'grua_2',
        'grua_3',
        'grua_4',
      ],
      name: 'Grua',
      precio: 100000
    },
    {
      id: 19,
      img: [
        'guantes_seguridad_inicio.png',
        'guantes_seguridad_1',
        'guantes_seguridad_2',
        'guantes_seguridad_3',
        'guantes_seguridad_4',
      ],
      name: 'Guantes Seguridad',
      precio: 80000
    },
    {
      id: 20,
      img: [
        'volqueta_inicio.png',
        'volqueta_1',
        'volqueta_2',
        'volqueta_3',
        'volqueta_4',
      ],
      name: 'Volqueta',
      precio: 120000
    },
    {
      id: 21,
      img: [
        'piloteadora_inicio.png',
        'piloteadora_1',
        'piloteadora_2',
        'piloteadora_3',
        'piloteadora_4',
      ],
      name: 'Piloteadora',
      precio: 60000
    },
  ]

  const [productosMezclados, setProductosMezclados] = useState([]);
  const productosPorPagina = 10;

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

  return (
    <div>
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
          {productosMezclados.slice(0, productosPorPagina).map(props => (
              <CardProducto
                key={props.id}
                id={props.id}
                carpeta={props.carpeta}
                img={props.img[0]}
                name={props.name}
                precio={props.precio}
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