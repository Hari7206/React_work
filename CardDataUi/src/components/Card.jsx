import React from 'react'

function Card({user}) {
    return (

        <div className='h-[450px] w-[300px] rounded-[30px] bg-white p-2 relative'>
                <img src={user.cover_img_url} alt="cover" className='h-[30%] w-[100%] rounded-[30px]' />
                <img src={user.profile_picture} alt="" className=' absolute h-[100px] w-[100px] rounded-[50%] top-[20%] left-[30%] border border-white p-1 bg-white' />
                <div className='flex flex-col gap-1 mt-[45px] items-center  '>
                    <h1 className='text-[2rem] font-semibold'>{user.heading}</h1>
                    <p className=' text-center mt-2'>{user.bio}</p>
                </div>
                <div className='mt-7 bg-[#F5F5F5] w-[100%] h-[70px] rounded-[20px] border   shadow-lg flex  justify-between px-4 py-2' >
                    <div className='text-center'>
                        <h1 className='font-semibold'>{user.likes}</h1>
                        <p className=' text-gray-400'>Likes</p>
                    </div>
                      <div className='text-center'>
                        <h1 className='font-semibold'>{user.posts}</h1>
                        <p className=' text-gray-400'>Posts</p>
                    </div>
                       <div className='text-center'>
                        <h1 className='font-semibold'>{user.views}</h1>
                        <p className=' text-gray-400'>Views</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center mt-5'>
                   <i className="ri-instagram-line text-pink-500 cursor-pointer"></i>
                    <i className="ri-twitter-x-line cursor-pointer"></i>
                    <i className="ri-messenger-line  text-blue-800 cursor-pointer" ></i>
                </div>
            </div>
    )
}

export default Card