import React from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'

const Home = () => {
  
  return (

    <div className="w-full relative min-h-screen overflow-auto p-3">
      <div className="bg-zinc-300 rounded-2xl w-full min-h-screen backdrop-blur-sm p-4 sm:p-6 md:p-8 font-medium">
        <div className='w-full flex gap-3'>
          <NavLink to="/breakfast" className={({isActive})=>`${isActive  ? 'bg-red-900 text-white border-none' : 'border-2 border-black text-black'} rounded-full px-10 py-2`}>
            Breakfast
          </NavLink>
          <NavLink to="/mainCourse" className={({isActive})=>`${isActive  ? 'bg-red-900 text-white border-none' : 'border-2 border-black text-black'} rounded-full px-10 py-2`}>
            Main Course
          </NavLink>        
        </div>
        <Outlet />
      </div>
    </div>

  )
}

export default Home