import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa6";
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductSlider = ({ products, setup }) => {

    const navigate = useNavigate(null)

    const [whishlistProducts, setWhishlistProducts] = useState(() => {
        const savedWhishlist = localStorage.getItem("whishlistProducts");
        return savedWhishlist ? JSON.parse(savedWhishlist) : [];
    });

    const starRate = (rate) => {
        const stars = [];
        for (let i = 1; i <= rate; i++) {
            stars.push(<TiStarFullOutline />)
        }
        return <div style={{ color: "#FFAD33" }} className='flex'>{stars.map(item => (<div>{item}</div>))}{rate > Math.floor(rate) && <FaStarHalf />}</div>
    }

    useEffect(() => {
        localStorage.setItem("whishlistProducts", JSON.stringify(whishlistProducts));
    }, [whishlistProducts]);

    const handleAddToWhishlist = (item) => {
        notification.success({
            message: "Your product added in whishlist succussfuly !",
            placement: "top",
            showProgress: "true",
            duration: "5",
        })
        setWhishlistProducts(prevProducts => {
            if (prevProducts.some(product => product.id === item.id)) return prevProducts;

            return [...prevProducts, item];
        });
    };

    return (
        <div className='w-full'>
            <Slider {...setup}>
                {
                    products.map((item, index) => (
                        <div className='!h-[350px] !w-[250px] !m-h-[200px] m-w-[100px] my-[20px] cursor-pointer shadow-lg' onClick={()=>navigate(`home/${item.category}/${item.id}`)}>
                            <div id='productPic' className='w-[250px] h-[250px] relative'>
                                <img className='h-full object-scale-down mx-auto' src={item.image} />
                                <div className={`absolute top-2 w-full px-2 flex items-center  ${setup.rows ? "justify-end" : "justify-between"}`}>
                                    <p style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.363)", display: `${setup.rows ? "none" : "block"}` }} className='px-2 bg-red-600 rounded-md text-white w-fit'>- {item.category === "jewelery" ? "85%" : "50%"}</p>
                                    <div onClick={() => handleAddToWhishlist(item)}
                                        style={{ backgroundColor: "rgba(172, 188, 202, 0.252)" }}
                                        className={`w-[30px] h-[30px] rounded-full flex items-center justify-center hover:!bg-red-500 hover:text-white duration-[0.2s] `}
                                    >
                                        <IoIosHeartEmpty className='text-[20px]' />
                                    </div>
                                </div>

                                <div id='addToCart' className='w-full absolute bottom-0 flex items-center justify-center'>
                                    <p className='w-fit'>Add To Cart</p>
                                </div>
                            </div>

                            <div style={{ backgroundColor: "rgba(172, 188, 202, 0.12)" }} className='p-2 h-[100px] flex flex-col justify-between rounded-md'>
                                <p>{item.title.slice(0, 26)}{item.title.length > 27 && "..."}</p>
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

export default ProductSlider;
