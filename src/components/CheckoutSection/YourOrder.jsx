import React from 'react';

const YourOrder = () => {
  return (
    <div className="w-full h-screen md:w-1/2 p-10 mr-52 border border-gray-300 font-mont mb-4">
      <h1 className="text-5xl font-bold mb-4 font-mainHead">Your Order</h1>
      <div className="pb-4">
        <div className="flex justify-between border-b border-gray-300">
          <span className="font-medium my-4 ">Product</span>
          <span className="font-medium  my-4 ">Subtotal</span>
        </div>
        <div className="mt-2 text-gray-400 flex justify-between border-b border-gray-300">
          <span className='my-4 '>Bohemian Rhapsody Attire - Black x 3 Size: M</span>
          <span className='my-4 '>$436.50</span>
        </div>
        <div className="mt-2 text-gray-400 flex justify-between border-b border-gray-300">
          <span className='my-4 '>Subtotal</span>
          <span className='my-4 '>$436.50</span>
        </div>
        <div className="mt-2 text-gray-400 flex justify-between border-b border-gray-300">
          <span className='my-4 '>Total</span>
          <span className='my-4 '>$436.50</span>
        </div>
      </div>
      <div className="mt-4 pt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-500">Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</span>
        </div>
      </div>
      <button className="mt-4 w-full text-sm font-mont font-semibold border border-black text-black hover:bg-black hover:text-white py-2 px-4 ">
        PLACE ORDER
      </button>
    </div>
  );
};

export default YourOrder;