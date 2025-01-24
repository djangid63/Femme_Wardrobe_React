import React from 'react'
import NavBar from '../components/HeroSection/NavBar'
import FooterSection from '../components/ExploreSection/FotterSection'
import ProductBigImg1 from '../images/PopProductImgs/ProductBig1.jpeg'

const PowerSuitDetail = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center overflow-x-hidden'>
      {/*---------- NavBar  ------------ */}
      <div className='w-full h-full'>
        <NavBar />
      </div>
      {/*---------- Content ------------ */}
      <div>
        <section className='grid grid-cols-2 p-20 gap-3 w-screen h-screen place-items-center'>
          {/* Grid 1 */}
          <div className='w-[660px] h-[80%] mb-16 flex items-center justify-center'>
            <img src={ProductBigImg1} />
          </div>
          {/* Grid 2 */}
          <div className='w-[100%] h-full'>
            <div className='flex flex-col gap-4'>
              <h6 className='font-mont font-semibold text-gray-400 cursor-pointer text-sm capitalize'>Home / Work & Office / Timeless Classic Collection</h6>
              <h3 className='capitalize font-bold font-mainHead text-4xl italic cursor-pointer'>Work & Office</h3>
              <h2 className='capitalize font-semibold cursor-pointer text-2xl font-mainHead'>Timeless Classic Collection</h2>
              <h1 className='text-gray-400 capitalize font-bold font-mainHead text-4xl italic cursor-pointer '>$124.90 - $154.90 & Free Shipping</h1>
              <p className='text-gray-400 font-mont capitalize'>Crafted from soft, breathable fabrics, the relaxed fit provides a carefree silhouette,<br /> while thoughtful details add a touch of urban chic. Whether you're lounging at home<br />  or navigating a bustling day, our Timeless Classic Collection effortlessly combine ease<br />  with fashion, allowing you to move with relaxed confidence while<br />  making a statement of casual sophistication.</p>
            </div>
            <div className='flex gap-3 mt-5'>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >XS
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >S
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >M
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >L
              </button>
              <button
                className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
              >XL
              </button>
            </div>
            <div className='flex gap-3 mt-5'>
              {
                (() => {
                  let colors = {
                    'red': 'bg-red-300',
                    'blue': 'bg-blue-300',
                    'green': 'bg-green-300',
                    'yellow': 'bg-yellow-300',
                    'black': 'bg-black',
                  };
                  return [...Array(5)].map((_, index) => (
                    <div key={index} className={`w-6 h-6 rounded-full ${colors[index]} border border-black`}></div>
                  ));
                })()
              }
            </div>
            <div></div>
          </div>
        </section>
      </div>
      {/*---------- Footer ------------ */}
      <div className='w-full h-full'>
        <FooterSection />
      </div>
    </div>
  )
}

export default PowerSuitDetail
