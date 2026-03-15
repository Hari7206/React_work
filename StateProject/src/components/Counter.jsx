import React, { useState } from 'react'

function Counter() {
let [num, setNum] = useState(0)

function increase(){
  setNum(num + 1)
}
function decrese(){
  setNum(num - 1)
}
function reload(){
    window.location.reload();
}
  return (
    <div>
      <div className='bg-[#13162B] h-[500px] w-[500px] rounded-[20px] flex items-center justify-center p-5' >
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className={`text-[4.3rem] ${num <= 0 ? 'text-red-500': 'text-white'}  font-medium`}>
          {num  }
        </h1>

        <span className='flex gap-3'>
          <button className='text-white w-fit py-2 px-6 bg-[#0087FF]  text-[1.2rem]' 
          onClick={decrese}
          >
            <i className="ri-subtract-line"></i>
          </button>
          <button className='text-white w-fit py-2 px-6 bg-transparent border  border-[#0087FF] text-[1.2rem]'
          onClick={reload}
          >
            <i className="ri-restart-line"></i>
          </button>
          <button className='text-white w-fit py-2 px-6 bg-[#0087FF] text-[1.2rem]'
          onClick={increase}
          >

            <i className="ri-add-line"></i>
          </button>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Counter