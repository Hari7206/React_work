import React from 'react'
import Button from './Button'

function Qulity() {
  return (
    <div>
         <div className=' mt-5 w-[100%]  text-white'>
            <div className='flex gap-10'>
                
                <div className='w-[50%] h-[600px] flex flex-col gap-5 '>
                    <div className='h-[50%] rounded-[10px] bg-[#1E1E1E] p-10 flex flex-col gap-2'>
                        <h1 className='text-[2.2rem]'>HIGH QUALITY</h1>
                        <span className='flex gap-16 items-end'>
                            <p className='text-[1.2rem]'>
                               Embrace superior craftsmanship with our meticulously curated, enduring high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.
                            </p>
                            <span className='flex items-center gap-2'><Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='uppercase text-[1.2rem]'>Explore</p></span>
                        </span>
                    </div>
                    <div className='h-[50%] rounded-[10px] bg-[#1E1E1E] p-10 flex flex-col gap-2'>
                        <h1 className='text-[2.2rem]'>ECO-FRIENDLY</h1>
                        <span className='flex gap-16 items-end'>
                            <p className='text-[1.2rem]'>
                                Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.
                            </p>
                            <span className='flex items-center gap-2'><Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='uppercase text-[1.2rem]'>Explore</p></span>
                        </span>
                    </div>
                </div>
                <div className="w-[50%] h-[600px] bg-[url('https://day70-task.vercel.app/assets/4-Cc_Qykne.png')] bg-cover bg-bg-center rounded-[10px]"></div>
                </div>
        </div>
    </div>
  )
}

export default Qulity