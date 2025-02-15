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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <div className="border rounded-lg overflow-hidden">
          <div className="flex items-center p-4 border-b">
            <img src="path/to/your/image.jpg" alt="Product" className="w-16 h-16 mr-4" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{product.subtitle}</h2>
              <p className="text-sm">Size: {selectedSize}</p>
            </div>
            <div className="ml-4">
              <p className="text-lg">${product.price}</p>
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <button className="mr-2">-</button>
                <input type="number" value="2" className="w-8 text-center" readOnly />
                <button className="ml-2">+</button>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-lg">$291.00</p>
            </div>
          </div>
          <div className="p-4 border-b">
            <input type="text" placeholder="Coupon code" className="border p-2 mr-2" />
            <button className="bg-gray-500 text-white px-4 py-2">Apply Coupon</button>
            <button className="bg-gray-500 text-white px-4 py-2 float-right">Update Cart</button>
          </div>
        </div>
        <div className="mt-8">
          <div className="border rounded-lg overflow-hidden">
            <h2 className="text-3xl font-bold p-4 text-center">Cart Totals</h2>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$291.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span>$291.00</span>
              </div>
              <button className="bg-gray-500 text-white w-full p-2 mt-4">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default CartHome





