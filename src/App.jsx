import { useState } from 'react'

import './App.css'
import Header from './componets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer'

function App() {

  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
