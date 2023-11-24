import { useState, useEffect } from 'react'

import './App.css'
import Header from './componets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer'
import { ProductContextProvider } from './componets/utils/ProductoContext'


function App() {

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <ProductContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </ProductContextProvider>
  )
}

export default App
