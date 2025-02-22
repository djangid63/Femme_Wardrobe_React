import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ product, count, isCartVisible, setCartVisible, setCart, selectedSize }) => {
  const calculateSubtotal = () => {
    return (parseInt(count * product.price)).toFixed(2);
  };

  return (
    <section className={`transition-transform duration-700 transform ${isCartVisible ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50`}>

      {/* Grid 1 70% of the screen */}
      <div onClick={() => setCartVisible(false)} className='absolute inset-0 w-screen h-screen '
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5  ), rgba(0, 0, 0, 0.1))'
        }}
      ></div>
      {/* Grid 2 30% of the screen */}
      <div className='animate-slide-in-right'>
        {count > 0 ? (
          <div className="absolute flex flex-col justify-between top-0 right-0 w-[35vw] h-[100vh] bg-white ">
            <div className='relative p-4'>
              <h2 className="text-lg font-bold mb-4 font-mont">Shopping Cart</h2>
              <div className="absolute left-0 font-mont border-t-[0.2px] border-gray-300 w-[100vw]"></div>
              <div className=" font-mont flex items-center mb-4 mt-16 border-b py-2">
                <img src={product.img} alt={product.subtitle} className="w-12 h-14 mr-2" />
                <div>
                  <p className="font-bold font-mont">{product.subtitle}</p>
                  <p>Size: {selectedSize}</p>
                  <p>{count} x ${product.price}</p>
                </div>
                <button onClick={() => { setCartVisible(false), setCart(0) }} className="ml-auto px-2 py-[2px] text-gray-300 border border-gray-300 rounded-full">X</button>
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
                <Link to={`/cartHome/${product.id}/${count}/${selectedSize}`}>
                  <button className="w-full mt-4 bg-white border-black border text-black font-semibold text-sm font-mont p-4 hover:bg-black hover:text-white">VIEW CART</button>
                </Link>
                <Link to={`/checkout/${product.id}/${count}/${selectedSize}`} >
                  <button className="w-full mt-2 bg-white border-black border text-black font-semibold text-sm font-mont p-4 hover:bg-black hover:text-white">CHECKOUT</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute flex flex-col justify-between top-0 right-0 w-[35vw] h-[100vh] bg-white shadow-lg">
            <div className='flex justify-between p-6'>
              <h2 className="text-lg font-bold mb-4 font-mont">Shopping Cart</h2>
              <div>
                <button onClick={() => { setCartVisible(false) }} className="ml-auto w-8 h-8 py-[2px] text-gray-300 border border-gray-300 rounded-full">X</button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center h-[100vh]">
                <p className="text-gray-400 font-mont">Your cart is empty</p>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </section >
  );
};

export default ShoppingCart;