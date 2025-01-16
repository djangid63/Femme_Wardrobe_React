import React from 'react'
import shippingIcon from '../../images/Icons/Shipping.svg'
import returnIcon from '../../images/Icons/Return.svg'
import orderTracking from '../../images/Icons/OrderTracking.svg'
import securePayment from '../../images/Icons/SecurePayment.svg'

const featuresSection = () => {
  return (
    <section>
      <div className='w-[100%] h-[25vh] px-32 mb-14 flex items-center justify-center bg-white text-black text-center gap-20'>
        <div>
          <img src={securePayment} alt="shippingIcon" className='w-7 h-7 justify-self-center ' />
          <h2 className='font-mainHead italic font-bold capitalize text-3xl my-4'>Secure Payments </h2>
          <p className='font-mont text-gray-400 font-semibold'>Shop with confidence knowing <br /> that your transactions are<br /> safeguarded.</p>
        </div>
        <div>
          <img src={shippingIcon} alt="shippingIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-3xl my-4'>Free Shipping</h2>
          <p className='font-mont text-gray-400 font-semibold'>Shopping with no extra charges -<br /> savor the liberty of complimentary<br /> shipping on every order.</p>
        </div>
        <div>
          <img src={returnIcon} alt="shippingIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-3xl my-4'>Easy Returns</h2>
          <p className='font-mont text-gray-400 font-semibold'>With our hassle-free Easy Returns,<br /> changing your mind has never<br /> been more convenient.</p>
        </div>
        <div>
          <img src={orderTracking} alt="shippingIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-3xl my-4'>Order Tracking</h2>
          <p className='font-mont text-gray-400 font-semibold'>Stay in the loop with our Order<br /> Tracking feature - from checkout<br /> to your doorstep.</p>
        </div>
      </div>
    </section>
  )
}

export default featuresSection