import React from 'react'

function Nav() {
    const navItem = "h-[50px] px-4 bg-[#1E1E1E] flex items-center rounded-[8px] cursor-pointer active:scale-95";
  return (
    <div className='flex p-4 justify-between '>
        <h1 className='text-white text-3xl cursor-pointer'>DVSY</h1>
        <span className='text-white flex gap-3 items-center '>
            <a href=""   className={navItem}>DESIGNERS</a>
            <a href=""  className={navItem}>COLLABS</a>
            <a href=""  className={navItem}>EVENTS</a>
            <a href=""  className={navItem}>BLOG</a>
            <a href=""  className={navItem}>CARD</a>
            <button className={`${navItem} bg-[#EE6D5B]` }>GET IN TOUCH</button>
        </span>
    </div>
  )
}

export default Nav