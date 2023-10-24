import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Contacto from './routes/Contacto.jsx'
import Favs from './routes/Favs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate to={"/home"} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/favs' element={<Favs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
