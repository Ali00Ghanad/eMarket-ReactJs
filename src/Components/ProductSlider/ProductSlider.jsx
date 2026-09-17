import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa6";
import { notification } from 'antd';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const ProductSlider = ({ products }) => {

    console.log(products);

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

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const StarRate = (rate) => {
        const stars = [];
        for (let i = 1; i <= rate; i++) {
            stars.push(<TiStarFullOutline />)
        }
        return <div className='flex text-red-500'>
            {
                stars.map(item => (<div>{item}</div>))
            }{rate > Math.floor(rate) && <FaStarHalf />}
        </div>
    }


    const handleAddToWhishlist = (item) => {
        notification.success({
            message: "Your product added in whishlist succussfuly !",
            placement: "top",
            showProgress: "true",
            duration: "5",
        })
    };

    return (
        <div className='slider-container w-full cursor-grab'>
            <Slider {...settings}>

                {
                    products.map((item, index) => (
                        <div key={index} className='p-3'>
                            <article className='bg-neutral-300 rounded-[10px] flex flex-col h-[400px] w-[340px] drop-shadow-md'>

                                <div className='inset-0 relative p-4 w-full bg-white select-none'>
                                    <img src={item.image} className='w-[80%] mx-auto aspect-video object-scale-down select-none' />

                                    <button className='absolute top-2'>
                                        <IoIosHeartEmpty className='text-[24px]' />
                                    </button>

                                </div>

                                <section className='p-4 flex flex-col justify-between h-full'>
                                    <div className='flex justify-between'>
                                        <p className='text-[12px] bg-slate-400 rounded-md py-1 text-slate-800 px-2 w-fit'>#{item.category.split(" ").join("_")}</p>
                                        {
                                            StarRate(item.rating.rate)
                                        }
                                    </div>

                                    <div>
                                        <h3 title={item.description} className='truncate cursor-text'>{item.title}</h3>

                                        <div className='flex items-center gap-1'>
                                            <svg class="w-6 h-6 text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                                                <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                                            </svg>

                                            <p><span className='text-slate-600 font-bold'>{item.rating.count}</span> Items in <span className='text-red-600 font-bold'>Storage</span></p>
                                        </div>

                                        <p className='text-green-900 font-semibold'>Price : {item.price}$</p>
                                    </div>

                                    <Link to={`/home/${item.category}/${item.id}`} className='
                                    w-full text-center 
                                    border border-red-500 
                                    rounded-md 
                                    text-red-500 
                                    bg-white/50 hover:bg-red-500 hover:text-white
                                    duration-[0.2s] hover:duration-[0.2s]
                                    '>
                                        See Item
                                    </Link>
                                </section>

                            </article>
                        </div>
                    ))
                }

            </Slider>
        </div>
    )
}

export default ProductSlider;
