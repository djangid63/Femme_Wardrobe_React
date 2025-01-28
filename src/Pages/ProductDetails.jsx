import React from 'react';
import NavBar from '../components/HeroSection/NavBar';
import FooterSection from '../components/ExploreSection/FotterSection';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Data/ProductData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(product.price * count);

  useEffect(() => {
    setPrice(product.price * count);
  }, [product.price, count]);

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };


  return (
    <div className='w-full h-full flex flex-col justify-center items-center overflow-x-hidden'>
      {/*---------- NavBar  ------------ */}
      <div className='w-full'>
        <NavBar />
      </div>

      {/*---------- Content ------------ */}
      <div className='w-full'>
        <section className='grid md:grid-cols-[1fr_1fr] grid-cols-1 py-10 w-full min-h-screen place-items-center'>
          {/* Grid 1 - Image */}
          <div className='w-full max-w-[600px] h-auto flex justify-center items-center p-4'>
            <img
              className='w-full h-auto max-h-[650px] object-contain'
              src={product.imgHR}
              alt={product.collection}
            />
          </div>

          {/* Grid 2 - Details */}
          <div className='w-full max-w-[600px] p-4'>
            <div className='flex flex-col gap-4'>
              <h6 className='font-mont font-semibold text-gray-400 cursor-pointer text-sm capitalize'>
                {product.description}
              </h6>
              <h3 className='capitalize font-bold font-mainHead text-3xl md:text-4xl italic cursor-pointer'>
                {product.category}
              </h3>
              <h2 className='capitalize font-semibold cursor-pointer text-2xl font-mainHead'>
                {product.collection}
              </h2>
              <h1 className='text-gray-400 capitalize font-bold font-mainHead text-3xl md:text-4xl italic cursor-pointer'>
                {product.pricingDetails}
              </h1>
              <p className='text-gray-400 font-mont capitalize text-sm md:text-base'>
                {product.productDetails}
              </p>
            </div>

            {/* Sizes */}
            <div className='flex gap-3 mt-5 flex-wrap'>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className='py-1 px-3 font-semibold cursor-pointer text-sm border border-black text-gray-400 rounded'
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Color Palette */}
            <div className='flex gap-3 mt-5 flex-wrap'>
              {product.colors.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className={`w-5 h-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${color === 'white' ? 'border border-gray-500' : ''
                    }`}
                  style={{ backgroundColor: color }}
                  tabIndex='0'
                ></div>
              ))}
            </div>
            <div className='text-gray-400 text-sm font-semibold my-3'>CLEAR</div>

            {/* Separator Section */}
            <div>
              <div className='w-full h-[0.5px] bg-gray-300 my-4'></div>
              <h1 className='text-gray-400 capitalize font-semibold font-mont text-2xl cursor-pointer'>
                ${price}
              </h1>
              <div className='flex mt-5 flex-wrap gap-3'>
                <div className='flex'>
                  <button
                    onClick={handleDecrement}
                    className='px-5 py-2 text-gray-400 text-lg border-gray-300 border'
                  >
                    -
                  </button>
                  <button className='px-5 py-2 text-black text-lg border-gray-300 border border-x-0'>
                    {count}
                  </button>
                  <button
                    onClick={handleIncrement}
                    className='px-5 py-2 text-gray-400 text-lg border-gray-300 border'
                  >
                    +
                  </button>
                </div>
                <button className='uppercase px-4 py-2 border-black border font-semibold font-mont text-sm'>
                  Add To Cart
                </button>
              </div>
              <div className='w-full h-[0.5px] bg-gray-300 my-6'></div>

              {/* Guaranteed Safe Checkout */}
              <div className='w-full relative border border-gray-300 rounded-md mt-2 shadow-sm p-4'>
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2'>
                  <h2 className='text-lg font-mont font-semibold text-gray-400'>
                    Guaranteed Safe Checkout
                  </h2>
                </div>
                <div className='flex justify-center flex-wrap gap-4 mt-6'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg'
                    alt='Visa'
                    className='w-12 h-8 object-contain'
                  />
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg'
                    alt='MasterCard'
                    className='w-12 h-8 object-contain'
                  />
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png'
                    alt='American Express'
                    className='w-12 h-8 object-contain'
                  />
                  <img
                    src='https://w7.pngwing.com/pngs/123/955/png-transparent-india-rupay-debit-card-bank-credit-card-india-text-trademark-logo-thumbnail.png'
                    alt='Rupay'
                    className='w-12 h-8 object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*---------- Footer ------------ */}
      <div className='w-full mt-10'>
        <FooterSection />
      </div>
    </div>
  );
};

export default ProductDetails;