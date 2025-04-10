import React from 'react'
import AboutUsBgImg from '../../images/BgImages/AboutUsBgImg2.jpeg'

const CustomerCentric = () => {
  return (
    <section className='relative h-[100vh] w-full bg-white flex items-center justify-center'>
      <div className='absolute inset-0 w-full h-[97vh]'
        style={{
          backgroundImage: `url(${AboutUsBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className='absolute inset-0 w-[100%] h-[97vh]'
        style={{
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))'
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col md:justify-center md:items-start items-center w-[100%] h-[100%] text-white md:px-44 px-0">
        <p className="md:w-[80vw] w-[50vw] font-mont font-semibold text-[12px] md:text-[12px] tracking-[2px] leading-[13.75px] break-words uppercase mb-3">
          Customer-Centric Approach
        </p>
        <h1 className="md:w-[43vw] w-[50vw] md:text-[62px] text-5xl font-bold italic break-words text-start capitalize font-mainHead leading-none mb-6">
          Beyond Fashion: Nurturing
          <span> a Customer-Centric Experience</span>
        </h1>
        <p className="md:w-[40vw] w-[50vw] font-mont text-[8px] md:text-[16px] font-medium text-start mb-4 ">
          We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.
        </p>
        <div>
        </div>
      </div>
    </section>
  )
}

export default CustomerCentric