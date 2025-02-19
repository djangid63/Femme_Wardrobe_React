import React from 'react'
import NavBarCustom from '../components/HeroSection/NavBarCustom'
import FooterSection from '../components/ExploreSection/FotterSection'
import BillingDetails from '../components/CheckoutSection/BillingDetails'
import YourOrder from '../components/CheckoutSection/YourOrder'

const CheckOutHome = () => {
  return (
    <div>
      <NavBarCustom />
      <div className='flex'>
        <BillingDetails />
        <YourOrder />
      </div>
      <FooterSection />
    </div>
  )
}

export default CheckOutHome
