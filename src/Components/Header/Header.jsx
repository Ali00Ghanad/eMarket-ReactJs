import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
    return (
        <div className='w-full flex items-center justify-between pt-[40px] pb-[16px] px-[135px] border-b border-slate-200'>
            <h1 className='text-[24px] font-semibold cursor-pointer'>eMarket</h1>

            <div className='flex gap-x-[48px] items-center'>
                <div id='navbarContent'> 
                    <Link  to="/">Home</Link>
                    <div id='border'></div>
                </div>

                <div id='navbarContent'>
                    <Link  to="/">Contanct</Link>
                    <div id='border'></div>
                </div>

                <div id='navbarContent'>
                    <Link  to="/">About</Link>
                    <div id='border'></div>
                </div>

                <div id='navbarContent'>
                    <Link  to="/">Sign Up</Link>
                    <div id='border'></div>
                </div>

            </div>

            <div className='flex items-center gap-x-5'>
                <div style={{ backgroundColor: "#F5F5F5" }} className='flex items-center gap-x-5 px-[20px] py-[5px] rounded-md'>
                    <input type='text' className='border-none outline-none bg-transparent' placeholder='what are you looking for?' />
                    <IoSearchOutline className='cursor-pointer' />
                </div>

                <IoIosHeartEmpty className='text-[25px] cursor-pointer hover:text-red-600 duration-[0.2s]' />
                <SlBasket className='text-[25px] cursor-pointer hover:text-cyan-600 duration-[0.2s]' />
            </div>

        </div>
    )
}

export default Header
