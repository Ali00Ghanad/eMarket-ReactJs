import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Whishlist from './Pages/Whishlist/Whishlist'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/assets/Footer'
import SpecificProduct from './Pages/SpecificProduct/SpecificProduct'
import Contact from './Pages/Contact/Contact'
import Signup from './Pages/SignUp/Signup'
import Login from './Pages/Login/Login'
import AboutUs from './Pages/AboutUs/AboutUs'

const App = () => {
  return (
   <div className='min-h-screen flex flex-col'>
      <BrowserRouter>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/home' Component={HomePage} />
            <Route path='/contact' Component={Contact} />
            <Route path='/signup' Component={Signup} />
            <Route path='/login' Component={Login} />
            <Route path='/whishlist' Component={Whishlist} />
            <Route path='/home/:category/:id' Component={SpecificProduct} />
          <Route path='home/about' Component={AboutUs} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
