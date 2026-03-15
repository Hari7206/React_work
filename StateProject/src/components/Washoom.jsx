import React, { useState } from 'react'


function Washoom() {
    const [gender, setGender] = useState('Default')

    function changeGender(){
        if(gender == 'Default'){
            setGender('Male')
        }
        else if(gender == 'Male'){
            setGender('Female')
        }
        else {
            setGender('Male')
        }
    }

    let icon 
      if(gender == 'Default'){
         icon = <i className="ri-eye-2-line text-[4rem] text-green-500 "></i>
        }
        else if(gender == 'Male'){
            icon = <i className="ri-men-line text-[4rem] text-[#76D2DB]"></i>
        }
        else {
          icon =  <i className="ri-women-line text-[4rem] text-[#FF3E9B]"></i>
        }
    
  return (
    <div className=' border border-red-500 w-[500px] h-[500px] flex flex-col items-center gap-5 justify-around p-5 pb-10 rounded-[20px] bg-[#FFD786]'>
        <h1 className='text-[2.5rem]  font-medium text-[#612D53]'> {gender} Washroom</h1>
        <div className={`flex items-center  h-[200px] w-[100%] justify-center ${gender === 'Male' ? 'bg-[#8494FF]': 'bg-[#FF88BA]'} rounded-[20px]`}>
            {icon}
        </div>
        <button className='bg-red-500 text-white p-4 px-5 rounded-[10px] active:scale-[0.96] text-[1.2rem]'
        onClick={changeGender}
        >Change Gender</button>
    </div>
  )
}

export default Washoom