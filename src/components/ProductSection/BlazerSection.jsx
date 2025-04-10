import React from 'react'
import blazerBgImg from '../../images/BgImages/BlazerBgImg.jpeg'

const BlazerSection = () => {
  return (
    <div className='relative w-screen h-screen  '>
      <div className='z-10 absolute flex items-center justify-center inset-0 w-[70%] md:w-[50%] bg-white'>
        <div className="flex flex-col justify-center items-start text-start w-[60%] h-[85%]">
          <p className="font-mont font-semibold text-[8px] md:text-[12px] tracking-[2px] leading-[13.75px] break-words uppercase">
            Work & Office Attire
          </p>
          <h1 className="md:text-[62px] text-3xl font-bold italic break-words text-start capitalize font-mainHead leading-none mb-6">
            Professional pinstripe <br /> blazers collection
          </h1>
          <p className="font-mont text-gray-400 text-[8px] md:text-[16px] font-medium text-start mb-4">
            Elevate your workwear with our Professional Pinstripe Blazers <br /> Collection, where tailored sophistication meets modern <br /> confidence for a powerfully polished office look.
          </p>
          <div>
            <button className="text-[10px] md:text-[14px] uppercase text-black border border-black font-mont font-semibold py-3 px-8 md:py-4 md:px-11 hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 md:bg-cover bg-right"
        style={{
          backgroundImage: `url(${blazerBgImg})`,
          backgroundAttachment: 'fixed',
        }}
        role="img"
        aria-label="Hero Background"
      ></div>

    </div>
  )
}

export default BlazerSection