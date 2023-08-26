import React from 'react'
import pie from '../images/pie.png'
import padlock from '../images/padlock.png'

const Card = () => {
  return (
    <div className='w-full '>
        <div className='container mx-auto md:flex p-4 my-10 md:grid-cols-3 gap-8 '>
            <div className='w-full text-center md:text-left border-[#d8d8d8] rounded-xl p-4 '>
             <img src={pie} alt='Pie Chart' className='mx-auto md:mx-0'/> 
             <h3 className='text-2xl font-semibold my-5'>Analytics</h3>  
             <p className='text-[#929292] mb-11 mx-auto md:text-sm lg:text-base md:mx-0'>View your statistics, reports and analysis of your dealers. Helping to track your sales and spendings more efficiently.</p>
            </div>

            <div className='w-full text-center md:text-left border-[#d8d8d8] rounded-xl p-4 '>
             <img src={padlock} alt='Padlock' className='mx-auto md:mx-0'/> 
             <h3 className='text-2xl font-semibold my-5'>Security</h3>  
             <p className='text-[#929292] mb-11 mx-auto md:text-sm lg:text-base md:mx-0'>Secure features to make sure your finances and wallets are safely secured. No need for you to worry, we update our features regularly.</p>
            </div>

            <div className='w-full text-center md:text-left border-[#d8d8d8] rounded-xl p-4 '>
             <img src={pie} alt='Pie Chart' className='mx-auto md:mx-0'/> 
             <h3 className='text-2xl font-semibold my-5'>Analytics</h3>  
             <p className='text-[#929292] mb-11 mx-auto md:text-sm lg:text-base md:mx-0'>View your statistics, reports and analysis of your dealers. Helping to track your sales and spendings more efficiently.</p>
            </div>
        </div>
    </div>
  )
}

export default Card