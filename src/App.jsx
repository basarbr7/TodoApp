import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'
import ProtecttedLayout from './layout/ProtecttedLayout'
import About from './pages/About'
import RootlayOut from './layout/RootlayOut'

const App = () => {
  return (
    <Routes>
      <Route element={<RootlayOut/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>} />

        <Route element={<ProtecttedLayout/>} >
          <Route path='/about' element={<About/>} />
        </Route>
          <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
  )
}

export default App