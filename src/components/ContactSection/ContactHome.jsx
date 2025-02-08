import React from 'react'
import NavBarCustom from '../HeroSection/NavBarCustom'
import ContactUsBgImg from '../../images/BgImages/ContactUsBgImg.jpeg'

const ContactHome = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col items-center justify-start relative'>
      <img className='absolute inset-0 w-full h-[85vh] object-cover object-right-top' src={ContactUsBgImg} />
      {/* Overlay */}
      <div className='absolute inset-0 w-full h-[85vh] bg-black opacity-50'></div>
      <div className='absolute'>
        <NavBarCustom navBarTextColor={'black'} navBarBgColor={'white'} />
      </div>
      <div className='absolute top-[48%] mr-8 text-white '>
        <h1 className='text-8xl font-bold font-mainHead mb-3'>Shop</h1>
        <div className='flex items-end gap-2 ml-4'>
          <span className='text-sm font-semibold font-mont'>Home -</span>
          <span className='text-sm font-semibold font-mont'> - Shop</span>
        </div>
      </div>
    </div>
  )
}

export default ContactHome
