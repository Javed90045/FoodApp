import React from 'react'
import { TiPlus, TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
const ItemCard = ({id,name,img,price,qty}) => {
  return (
    <div className='flex gap-2 shadow-md p-2 mb-3'>
        <MdDelete className='absolute right-7 cursor-pointer'/>
        <img src={img}
        alt="" 
        className='w-[50px] h-[50px]'/>
        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex gap-2'>
                <span className='text-green-500 font-bold'>₹{price}</span>
                <div className='flex gap-2 items-center justify-center absolute right-7'>
                  <TiPlus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md
                  p-1 text-xl transition-all ease-linear cursor-pointer'/>
                  <span>{qty}</span>
                  <TiMinus className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md
                  p-1 text-xl transition-all ease-linear cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard