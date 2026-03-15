import React, { useState } from 'react'

function Studen() {

    const [num, setNum] = useState([12, 45, 65, 23, 45, 39])

function addGrace() {
  let newMarks =  num.map((elem) => {
    if(elem >= 95 ){
            return elem
    }

    else if(elem < 33){
        return elem + 5;
    }
    else {
        return elem
    }
  });
  setNum(newMarks)
}

    

    return (
        <div className='bg-[#003049] p-4 px-5 w-[500px] rounded-[20px] flex flex-col gap-5 items-center'>

         <div>
  {num.map((elem, idx) => (
    <h1 
      key={idx} 
      className={`text-[2.2rem] ${
        elem >= 33 ? 'text-green-500' : 'text-red-500'
      }`}
    >
      Student {idx + 1} marks - {elem} {elem >= 33 ? 'pass' : 'fail'}
    </h1>
  ))}
</div>
            <button className='bg-[#F77F00] w-fit py-2 px-4 rounded-[12px] active:scale-[0.96] text-white text-[1.2rem]'
            onClick={addGrace}
            >Add Grace</button>
        </div>
    )
}

export default Studen