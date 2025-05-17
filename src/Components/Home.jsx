import React from 'react'
import { useState } from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom'
import Breakfast from './Home/Breakfast';
import MainCourse from './Home/MainCourse';

const Home = () => {

  const tabs = ['Breakfast', 'MainCourse'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabContent = {
    Breakfast: <Breakfast />,
    MainCourse: <MainCourse />,
  };
  
  return (

    <div className="w-full relative min-h-screen overflow-auto p-3">
      <div className="bg-[#F8F5F2] rounded-2xl w-full min-h-screen backdrop-blur-sm p-4 sm:p-6 md:p-8 font-medium">
        <div className='w-full flex font-[oswald] text-xl font-semibold gap-3 items-center justify-center py-5 max-sm:py-3'>
          <NavLink to="/breakfast" className={({isActive})=>`${isActive  ? 'text-[#E07A5F] border-[#E07A5F] ' : ' text-zinc-700 hover:text-black border-transparent'}  border-b-2 px-10 py-2 transition-all`}>
            Breakfast
          </NavLink>
          <NavLink to="/mainCourse" className={({isActive})=>`${isActive  ? 'text-[#E07A5F] border-[#E07A5F]' : ' text-zinc-700 hover:text-black border-transparent'}  border-b-2 px-10 py-2 transition-colors`}>
            Main Course
          </NavLink>        
        </div>
        <Outlet />
      </div>
    </div>

    // <>
    // <div className="w-full max-w-2xl mx-auto p-5">
    //   {/* Tabs */}
    //   <div className="flex flex-wrap justify-center md:justify-start border-b border-gray-300">
    //     {tabs.map((tab) => (
    //       <button
    //         key={tab}
    //         onClick={() => setActiveTab(tab)}
    //         className={`py-2 px-4 text-sm md:text-base font-medium ${
    //           activeTab === tab
    //             ? 'border-b-2 border-blue-600 text-blue-600'
    //             : 'text-gray-600 hover:text-blue-500'
    //         } transition-colors duration-200`}
    //       >
    //         {tab}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Tab Content */}
    //   <div className="mt-6 text-gray-800 whitespace-pre-line w-full min-h-screen flex gap-4">
    //     {tabContent[activeTab]}
    //   </div>
    // </div>
    // </>


  )
}

export default Home