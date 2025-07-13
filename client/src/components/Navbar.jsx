import React from 'react'
import { UserButton } from '@clerk/clerk-react';
import img from '../assets/appicon.svg';
const Navbar = () => {

  return (
    <nav className="flex  justify-between items-center fixed top-0 left-0 z-50 w-full bg-blue-950 px-6 py-3 lg:px-10 ">
            <div className='flex items-center gap-1.5'>
                <img src={img}
                    alt="icon" 
                    height={32}
                    width={32}
                    className='object-contain invert'
                    />
                <h1 className='text-2xl font-2xl text-white font-serif'>SignBridge</h1>
            </div>
            <UserButton/>
    </nav>
  )
}

export default Navbar