import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ProductSlider from '../../Components/ProductSlider/ProductSlider';

const SpecificProduct = () => {
  const chosenProduct = useParams()
  const [product, setProduct] = useState()
  const [allProducts, setAllProducts] = useState([])
  const location = useLocation()
  console.log(product);


  const specificProductFetch = async () => {
    try {
      const fetchApi = await axios.get(`https://fakestoreapi.com/products/${chosenProduct.id}`)

      if (fetchApi.status === 200) {
        setProduct(fetchApi.data)
      }
    } catch (error) {

    }
  }

  const allProductsFetch = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`)

      if (response.status === 200) {
        setAllProducts(response.data)
        console.log(response.data);
      }
      else if (response.status === 404) {

      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allProductsFetch()
    specificProductFetch()
  }, [location])

  const starRate = (rate) => {
    const stars = [];
    for (let i = 1; i <= rate; i++) {
      stars.push(<TiStarFullOutline />)
    }
    return <div style={{ color: "#FFAD33" }} className='flex'>{stars.map(item => (<div>{item}</div>))}{rate > Math.floor(rate) && <FaStarHalf />}</div>
  }


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrNext
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrPrevious
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  let Arrowsettings = {
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



  return (
    <div className='w-full max-w-[1440px] mx-auto'>

      <div className='py-10'>
        {/* address  */}
        <div className='flex justify-between w-full items-center '>
          <div>
            <img className='w-[60%] max-w-[600px]' src={product?.image} />
          </div>
          <div className='w-[40%]'>
            <div className='border-b-2 border-gray-400 flex flex-col gap-y-4 pb-5'>
              <h2 className='text-[20px] font-semibold'>{product?.title}</h2>
              <div>{starRate(product?.rating?.rate)}</div>
              <p className='text-[20px] '> $ {product?.price}</p>
              <p>{product?.description}</p>
            </div>

            <div className='pt-5 flex flex-col gap-y-4'>

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

        <div className='mt-[140px]'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>Related Item</h4>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <ProductSlider setup={Arrowsettings} products={allProducts.filter(item => item?.category === product?.category && item.title !== product.title)} />
            <button className='text-white px-[48px] py-[16px] bg-red-600 rounded-md my-[60px]'>View All Products</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SpecificProduct
