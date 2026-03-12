import React from 'react'
import Button from './Button'
function Benefits() {
    return (
        <div className=' mt-5 w-[100%]  text-white'>
            <h1 className='uppercase text-[4rem]'>Our Advantages</h1>
            <div className='flex gap-10'>
                <div className="w-[50%] h-[600px] bg-[url('https://day70-task.vercel.app/assets/3-CzmpfoD-.png')] bg-cover bg-bg-center rounded-[10px]"></div>
                <div className='w-[50%] h-[600px] flex flex-col gap-5 '>
                    <div className='h-[50%] rounded-[10px] bg-[#1E1E1E] p-10 flex flex-col gap-2'>
                        <h1 className='text-[2.2rem]'>INDEPENDENT DESIGNERS</h1>
                        <span className='flex gap-16 items-end'>
                            <p className='text-[1.2rem]'>
                                Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.
                            </p>
                            <span className='flex items-center gap-2'><Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='uppercase text-[1.2rem]'>Explore</p></span>
                        </span>
                    </div>
                    <div className='h-[50%] rounded-[10px] bg-[#1E1E1E] p-10 flex flex-col gap-2'>
                        <h1 className='text-[2.2rem]'>EXCLUSIVE & UNIQUITY</h1>
                        <span className='flex gap-16 items-end'>
                            <p className='text-[1.2rem]'>
                                Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.
                            </p>
                            <span className='flex items-center gap-2'><Button><i class="ri-arrow-right-up-long-line"></i></Button> <p className='uppercase text-[1.2rem]'>Explore</p></span>
                        </span>
                    </div>
                </div></div>
        </div>
    )
}

export default Benefits