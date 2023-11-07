import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import './index.css'
import Contacto from './routes/Contacto.jsx'
import Favs from './routes/Favs.jsx'
import Administrador from './routes/Administrador.jsx'
import AñadirProducto from './routes/AñadirProducto.jsx'
import Producto from './routes/Producto.jsx'
import Detalles from './routes/Detalles.jsx'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/producto' element={<Producto />} />
          <Route path='/producto/:id' element={<Detalles />} />
          <Route path='/añadir_producto' element={<AñadirProducto />} />
          <Route path='/administrador' element={<Administrador />} />
          <Route path='/favs' element={<Favs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
