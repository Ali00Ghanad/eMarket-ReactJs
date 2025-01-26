import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Whishlist from './Pages/Whishlist/Whishlist'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/home' Component={HomePage} />
          <Route path='/whishlist' Component={Whishlist} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
