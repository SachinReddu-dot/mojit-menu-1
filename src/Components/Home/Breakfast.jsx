import React from 'react'
import menu from '/src/Utils/Menu.js'
import Card from './Card'
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import Card2 from './Card2';

const Breakfast = () => {

    const {title, served_time, categories} = menu;

    const [toggle, setToggle] = useState(false)

    const detailPage = (item)=>{
        setToggle(true)
    } 

  return (      
      <div>
        <div className="w-full text-center mb-6 max-sm:py-3">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold my-2">{title}</h2>
            <h3 className="text-lg sm:text-sm md:text-base text-gray-600">{served_time}</h3>
        </div>

        <div className="w-full">
            <div className="w-full flex flex-wrap items-center gap-4">
            {categories.items.map((item, index) => (
                <div className='max-sm:w-full' key={index} onClick={()=>detailPage(item)}>
                    <Card2 item={item} />
                </div>
            ))}
            {toggle ? <div>
                <i onClick={()=> setToggle(false)} className="ri-close-fill fixed top-5 right-[20%] max-sm:right-10 text-3xl font-semibold z-50"></i>
                    <ItemDetail />
                </div> : <></>}
            </div>
        </div>
      </div>
  )
}

export default Breakfast
