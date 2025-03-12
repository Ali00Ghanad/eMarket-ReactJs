import React from 'react'
import market from './assets/market.svg'
import monthlySale from './assets/monthlySale.svg'
import sale from './assets/sale.svg'
import activeCustomer from './assets/activeCustomer.svg'
import Services from '../../Components/Services/Services'
import sidePic from './assets/Side Image.png'
const AboutUs = () => {

  const services =
    [
      {
        icon: market,
        description: "Sallers active our site",
        number: "10.5k"
      },
      {
        icon: monthlySale,
        description: "Mopnthly Produduct Sale",
        number: "33k"
      },
      {
        icon: sale,
        description: "Anual gross sale in our site",
        number: "25k"
      },
      {
        icon: activeCustomer,
        description: "Customer active in our site",
        number: "45.5k"
      },
    ]
  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <div className='flex flex-col items-center py-10 w-full'>
        <div className='flex items-center'>
          <div>
            <h1 className='text-[35px] font-semibold'>Our Story</h1>
            <p className='mt-[60px]'>
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.

              <span className='mt-[30px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</span>
            </p>
          </div>

          <img className='' src={sidePic} />
        </div>

        <div className='flex items-center gap-x-[20px] mt-[140px]'>
          {
            services.map(item => (
              <div className='flex items-center justify-center cursor-pointer w-[270px] h-[230px] border-[1px] border-slate-500 rounded-md'>
                <div className='flex flex-col items-center gap-y-5'>
                  <div className='bg-black rounded-full w-[80px] h-[80px] border-[10px] border-slate-400 flex items-center justify-center'>
                    <img className='!fill-black' src={item.icon} />
                  </div>

                  <h2 className='text-[20px] font-bold'>{item.number}</h2>

                  <p className='font-semibold'>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>

        <Services/>
      </div>
    </div>
  )
}

export default AboutUs
