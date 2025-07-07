import React from 'react'
import Navbar from '../componenet/Navbar'
import { Outlet } from 'react-router-dom'

const RootlayOut = () => {
  return (
    <>
        <Navbar/>
        
        <div className='max-w-[1200px] mx-auto'>
            <Outlet/>
        </div>
    </>
  )
}

export default RootlayOut