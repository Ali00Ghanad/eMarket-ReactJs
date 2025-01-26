import React from 'react'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'

const Whishlist = () => {
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
    <div>
      <ProductSlider products={whishlistProduct} setup={Arrowsettings} />
    </div>
  )
}

export default Whishlist
