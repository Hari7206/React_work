import React, { useState } from 'react'

function Contact() {

    let [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [cityName, setCityName] = useState('')


const [users, setUsers] = useState([]);


 function summitFun(e) {
  e.preventDefault();

  const newUser = {
    name,
    email,
    mobile,
 cityName
  };

  setUsers([...users, newUser]);

  setName('');
  setEmail('');
  setMobile('');
  setCityName('');
}
function removeUser(index) {
  const updatedUsers = users.filter((_, i) => i !== index);
  setUsers(updatedUsers);
}
    return (
        <div className='flex gap-10 flex-wrap'>

            <form
                onSubmit={(e) => {
                    summitFun(e)
                }}
                className='w-[500px] bg-[#161E54] flex flex-col gap-10 p-10 items-center rounded-[30px]'>
                <span className='flex gap-4 w-[100%] '>
                    <input type="text" placeholder='Enter your name' className=' bg-[#BBE0EF] p-2 w-[50%]'
                        value={name}
                          required
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <input type="email" placeholder='Enter your email' className=' bg-[#BBE0EF] p-2 w-[50%]'
                        value={email}
                         
                          required
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </span>
                <input type="tel" placeholder='Enter your mobile no ' className='bg-[#BBE0EF] p-2 w-[100%]'
                    value={mobile}
                     pattern="[0-9]{10}"
                      required
                    onChange={(e) => {
                        setMobile(e.target.value)
                    }}
                />
                <input type="text" placeholder='Enter your city name' className='bg-[#BBE0EF] p-2 w-[100%]' 
                  value={cityName}
                    required
                    onChange={(e) => {
                        setCityName(e.target.value)
                    }}
                />
                <button className='bg-[#F16D34] w-fit p-3 px-10 rounded-[20px] active:scale-[0.96] text-white'>Submit</button>
            </form>
            {users.map((elem , index) => {
                return <div className='flex flex-col gap-4 p-10 bg-[#F5F2F2] w-[300px] items-center justify-center rounded-[20px]'>
                    <div><img src="https://play-lh.googleusercontent.com/8t-HE39ttp5Q2kvQOmRdv7gc99SOT3_NgW2_svSkJOBCSCaHxSZyc-wzDiSNl209UA" className='object-center object-cover h-[40px] w-[40px] rounded-[50%]' /></div>
                    <h1 className='text-[2rem] font-semibold'>{elem.name}</h1>
                    <h2 className='text-[1.3rem] tracking-[1px]'>{elem.email}</h2>
                    <span className='flex flex-col items-center gap-4'>
                        <p>{elem.mobile}</p>
                        <p>{elem.cityName}</p>
                    </span>
                    <button className='bg-[#FEB05D] w-fit p-3 px-10 rounded-[20px] active:scale-[0.96] text-white'
                    onClick={() => removeUser(index)}
                    >Remove</button>
                </div>
            })}
        </div>
    )
}

export default Contact