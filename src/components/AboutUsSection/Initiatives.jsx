import React from 'react'

const Initiatives = () => {
  return (
    <section className='h-[80vh] w-full bg-white flex items-center justify-center '>
      <div className='grid grid-cols-2 grid-rows-[0.3fr_1fr] md:py-10 md:px-48 md:gap-20 gap-10'>
        <div className=' col-span-2 row-span-1 flex flex-col items-start justify-start'>
          <p className='antialiased box-border clear-both font-mont text-[11px] font-semibold tracking-[2px] leading-[13.75px] break-words uppercase'>Sustainability Initiatives</p>

          <h1 className='antialiased box-border clear-both font-mainHead text-[56px] italic font-bold leading-[64.4px] break-words capitalize'>Conscious Fashion for a Better Tomorrow</h1>
        </div>

        <div className='flex gap-x-28 col-span-2'>
          <p className='w-[45%] antialiased box-border clear-both font-mainHead text-[20px] italic font-bold leading-6 break-words capitalize'>we recognize the responsibility we hold in shaping a more sustainable future for fashion. Our commitment to eco-friendly practices and sustainable fashion choices is at the core of what we do.</p>
          <div className='w-[55%] text-start antialiased box-border text-[rgba(0,0,0,0.46)] font-mont text-[14px] font-semibold leading-[23.1px] mb-[22.4px] break-words'>
            <p className='mb-6' >From the careful selection of ethically sourced materials to the implementation of environmentally conscious manufacturing processes, every step we take is a stride toward a greener and more sustainable industry.
            </p>
            <p>
              We prioritize transparency in our supply chain, partnering with suppliers who share our values of fairlabor practices and environmental stewardship. Our sustainable fashion choices extend to packaging as well– we use recyclable materials to minimize our environmental footprint. Join us on this journey towardsconscious fashion, where style meets responsibility, and every purchase contributes to a brighter,eco-friendly tomorrow.
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Initiatives
