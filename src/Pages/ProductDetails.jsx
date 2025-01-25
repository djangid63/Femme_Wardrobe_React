import React from 'react'
import NavBar from '../components/HeroSection/NavBar'
import FooterSection from '../components/ExploreSection/FotterSection'
import ProductBigImg1 from '../images/PopProductImgs/ProductBig2.jpeg'
import { useState } from 'react';

const productDetails = () => {

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount < 10 ? prevCount + 1 : prevCount);
  }

  const handleDecrement = () => {
    setCount((prevCount) => prevCount > 1 ? prevCount - 1 : prevCount);
  }

  const renderColorOptions = () => {
    let colors = [
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-black',
    ];
    return [...Array(5)].map((_, index) => (
      <div key={index} className={`w-6 h-6 rounded-full ${colors[index]} border border-black`}></div>
    ));
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center overflow-x-hidden'>
      {/*---------- NavBar  ------------ */}
      <div className='w-full h-full'>
        <NavBar />
      </div>
      {/*---------- Content ------------ */}
      <div>
        <section className='grid grid-cols-2 py-10 w-screen h-screen place-items-center'>
          {/* Grid 1 */}
          <div className='w-[600px] h-[100%] flex bg-cover'>
            <img className='bg-contain py-10' src={ProductBigImg1} />
          </div>
          {/* Grid 2 */}
          <div className='w-[100%] h-full py-10 '>
            <div className='flex flex-col gap-4'>
              <h6 className='font-mont font-semibold text-gray-400 cursor-pointer text-sm capitalize'>Home / Work & Office / Timeless Classic Collection</h6>
              <h3 className='capitalize font-bold font-mainHead text-4xl italic cursor-pointer'>Work & Office</h3>
              <h2 className='capitalize font-semibold cursor-pointer text-2xl font-mainHead'>Timeless Classic Collection</h2>
              <h1 className='text-gray-400 capitalize font-bold font-mainHead text-4xl italic cursor-pointer '>$124.90 - $154.90 & Free Shipping</h1>
              <p className='text-gray-400 font-mont capitalize'>Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette,<br /> while thoughtful details add a touch of urban chic. Whether you're lounging at home<br />  or navigating a bustling day, our Timeless Classic Collection effortlessly combine ease<br />  with fashion, allowing you to move with relaxed confidence while<br />  making a statement of casual sophistication.</p>
            </div>
            <div className='flex gap-3 mt-5'>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >XS
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >S
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >M
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >L
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >XL
              </button>
            </div>
            {/* Color Palette */}
            <div className='flex gap-3 mt-5'>
              {renderColorOptions()}
            </div>
            <div className='text-gray-400 text-sm font-semibold my-3'>CLEAR</div>
            {/* Separator Section */}
            <div>
              <div className='w-[80%] h-[0.5px] bg-gray-300 my-4'></div>
              <h1 className='text-gray-400 capitalize font-semibold font-mont text-2xl cursor-pointer '>$145.50</h1>
              <div className='flex mt-5'>
                <button onClick={handleDecrement} className='px-5 py-2 text-gray-400 text-lg border-gray-300 border '>-</button>
                <button className='px-5 py-2 text-black text-lg  border-gray-300 border border-x-0 '>{count}</button>
                <button onClick={handleIncrement} className='px-5 py-2 text-gray-400 text-lg border-gray-300 border'>+</button>
                <button className='uppercase px-4 border-black border mx-6 font-semibold font-mont text-sm'>Add To Cart</button>
              </div>
              <div className='w-[80%] h-[0.5px] bg-gray-300 my-6'></div>
              <div className="w-[80%] relative border border-gray-300 rounded-md mt-2 shadow-sm p-4">
                {/* Header Text */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
                  <h2 className="text-lg font-mont font-semibold text-gray-400">
                    Guaranteed Safe Checkout
                  </h2>
                </div>

                {/* Payment Icons */}
                <div className="flex justify-center space-x-4 mt-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="w-12 h-8 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                    alt="MasterCard"
                    className="w-12 h-8 object-contain"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                    alt="American Express"
                    className="w-12 h-8 object-contain"
                  />
                  <img
                    src="https://w7.pngwing.com/pngs/123/955/png-transparent-india-rupay-debit-card-bank-credit-card-india-text-trademark-logo-thumbnail.png"
                    alt="Rupay"
                    className="w-12 h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
      {/*---------- Footer ------------ */}
      <div div className='w-full h-full mt-10' >
        <FooterSection />
      </div >
    </div >
  )
}

export default productDetails
