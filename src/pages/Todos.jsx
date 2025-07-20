import React from 'react'
import Sidebar from '../componenet/Sidebar'
import { Outlet } from 'react-router-dom'

const Todos = () => {
  return (
    <div className='md:flex gap-5 '>
        <Sidebar />
        <div className='p-4 w-full' >
          <Outlet/>
        </div>
    </div>
  )
}

export default Todos