import React, { useEffect, useState } from 'react'
import NavBarCustom from '../components/HeroSection/NavBarCustom'
import FooterSection from '../components/ExploreSection/FotterSection'
import BillingDetails from '../components/CheckoutSection/BillingDetails'
import YourOrder from '../components/CheckoutSection/YourOrder'
import { useParams } from 'react-router-dom'
import productData from '../Data/ProductData'

const CheckOutHome = () => {
  const { id, count, selectedSize } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const parsedId = parseInt(id);
    const parsedCount = parseInt(count);
    const foundProduct = productData.find((product) => product.id === parsedId);
    setProduct({ parsedId, parsedCount, foundProduct });
  }, [id, count]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarCustom />
      <div className='flex sm:flex-row flex-col '>
        <BillingDetails />
        <YourOrder id={product.parsedId} count={product.parsedCount} selectedSize={selectedSize} product={product.foundProduct} />
      </div>
      <FooterSection />
    </div>
  )
}

export default CheckOutHome
