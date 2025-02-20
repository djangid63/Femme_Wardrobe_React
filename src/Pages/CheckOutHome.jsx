import React from 'react'
import NavBarCustom from '../components/HeroSection/NavBarCustom'
import FooterSection from '../components/ExploreSection/FotterSection'
import BillingDetails from '../components/CheckoutSection/BillingDetails'
import YourOrder from '../components/CheckoutSection/YourOrder'
import { useParams } from 'react-router-dom'
import productData from '../Data/ProductData'

const CheckOutHome = () => {
  const { id, count, selectedSize } = useParams();
  const parsedId = parseInt(id);
  const parsedCount = parseInt(count);
  const product = productData.find((product) => product.id === parsedId);
  return (
    <div>
      <NavBarCustom />
      <div className='flex'>
        <BillingDetails />
        <YourOrder id={parsedId} count={parsedCount} size={selectedSize} product={product} />
      </div>
      <FooterSection />
    </div>
  )
}

export default CheckOutHome
