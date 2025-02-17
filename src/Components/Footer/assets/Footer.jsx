import React from 'react'
// react icon 
import { SiGoogleplay } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import { ImAppleinc } from "react-icons/im";
import { BsQrCode } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full py-20 text-white bg-black flex items-start justify-evenly'>

            <div className='flex flex-col gap-y-4'>
                <h2 className='font-bold text-[24px]'>eMarket</h2>
                <p className='font-semibold text-[20px]'>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className='border-2 border-white rounded-md flex items-center p-2'>
                    <input placeholder='Enter your email' className='bg-transparent border-none outline-none' />
                    <IoSend className='text-white cursor-pointer' />
                </div>
            </div>

            <div className='flex text-left flex-col gap-y-4'>
                <h4 className='font-bold text-[20px]'>Support</h4>
                <p className='font-semibold'>Iran  , Isfahan </p>
                <p>sherkata714@gmail.com</p>
                <p>+98 993 186 9673</p>
            </div>

            <div className='flex text-left flex-col gap-y-4'>
                <h4 className='font-bold text-[20px]'>Account</h4>
                <p className='font-semibold'>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Whishlist</p>
                <p>Shop</p>
            </div>

            <div className='flex text-left flex-col gap-y-4'>
                <h4 className='font-bold text-[20px]'>Quick Link</h4>
                <p className='font-semibold'>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>

            <div className='flex text-left flex-col gap-y-4'>
                <h4 className='font-bold text-[20px]'>Download App</h4>

                <div className='flex flex-col gap-y-5'>
                    <p className='mx-auto text-slate-400'>Save $3 with app new user only</p>

                    <div className='flex items-center gap-x-2'>
                        <div className='bg-white text-black p-1 w-fit text-[100px]'><BsQrCode /></div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='border-2 border-white rounded-md p-2 w-fit'>
                                <div className='flex items-center gap-x-2'>
                                    <SiGoogleplay className='text-[28px]' />
                                    <div className='leading-4'>
                                        <p className='text-[12px]'>Download On The</p>
                                        <p className='text-[20px]'>App Store</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border-2 border-white rounded-md p-2 w-fit'>
                                <div className='flex items-center gap-x-2'>
                                    <ImAppleinc className='text-[28px]' />
                                    <div className='leading-4'>
                                        <p className='text-[12px]'>Download On The</p>
                                        <p className='text-[20px]'>App Store</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex items-center gap-x-7 text-[30px] mx-auto'>
                        <BsTwitterX className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <SlSocialLinkedin className='cursor-pointer' />
                        <BsTwitterX className='cursor-pointer' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
