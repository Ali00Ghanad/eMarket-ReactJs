import React from 'react'
import google from './assets/Icon-Google.svg'
import sidepic from './assets/Side Image.png'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    return (
        <div className='flex items-center gap-x-[120px] pt-[80px] pb-[140px]'>
            <img src={sidepic} />
            <div className='w-[40%] mr-10'>
                <div className=''>
                    <h1 className='text-[25px] font-semibold'>Login to eMarket</h1>
                    <p className='text-[14px]'>Enter your details below</p>
                </div>

                <div className='mt-5'>
                    <div className='flex flex-col gap-y-6'>
                        <input placeholder='Email or Phone Number' className='border-b-2 border-gray-300 placeholder:text-gray-400 outline-none py-2 focus:border-gray-500 focus:text-gray-600 focus:placeholder:text-gray-500 font-semibold' />
                        <input placeholder='Password' className='border-b-2 border-gray-300 placeholder:text-gray-400 outline-none py-2 focus:border-gray-500 focus:text-gray-600 focus:placeholder:text-gray-500 font-semibold' />
                    </div>

                    <div className='mt-8 flex items-center justify-between'>
                        <button className='text-white bg-red-500 py-3 w-[30%] rounded-md min-w-[140px]'>Log In</button>
                        <p className='text-red-500 cursor-pointer'>Forget Password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
