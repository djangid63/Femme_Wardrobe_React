import React from 'react';
import bagBgImage from '../../images/BgImages/BagBgImg.jpeg';
import bagModel from '../../images/BgImages/BagModel.jpeg';

const BagSection = () => {
  return (
    <div className='relative flex justify-end items-center w-screen h-[124vh]'>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bagBgImage})`,
          backgroundAttachment: 'fixed',
        }}
        role="img"
        aria-label="Bag Background"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 h-[100%]"></div>

      {/* Main Content */}
      <div className='top-28 absolute flex flex-col items-center md:items-end text-white justify-center md:px-48 py-10 h-[100vh] w-[100vw] gap-8'>
        <div className='flex md:w-[470px] w-[200px]'>
          <img src={bagModel} alt="Bag Model" />
        </div>
        <div className='flex flex-col items-center justify-center gap-9'>
          <div className='w-[100%] h-[100%]'>
            <h1 className="md:text-[55px] text-xl font-bold italic text-center font-mainHead leading-none">
              Explore our exquisite Bag<br /> Collection now!
            </h1>
          </div>
          <button className="md:text-[14px] text-[8px] uppercase text-white border border-white font-mont font-semibold py-4 px-11 hover:bg-white hover:text-black">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagSection;