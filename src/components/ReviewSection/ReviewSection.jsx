import React from 'react'
import reviewBgImg from '../../images/BgImages/ReviewBgImg.jpeg'
import { AiFillStar } from "react-icons/ai";

const ReviewSection = () => {
  return (
    <div className='relative flex items-center justify-center w-screen h-screen bg-white'>
      <div className='absolute inset-0 bg-center bg-cover w-[100%] h-[90%] ' style={{
        backgroundImage: `url(${reviewBgImg})`,
        backgroundAttachment: 'fixed',
      }}
        role="img"
        aria-label="Review Background">
      </div>
      <div className='absolute inset-0 bg-black bg-opacity-50 w-[100%] h-[90%]'></div>
      <div className='absolute flex flex-col gap-4 text-center'>
        <div className='flex justify-center '>
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} className='text-yellow-600 text-2xl ' />
          ))}
        </div>
        <p className='text-white md:text-[35px] text-[15px] font-bold font-mainHead italic capitalize'>"FemmeWardrobe is my fashion sanctuary! The curated <br /> collection effortlessly blends chic trends with timeless elegance,<br /> making every purchase a delightful discovery. The quality of<br /> their pieces is unmatched, and I appreciate the brand's<br /> commitment to sustainable fashion. What truly sets<br /> FemmeWardrobe apart is their customer-centric approach.”</p>
        <p className='text-white md:text-sm text-[8px]  font-semibold font-mont uppercase'>Sarah M., Devoted FemmeWardrobe Fan</p>
      </div>
    </div>
  )
}

export default ReviewSection