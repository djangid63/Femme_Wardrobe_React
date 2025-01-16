import React from 'react'
import reinventedBgImg from '../../images/BgImages/ReinventingBgImg.jpeg'
import reinventedModel from '../../images/BgImages/ReinventingModel.jpeg'


const ReinventedSection = () => {
  return (
    <div className='w-screen md:h-[105vh] h-[70vh] relative'>
      <div className='absolute w-[100%] h-[100%] bg-top bg-cover'
        style={{
          backgroundImage: `url(${reinventedBgImg})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className='absolute inset-0 '
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))'
        }}
      ></div>
      <div className='absolute z-20 -top-24 md:left-[170px] flex flex-col items-center md:items-start justify-center text-white w-[100%] h-[100%]'>
        <div>
          <img className='md:w-[516px] w-[300px] h-auto mb-5' src={reinventedModel} />

          <h1 className="md:text-[50px] text-3xl font-bold italic break-words text-start capitalize font-mainHead leading-none mb-4">
            Discover the allure of <br /> fashion reinvented!
          </h1>
          <p className="font-mont text-[8px] md:text-[16px] font-medium text-start mb-10">
            Dive into a world of style with our latest collection! Shop now <br /> and redefine your wardrobe narrative!
          </p>
          <div>
            <button className="text-[10px] md:text-[14px] uppercase text-white border border-white font-mont font-semibold py-3 px-8 md:py-4 md:px-11 hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReinventedSection