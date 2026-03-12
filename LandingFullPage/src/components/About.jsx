import React from 'react'

function About() {
    return (
        <div className='w-[100] flex items-center gap-2 text-white'>
            <div className='h-[600px]  w-[50%]  bg-[#1E1E1E] rounded-[10px] flex flex-col gap-12 p-10'>
                <h2 className='uppercase  text-[2rem]'>about</h2>
                <span className='flex-col  justify-between gap-10'>
                    <h1 className='w-[90%] text-[3rem]'>WHERE FASHION MEETS FREEDOM</h1>
                    <span className='flex justify-between text-start w-[100%] text-[1.2rem]'>
                        <p className='w-[45%]' >We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation,</p>
                        <p className='w-[45%]'>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
                    </span>
                </span>
            </div>
            <div className="h-[600px] w-[50%] bg-[url('https://day70-task.vercel.app/assets/2-D0t8sC3b.png')] bg-cover bg-center rounded-[10px]"></div>
        </div>
    )
}

export default About