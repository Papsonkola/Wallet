import React from 'react'
import dark from '../images/regisdb2.png'
import light from '../images/regisdb.png'

const Register = () => {
  return (
    <div className='w-full '>
       <div className='container mx-auto p-4'>
        <h2 className='easy text-3xl md:text-5xl lg:text-[64px] font-semibold'>Register and manage your sub-dealers hassle free.</h2>

        <div className='relative flex mt-5'>
            <img src={dark} alt='Dark Dashboard' width={943} className='ml-[30px] md:ml-[75px] w-[90%] md:w-[90%] lg:w-auto lg:ml-[250px] mt-[70px] '/>
           
            <img src={light} alt='Light Dashboard' width={943} className='absolute w-[90%] md:w-[90%] lg:w-auto'/>
        </div>
       </div> 
    </div>
  )
}

export default Register