import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
// ---- react icons ----
import { CiMobile1 } from "react-icons/ci";
import { PiDressLight } from "react-icons/pi";
import { PiShirtFoldedThin } from "react-icons/pi";
import { GiEmeraldNecklace } from "react-icons/gi";

// pics
import playstation from './assets/ps5.png'
import woman from './assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import speaker from './assets/Frame 707.png'
import Perfume from './assets/Frame 706.png'

const HomePage = () => {
  // ---- States ---- 
  const [allProducts, setAllProducts] = useState([]);

  const fetchApi = async () => {
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

  useEffect(() => {
    fetchApi()
  }, [])

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

  let ExploreSettings = {
    infinite: true,
    focusOnSelect: false,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  let bannerSetting = {
    dots: true,
    infinite: true,
    focusOnSelect: false,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full max-w-[1440px] mx-auto'>

        <div dir='rtl' className='w-full mx-auto flex items-center'>
          <div className='pt-5 pl-5 border-l w-[80%] border-slate-200'>
            <Slider className='!w-full cursor-pointer h-[300px] bg-black flex items-center justify-center ' {...bannerSetting}>
              {
                allProducts.slice(0, 4).map((item, index) => (
                  <div key={index} className='w-full h-full p-5'>
                    <div className='flex items-center justify-between mt-5 mx-auto px-5'>
                      <div className='text-white'>
                        <p className='border-l-4 border-red-600 pl-2'>{item.title}</p>
                        <div className='flex gap-x-2 mt-5 items-center'>
                          <p className='text-[24px] bg-white text-black p-5 rounded-full w-[60px] h-[60px] flex items-center justify-center'>50%</p>
                          <del className='text-gray-400 text-[12px]'>${item.price}</del>
                          <p className='text-[18px]'>${(item.price * 50) / 100}</p>
                        </div>
                        <div className='flex items-center gap-x-2 mt-5 text-slate-300 cursor-pointer w-fit hover:text-white duration-[0.2s]'>
                          <p className='underline'>Shop Now</p>
                          <GrLinkNext />
                        </div>
                      </div>

                      <div className='w-[200px] h-[200px] bg-white flex items-center justify-center rounded-full flex-shrink-0'>
                        <img src={item.image} className='w-[100px] ' />
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>

          <div className='w-[20%]'>
            <div className='flex flex-col gap-y-2 justify-center items-end'>
              <p className='cursor-pointer hover:tracking-wider hover:text-red-600 duration-[0.2s]'>Men's cloths</p>
              <p className='cursor-pointer hover:tracking-wider hover:text-red-600 duration-[0.2s]'>Women's cloths</p>
              <p className='cursor-pointer hover:tracking-wider hover:text-red-600 duration-[0.2s]'>electronics</p>
              <p className='cursor-pointer hover:tracking-wider hover:text-red-600 duration-[0.2s]'>jewelry</p>
            </div>
          </div>

        </div>

        <div className='mt-[140px] border-b border-slate-200'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>Today's</h4>
            </div>

            <div className='flex items-center mt-5 gap-x-5'>
              <p className='text-[24px] font-semibold '>Flash Sales</p>
              <div>
                03:23:19:56
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <ProductSlider setup={Arrowsettings} products={allProducts.filter(item => item.price < 20)} />
            <button className='text-white px-[48px] py-[16px] bg-red-600 rounded-md my-[60px]'>View All Products</button>
          </div>

        </div>


        <div className='mt-[80px] border-b border-slate-200'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>Categories</h4>
            </div>

            <div className='flex items-center mt-5 gap-x-5'>
              <p className='text-[24px] font-semibold '>Browse By Category</p>
            </div>
          </div>

          <div className='grid grid-cols-4 mb-[80px] w-[60%] mx-auto'>
            <div className='w-[170px] h-[140px] border-slate-200 border-2 flex flex-col items-center 
            hover:bg-red-600 hover:text-white duration-[0.4s] justify-center rounded-lg cursor-pointer gap-y-2'>
              <CiMobile1 className='text-[54px]' />
              <p>Electronics</p>
            </div>

            <div className='w-[170px] h-[140px] border-slate-200 border-2 flex flex-col items-center 
            hover:bg-red-600 hover:text-white duration-[0.4s] justify-center rounded-lg cursor-pointer gap-y-2'>
              <PiDressLight className='text-[54px]' />
              <p>Women's Cloth</p>
            </div>

            <div className='w-[170px] h-[140px] border-slate-200 border-2 flex flex-col items-center 
            hover:bg-red-600 hover:text-white duration-[0.4s] justify-center rounded-lg cursor-pointer gap-y-2'>
              <PiShirtFoldedThin className='text-[54px]' />
              <p>Men's Cloth</p>
            </div>

            <div className='w-[170px] h-[140px] border-slate-200 border-2 flex flex-col items-center 
            hover:bg-red-600 hover:text-white duration-[0.4s] justify-center rounded-lg cursor-pointer gap-y-2'>
              <GiEmeraldNecklace className='text-[54px]' />
              <p>Jewelry</p>
            </div>
          </div>

        </div>


        <div className='mt-[80px]'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>This Month</h4>
            </div>

            <div className='flex items- justify-between mt-5 gap-x-5'>
              <p className='text-[24px] font-semibold '>Best Selling Products</p>
              <button className='text-white px-[30px] py-[16px] bg-red-600 rounded-md '>View All</button>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <ProductSlider setup={Arrowsettings} products={allProducts.filter(item => item.rating.rate > 3)} />
          </div>

        </div>


        <div className='mt-[140px] border-b border-slate-200 flex items-center justify-between bg-black p-[50px]'>
          <div className='flex flex-col gap-y-10'>
            <h2 className='text-white text-[40px]'>Enhance Your <br /> Music Experience</h2>

            <div className='flex items-center justify-evenly flex-wrap gap-x-5 '>
              <div className='bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full leading-3'>
                <p className='font-bold text-[14px] flex flex-col items-center'>23 <span className='font-thin'>Hours</span></p>
              </div>

              <div className='bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full leading-3'>
                <p className='font-bold text-[14px] flex flex-col items-center'>05 <span className='font-thin'>Days</span></p>
              </div>

              <div className='bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full leading-3'>
                <p className='font-bold text-[14px] flex flex-col items-center'>59 <span className='font-thin'>Minutes</span></p>
              </div>

              <div className='bg-white w-[60px] h-[60px] flex items-center justify-center rounded-full leading-3'>
                <p className='font-bold text-[14px] flex flex-col items-center'>35 <span className='font-thin'>Seconds</span></p>
              </div>
            </div>

            <button className='bg-green-600 text-white text-[20px] px-10 py-4 rounded-lg w-fit'>Buy Now</button>
          </div>

          <div style={{ backgroundImage: "radial-gradient(closest-side at 50% 55%, red, darkgreen, black)" }}>
            <img src={speaker} />
          </div>
        </div>


        <div className='mt-[140px]'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>Our Products</h4>
            </div>

            <div className='flex items-center mt-5 gap-x-5'>
              <p className='text-[24px] font-semibold '>Explore Our Products</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <ProductSlider setup={ExploreSettings} products={allProducts} />
            <button className='text-white px-[48px] py-[16px] bg-red-600 rounded-md my-[60px]'>View All Products</button>
          </div>

        </div>

        <div className='mt-[140px] border-b border-slate-200'>

          <div className='mb-10'>
            <div className='flex items-center '>
              <div className='w-[14px] h-[20px] rounded-sm bg-red-600'></div>
              <h4 className='text-red-600 w-fit pl-2 font-semibold'>Featured</h4>
            </div>
            <p className='text-[24px] font-semibold'>New Arrival</p>
          </div>

          <div className='grid grid-cols-4 gap-[30px]'>

            <div className='row-span-2 flex items-center justify-center bg-darkGray relative col-span-2 rounded-md'>
              <img src={playstation} />
              <div className='absolute left-5 bottom-5 text-white flex flex-col gap-y-5'>
                <h4 className='text-[18px] font-semibold'>PlayStation 5</h4>
                <p className='text-[12px] font-light'>Black and White version of the PS5 <br/> coming out on sale.</p>
                <p className='underline cursor-pointer'>Shop Now</p>
              </div>
            </div>

            <div className='col-span-2 flex items-center justify-end bg-darkGray relative rounded-md pr-2'>
              <img src={woman} />
              <div className='absolute left-5 bottom-5 text-white flex flex-col gap-y-5'>
                <h4 className='text-[18px] font-semibold'>Women's Collection</h4>
                <p className='text-[12px] font-light'>Featured woman collections that <br /> give you another vibe.</p>
                <p className='underline cursor-pointer'>Shop Now</p>
              </div>
            </div>

            <div className='py-10 flex items-center justify-center bg-darkGray relative rounded-md'>
              <img src={speaker}/>
              <div className='absolute left-5 bottom-5 text-white flex flex-col gap-y-5'>
                <h4 className='text-[18px] font-semibold'>Speakers</h4>
                <p className='text-[12px] font-light'>Amazon wireless speakers</p>
                <p className='underline cursor-pointer'>Shop Now</p>
              </div>
            </div>

            <div className='flex items-center justify-center bg-darkGray relative rounded-md'>
              <img src={Perfume} />
              <div className='absolute left-5 bottom-5 text-white flex flex-col gap-y-5'>
                <h4 className='text-[18px] font-semibold'>Perfume</h4>
                <p className='text-[12px] font-light'>GUCCI INTENSE OUD EDP</p>
                <p className='underline cursor-pointer'>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage