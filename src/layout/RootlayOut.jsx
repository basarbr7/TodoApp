import React from 'react'
import Navbar from '../componenet/Navbar'
import { Outlet } from 'react-router-dom'

const RootlayOut = () => {
  return (
    <>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
    </>
  )
}

export default RootlayOut