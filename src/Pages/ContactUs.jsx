import React from 'react'
import ScrollToTop from '../Validation/ScrollToTop'
import ContactHome from '../components/ContactSection/ContactHome'
import FooterSection from '../components/ExploreSection/FotterSection'
import FeaturesSection from '../components/ReviewSection/featuresSection'

const ContactUs = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTop />
      <ContactHome />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}

export default ContactUs
