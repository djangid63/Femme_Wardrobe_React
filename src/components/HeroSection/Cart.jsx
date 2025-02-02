// src/Cart.js
import React from 'react';

const Cart = ({ product, isCartVisible, setCartVisible }) => {
  const calculateSubtotal = () => {
    return (product.quantity * product.price).toFixed(2);
  };

  return (
    <section className={` ${isCartVisible ? 'grid' : 'hidden'} absolute inset-0 md:grid-cols-[70vw_30vw] grid-cols-1 py-10 w-full min-h-screen place-items-start justify-items-center z-50 `}>
      {/* Grid 1 70% of the screen */}
      <div className='absolute inset-0 w-screen h-screen '
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7  ), rgba(0, 0, 0, 0.1))'
        }}
      ></div>
      {/* Grid 2 30% of the screen */}
      <div className="absolute flex flex-col justify-between top-0 right-0 w-[30vw] h-[100vh] bg-white shadow-lg">
        <div className='relative p-4'>
          <h2 className="text-lg font-bold mb-4 font-mont">Shopping Cart</h2>
          <div className="absolute left-0 font-mont border-t-[0.2px] border-gray-300 w-[100vw]"></div>
          <div className=" font-mont flex items-center mb-4 mt-16 border-b py-2">
            <img src={product.img} alt={product.name} className="w-12 h-14 mr-2" />
            <div>
              <p className="font-bold font-mont ">{product.name}</p>
              <p>Size: {product.size}</p>
              <p>{product.quantity} x ${product.price}</p>
            </div>
            <button onClick={() => setCartVisible(false)} className="ml-auto px-2 py-[2px] text-gray-300 border border-gray-300 rounded-full">X</button>
          </div>
        </div>
        <div>
          <div className=" border-t-[0.2px] border-gray-300 w-[100vw] h-1"></div>
          <div className="flex justify-between items-center my-2 px-4">
            <p className="font-mont font-bold">Subtotal:</p>
            <p className="font-mont">${calculateSubtotal()}</p>
          </div>
          <div className=" border-t-[0.2px] border-gray-300 w-[100vw]"></div>
          <div className='p-4'>
            <button className="w-full mt-4 bg-white border-black border text-black font-semibold text-sm font-mont p-4 hover:bg-black hover:text-white">VIEW CART</button>
            <button className="w-full mt-2 bg-white border-black border text-black font-semibold text-sm font-mont p-4 hover:bg-black hover:text-white">CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;