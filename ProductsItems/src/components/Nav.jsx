import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='bg-gradient-to-r from-[#0FB88F] to-[#0B8065] flex gap-5 p-5 m-5 rounded-[50px] items-center justify-end text-[1.2rem] text-white relative'>

     <i className="ri-remix-fill absolute top-[19%] left-10 text-[2.5rem]"></i>
      <Link to="/" className='bg-white/30 backdrop-blur-lg px-6 py-3 rounded-[50px] flex items-center gap-2 hover:scale-105 transition'>
        <i className="ri-home-7-line text-[1.4rem] leading-none"></i>
        <span>Home</span>
      </Link>

      <Link to="/product" className='bg-white/30 backdrop-blur-lg px-6 py-3 rounded-[50px] flex items-center gap-2 hover:scale-105 transition'>
        <i className="ri-file-list-line text-[1.4rem] leading-none"></i>
        <span>Product</span>
      </Link>

      <Link to="/about" className='bg-white/30 backdrop-blur-lg px-6 py-3 rounded-[50px] flex items-center gap-2 hover:scale-105 transition'>
        <i className="ri-information-line text-[1.4rem] leading-none"></i>
        <span>About us</span>
      </Link>

      <Link to="/signin" className='bg-white/30 backdrop-blur-lg px-6 py-3 rounded-[50px] flex items-center gap-2 hover:scale-105 transition'>
        <i className="ri-login-circle-line text-[1.4rem] leading-none"></i>
        <span>Sign in</span>
      </Link>

    </div>
  )
}

export default Nav