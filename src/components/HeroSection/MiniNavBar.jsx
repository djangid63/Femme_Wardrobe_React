import React, { useState, useEffect } from 'react';

const MiniNavBar = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className={`fixed inset-0 px-10 md:px-[185px] w-full h-[10vh] bg-white flex justify-between items-center z-40 shadow-md shadow-black/10 transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Cont One */}
      <div className='hidden md:flex items-center gap-6'>
        <img className='w-12 h-14' src={product.img} alt={product.title} />
        <h1 className='font-mont text-sm md:text-xl font-semibold text-gray-400'>{product.collection}</h1>
      </div>
      {/* Cont Two */}
      <div className='flex items-center justify-center gap-6'>
        <h1 className='hidden md:flex font-mont text-gray-400 font-bold text-sm md:text-base'>{product.pricingDetails}</h1>
        <button className='uppercase px-5 py-2 md:px-10 md:py-4 text-black border-black border font-semibold font-mont text-sm '>Select Option</button>
      </div>
    </div>
  );
};

export default MiniNavBar;