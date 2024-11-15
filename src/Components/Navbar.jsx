import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex flex-col lg:flex-row justify-between mx-6 mb-10 mt-2'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
            <h1 className='text-2xl font-bold'>Food Station</h1>
        </div>
        <div>
            <input 
            type="text" 
            name='search'
            placeholder='Search Here...' 
            autoComplete='off'
            className='p-3 border border-gray-400 rounded-lg text-sm outline-none w-full lg:w-[25vw]'/>
        </div>
    </nav>
    </>
  )
}

export default Navbar