import React from 'react'
import exploreBgImg from '../../images/BgImages/ExploreBgImg.jpeg'

const ExploreSection = () => {
  return (
    <section className='relative h-[80vh] w-full overflow-hidden bg-gray-100 flex items-center justify-center'>
      <div className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `url(${exploreBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className='absolute inset-0 w-full h-full'
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))'
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end w-full h-full text-white px-4 sm:px-6 md:px-10 lg:px-44">
        <p className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[33vw] font-mont font-semibold text-[10px] md:text-[12px] tracking-[2px] leading-[13.75px] uppercase mb-2 md:mb-3 text-center md:text-start">
          Explore
        </p>
        <h1 className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[33vw] text-2xl sm:text-3xl md:text-5xl lg:text-[62px] font-bold italic text-center md:text-start capitalize font-mainHead leading-tight md:leading-none mb-4 md:mb-6">
          Elevate your wardrobe,<br className="md:block" /> embrace timeless style!
        </h1>
        <p className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[33vw] font-mont text-[10px] sm:text-xs md:text-sm lg:text-[16px] font-medium text-center md:text-start mb-4">
          Explore our collections today and experience the joy of fashion. Shop now for the <br className='hidden md:block' /> epitome of chic sophistication!
        </p>
        <div className='w-full max-w-[90%] sm:max-w-[80%] md:max-w-[33vw] flex justify-center md:justify-start'>
          <button className="text-[10px] md:text-[14px] uppercase text-white border border-white font-mont font-semibold py-2 px-6 md:py-4 md:px-11 hover:bg-white hover:text-black">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection