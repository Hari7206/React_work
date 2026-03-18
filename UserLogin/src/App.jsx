import React, { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [url, setUrl] = useState('')
  const [followers, setFollowers] = useState('')
  const [post, setPost] = useState('')
  const [user, setUser] = useState([])

  function submitButton(e){
    e.preventDefault()
    console.log('hey master');
  setUser()
  }
  return (
    <div className='p-5 bg-[#FFFDE1] h-screen flex items-start gap-10'>
      <form className=' p-5 flex flex-col items-center justify-center gap-5  bg-[#FBE580] w-[500px] rounded-lg'
      onSubmit={(e)=>{
        submitButton(e)
      }}>
        <span className=' w-[100%] flex flex-col items-center justify-center'>
          <h1 className=' text-[2.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>Profile Creator</h1>
          <h2 className=' text-[1rem] tracking-[1px] font-semibold text-[#980404] mb-2 text-center'>Set up your profile in seconds and let’s get you going. Customize your info and make it yours.</h2>

        </span>

        <span className='flex w-[100%] gap-3'>
          <span className=' w-[50%]'>
            <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>First Name</h4>
            <input type="text"
             placeholder='Enter your first name'
             className='p-2 rounded-lg w-[100%]' 
             value={firstName}
             onChange={(e)=>{
               setFirstName(e.target.value)
             }} 
             />
          </span>
          <span className=' w-[50%]'>
            <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>Last Name</h4>
            <input type="text"
             placeholder='Enter your last name'
             className='p-2 rounded-lg w-[100%]'
               value={lastName}
             onChange={(e)=>{
               setLastName(e.target.value)
             }} 
              />
          </span>
        </span>
        <span className='w-[100%]'>
          <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>Bio</h4>
          <input type="text" 
          placeholder='Enter your Bio' 
          className='p-2 rounded-lg w-[100%]' 
            value={bio}
             onChange={(e)=>{
               setBio(e.target.value)
             }} 
          />
        </span>
        <span className='w-[100%]'>
          <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>Profile url</h4>
          <input type="text"
           placeholder='Enter our profile url'
            className='p-2 rounded-lg w-[100%]' 
              value={url}
             onChange={(e)=>{
               setUrl(e.target.value)
             }} 
            />
        </span>
        <span className='flex w-[100%] gap-3'>
          <span className='w-[50%]'>
            <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'> Followers</h4>
            <input type="number"
             placeholder='Enter your follower no' 
             className='p-2 rounded-lg w-[100%]'
               value={followers}
             onChange={(e)=>{
               setFollowers(e.target.value)
             }} 
              />
          </span>
          <span className='w-[50%]'>
            <h4 className=' text-[1.3rem] tracking-[1px] font-semibold text-[#980404] mb-2'>Posts</h4>
            <input type="number"
             placeholder='Enter your total post'
              className='p-2 rounded-lg w-[100%]' 
                value={post}
             onChange={(e)=>{
               setPost(e.target.value)
             }} 
              />
          </span>
        </span>
        <button className='bg-[#285A48] text-white p-3 px-10 rounded-[50px] active:scale-[0.95] ' > Submit</button>
      </form>

      <div className='p-2 w-[350px] bg-[#2F2F2F] text-white flex flex-col h-[550px] rounded-[50px]'>
        <div className="h-[100%] w-[100%] bg-[url('https://i.pinimg.com/736x/78/ed/d0/78edd08eaf3a0d18fcc92b86ae8ab6e5.jpg')] bg-cover bg-top rounded-[50px] relative">
          <div className='w-full absolute bottom-0 left-0 flex flex-col gap-3 
backdrop-blur-sm bg-white/[0.03] px-5 py-2 rounded-b-[50px]'>
            <h1 className='text-[1.8rem]'>Alina shreshtha <i className="ri-shield-check-line"></i></h1>
            <h2 className='w-[90%] text-[1.2rem]'>A Product Designer focused on
              intuitive user experiences.</h2>

            <div className='w-[100%] flex justify-between mt-5 items-center'>
              <span className='flex gap-5'>
                <p className='text-[1.2rem] flex gap-2'>
                  <i className="ri-user-3-line "></i>
                  454
                </p>
                <p className='text-[1.2rem] flex gap-2'>
                  <i className="ri-sticky-note-line "></i>
                  23
                </p>
              </span>
              <button className='mr-4 p-3  bg-white text-black rounded-[50px]'> Delete account</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App