import React from 'react'
import { Outlet } from 'react-router-dom'

import goku from '../assets/mylivewallpapers.com-Ultra-Instinct-Dragon-Ball-Goku.mp4'

const Auth = () => {
  return (
    <>
        <div className='w-full h-screen flex items-center'>
            <div className='w-1/2 h-full overflow-hidden'>
              <video autoPlay muted loop className='w-full h-full scale-125' src={goku}/>
            </div>
            <div className='w-1/2 max-sm:w-full h-full'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Auth