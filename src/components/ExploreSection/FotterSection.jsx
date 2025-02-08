import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer>
      <div className='w-full h-[20%] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 text-black py-24 bg-[#F9FAFB]'>
        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:mr-9 font-mainHead mb-3 font-bold text-[25px]'>Menu</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <Link to='/'><li className='hover:text-black transition duration-300'>Home</li></Link>
            <Link to='/shop'><li className='hover:text-black transition duration-300'>Shop</li></Link>
            <Link to='/about'><li className='hover:text-black transition duration-300'>About Us</li></Link>
            <Link to='/contact'><li className='hover:text-black transition duration-300'>Contact Us</li></Link>
          </ul>
        </div>

        <div className='flex flex-col items-center  justify-center text-center md:text-left'>
          <h1 className='md:mr-9 font-mainHead mb-3 font-bold text-[25px]'>Categories</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <Link to='/categories/casual'><li className='hover:text-black transition duration-300'>Casual</li></Link>
            <Link to='/categories/work-office'><li className='hover:text-black transition duration-300'>Work & Office</li></Link>
            <Link to='/categories/activewear'><li className='hover:text-black transition duration-300'>Activewear</li></Link>
            <Link to='/categories/evening-dresses'><li className='hover:text-black transition duration-300'>Evening Dresses</li></Link>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:mr-10 font-mainHead mb-3 font-bold text-[25px]'>Resources</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <Link to='/resources/contact-support'><li className='hover:text-black transition duration-300'>Contact Support</li></Link>
            <Link to='/resources/faq'><li className='hover:text-black transition duration-300'>FAQ</li></Link>
            <Link to='/resources/live-chat'><li className='hover:text-black transition duration-300'>Live Chat</li></Link>
            <Link to='/resources/returns'><li className='hover:text-black transition duration-300'>Returns</li></Link>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center text-center md:text-left'>
          <h1 className='md:ml-9 font-mainHead mb-3 font-bold text-[25px]'>Social Media</h1>
          <ul className='text-gray-400 font-mont font-semibold '>
            <Link to='/social/facebook'><li className='hover:text-black transition duration-300'>Facebook</li></Link>
            <Link to='/social/twitter'><li className='hover:text-black transition duration-300'>Twitter</li></Link>
            <Link to='/social/instagram'><li className='hover:text-black transition duration-300'>Instagram</li></Link>
            <Link to='/social/pinterest'><li className='hover:text-black transition duration-300'>Pinterest</li></Link>
          </ul>
        </div>
      </div>

      <div className='bg-[#F9FAFB]'>
        <div className='w-full h-[0.5px] bg-gray-400 opacity-50'></div>
        <div className='text-center mx-4 py-10 font-semibold font-mont text-gray-400'>Copyright © 2025 Clothing Store | Powered by Clothing Store</div>
      </div>
    </footer>
  );
};

export default FooterSection;