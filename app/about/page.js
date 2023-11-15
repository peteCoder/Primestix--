import Divider from '@/components/Divider'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <div className='mt-10'>
    <div className='bg-black'>
    <div className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto py-20'>
        <div className='text-white'>
          <h1 className='text-4xl font-semibold'>About PRIMESTIX</h1>
          <p className='capitalize text-2xl italic'>Our story</p>
        </div>
      </div>

    </div>

      <div className='max-w-[1100px] w-full mx-auto font-raleway'>
          <div className='grid grid-cols-12 my-16'>
            <div className='col-span-6 flex flex-col'>
              <p className='text-black font-raleway text-2xl'>
              DAMAC Properties is part of DAMAC Group that has been shaping the Middle East's luxury real estate market since 1982, delivering iconic residential, commercial and leisure properties across the region and beyond.
              </p>
            </div>
            <div className='col-span-6'>
              <div>
                <p className='text-md font-semibold'>
                DAMAC adds vibrancy to the cities in which its projects are located, with a huge and diverse portfolio that includes skyscrapers, communities and branded residences. To date DAMAC has delivered c. 46,000 quality homes, with c. 33,000 more under way.
                </p>
              </div>

              <div className='flex flex-row justify-between text-xl font-bold'>
                <div className='' >
                  <div className='text-5xl py-2 text-[#AD8F31]'>46,000</div>
                  <Divider/>
                  <div className='uppercase font-semibold py-3'>homes delivered.</div>
                </div>
                <div>
                  <div className='text-5xl py-2 text-[#AD8F31]'>33,000</div>
                  <Divider/>
                  <div className='uppercase font-semibold py-3'>in planning and progress</div>
                </div>
              </div>

              <div>
                <span className='text-md uppercase font-semibold'>as of june 2023</span>
              </div>
            </div>
          </div>
      </div>


      <div className='bg-[#ffe8a1] mt-52 h-[400px]'>
    <div className='flex flex-col font-raleway max-w-[1100px] w-full mx-auto py-20 relative'>
      <div className='grid grid-cols-12 gap-7'>
        <div className='col-span-6'>
        <Image className='w-[550px] absolute -top-[20%] left-0 h-auto' src="/founder.jpg" width={500} height={500} />

        </div>
        <div className='col-span-6 text-black'>
        <div>
          <h1 className='capitalize font-bold text-4xl'>Founder's Message</h1>
       
          <p className='mt-10 mb-5 text-xl relative'>   
          DAMAC has become synonymous with iconic projects setting new standards for design, craftsmanship and inspired lifestyles
          </p>
          <div className='h-[2px] w-full bg-black'/>
          <div className="w-full font-raleway ">
                    <Link
                      href="/founder"
                      className="w-full flex items-center justify-between py-3 text-black font-bold"
                    >
                      <span className="uppercase">Learn more</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default about