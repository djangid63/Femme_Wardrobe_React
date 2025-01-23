import React from 'react'
import productData from "../Data/Data.js";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import ProductCard1 from "../components/ProductSection/PopularProduct.jsx";
import newProductData from "../Data/NewProduct.jsx";
import BagSection from "../components/ProductSection/BagSection.jsx";
import BlazerSection from '../components/ProductSection/BlazerSection.jsx';
import ReinventedSection from "../components/ProductSection/ReinventedSection.jsx";
import NewProductCard from "../components/ProductSection/NewProductCard.jsx";
import ReviewSection from "../components/ReviewSection/ReviewSection.jsx";
import FeaturesSection from "../components/ReviewSection/featuresSection.jsx";
import ExploreSection from "../components/ExploreSection/ExploreSection.jsx";
import FooterSection from "../components/ExploreSection/FotterSection.jsx";

const HomePages = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <ProductCard1 productData={productData} />
      <BagSection />
      <BlazerSection />
      <ReinventedSection />
      <NewProductCard newProductData={newProductData} />
      <ReviewSection />
      <FeaturesSection />
      <ExploreSection />
      <FooterSection />
    </div>
  )
}

export default HomePages
