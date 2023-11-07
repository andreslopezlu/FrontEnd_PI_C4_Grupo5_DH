import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function AñadirProducto() {
  return (
    <div className='añadirProductos'>
      <h2>AGREGAR PRODUCTO</h2>
      <div className='formAñadirProducto'>
        <Link to='/administrador'><img className='formImgSalir' src="../imagenes/salir.png" alt="" /></Link>
        <form action="">
        <div>
          <select className='estilosForm' name="" id="">
            <option value="" disabled selected>Selecciona una categoría:</option>
            <option value="Electricas">Electricas</option>
            <option value="Manuales">Manuales</option>
            <option value="Pesadas">Pesadas</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Especializadas">Especializadas</option>
          </select>
          </div>
          <div>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm'
              type="file"
              multiple
            />
          </div>
          <div>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm'
              type="nombre"
              placeholder='Ingrese el nombre'
            />
          </div>
          <div className='formPrecio'>
            <img className='añadirProductosImg' src="" alt="" />
            <input
              className='estilosForm inputPrecio'
              type="number"
              placeholder='Ingrese el precio'
            />
            <p>COP/día</p>
          </div>
          <div>
            <textarea
              className='estilosForm'
              name=""
              id=""
              cols="22"
              rows="5"
              placeholder='Descripcion..'>
            </textarea>
          </div>
          <div>
            <button className='boton'>Agregar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AñadirProducto