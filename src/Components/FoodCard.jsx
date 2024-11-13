import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';


export const FoodCard = ({id,img,name,price,desc,category,rating}) => {
  const dispatch = useDispatch();
  return (
    <div className='font-bold bg-white w-[250px] p-5 flex flex-col rounded-lg gap-2'>
        <img src={img}
            alt=""
            className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
        />
        <div className='flex justify-between'>
            <h2>{name}</h2>
            <span className='text-sm text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0, 50)}..</p>
        <div className='flex justify-between'>
          <span className='flex justify-center items-center'><FaStar  className='text-yellow-400 mr-1'/> {rating}</span>
          <button 
          onClick={()=>{
            dispatch(addToCart({id,name,price,rating, qty: 1, img}));
          }} 
          className='p-1 bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm '>Add to cart</button>
        </div>
    </div>
  )
}
