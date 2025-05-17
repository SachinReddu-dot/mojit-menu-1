import React from 'react'
import gsap from 'gsap'

const Card2 = ({item}) => {

    const { description, name, price } = item;

    const hoverIn = ()=>{
        gsap.to('img', {
            scale: 1.2,
            duration: 0.5,
            transition: 'ease'
        })
        gsap.to('.food-name',{
            color: '#E58E77',
            duration: 0.5,
            transition: 'ease'
        })
    }

    const hoverOut = ()=>{
        gsap.to('img', {
            scale: 1,
        })
        gsap.to('.food-name',{
            color: 'black',
        })
    }

  return (
    <>

        <div 
        onMouseEnter={hoverIn} 
        onMouseLeave={hoverOut} 
        className='card hover:shadow-2xl relative shadow-lg bg-white text-black rounded-lg overflow-hidden 
                    w-[400px] h-[430px] max-sm:h-[380px] shrink-0 flex flex-col items-center 
                    transition-all duration-300 max-sm:w-full max-md:w-full'>

        {/* Image Section */}
        <div className='w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden relative'>
            <img 
            className='w-full h-full object-contain object-center' 
            src="https://imgs.search.brave.com/50vRiIQL6acjOxHjTfgpDD7jNk6E3S-GQDN0kZCj15M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzIzLzU2/LzM2MF9GXzYyNzIz/NTY2OV9pejBPMmxl/S1lSemp4QUtkRlA3/b2RwcDllQ09aUkV0/Ti5qcGc" 
            alt="food" 
            />
            
            {/* Tags */}
            <div className='w-full flex items-center gap-2 absolute top-3 left-3'>
            <div className='text-white bg-zinc-900/80 py-0.5 text-xs sm:text-sm font-normal rounded-full px-3 backdrop-blur-sm'>
                <h1>Popular</h1>
            </div>
            <div className='text-white bg-green-600/80 py-0.5 text-xs sm:text-sm font-normal rounded-full px-3 backdrop-blur-sm'>
                <h1>Veg</h1>
            </div>
            </div>
        </div>

        {/* Content */}
        <div className='w-full flex flex-col justify-center p-3 gap-3 font-medium'>
            <div className='w-full'>
            <h2 className='food-name text-xl sm:text-2xl capitalize font-[oswald]'>{name}</h2>
            <p className='text-sm font-normal text-zinc-700 my-2 sm:my-3 line-clamp-2'>{description}</p>
            </div>

            {/* Price Buttons */}
            <div className='font-[oswald] w-full text-base sm:text-lg p-3 absolute bottom-0 left-0 border-t-2 border-t-zinc-200'>
            <button className='bg-[#F9E4DF] border border-[#F1C4B8] py-1 text-zinc-700 w-full rounded-md mb-2 
                                hover:scale-105 hover:text-black hover:bg-[#f8d5cc] transition-all duration-300'>
                <i className="ri-money-rupee-circle-fill text-xl sm:text-2xl"></i>
                {price.regular}
            </button>
            
            {price.with_chai && (
                <button className='bg-[#F5F3EF] border border-[#dfd9cf] py-1 text-zinc-700 w-full rounded-md 
                                hover:scale-105 hover:text-black hover:bg-[#dfd9cf] transition-all duration-300'>
                <i className="ri-money-rupee-circle-fill text-xl sm:text-2xl mr-0.5"></i>
                {price.with_chai} with Chai
                </button>
            )}
            </div>
        </div>
        </div>



        {/* <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className='card hover:shadow-2xl relative shadow-lg bg-[#FFFFFF] text-black rounded-lg overflow-hidden w-[400px] h-[430px] shrink-0 flex flex-col items-center transition-all duration-300'>
        <div className='w-full h-[180px] rounded-xl overflow-hidden relative'>
            <img className='w-full h-full object-contain object-center' src="https://imgs.search.brave.com/50vRiIQL6acjOxHjTfgpDD7jNk6E3S-GQDN0kZCj15M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzIzLzU2/LzM2MF9GXzYyNzIz/NTY2OV9pejBPMmxl/S1lSemp4QUtkRlA3/b2RwcDllQ09aUkV0/Ti5qcGc" alt="" />
            <div className='w-full flex items-center gap-2 absolute top-3 left-3'>
                <div className=' text-white bg-zinc-900/80 py-0.5 text-sm font-normal rounded-full overflow-hidden px-3  backdrop-blur-sm'>
                    <h1>Popular</h1>
                </div>
                <div className=' text-white bg-green-600/80 py-0.5 text-sm font-normal rounded-full overflow-hidden px-3  backdrop-blur-sm'>
                    <h1>Veg</h1>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col justify-center p-3 gap-3 font-medium'>
            <div className='w-full'>
                <h2 className='food-name text-2xl capitalize font-[oswald]'>{name}</h2>
                <p className='text-sm font-normal text-zinc-700 my-3 line-clamp-2'>{description}</p>
            </div>
            <div className='font-[oswald] w-full text-lg p-3 absolute  bottom-0 left-0 border-t-2 border-t-zinc-200'>
                 <button className='bg-[#F9E4DF] border-1 border-[#F1C4B8] py-1 text-zinc-700 w-full rounded-md mb-2 hover:scale-105 hover:text-black hover:bg-[#f8d5cc] transition-all duration-300'>
                    <i class="ri-money-rupee-circle-fill text-2xl"></i>
                    {price.regular}
                 </button>
                {price.with_chai && <div>
                    <button className='bg-[#F5F3EF] border-1 py-1 border-[#dfd9cf] text-zinc-700 w-full rounded-md hover:scale-105 hover:text-black hover:bg-[#dfd9cf] transition-all duration-300'>
                        <i class="ri-money-rupee-circle-fill text-2xl mr-0.5"></i>
                        {price.with_chai} with Chai
                    </button>
                </div>}

            </div>
        </div>
        </div> */}
    </>
  )
}

export default Card2