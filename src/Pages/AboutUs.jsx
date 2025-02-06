import React from 'react'
import AboutUsbgImg from '../images/BgImages/AboutUsBgImg.jpeg'
import NavBarWhite from '../components/HeroSection/NavBarWhite'


const AboutUs = () => {
  return (
    <section className='overflow-x-hidden '>
      <div className='w-full h-[100vh] flex flex-col items-center justify-start'>
        <img className='absolute inset-0 w-full h-[75vh] object-cover' src={AboutUsbgImg} />
        {/* Overlay */}
        <div className='absolute inset-0 w-full h-[75vh] bg-black opacity-50'></div>
        <div className='absolute'>
          <NavBarWhite />
        </div>
        <div className='absolute top-1/3 mr-5 text-white'>
          <h1 className='text-7xl font-bold font-mainHead italic'>About Us</h1>
        </div>
      </div>

      {/* Part 2nd */}
      <div className='grid'>

      </div>
    </section>
  )
}

export default AboutUs
