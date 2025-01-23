import React from 'react'
import NavBar from '../components/HeroSection/NavBar'
import FooterSection from '../components/ExploreSection/FotterSection'

const PowerSuitDetail = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full h-full'>
        <NavBar />
      </div>
      <div className='w-full h-full'>
        <FooterSection />
      </div>
    </div>
  )
}

export default PowerSuitDetail
