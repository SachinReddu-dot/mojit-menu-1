import React from 'react'
import menu from '/src/Utils/Menu.js'
import Card from './Card'
import { useState } from 'react';
import ItemDetail from './ItemDetail';

const Breakfast = () => {

    const {title, served_time, categories} = menu;

    const [toggle, setToggle] = useState(false)

    const detailPage = (item)=>{
        setToggle(true)
    } 

  return (      
      <div>
        <div className="w-full text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            <h3 className="text-sm sm:text-base md:text-lg">{served_time}</h3>
        </div>

        <div className="w-full">
            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {categories.items.map((item, index) => (
                <div key={index} onClick={()=>detailPage(item)}>
                    <Card item={item}/>
                </div>
            ))}
            {toggle ? <div>
                <i onClick={()=> setToggle(false)} className="ri-close-fill fixed top-5 right-[20%] text-3xl font-semibold z-50"></i>
                    <ItemDetail />
                </div> : <></>}
            </div>
        </div>
      </div>
  )
}

export default Breakfast
