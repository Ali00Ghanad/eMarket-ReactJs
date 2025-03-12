import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className='w-full flex items-center justify-between pt-[40px] pb-[16px] px-[135px] border-b border-slate-200'>
            <Link to="/" className='text-[24px] font-semibold cursor-pointer'>eMarket</Link>

            <div className='flex gap-x-[48px] items-center'>
                <div className='navbarContent'>
                    <Link to="/">Home</Link>
                    <div className='border'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/contact">Contact</Link>
                    <div className='border'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/">About</Link>
                    <div className='border'></div>
                <div id='navbarContent'>
                    <Link to="home/about">About</Link>
                    <div id='border'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/signup">Sign Up</Link>
                    <div className='border'></div>
                </div>

            </div>

            <div className='flex items-center gap-x-5'>
                <div style={{ backgroundColor: "#F5F5F5" }} className='flex items-center gap-x-5 px-[20px] py-[5px] rounded-md'>
                    <input type='text' className='border-none outline-none bg-transparent' placeholder='what are you looking for?' />
                    <IoSearchOutline className='cursor-pointer' />
                </div>

                <div className='relative' onClick={()=>navigate("/whishlist")}>
                    <IoIosHeartEmpty className='text-[25px] cursor-pointer' />
                    <div className={`absolute cursor-pointer top-[0px] right-[-6px] flex justify-center items-center text-[12px] rounded-full bg-red-600 text-white w-[15px] h-[15px] z-50 `}>
                    </div>
                </div>
                <SlBasket className='text-[25px] cursor-pointer hover:text-cyan-600 duration-[0.2s]' />
            </div>

        </div>
    )
}

export default Header
