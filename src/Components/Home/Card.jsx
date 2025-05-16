import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Card = ({item}) => {

    const { description, name, price } = item;

  return (

    // <div className="relative bg-zinc-800 rounded-2xl overflow-hidden w-[280px] h-[320px] flex flex-col shadow-md text-white">
    //     {/* Image Section */}
    //     <div className="w-full h-[150px] bg-red-900 overflow-hidden">
    //         <img
    //         src="https://imgs.search.brave.com/AEumFZfSqwUJW-iwDWzT-Gz3K07wGx0FEhOTGI394So/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/NTM5OTkwOS9waG90/by9kZWxpY2lvdXMt/bWVhbC1vbi1hLWJs/YWNrLXBsYXRlLXRv/cC12aWV3LWNvcHkt/c3BhY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXZyTXpT/NHBZX1FqaUR0Q3pw/VkUzQ2xLcWJVNjM2/ZmI0Q0tIMG5sc2R1/QzQ9"
    //         alt={name}
    //         className="w-full h-full object-cover"
    //         />
    //     </div>

    //     {/* Content Section */}
    //     <div className="flex-1 flex flex-col justify-between p-3 gap-2">
    //         {/* Name and Description */}
    //         <div className="space-y-1">
    //         <h2 className="text-base font-semibold capitalize truncate">{name}</h2>
    //         <p className="text-xs text-zinc-300 line-clamp-2">{description}</p>
    //         </div>

    //         {/* Price Section */}
    //         <div className="w-full border-t-1 border-gray-300 py-1 text-sm flex justify-between items-end">
    //             <div>
    //                 <p>Regular: {price.regular}</p>
    //                 <p>With Chai: {price.with_chai}</p>
    //             </div>
    //             {/* Optional cart button */}
    //             {/* <button className="bg-blue-700 rounded-full py-1 px-2 text-lg">
    //                 <i className="ri-shopping-cart-fill"></i>
    //             </button> */}
    //         </div>
    //     </div>
    // </div>



    <div className='relative shadow-xl bg-[#CDB39C] text-black rounded-lg overflow-hidden w-[320px] h-[440px] shrink-0 flex flex-col items-center'>
        <div className='w-full h-[200px] rounded-xl overflow-hidden relative'>
            <img className='w-full h-full object-cover object-center' src="https://imgs.search.brave.com/50vRiIQL6acjOxHjTfgpDD7jNk6E3S-GQDN0kZCj15M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzIzLzU2/LzM2MF9GXzYyNzIz/NTY2OV9pejBPMmxl/S1lSemp4QUtkRlA3/b2RwcDllQ09aUkV0/Ti5qcGc" alt="" />
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
                <h2 className='text-xl font-semibold capitalize font-[oswald]'>{name}</h2>
                <p className='text-sm font-normal text-zinc-700 my-3 line-clamp-3'>{description}</p>
            </div>
            <div className='font-[oswald] w-full text-xl p-3 absolute bottom-0 left-0 border-t-2 border-t-zinc-200'>
                 <button className='bg-[#504B38]/70 text-white w-full rounded-md py-1 mb-2'>
                    <i class="ri-money-rupee-circle-fill text-2xl"></i>
                    {price.regular} 
                 </button>
                {price.with_chai && <div>
                    <button className='bg-[#504B38] text-white w-full rounded-md py-1'>
                        <i class="ri-money-rupee-circle-fill text-2xl mr-0.5"></i>
                        {price.with_chai} with Chai
                    </button>
                </div>}

            </div>
        </div>
    </div>
  )
}

export default Card