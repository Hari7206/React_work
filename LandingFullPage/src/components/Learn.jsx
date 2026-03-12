import React from 'react'
import Button from './Button'
function Learn() {
    let box = 'flex flex-col items-start justify-around w-[25%] bg-[#1E1E1E] rounded-[10px] p-5 px-10 text-[rgba(255,255,255,0.76)] mt-5 gap-5'
  return (
    <div className='flex items-center gap-3 '>
        <div className={box}>
            <h3>INDEPENDENCY</h3>
            <p className='w-[90%] text-[18px]'>Explore the creativity of independent designers from around the globe.</p>
            <span className='flex items-center tracking-[1px] gap-2'> <Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='text-[1.1rem]'>Learn More</p></span>
        </div>
        <div className={box}>
            <h3>UNIQUITY</h3>
            <p className='w-[90%] text-[18px]'>Discover the charm of unique pieces that stand out effortlessly.</p>
            <span className='flex items-center tracking-[1px] gap-2'> <Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='text-[1.1rem]'>Learn More</p></span>
        </div>
        <div className={box}>
            <h3>QUALITY</h3>
            <p className='w-[90%] text-[18px]'>Experience unparalleled craftmanship and attention to detail.</p>
            <span className='flex items-center tracking-[1px] gap-2'> <Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='text-[1.1rem]'>Learn More</p></span>
        </div>
        <div className={box}>
            <h3>INDEPENDENCY</h3>
            <p className='w-[90%] text-[18px]'> eco-conscious fashion choices without comromisissing on style.</p>
            <span className='flex items-center tracking-[1px] gap-2'> <Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='text-[1.1rem]'>Learn More</p></span>
        </div>
    </div>
  )
}

export default Learn