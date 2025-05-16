import React from 'react'

const ItemDetail = () => {

    const menu = {
        "name": "OG Paratha",
        "description": "Hand made layered butter paratha",
        "price": {
          "regular": 10,
          "with_chai": 15
        }
    }

  return (
    
    <>
       <div className='w-full h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-40'>
        <div className='bg-white w-2/3 h-screen relative p-5 pt-18 overflow-auto'>
            <div className='w-full flex'>
                <div className='w-1/2'>
                    <img className='w-full object-contain object-center' src="https://imgs.search.brave.com/50vRiIQL6acjOxHjTfgpDD7jNk6E3S-GQDN0kZCj15M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI3LzIzLzU2/LzM2MF9GXzYyNzIz/NTY2OV9pejBPMmxl/S1lSemp4QUtkRlA3/b2RwcDllQ09aUkV0/Ti5qcGc" alt="" />
                </div>

                <div className='w-1/2 h-fit bg-zinc-300 p-5 rounded-lg'>
                    <h2 className='text-3xl font-semibold capitalize font-[oswald]'>{menu.name}</h2>
                    <p className='text-lg font-normal text-zinc-700 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus rem architecto ipsam itaque, hic error eaque quam facilis ratione earum assumenda. Voluptatem eius voluptas laboriosam recusandae eaque suscipit sed atque.</p>
                    <div className='w-full flex items-center gap-2'>
                        <div className=' text-white bg-zinc-900/80 py-1 text-lg rounded-full overflow-hidden px-5  backdrop-blur-sm'>
                            <h1>Popular</h1>
                        </div>
                        <div className=' text-white bg-green-600/80 py-1 text-lg rounded-full overflow-hidden px-5  backdrop-blur-sm'>
                            <h1>Veg</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='font-[oswald] w-full font-semibold text-2xl pt-10 flex items-center justify-center'>
                    <h2>Regular-{menu.price.regular}
                     {menu.price.with_chai && <span>  & with Chai-{menu.price.with_chai}</span>}
                    </h2>
                    
            </div>

            <div className='w-full bg-black h-0.5 my-5'></div>

            <div className='w-full flex gap-3'>
                <div className='w-1/2 h-fit bg-zinc-300 p-5 rounded-lg'>
                        <h2 className='text-2xl font-semibold capitalize font-[oswald]'>Ingredients</h2>
                        <p className='text-sm font-normal text-zinc-700 my-5'>
                            Corn on the Cob,
                            Maple Syrup,
                            Red Pepper Flakes,
                            Nondairy Milk,
                            Pistachios,
                            Pizza Dough,
                            Olive Oil,
                            Vegan Mozzarella Shreds,
                            Vegan Mexican Style Shreds,
                            Green Onion,
                            Basil,
                        </p>
                </div>

                <div className='w-1/2 h-fit bg-zinc-300 p-5 rounded-lg font-medium flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold capitalize font-[oswald] mb-3'>Add On</h2>
                    <div className='w-full bg-white rounded-lg p-3 flex items-center justify-between'>
                        <h1>Vegitables <span className='text-zinc-400 ml-3'>+10</span></h1>
                        <input type="checkbox" value='vegitable'/>
                    </div>
                    <div className='w-full bg-white rounded-lg p-3 flex items-center justify-between'>
                        <h1>Cheese <span className='text-zinc-400 ml-3'>+12</span></h1>
                        <input type="checkbox" value='Cheese'/>
                    </div>
                    <div className='w-full bg-white rounded-lg p-3 flex items-center justify-between'>
                        <h1>Candied jalapeños <span className='text-zinc-400 ml-3'>+15</span></h1>
                        <input type="checkbox" value='Candied jalapeños'/>
                    </div>
                    <div className='w-full bg-white rounded-lg p-3 flex items-center justify-between'>
                        <h1>Pickled red onion <span className='text-zinc-400 ml-3'>+10</span></h1>
                        <input type="checkbox" value='Pickled red onion '/>
                    </div>
                    <div className='w-full bg-white rounded-lg p-3 flex items-center justify-between'>
                        <h1>Bacon <span className='text-zinc-400 ml-3'>+20</span></h1>
                        <input type="checkbox" value='Bacon'/>
                    </div>
                </div>
            </div>
                
                </div>
        </div>
    </>
    
  )
}

export default ItemDetail