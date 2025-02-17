import React from 'react'
import delivery from './assets/fastDeliverySrv.png'
import customer from './assets/customerSrv.png'
import moneyBack from './assets/moneyBackSrv.png'

const Services = () => {
  return (
    <div className={`flex items-center justify-evenly my-[140px]`}>

      <div className='flex items-center flex-col text-center gap-y-4'>
        <img src={delivery} />
        <div>
          <h4 className='font-bold'>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className='flex items-center flex-col text-center gap-y-4'>
        <img src={customer} />
        <div>
          <h4 className='font-bold'>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
      </div>

      <div className='flex items-center flex-col text-center gap-y-4'>
        <img src={moneyBack} />
        <div>
          <h4 className='font-bold'>MONEY BACK GUARANTEE</h4>
          <p>We reurn money within 30 days</p>
        </div>
      </div>

    </div>
  )
}

export default Services
