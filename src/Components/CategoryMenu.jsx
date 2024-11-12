import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6'>
        <h1 className='text-xl font-semibold'>Find The Best Food</h1>
        <div className='my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden'>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
                All
            </button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
                Lunch
            </button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
                BreakFast
            </button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
                Dinner
            </button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>
                Dinner
            </button>
        </div>
    </div>
  )
}

export default CategoryMenu