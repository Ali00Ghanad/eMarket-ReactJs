import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaStarHalf } from 'react-icons/fa6';

const Header = () => {

    const [allProducts, setAllProducts] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [itemExist, setItemExist] = useState(false)
    console.log('data in header : ', allProducts);
    console.log('data in search : ', searchValue);

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

    useEffect(() => {
        if (searchValue !== "") {
            const exists = allProducts.some(item =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            )

            setItemExist(exists)
        }
        else{
            setItemExist(false)
            setSearchValue("")
        }
    }, [searchValue, allProducts])

    const fetchApi = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")

            if (response.status === 200) {
                setAllProducts(response.data)
            }
            else {
                console.log(response.status);

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const navigate = useNavigate()

    return (
        <div className='w-full max-w-[1500px] py-10 mx-auto flex items-center justify-between'>
            <Link to="/" className='text-[24px] font-semibold cursor-pointer'>eMarket</Link>

            <div className='flex gap-x-[48px] items-center'>
                <div className='navbarContent'>
                    <Link to="/">Home</Link>
                    <div className='borderAnimation'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/contact">Contact</Link>
                    <div className='borderAnimation'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/">About</Link>
                    <div className='borderAnimation'></div>
                </div>

                <div className='navbarContent'>
                    <Link to="/signup">Sign Up</Link>
                    <div className='borderAnimation'></div>
                </div>

            </div>

            <div className='flex items-center gap-x-5'>

                <div className='relative'>
                    <div style={{ backgroundColor: "#F5F5F5" }} className='flex items-center gap-x-5 px-[20px] py-[5px] rounded-md'>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='search' className='border-none outline-none bg-transparent' placeholder='what are you looking for?' />
                        <IoSearchOutline className='cursor-pointer' />
                    </div>


                    {
                        itemExist && (
                            <div className='absolute 
                            rounded-lg p-4 bg-slate-200 drop-shadow-lg 
                            w-[700px] min-w-[300px] h-[500px]
                            overflow-y-scroll
                            top-10 z-50 right-0
                            grid grid-cols-1 gap-2
                            border border-slate-400 
                            '>
                                {
                                    allProducts.filter(item => item?.title.toLowerCase().includes(searchValue)).map((item, index) => (
                                        <Link onClick={()=>setSearchValue("")} to={`/home/${item.category}/${item.id}`} className='flex items-start gap-4 bg-slate-400 p-4 rounded-lg cursor-pointer  '>

                                            <div className='bg-white rounded-md p-4 relative inset-0 flex items-center justify-center w-[120px] h-[120px] shrink-0'>
                                                <img src={item.image} className='w-[60px] absolute' />
                                            </div>

                                            <section className='flex flex-col justify-between'>
                                                <div>
                                                    <h3 title={item.title} className='text-[26px]'>
                                                        {item.title.length > 24 ?
                                                            item.title.slice(0, 21) + "..." :
                                                            item.title
                                                        }
                                                    </h3>
                                                    <p title={item.description}>

                                                        {item.description.length > 24 ?
                                                            item.description.slice(0, 41) + "..." :
                                                            item.description}
                                                    </p>

                                                    <p className='text-green-900 font-semibold'>Price : {item.price}$</p>
                                                    <p className='text-green-900 font-semibold'>{StarRate(item.rating.rate)}</p>
                                                </div>
                                            </section>

                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>

                <div className='relative' onClick={() => navigate("/whishlist")}>
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
