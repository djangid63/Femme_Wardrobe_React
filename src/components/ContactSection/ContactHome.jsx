import React from 'react'
import NavBarCustom from '../HeroSection/NavBarCustom'
import ContactUsBgImg from '../../images/BgImages/ContactUsBgImg.jpeg'

const ContactHome = () => {
  return (
    <div className='relative w-full h-[80vh] flex flex-col items-center justify-start'>
      <img className='absolute inset-0 w-full h-[80vh] object-cover' src={ContactUsBgImg} />
      {/* Overlay */}
      <div className='absolute inset-0 w-full h-[80vh] bg-black opacity-50'></div>
      <div className='absolute'>
        <NavBarCustom navBarTextColor={'white'} navBarBgColor={'transparent'} />
      </div>
      <div className='absolute top-[48%] mr-8 text-white '>
        <h1 className='text-7xl font-bold font-mainHead mb-3'>Contact Us</h1>
      </div>
    </div>
  )
}

export default ContactHome
