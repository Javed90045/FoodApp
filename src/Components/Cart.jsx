import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [ActiveCart, setActiveCart] = useState(false);
  const CartItem = useSelector((state)=> state.cart.cart);
    console.log(CartItem);
  return (
    <>
    <div className={`fixed right-0 top-0 bg-white w-full lg:w-[25vw] h-full p-5 ${ActiveCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <RxCross2 onClick={()=>setActiveCart(!ActiveCart)} className='border-2 border-gray-600 text-gray-600 text-xl font-bold p-1 rounded-md
            hover:text-red-300 hover:border-red-300 cursor-pointer'/>
        </div>
        {
          CartItem.map((food)=>{
           return <ItemCard key={food.id} id={food.id} name={food.name} img={food.img} qty={food.qty} price={food.price}/> 
          })
        }
  
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items:</h3>
            <h3 className='font-semibold text-gray-800'>Total Amount:</h3>
            <hr className='w-[90vw] lg:w-[22vw] my-2'/>
            <button className='bg-green-500 text-white font-bold w-[90vw] lg:w-[22vw] py-2 px-3 rounded-lg mb-5'>Checkout</button>
        </div>
    </div>
    <FaShoppingCart className='rounded-full bg-white p-3 text-5xl shadow-md fixed bottom-10 right-5 cursor-pointer' onClick={()=>setActiveCart(!ActiveCart)}/>
    </>
  )
}

export default Cart