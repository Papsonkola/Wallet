import React from 'react'

const Bottom = () => {
  return (
    <div className='w-full bg-[#130F26] text-white py-8'>
        <div className='container p-4 mx-auto flex justify-between'>
            <p className='text-[#929292]'>Wallet</p>

            <ul className='flex'>
                <li className='mr-3 md:mr-6 text-[#929292]'><button>FAQs</button></li>
                <li className='mr-3 md:mr-6'><button>Get Started</button></li>
                <li className=''><button>Sign in</button></li>
            </ul>

            <h4 className='text-[#929292]'>&copy;2021, wallet</h4>
        </div>
    </div>
  )
}

export default Bottom