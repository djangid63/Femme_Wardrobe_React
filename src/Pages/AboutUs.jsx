import React from 'react'
import AboutUsbgImg from '../images/BgImages/AboutUsBgImg.jpeg'
import NavBarWhite from '../components/HeroSection/NavBarWhite'


const AboutUs = () => {
  return (
    <section>
      <div className='w-screen h-[100vh] flex flex-col items-start justify-start bg-gray-100'>
        <img src={AboutUsbgImg} />
        <div className='absolute !text-white z-50'>
          <NavBarWhite />
        </div>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black opacity-50'></div>
      </div>
    </section>
  )
}

export default AboutUs
