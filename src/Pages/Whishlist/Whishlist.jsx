import React, { useReducer } from 'react'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Whishlist = () => {

  // let Arrowsettings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   focusOnSelect: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // };


  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <GrNext
  //       className={className}
  //       style={{ ...style, display: "block", color: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <GrPrevious
  //       className={className}
  //       style={{ ...style, display: "block", color: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }







  function reducer(state, action) {

    if (action.type === 'increase') {
      return { age: state.age + 1 }
    }
    else if (action.type === 'decrease') {
      return { age: state.age - 1 }
    }

  }




  const [state, dispatch] = useReducer(reducer, { age: 20 })



  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <div>
        <button onClick={() => dispatch({ type: 'increase' })}>increase</button>
        <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
        <p>{state.age}</p>
      </div>
    </div>
  )
}

export default Whishlist
