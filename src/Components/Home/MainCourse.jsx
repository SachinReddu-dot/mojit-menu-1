import React from 'react'
import {mainCourse} from '/src/Utils/Menu.js'
import Card from './Card';

const MainCourse = () => {

  const {title, served_time, categories} = mainCourse;
  const {items} = mainCourse.categories

console.log(mainCourse)
  
  return (
    <>
      <div>
        <div className="w-full text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            <h3 className="text-sm sm:text-base md:text-lg">{served_time}</h3>
        </div>
        
       {categories.map((food, index)=>(
        <div key={index} className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-[oswald] font-semibold my-10 uppercase'>{food.name}</h1>
          <div className='w-full flex items-center justify-center flex-wrap gap-4'>
            {food.items.map((item, index)=>(
              <Card key={index} item={item}/>
            ))}
          </div>
        </div>
       ))}
        
      </div>
    </>
  )
}

export default MainCourse


