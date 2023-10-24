import React from 'react'
import Categorias from '../componets/Categorias'

function Home() {

  const herramientas = [
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


  return (
    <div className='home'>
      <div className='imgFondo'>
        <img src="../public/imagenes/fondo.png" alt="img_fondo" />
      </div>
      <div className='categorias'>
        <h2>CATEGORIAS</h2>
        <p>Explora la conveniencia y la eficiencia de nuestro servicio de alquiler de herramientas de construcción. ¡Pon en marcha tus proyectos con las herramientas adecuadas, adaptadas a tus necesidades en la construcción!</p>
        <div className='homeCardCategorias'>
        {herramientas.map(props => (
          <Categorias
          key={props.id}
          img={props.img}
          name={props.name}
        />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Home