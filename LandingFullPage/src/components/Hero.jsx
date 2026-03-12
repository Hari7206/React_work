import React from 'react'
import Button from './Button'
function Hero() {
    return (
        <div className="bg-[url('https://day70-task.vercel.app/assets/1-B_PefUeR.png')] bg-cover bg-center h-screen  mt-5 rounded-[10px] flex flex-col pt-[15%] pl-[5%]">
            <h1 className='text-white text-[10rem] font-thin w-[85%] overflow-hidden'>
                <span className=' mr-[90%]' >DESIGN </span>
               <span className=' ml-24 w-28'> & FREEDOM</span>
            </h1>

            <span className='text-white ml-24 flex gap-[50%]'>
                <p className='text-[1.2rem] tracking-[1px] w-[33%]'>Explore independent Style by Embracing Uniqueness with Our Exclusive Designer Appare! </p>
                <span className='flex items-center gap-2 '><Button> <i class="ri-arrow-down-long-line"></i> </Button> <p className='text-[20px]  tracking-[1px]'>Learn More </p></span>
            </span>
        </div>
    )
}

export default Hero