import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Whishlist from './Pages/Whishlist/Whishlist'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/assets/Footer'
import SpecificProduct from './Pages/SpecificProduct/SpecificProduct'

const App = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-between'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/home' Component={HomePage} />
          <Route path='/whishlist' Component={Whishlist} />
          <Route path='home/:category/:id' Component={SpecificProduct} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
