import React from 'react';
import shippingIcon from '../../images/Icons/Shipping.svg';
import returnIcon from '../../images/Icons/Return.svg';
import orderTracking from '../../images/Icons/OrderTracking.svg';
import securePayment from '../../images/Icons/SecurePayment.svg';

const FeaturesSection = () => {
  return (
    <section className='w-full md:h-[40vh] sm:h-[100vh] flex flex-col items-center justify-center overflow-x-hidden'>
      <div className='w-[100%] h-[100%] md:h-auto px-8 md:px-32 grid lg:grid-cols-4 grid-cols-1 items-end justify-center bg-white text-black text-center gap-10 p-4 md:gap-20'>
        {/* Secure Payments */}
        <div className='w-[100%] h-[100%] flex flex-col items-center justify-start gap-0'>
          <img src={securePayment} alt="securePayment" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Secure Payments</h2>
          <div className='font-mont text-gray-400 font-semibold text-xs md:text-[14px]'>
            <p>Shop with confidence knowing</p>
            <p>that your transactions are</p>
            <p>safeguarded.</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className='w-[100%] h-[100%] flex flex-col items-center justify-start gap-0'>
          <img src={shippingIcon} alt="shippingIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Free Shipping</h2>
          <div className='font-mont text-gray-400 font-semibold text-xs md:text-[14px]'>
            <p>Shopping with no extra charges-</p>
            <p>savor the liberty of complimentary</p>
            <p>shipping on every order.</p>
          </div>
        </div>

        {/* Easy Returns */}
        <div className='w-[100%] h-[100%] flex flex-col items-center justify-start gap-0'>
          <img src={returnIcon} alt="returnIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Easy Returns</h2>
          <div className='font-mont text-gray-400 font-semibold text-xs md:text-[14px]'>
            <p>With our hassle-free Easy Returns, </p>
            <p>changing your mind has never</p>
            <p>been more convenient.</p>
          </div>
        </div>

        {/* Order Tracking */}
        <div className='w-[100%] h-[100%] flex flex-col items-center justify-start gap-0'>
          <img src={orderTracking} alt="orderTracking" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Order Tracking</h2>
          <div className='font-mont text-gray-400 font-semibold text-xs md:text-[14px]'>
            <p>Stay in the loop with our Order</p>
            <p>Tracking feature - from checkout</p>
            <p>to your doorstep.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;