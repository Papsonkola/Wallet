import React from 'react'
// import vector from '../images/Vector (1).png'

const Started = () => {
  return (
    <div className='w-full p-4'>
        <div className='started container bg-no-repeat bg-bottom max-w-[1240px] bg-black px-4 py-11 mx-auto text-white text-center rounded-3xl mb-6' >
            <h2 className='text-[32px] lg:text-[64px] md:mt-[20px] '>Get started now!</h2>
            <p className='max-w-[600px] md:text-[18px] lg:text-[24px] mx-auto my-7'>Join 100s of other businesses already using wallet to make sales.</p>
            <button className='bg-white mx-auto text-[#44319B] px-5 md:px-10 rounded-lg py-2 md:mb-[50px]'>Create an account</button>
        </div>
    </div>
  )
}

export default Started