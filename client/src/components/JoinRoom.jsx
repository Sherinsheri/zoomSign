import React from 'react'
import Navbar from './Navbar'

function JoinRoom() {
  return (
    <div>
      <Navbar/>
      <div className='container my-30 flex flex-col gap-5 items-center'>
        <input type="text" placeholder='Enter url' className='bg-slate-300 p-2 rounded-2xl w-100'/>
        <button className='text-white font-bold bg-blue-950 p-3 w-30 rounded-3xl'>Join</button>
      </div>
      
    </div>
  )
}

export default JoinRoom
