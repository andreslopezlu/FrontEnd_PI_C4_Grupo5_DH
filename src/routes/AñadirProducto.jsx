import React, { createContext, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios';

function AñadirProducto() {

  const [categorias, setCategorias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categories")
      .then((res) => {
        setCategorias(res.data)
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API: ", error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/cities")
      .then((res) => {
        setCiudades(res.data)
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API: ", error);
      });
  }, []);

  const [productoNombre, setProductoNombre] = useState('');
  const [productoDescripcion, setProductoDescripcion] = useState('');
  const [productoEspecificacion, setProductoEspecificacion] = useState('');
  const [productoScore, setProductoScore] = useState(0);
  const [productoCosto, setProductoCosto] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(0);
  const [cuidadSeleccionada, setCuidadSeleccionada] = useState(0);


  //   {
  //     "id": 1,
  //     "name": "Pulidora industrial",
  //     "description": "Las pulidoras son herramientas eléctricas cuya versatilidad es importante para pulir salientes o bordes, así como soltar remaches, redondear ángulos, cortar metales, etc.",
  //     "specifications": "Potencia absorbida: 900w, Velocidad de giro en vacío: 11.500 rpm, Potencia útil: 530w, Rosca del husillo: M14, Diámetro del disco: 115 mm, Diámetro plato lijador: 115 mm, Diámetro cepillo de vaso: 75 mm, Peso: 2.0 kg",
  //     "active": true,
  //     "available": true,
  //     "average_score": 4.7,
  //     "costPerDay": 80000.0
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const infoLocalStorage = JSON.parse(localStorage.getItem('jwtToken'));

    const añadirProducto = {
      name: productoNombre,
      description: productoDescripcion,
      specifications: '',
      active: true,
      available: true,
      // average_score: productoScore,
      // costPerDay: productoCosto,
      average_score: 4.7,
      costPerDay: 10000,
      category_id: parseInt(categoriaSeleccionada, 10),
      city_id: parseInt(cuidadSeleccionada, 10)  
    }

    console.log(añadirProducto);

    // axios.post("http://localhost:8080/products/create", añadirProducto, {
    //   headers: {
    //     'Authorization': `Bearer ${infoLocalStorage.jwt}`
    //   }
    // })
    //   .then(response => {
    //     alert("Usuario creado");
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     alert("Usuario no fue creado");
    //   });

  }

  // if ([nombre, modelo, precio, fecha].includes("")) {
  //   console.log("esto está mal")
  // } else {
  //   console.log("Todo ok");
  // }


  return (
    <div className='añadirProductos'>
      <h2>AGREGAR PRODUCTO</h2>
      <div className='formAñadirProducto'>
        <Link to='/administrador'><img className='formImgSalir' src="../imagenes/salir.png" alt="" /></Link>
        <form
          onSubmit={handleSubmit}
        >
          <div>
            <select
            className='estilosForm'
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              <option value={''}>Seleccione una categoria</option>
              {categorias.map(categoria => (
                <option
                  key={categoria.id}
                  value={categoria.id}
                >
                  {categoria.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className='estilosForm'
              value={cuidadSeleccionada}
              onChange={ (e) => setCuidadSeleccionada(e.target.value)}
            >
              <option value={''}>Selecciona tu cuidad</option>
              {ciudades.map(ciudad => (
                <option key={ciudad.id} value={ciudad.id}>
                  {ciudad.name}
                </option>
              ))}
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
              value={productoNombre}
              onChange={(e) => setProductoNombre(e.target.value)}
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