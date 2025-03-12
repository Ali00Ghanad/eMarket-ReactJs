import React from 'react'
import phone from './assets/icons-phone.svg'
import email from './assets/icons-mail.svg'
const Contact = () => {
    return (
        <div className='w-full max-w-[1440px] mx-auto flex justify-center' >
            <div className='flex items-stretch w-full gap-x-7 my-[120px] mx-10'>

                <div className='flex flex-col shadow-md px-8 py-10 w-[30%]'>
                    <div className='pb-5 border-gray-400 border-b-2 flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-5'><img width={40} src={phone} /> <h2 className='font-semibold'>Call To Us</h2></div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>

                    <div className='pt-5 flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-5'><img width={40} src={email} /> <h2 className='font-semibold'>Write To Us</h2></div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>

                <div className='flex items-center justify-center px-8 py-10 shadow-md w-[70%]'>
                    <div className='grid grid-cols-3 grid-rows-5 gap-x-2 gap-y-5 w-full'>
                        <div className='bg-gray-200 rounded-md px-4 py-2'><input className='bg-gray-200 w-full border-none outline-none text-black placeholder:text-gray-500' placeholder='Your name' /></div>
                        <div className='bg-gray-200 rounded-md px-4 py-2'><input className='bg-gray-200 w-full border-none outline-none text-black placeholder:text-gray-500' placeholder='Your name' /></div>
                        <div className='bg-gray-200 rounded-md px-4 py-2'><input className='bg-gray-200 w-full border-none outline-none text-black placeholder:text-gray-500' placeholder='Your name' /></div>
                        <div className='bg-gray-200 rounded-md col-span-3 row-span-4 p-2'><textarea className='bg-gray-200 h-full resize-none border-none outline-none placeholder:text-gray-500 w-full' placeholder='Your Message...' ></textarea></div>
                        <button className='bg-red-500 text-white px-4 py-4 rounded-md col-start-3 '>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
