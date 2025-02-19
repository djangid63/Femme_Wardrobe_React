import React from 'react';

const YourOrder = () => {
  return (
    <div className="w-full h-screen md:w-1/2 p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Your Order</h1>
      <div className="border-b border-gray-300 pb-4">
        <div className="flex justify-between">
          <span className="font-medium">Product</span>
          <span className="font-medium">Subtotal</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Bohemian Rhapsody Attire - Black x 3 Size: M</span>
          <span>$436.50</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Subtotal</span>
          <span>$436.50</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Total</span>
          <span>$436.50</span>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-500">Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        PLACE ORDER
      </button>
    </div>
  );
};

export default YourOrder;