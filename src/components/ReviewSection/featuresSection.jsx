import React from 'react';
import shippingIcon from '../../images/Icons/Shipping.svg';
import returnIcon from '../../images/Icons/Return.svg';
import orderTracking from '../../images/Icons/OrderTracking.svg';
import securePayment from '../../images/Icons/SecurePayment.svg';

const FeaturesSection = () => {
  return (
    <section>
      <div className='w-[100%] h-[100%] md:h-auto px-8 md:px-32 mb-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center bg-white text-black text-center gap-10 md:gap-20'>
        {/* Secure Payments */}
        <div>
          <img src={securePayment} alt="securePayment" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Secure Payments</h2>
          <p className='font-mont text-gray-400 font-semibold text-sm md:text-base'>
            Shop with confidence knowing
            <span className="hidden md:inline">
              <br />
            </span>
            that your transactions are
            <span className="hidden md:inline">
              <br />
            </span>
            safeguarded.
          </p>
        </div>

        {/* Free Shipping */}
        <div>
          <img src={shippingIcon} alt="shippingIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Free Shipping</h2>
          <p className='font-mont text-gray-400 font-semibold text-sm md:text-base'>
            Shopping with no extra charges -{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            savor the liberty of complimentary{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            shipping on every order.
          </p>
        </div>

        {/* Easy Returns */}
        <div>
          <img src={returnIcon} alt="returnIcon" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Easy Returns</h2>
          <p className='font-mont text-gray-400 font-semibold text-sm md:text-base'>
            With our hassle-free Easy Returns,{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            changing your mind has never{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            been more convenient.
          </p>
        </div>

        {/* Order Tracking */}
        <div>
          <img src={orderTracking} alt="orderTracking" className='w-7 h-7 justify-self-center' />
          <h2 className='font-mainHead italic font-bold capitalize text-xl md:text-3xl my-2 md:my-4'>Order Tracking</h2>
          <p className='font-mont text-gray-400 font-semibold text-sm md:text-base'>
            Stay in the loop with our Order{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            Tracking feature - from checkout{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;