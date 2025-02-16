import React from 'react'
import NavBarCustom from './../HeroSection/NavBarCustom';
import FooterSection from '../ExploreSection/FotterSection';
import productData from '../../Data/ProductData';
import { useParams } from 'react-router-dom';

const CartHome = () => {
  const { id, count, selectedSize } = useParams();
  const parsedId = parseInt(id);
  const parsedCount = parseInt(count);
  const product = productData.find((product) => product.id === parsedId);

  return (
    <div className='overflow-x-hidden'>
      <NavBarCustom />
      {parsedId && parsedCount && selectedSize ? (
        <div className="w-[76vw] mx-auto p-4">
          <h1 className="text-5xl font-mainHead font-bold mb-4">Cart</h1>
          <div className="border overflow-hidden">
            <div className="flex items-center p-4 border-b">
              {product && <img src={product.img} alt="Product" className="w-14 h-16 mr-4" />}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{product.subtitle}</h2>
                <p className="text-sm">Size: {selectedSize}</p>
              </div>
              <div className="ml-4">
                <p className="text-lg">${product.price}</p>
              </div>
            </div>
            <div className="font-mont p-4 border-b">
              <input type="text" placeholder="Coupon code" className="border p-2 mr-2" />
              <button className="border border-black text-black text-[12px] tracking-widest font-semibold uppercase px-4 py-2 hover:bg-black hover:text-white">Apply Coupon</button>
              <button className="border border-black text-gray-500 text-[12px] font-semibold uppercase tracking-widest px-4 py-2 float-right hover:bg-black hover:text-white">Update Cart</button>
            </div>
          </div>
          <div className="mt-8">
            <div className="border overflow-hidden">
              <div className='border border-b-gray-400'>
                <h2 className="font-mainHead text-5xl font-bold p-4 text-center">Cart Totals</h2>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2 text-gray-400">
                  <span>Subtotal</span>
                  <span>${product.price * parsedCount}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-400">
                  <span>Total</span>
                  <span>${product.price * parsedCount}</span>
                </div>
                <button className="font-mont font-semibold border border-black text-black uppercase tracking-widest w-full px-4 py-3 mt-4 hover:bg-black hover:text-white">Proceed to Checkout</button>
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





