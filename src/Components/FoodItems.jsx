import React from 'react'
import { FoodCard } from './FoodCard'
import FoodData from '../Data/data.js'
const FoodItems = () => {
  return (
    <div className='mx-6 flex flex-wrap gap-2 justify-center lg:justify-start mb-10'>
      {
        FoodData.map((food)=>{
          return(
          <FoodCard key={food.id} 
          id={food.id} 
          img={food.img} 
          name={food.name} 
          price={food.price}
          desc={food.desc}
          category={food.category}
          rating={food.rating} />
          )
        })
      }
        
    </div>
  )
}

export default FoodItems