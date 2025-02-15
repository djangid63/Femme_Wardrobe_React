import React from 'react'
import NavBarCustom from './../HeroSection/NavBarCustom';
import FooterSection from '../ExploreSection/FotterSection';
import productData from '../../Data/ProductData';
import { useParams } from 'react-router-dom';

const CartHome = () => {
  const { id, count, selectedSize } = useParams();
  const product = productData.find((product) => product.id === parseInt(id));

  return (
    <div>
      <NavBarCustom />
      <div className="w-[76vw] mx-auto p-4">
        <h1 className="text-3xl font-mont font-bold mb-4">Cart</h1>
        <div className="border overflow-hidden">
          <div className="flex items-center p-4 border-b">
            <img src={product.img} alt="Product" className="w-14 h-16 mr-4" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{product.subtitle}</h2>
              <p className="text-sm">Size: {selectedSize}</p>
            </div>
            <div className="ml-4">
              <p className="text-lg">${product.price}</p>
            </div>
          </div>
          <div className="p-4 border-b">
            <input type="text" placeholder="Coupon code" className="border p-2 mr-2" />
            <button className="border border-black text-black text-[14px] tracking-widest font-semibold uppercase px-4 py-1 hover:bg-black hover:text-white">Apply Coupon</button>
            <button className="border border-black text-gray-400 text-[14px] uppercase tracking-widest px-4 py-1 float-right hover:bg-black hover:text-white">Update Cart</button>
          </div>
        </div>
        <div className="mt-8">
          <div className="border overflow-hidden">
            <h2 className="font-mont text-3xl font-bold p-4 text-center">Cart Totals</h2>
            <div className="p-4">
              <div className="flex justify-between mb-2 text-gray-400">
                <span>Subtotal</span>
                <span>$291.00</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-400">
                <span>Total</span>
                <span>${product.price * count}</span>
              </div>
              <button className="border border-black text-black uppercase tracking-widest w-full p-4 mt-4 hover:bg-black hover:text-white">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default CartHome





