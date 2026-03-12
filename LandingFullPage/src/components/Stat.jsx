import React from 'react'

function Stat() {
  return (
    <div className='flex items-center justify-around w-[100%] mt-2'>

        <span className=' text-center text-white p-10 uppercase '>
            <h2 className='text-[1.2rem] tracking-[1px]'>Desingners</h2>
            <h1 className='text-[2rem]'>150+</h1>
        </span>
        <span className=' text-center text-white p-10 uppercase '>
            <h2 className='text-[1.2rem] tracking-[1px]'>Clients</h2>
            <h1 className='text-[2rem]'>500+</h1>
        </span>
        <span className=' text-center text-white p-10 uppercase '>
            <h2 className='text-[1.2rem] tracking-[1px]'>MASTERPIECES </h2>
            <h1 className='text-[2rem]'>20k+</h1>
        </span>
        <span className=' text-center text-white p-10 uppercase '>
            <h2 className='text-[1.2rem] tracking-[1px]'>Events</h2>
            <h1 className='text-[2rem]'>50+</h1>
        </span>

    </div>
  )
}

export default Stat