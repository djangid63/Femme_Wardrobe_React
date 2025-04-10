import React from 'react'
import ShopHomePage from '../components/ShopSection/ShopHomePage'
import ScrollToTop from '../Validation/ScrollToTop'
import AllProducts from '../components/ShopSection/AllProducts'
import Data from '../Data/ProductData'
import FooterSection from '../components/ExploreSection/FotterSection'

const ShopPage = () => {
  return (
    <section className='overflow-x-hidden'>
      <ScrollToTop />
      <ShopHomePage />
      <AllProducts productsData={Data} />
      <FooterSection />
    </section>
  )
}

export default ShopPage
