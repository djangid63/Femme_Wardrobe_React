import React from 'react'
import ScrollToTop from '../Validation/ScrollToTop'
import ContactHome from '../components/ContactSection/ContactHome'
import FooterSection from '../components/ExploreSection/FotterSection'
import FeaturesSection from '../components/ReviewSection/featuresSection'
import Form from '../components/ContactSection/ContactForm'
import ReviewSection from '../components/ReviewSection/ReviewSection'

const ContactUs = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTop />
      <ContactHome />
      <Form />
      <ReviewSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}

export default ContactUs
