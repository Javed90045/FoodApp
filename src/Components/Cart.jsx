import React from 'react'
import { RxCross2 } from "react-icons/rx";
const Cart = () => {
  return (
    <>
    <div className='fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full p-5'>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <RxCross2 className='border-2 border-gray-600 text-gray-600 text-xl font-bold p-1 rounded-md
            hover:text-red-300 hover:border-red-300 cursor-pointer'/>
        </div>
        <div className='absolute bottom-0'>
            <h3>Items:</h3>
            <h3>Total Amount:</h3>
            <button className='bg-green-500 text-white font-bold w-[90vw] lg:w-[22vw] py-2 px-3 rounded-lg mb-5'>Checkout</button>
        </div>
    </div>
    </>
  )
}

export default Cart