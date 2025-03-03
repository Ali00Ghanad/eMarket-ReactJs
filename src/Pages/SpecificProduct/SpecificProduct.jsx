import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";

const SpecificProduct = () => {
  const chosenProduct = useParams()
  const [product, setProduct] = useState()
  console.log(product);


  const specificProduct = async () => {
    try {
      const fetchApi = await axios.get(`https://fakestoreapi.com/products/${chosenProduct.id}`)

      if (fetchApi.status === 200) {
        setProduct(fetchApi.data)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    specificProduct()
  }, [])

  return (
    <div className='w-full max-w-[1440px] mx-auto'>

      <div>
        {/* address  */}
        <div className='flex'>
          <div>
            <img src={product.image} />
          </div>
          <div>
            <div className='border-b-2 border-gray-400'>
              <h2>{product.title}</h2>
              {/* rate */}
              <p>${product.price}</p>
              <p>${product.description}</p>
            </div>

            <div>

              {/* color  */}
              <div className='flex items-center gap-x-3'>
                <p>Colours : </p>
                <div className='flex items-center gap-x-2'>
                  <div className='w-[15px] h-[15px] bg-blue-700 rounded-full'></div>
                  <div className='w-[15px] h-[15px] bg-red-500 rounded-full'></div>
                </div>
              </div>

              {/* size */}
              <div className='flex items-center gap-x-3'>
                <p>Size : </p>
                <div className='flex items-stretch gap-x-2'>
                  <div className='px-1 w-[30px] text-center cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500 border-[1px] duration-[0.1s] rounded-sm border-slate-400'><p>XS</p></div>
                  <div className='px-1 w-[30px] text-center cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500 border-[1px] duration-[0.1s] rounded-sm border-slate-400'><p>S</p></div>
                  <div className='px-1 w-[30px] text-center cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500 border-[1px] duration-[0.1s] rounded-sm border-slate-400'><p>M</p></div>
                  <div className='px-1 w-[30px] text-center cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500 border-[1px] duration-[0.1s] rounded-sm border-slate-400'><p>L</p></div>
                  <div className='px-1 w-[30px] text-center cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500 border-[1px] duration-[0.1s] rounded-sm border-slate-400'><p>XL</p></div>
                </div>
              </div>

              {/* buy and product numbers  */}
              <div className='flex items-center gap-x-4'>
                <div className='border-[1px] rounded-sm border-slate-400 flex justify-between w-full max-w-[100px] text-[20px]'>
                  <div className='border-r-slate-400 border-[1px] px-2'>-</div>
                  <div>1</div>
                  <div className='border-l-slate-400 border-[1px] px-2'>+</div>
                </div>

                <button className='border-none outline-none text-white bg-red-500 px-10 py-2 rounded-md'>Buy Now</button>

                <div className='rounded-sm border-[1px] border-slate-400 p-1 text-[25px]'>
                  <IoIosHeartEmpty />
                </div>
              </div>

              {/* delivery and return  */}
              <div className='border-[1px] border-slate-400 rounded-sm'>
                <div className='p-4'>
                  {/* delivery icon  */}
                  <div className='leading-8'>
                    <h4 className='font-semibold'>Free Delivery</h4>
                    <p className='underline text-[12px] font-semibold'>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>

                <div className='border-t-slate-400 border-[1px] p-4'>
                  {/* return icon  */}
                  <div className='leading-8'>
                    <h4 className='font-semibold'>Return Delivery</h4>
                    <p className='text-[12px] font-semibold '>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SpecificProduct
