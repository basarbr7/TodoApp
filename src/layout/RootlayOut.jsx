import React from 'react'
import Navbar from '../componenet/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componenet/Footer'

const RootlayOut = () => {
  return (
    <>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default RootlayOut