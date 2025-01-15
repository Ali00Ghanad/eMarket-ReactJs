import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa6";

const ProductSlider = ({ products , setup }) => {

    const starRate = (rate)=>{
        const stars = [];
        for(let i=1; i<=rate;i++){
            stars.push(<TiStarFullOutline/>)
        }

        return <div style={{color:"#FFAD33"}} className='flex'>{stars.map(item=>(<div>{item}</div>))}{rate>Math.floor(rate) && <FaStarHalf/>}</div>
    }

    return (
        <div className='w-full'>
            <Slider {...setup}>
                {
                    products.map((item, index) => (
                        <div className=' !h-[350px] !w-[250px] cursor-pointer shadow-lg '>
                            <div id='productPic' className='w-[250px] h-[250px] relative'>
                                <img className='h-full object-scale-down mx-auto' src={item.image} />
                                <div className='absolute top-2 w-full px-2 flex items-center justify-between'>
                                    <p style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.363)",display:`${setup.rows ? "none":"block"}` }} className='px-2 bg-red-600 rounded-md text-white w-fit'>- {item.category === "jewelery" ? "85%" : "50%"}</p>
                                    <div style={{ backgroundColor: "rgba(172, 188, 202, 0.252)" }} className='w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                                        <IoIosHeartEmpty className='text-[20px]' />
                                    </div>
                                </div>

                                <div id='addToCart' className='w-full absolute bottom-0 flex items-center justify-center'>
                                    <p className='w-fit'>Add To Cart</p>
                                </div>
                            </div>

                            <div style={{backgroundColor:"rgba(172, 188, 202, 0.12)"}} className='p-2 h-[100px] flex flex-col justify-between rounded-md'>
                                <p>{item.title.slice(0,26)}{item.title.length > 27 && "..."}</p>
                                <p className='text-red-600'>${item.price}</p>
                                <p className='flex gap-x-2'>{starRate(item.rating.rate)} <span className='text-[12px] text-slate-400'>({item.rating.rate})</span></p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default ProductSlider