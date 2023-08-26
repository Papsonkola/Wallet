import React from 'react'
import dark from '../images/easdash2.png'
import light from '../images/easdash.png'

const Easily = () => {
  return (
    <div className='w-full'>
       <div className='container p-4 mx-auto'>
        <div>
        <h2 className='easy text-3xl md:text-5xl lg:text-7xl font-semibold'>Easily reach out to network providers. </h2>
        <h2 className='easy text-3xl md:text-5xl lg:text-7xl font-semibold mt-2 md:mt-4'>Get instant credit on request.</h2>
        </div>

        <div className='relative flex mt-5'>
            <img src={dark} alt='Dark Dashboard' className='ml-[30px] md:ml-[75px] w-[90%] md:w-[90%] lg:w-auto lg:ml-[250px] mt-[70px] '/>
            <img src={light} alt='Light Dashboard' className='absolute w-[90%] md:w-[90%] lg:w-auto'/>
        </div>
       </div> 
    </div>
  )
}

export default Easily