import React from 'react'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Whishlist = () => {
  const savedWhishlist = localStorage.getItem("whishlistProducts");
  const whishlist = JSON.parse(savedWhishlist)

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


  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <div>
        <ProductSlider products={whishlist} setup={Arrowsettings} />
      </div>
    </div>
  )
}

export default Whishlist
