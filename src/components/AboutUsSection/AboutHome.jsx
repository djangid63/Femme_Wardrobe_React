import React from 'react'
import AboutUsbgImg from '../../images/BgImages/AboutUsBgImg.jpeg';
import NavBarCustom from './../HeroSection/NavBarCustom';


const AboutUs = () => {
  const navTextColor = 'white';
  return (
    <section className='w-full h-[100%] overflow-x-hidden'>
      <div className='w-full h-[70vh] flex flex-col items-center justify-start relative'>
        <img className='absolute inset-0 w-full h-[75vh] object-cover' src={AboutUsbgImg} />
        {/* Overlay */}
        <div className='absolute inset-0 w-full h-[75vh] bg-black opacity-50'></div>
        <div className='absolute'>
          <NavBarCustom navBarTextColor={navTextColor} />
        </div>
        <div className='absolute top-[48%] mr-8 text-white'>
          <h1 className='text-7xl font-bold font-mainHead italic'>About Us</h1>
        </div>
      </div>

      {/* Part 2nd */}
      <div className='w-full px-24 py-16 grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_0.3fr_1fr] gap-8 place-items-center'>
        {/* Grid 1 */}
        <div className='h-80 col-span-2 grid grid-cols-1 lg:grid-cols-2 items-start justify-center gap-3'>
          <div className='h-80 flex flex-col items-start justify-start md:justify-center '>
            <h1 className='font-mainHead text-5xl md:text-6xl italic font-bold leading-tight'>From Vision to Vogue:</h1>
            <h1 className='font-mainHead text-5xl md:text-6xl italic font-bold leading-tight'> The Birth of</h1>
            <h1 className='font-mainHead text-5xl md:text-6xl italic font-bold leading-tight'>  FemmeWardrobe</h1>
          </div>
          <div className='flex flex-col items-start justify-center gap-3 py-10'>
            <h3 className="antialiased box-border clear-both font-mont text-[11px] font-semibold tracking-[2px] leading-[13.75px] break-words uppercase mb-3">Our Story</h3>
            <div className='antialiased box-border clear-both font-mainHead text-[20px] italic font-bold leading-6 mb-2 break-words text-left capitalize'>
              <h2>Our journey began with a simple yet powerful vision - to redefine the way</h2>
              <h2>women experience fashion</h2>
            </div>
            <p className='w-[93%] antialiased box-border text-[rgba(0,0,0,0.46)] font-mont text-sm font-semibold leading-[23.1px] break-words text-left'>Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.</p>
          </div>
        </div>


        {/* Grid 2 Separater line */}
        <div className='col-span-2 h-[1px] bg-gray-300 w-[90%]'></div>
        {/* Grid 3 */}

        <div className='col-span-2 md:px-20 mt-10 flex flex-col items-start justify-center gap-3'>
          <p className='antialiased box-border clear-both font-montserrat text-[11px] font-semibold tracking-[2px] leading-[13.75px] break-words uppercase'>Quality Assurance</p>
          <h1 className='antialiased box-border clear-both font-mainHead text-[40px] md:text-[54px] italic font-bold leading-[64.4px] mb-[39.2px] break-words text-left capitalize'>We understand that fashion is an expression of identity, and we take pride in delivering products that embody the highest standards of quality.</h1>
          <p className='antialiased box-border text-[rgba(0,0,0,0.46)] font-mont text-[14px] font-semibold leading-[23.1px] break-words text-left'>Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there – rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe for fashion that not only captures attention but withstands the test of time.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
