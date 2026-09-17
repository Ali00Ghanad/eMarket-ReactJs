import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/assets/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-between gap-20 w-full min-h-[100vh]'>
            <div className=' border-b border-slate-200 w-full'>
                <Header />
            </div>

            <div className='w-[1500px] mx-auto'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default MainLayout
