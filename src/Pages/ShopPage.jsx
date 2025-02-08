import React from 'react'
import ShopHomePage from '../components/ShopSection/ShopHomePage'
import { Link } from 'react-router-dom'
import ScrollToTop from '../Validation/ScrollToTop'

const ShopPage = () => {
  return (
    <section>
      <ScrollToTop />
      <ShopHomePage />
    </section>
  )
}

export default ShopPage
