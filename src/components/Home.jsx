import React from 'react'
import dash from '../images/hm dashb.png'

const Home = () => {
  return (
    <div className='w-full '>
        <div className='container md:flex p-4 my-10 mx-auto'>
            <div className='flex-[50%] p-4'>
                <div>
                <h1 className='text-4xl md:text-5xl lg:text-[76px] font-semibold text-center md:text-left'>All-in-one</h1>
                <h1 className='text-4xl md:text-5xl lg:text-[76px] font-semibold mt-3 md:mt-7 text-center md:text-left'> Airtime Wallet</h1>
                </div>
                <p className='lg:text-[16px] text-center md:text-left mt-5 text-[#929292] max-w-[600px]'>Using wallet is an easy way to get, request and send airtime. Manage your sub-dealers and retailers with ease.</p>

                <div className='mt-5 flex '>
                    <button className='bg-[#44319B] mx-auto text-white mr-5 px-6 md:px-8 lg:px-10 rounded-lg py-2'>Get Started</button>
                    <button className='bg-[#cccad6] mx-auto text-[#44319B] px-6 md:px-8 lg:px-10 rounded-lg py-2'>Learn More</button>
                </div>
            </div>

            <div className='hidden flex-[50%] md:block p-10 pb-0 pt-0'>
                <img src={dash} alt='Dashboard'/>
            </div>
        </div>
    </div>
  )
}

export default Home