import React from 'react'

function Button({children}) {
  return (
   <button className="h-[45px] w-[45px] bg-[#8C5A3C] rounded-full flex items-center justify-center text-white hover:bg-[#a36a48]">
      {children}
    </button>
  )
}

export default Button