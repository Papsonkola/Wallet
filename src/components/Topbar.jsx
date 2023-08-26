import React from 'react'

const Topbar = () => {
  return (
    <div className='w-full shadow-xl '>
        <div className='p-4 container mx-auto flex justify-between'>
       
        <h3 className='text-[16px] md:text-xl py-2'>Wallet</h3>

        <div className='flex'>
           <button className='bg-[#44319B] text-white mr-5 px-6 rounded-lg py-2'>Get Started</button> 
           <button className='bg-white px-6 rounded-lg py-2'>Sign In</button> 
        </div>
        </div>
    </div>
  )
}

export default Topbar