import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function AñadirProducto() {
  return (
    <div className='añadirProductos'>
      <h2>AGREGAR PRODUCTO</h2>
      <div className='formAñadirProducto'>
        <Link to='/producto'><img className='formImgSalir' src="../imagenes/salir.png" alt="" /></Link>
        <form action="">
          <div>
            <select className='estilosForm' name="" id="">
              <option value=""></option>
              <option value="">Electricas</option>
              <option value="">Manuales</option>
              <option value="">Pesadas</option>
              <option value="">Seguridad</option>
              <option value="">Especializadas</option>
            </select>
          </div>
          <div>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm'
              type="file"
            />
          </div>
          <div>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm'
              type="nombre"
              placeholder='Nombre'
            />
          </div>
          <div className='formPrecio'>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm inputPrecio'
              type="number"
              placeholder='Precio'
            />
            <p>COP/día</p>
          </div>
          <div>
            <textarea
              className='estilosForm'
              name=""
              id=""
              cols="22"
              rows="5">
            </textarea>
          </div>
          <div>
            <button>Agregar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AñadirProducto