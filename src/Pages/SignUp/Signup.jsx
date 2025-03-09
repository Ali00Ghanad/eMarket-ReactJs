import React from 'react'
import google from './assets/Icon-Google.svg'
import sidepic from './assets/Side Image.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center gap-x-[120px] pt-[80px] pb-[140px]'>
            <img src={sidepic}/>
            <div className='w-[40%] mr-10'>
                <div className=''>
                    <h1 className='text-[25px] font-semibold'>Create an account</h1>
                    <p className='text-[14px]'>Enter your details below</p>
                </div>

                <div className='mt-5'>
                    <div className='flex flex-col gap-y-6'>
                        <input placeholder='Name' className='border-b-2 border-gray-300 placeholder:text-gray-400 outline-none py-2 focus:border-gray-500 focus:text-gray-600 focus:placeholder:text-gray-500 font-semibold' />
                        <input placeholder='Email or Phone Number' className='border-b-2 border-gray-300 placeholder:text-gray-400 outline-none py-2 focus:border-gray-500 focus:text-gray-600 focus:placeholder:text-gray-500 font-semibold' />
                        <input placeholder='Password' className='border-b-2 border-gray-300 placeholder:text-gray-400 outline-none py-2 focus:border-gray-500 focus:text-gray-600 focus:placeholder:text-gray-500 font-semibold' />
                    </div>

                    <div className='mt-8 '>
                        <button className='bg-red-500 text-white py-3 rounded-md w-full'>Create Account</button>
                        <button className='py-3 mt-2 rounded-md w-full border-gray-300 border-[1px] flex items-center justify-center gap-x-2'><img src={google} /> Sign Up with Google</button>
                        <div className='text-center mt-8 text-[14px]'><p onClick={()=>navigate('/login')} className='text-gray-500'>Already have account? <span className='cursor-pointer underline text-gray-700 ml-4 font-semibold'>Logn in</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
