import React from 'react'
import NavBarCustom from '../components/HeroSection/NavBarCustom';
import FooterSection from '../components/ExploreSection/FotterSection';
import productData from '../Data/ProductData';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';


const CartHome = () => {
  const { id, count, selectedSize } = useParams();
  const parsedId = parseInt(id);
  const parsedCount = parseInt(count);
  const product = productData.find((product) => product.id === parsedId);

  const [cart, setCart] = useState(parsedCount);


  const handleIncrement = () => {
    setCart((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setCart((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <div className='overflow-x-hidden'>
      <NavBarCustom />
      {parsedId && parsedCount && selectedSize ? (
        <div className="w-[76vw] mx-auto p-4">
          <h1 className="text-5xl font-mainHead font-bold mb-4">Cart</h1>
          <div className="border overflow-hidden">
            <div className="flex items-center p-4 border-b">
              {product && <img src={product.img} alt="Product" className="w-14 h-16 mr-4" />}
              <div className="flex-grow font-mont">
                <h2 className="text-base font-semibold">{product.subtitle}</h2>
                <p className="text-sm">Size: {selectedSize}</p>
              </div>
              <div className='flex mr-6'>
                <button
                  onClick={handleDecrement}
                  className='px-4 py-1 text-gray-400 text-base border-gray-300 border'
                >
                  -
                </button>
                <button className='px-4 py-1 text-black text-base border-gray-300 border border-x-0'>
                  {cart}
                </button>
                <button
                  onClick={handleIncrement}
                  className='px-4 py-1 text-gray-400 text-base border-gray-300 border'
                >
                  +
                </button>
              </div>
              <div className="ml-4 font-mont font-semibold text-gray-400">
                <p className="text-lg">${Math.round(product.price * cart).toFixed(2)}</p>
              </div>
            </div>
            <div className="font-mont p-4 border-b">
              <input type="text" placeholder="Coupon code" className="border p-2 mr-2" />
              <button onClick={() => alert("Invalid code")} className="border border-black text-black text-[12px] tracking-widest font-semibold uppercase px-4 py-2 hover:bg-black hover:text-white">Apply Coupon</button>
              <button className="border border-black text-gray-500 text-[12px] font-semibold uppercase tracking-widest px-4 py-2 float-right hover:bg-black hover:text-white">Update Cart</button>
            </div>
          </div>
          <div className="mt-8">
            <div className="border overflow-hidden">
              <div className='border border-b-gray-300'>
                <h2 className="font-mainHead text-5xl font-bold p-4 text-center">Cart Total</h2>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2 text-gray-400 font-mont font-semibold ">
                  <span>Subtotal</span>
                  <span>${Math.floor(product.price * cart).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 font-mont font-semibold text-gray-400">
                  <span>Total</span>
                  <span>${Math.floor(product.price * cart).toFixed(2)}</span>
                </div>
                <Link to='/checkout/:id/:count/:selectedSize'>
                  <button className="font-mont font-semibold border border-black text-black uppercase tracking-widest w-full px-4 py-3 mt-4 hover:bg-black hover:text-white">Proceed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center text-5xl w-screen h-[50vh] text-gray-400'>No Item in cart</div>
      )}
      <FooterSection />
    </div>
  )
}

export default CartHome





