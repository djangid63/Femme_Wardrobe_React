import React from 'react';

const FooterSection = () => {
  return (
    <footer>
      <div className='w-full h-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 bg-gray-50 text-black py-24'>
        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:mr-9 font-mainHead mb-3 font-bold text-[25px]'>Menu</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <li className='hover:text-black transition duration-300'>Home</li>
            <li className='hover:text-black transition duration-300'>Shop</li>
            <li className='hover:text-black transition duration-300'>About Us</li>
            <li className='hover:text-black transition duration-300'>Contact Us</li>
          </ul>
        </div>

        <div className='flex flex-col items-center  justify-center text-center md:text-left'>
          <h1 className='md:mr-9 font-mainHead mb-3 font-bold text-[25px]'>Categories</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <li className='hover:text-black transition duration-300'>Casual</li>
            <li className='hover:text-black transition duration-300'>Work & Office</li>
            <li className='hover:text-black transition duration-300'>Activewear</li>
            <li className='hover:text-black transition duration-300'>Evening Dresses</li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:mr-10 font-mainHead mb-3 font-bold text-[25px]'>Resources</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <li className='hover:text-black transition duration-300'>Contact Support</li>
            <li className='hover:text-black transition duration-300'>FAQ</li>
            <li className='hover:text-black transition duration-300'>Live Chat</li>
            <li className='hover:text-black transition duration-300'>Returns</li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:ml-9 font-mainHead mb-3 font-bold text-[25px]'>Social Media</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <li className='hover:text-black transition duration-300'>Facebook</li>
            <li className='hover:text-black transition duration-300'>Twitter</li>
            <li className='hover:text-black transition duration-300'>Instagram</li>
            <li className='hover:text-black transition duration-300'>Pinterest</li>
          </ul>
        </div>
      </div>

      <div className=''>
        <div className='w-full h-[0.5px] bg-gray-400 opacity-50'></div>
        <div className='text-center mx-4 my-10 font-semibold font-mont text-gray-400'>Copyright © 2025 Clothing Store | Powered by Clothing Store</div>
      </div>
    </footer>
  );
};

export default FooterSection;