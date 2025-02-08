import React from 'react'
import exploreBgImg from '../../images/BgImages/ExploreBgImg.jpeg'

const ExploreSection = () => {
  return (
    <section className='relative h-[80vh] w-full bg-gray-100 flex items-center justify-center'>
      <div className='absolute inset-0 w-full h-[80vh]'
        style={{
          backgroundImage: `url(${exploreBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className='absolute inset-0 w-[100%] h-[80vh]'
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))'
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col md:justify-center md:items-end items-center w-[100%] h-[100%] text-white md:px-44 px-0">
        <p className="md:w-[33vw] w-[50vw] font-mont font-semibold text-[12px] md:text-[12px] tracking-[2px] leading-[13.75px] break-words uppercase mb-3">
          Explore
        </p>
        <h1 className="md:w-[33vw] w-[50vw] md:text-[62px] text-5xl font-bold italic break-words text-start capitalize font-mainHead leading-none mb-6">
          Elevate your wardrobe,<br /> embrace timeless style!
        </h1>
        <p className="md:w-[33vw] w-[50vw] font-mont text-[12px] md:text-[16px] font-medium text-start mb-4">
          Explore our collections today and experience the joy of fashion. Shop now for the <br /> epitome of chic sophistication!
        </p>
        <div>
          <div className='md:w-[33vw] w-[50vw]'>
            <button className="text-[10px] md:text-[14px] uppercase text-white border border-white font-mont font-semibold py-3 px-8 md:py-4 md:px-11 hover:bg-white hover:text-black">
              Shop Now
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection